import { useState, useEffect } from 'react';
import Header from "../header/Header";
import Footer from "../Footer";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { GET_CHAMPIONSHIPS } from '../../../queries/getChampionship';
import { useQuery } from '@apollo/client';
import { useContext } from 'react';
import { ChampionshipContext } from "../../../Context/ChampionshipContext";
import "../../css/Calendar.css";
import { GET_ALLDRIVERS } from '../../../queries/getAllPilots';
import { GET_ALLSEASONS } from '../../../queries/getAllSeasons';
import { GET_ALLRACES } from '../../../queries/getAllRaces';
import defaultCape from '../../../../public/img/capes/interlagosOne.jpg';
import LoadingPage from '../Boundary/Loading';




const Calendar = () => {
    const location = useLocation();
    const { state } = location;
    const navigate = useNavigate();
    const { selectedChampionship, selectedSeason, setSeason } = useContext(ChampionshipContext);

    const { loading: loadingChampionships, error: errorChampionships, data: dataChampionships } = useQuery(GET_CHAMPIONSHIPS);
    const { loading: loadingSeasons, error: errorSeasons, data: dataSeason } = useQuery(GET_ALLSEASONS);
    const { loading: loadingRaces, error: errorRaces, data: dataRace } = useQuery(GET_ALLRACES);
    const { loading: driversLoading, error: driversError, data: driversData } = useQuery(GET_ALLDRIVERS);

    const [championship, setChampionship] = useState(null);
    const [temporarySeason, setTemporarySeason] = useState(null);

    useEffect(() => {
        if (dataChampionships && selectedChampionship) {
            const champ = dataChampionships.championships.find(champ => champ.id === selectedChampionship.id);
            setChampionship(champ);
        }
    }, [dataChampionships, selectedChampionship]);

    useEffect(() => {
        if (dataSeason) {
        }
    }, [dataSeason]);

    if (loadingChampionships || loadingSeasons || loadingRaces || driversLoading) return <LoadingPage/>;
    if (errorChampionships) return <p>Error: {errorChampionships.message}</p>;
    if (errorSeasons) return <p>Error: {errorSeasons.message}</p>;
    if (errorRaces) return <p>Error: {errorRaces.message}</p>;
    if (driversError) return <p>Error: {driversError.message}</p>;

    if (!championship) return <p>Campeonato não encontrado</p>;

    // Filtrar temporadas pelo nome do campeonato selecionado
    const seasonByChampionship = dataSeason.seasons.filter(season => season.championshipName === selectedChampionship.name);
    // console.log('Season By Championship:', seasonByChampionship);

    // Encontrar a temporada atual no dataSeason
    const actualSeason = selectedSeason.find(season => season.seasonId === championship.seasons.find(season => season.date === selectedSeason[0].date)?.seasonId);

    const handleChangeSeason = () => {
        if (championship && seasonByChampionship.length > 0) {
            // Encontrar a temporada atual em seasonByChampionship
            const currentIndex = seasonByChampionship.findIndex(season => season.seasonId === actualSeason?.seasonId);

            if (currentIndex !== -1 && currentIndex > 0) {
                // Pegue a temporada anterior
                const previousSeason = seasonByChampionship[currentIndex - 1];
                setTemporarySeason(previousSeason); // Atualiza o estado local com a temporada anterior
                // Navegar ou fazer outra ação se necessário
            }
        }
        // console.log('Handle Change Season Triggered');
    }

    const displayedSeason = temporarySeason || actualSeason; // Use a temporada temporária se estiver definida, caso contrário, use a temporada atual


    const filteredRaces = dataRace.races.filter(race =>
    (race.calendar[0].season[0].date == displayedSeason.date &&
        race.calendar[0].season[0].championship.id == championship.id)
    )


    const actualRaceIndex = filteredRaces.map((race, idx) => ({
        ...race,
        index: idx
    }))
    .filter(race => race.finished === true && 
        race.calendar[0].season[0].date === displayedSeason.date &&
        race.calendar[0].season[0].championship.id === championship.id
    ).pop()?.index; 
    const actualRace = (actualRaceIndex !== undefined && actualRaceIndex < filteredRaces.length - 1)
        ? filteredRaces[actualRaceIndex + 1]
        : null; 

    const racesBefore = dataRace.races.slice(0, actualRaceIndex+1);

    const racesAfter = filteredRaces.slice(actualRaceIndex+2, dataRace.races.length)

    // console.log("antes da corrida: ", racesBefore);
    // console.log("corrida atual: ", actualRace);
    // console.log("depois da corrida: ", racesAfter);

    // console.log(racesBefore);

    const formatDateRange = (dateRange) => {
        if (!dateRange || typeof dateRange !== 'string') return { dayRange: "??", monthRange: "??" };
    
        // Função para mapear meses
        const monthMap = {
            'Jan': 'Jan', 'Feb': 'Feb', 'Mar': 'Mar', 'Abr': 'Abr', 'Mai': 'Mai',
            'Jun': 'Jun', 'Jul': 'Jul', 'Ago': 'Ago', 'Set': 'Set', 'Out': 'Out',
            'Nov': 'Nov', 'Dez': 'Dez'
        };
    
        const parseDate = (dateStr) => {
            const [day, monthYear] = dateStr.split(' ');
            const [month, year] = monthYear ? monthYear.split(' ') : [];
            return { day, month, year };
        };
    
        const parseMonthRange = (monthRangeStr) => {
            const [startMonth, endMonth] = monthRangeStr.split('-');
            return {
                startMonth: monthMap[startMonth.trim()] || startMonth.trim() || '??',
                endMonth: monthMap[endMonth.trim()] || endMonth.trim() || '??'
            };
        };
    
        if (dateRange.includes(' - ')) {
            const [startDate, endDate] = dateRange.split(' - ');
    
            if (endDate.includes(' ')) {
                const start = parseDate(startDate);
                const end = parseDate(endDate);
    
                const dayRange = start.day === end.day ? start.day : `${start.day || '??'}-${end.day || '??'}`;
                const monthRange = start.month === end.month ? monthMap[start.month] : `${monthMap[start.month]}-${monthMap[end.month]}`;
    
                return { dayRange, monthRange };
            } else {
                const { startMonth, endMonth } = parseMonthRange(endDate);
    
                return {
                    dayRange: `${parseDate(startDate).day || '??'}-${parseDate(endDate).day || '??'}`,
                    monthRange: `${monthMap[startDate.split(' ')[1]]}-${endMonth}`
                };
            }
        } else {
            const date = parseDate(dateRange);
            return {
                dayRange: date.day || '??',
                monthRange: monthMap[date.month] || '??'
            };
        }
    };
    

    const handleNavigateRace = (race) => {
        navigate(`Race/${race.id}`);
    };

  
    const imageCape = actualRace?.capeOne
        ? (`../../../../public/img/capes/${actualRace.capeOne}`)
        : defaultCape;

    return (
        <div>
            <Header />
            <main>
                <div className="max-w-xl mx-auto md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
                    <h1 className="mx-4 border-t-8 border-r-8 border-grayTotal rounded-tr-2xl mt-10 mb-10 pt-4 text-4xl md:text-6xl font-formula-bold">
                        Calendário {championship.championshipName} {displayedSeason ? displayedSeason.date : 'N/A'}
                    </h1>
                </div>
                <div className="max-w-xl mx-auto md:max-w-3xl lg:max-w-5xl xl:max-w-7xl md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {racesBefore.map((race, index) => {
                        const { dayRange, monthRange } = formatDateRange(race.date);
                        const lastPhase = race.phases[race.phases.length - 1];
                        
                     

                        if (!lastPhase || !lastPhase.pilots) {
                            console.log(undefined);
                        } else {
                            console.log("a", race);
                            const firstPilot = race.phases[race.phases.length - 1].pilots.find((pilot) => pilot.position == 1);
                            const secondPilot = race.phases[race.phases.length - 1].pilots.find((pilot) => pilot.position == 2);
                            const thirdPilot = race.phases[race.phases.length - 1].pilots.find((pilot) => pilot.position == 3);
                        
                        
                         
                            
                            const firstPilotInfo = driversData.drivers.find((driver) => driver.id == firstPilot.pilotId)
                            const secondPilotInfo = driversData.drivers.find((driver) => driver.id == secondPilot.pilotId)
                            const thirdPilotInfo = driversData.drivers.find((driver) => driver.id == thirdPilot.pilotId)
                        

                            // Verificar se algum piloto foi encontrado e preparar mensagens padrão caso não tenha encontrado
                            const firstPilotName = firstPilotInfo.nameAbreviado || '???';
                            const secondPilotName = secondPilotInfo.nameAbreviado || '???';
                            const thirdPilotName = thirdPilotInfo && thirdPilotInfo.nameAbreviado ? thirdPilotInfo.nameAbreviado : '???';

                            const firstPilotPhoto = firstPilotInfo.photo || '../../../../public/img/drivers/default.png'
                            const secondPilotPhoto = secondPilotInfo.photo || '../../../../public/img/drivers/default.png'
                            const thirdPilotPhoto = thirdPilotInfo && thirdPilotInfo.photo ? thirdPilotInfo.photo : 'default.png'

                            const firstPilotColor = firstPilotInfo.team.color || 'gray';
                            const secondPilotColor = secondPilotInfo.team.color || 'gray'
                            const thirdPilotColor = thirdPilotInfo && thirdPilotInfo.team.color ? thirdPilotInfo.team.color : 'gray'

                            // console.log(firstPilot);
                            return (
                                <div className='px-4' key={race.id}>
                                    <div className="relative pt-4 pr-2 mb-10 border-t-2 border-r-2 border-grayTotal rounded-tr-2xl cursor-pointer hover:border-red-500 hover:pt-8 duration-200"
                                         onClick={() => handleNavigateRace(race)}>
                                        <h4 className="text-red-500 bg-white absolute -top-4 font-formula-bold pr-2 uppercase">
                                            {race.phases?.length > 0
                                                ? race.phases[race.phases.length - 1]?.name || "???"
                                                : "???"}
                                        </h4>
                                        <div className="flex justify-between items-center pb-4 border-b-2 border-gray-400 mb-4">
                                            <div className="flex flex-col">
                                                <h3 className="font-formula-bold text-2xl">{dayRange || "??"}</h3>
                                                <h4 className="text-center font-formula-bold text-lg text-white bg-grayTotal px-2 rounded-xl uppercase">
                                                    {monthRange || "??"}
                                                </h4>
                                            </div>
                                            <img className="border-2 w-12 h-8 rounded-md"
                                                src={race.flag ? `../../assets/img/race/${race.flag}` : "https://via.placeholder.com/800x400"}
                                                alt="" />
                                        </div>
                                        <div className="pb-4 border-b-2 border-gray-400 mb-4">
                                            <div className="flex">
                                                <h3 className="font-formula-bold text-xl">{race.name}</h3>
                                                <ChevronRight className="mt-0.5" color="rgb(229 57 53)" />
                                            </div>
                                            <p className="font-formula text-gray-700">{race.fullName}</p>
                                        </div>
                                        <div className="flex items-end gap-1">
                                            <div className="w-full">
                                                <div className="rounded-t-xl relative flex justify-center h-16 bg-gray-800">
                                                    <img className="absolute h-20 bottom-0 object-cover left-1/5" src={`../../../../public/img/drivers/${secondPilotPhoto}`} alt="" />
                                                </div>
                                                <div className="p-2 border-b border-r border-gray-300 rounded-br-xl flex items-center gap-2 justify-center">
                                                    <svg className="w-7 sm:w-6" width="87" height="25" viewBox="0 0 87 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <mask id="path-1-inside-1_653_17" fill="white">
                                                            <path d="M13 24C26.3333 16.3333 42.4 1 0 1H59L35 24H13Z" />
                                                            <path d="M64 0H65H87L62 25H39L64 0Z" />
                                                        </mask>
                                                        <path d="M13 24L0.0397506 1.46044L-84.3769 50L13 50V24ZM35 24V50H45.447L52.9895 42.7717L35 24ZM59 1L76.9895 19.7717L123.708 -25L59 -25V1ZM64 0V-26H53.2304L45.6152 -18.3848L64 0ZM39 25L20.6152 6.61522L-23.7696 51H39V25ZM62 25V51H72.7696L80.3848 43.3848L62 25ZM87 0L105.385 18.3848L149.77 -26H87V0ZM0 27C9.80063 27 13.008 27.9869 12.8445 27.9269C12.6463 27.8542 9.64078 26.7803 6.60522 23.2741C2.93812 19.0386 1.02308 13.2982 1.4828 7.55162C1.86589 2.76308 3.73938 -0.237707 4.28158 -1.05233C4.93183 -2.02931 5.31146 -2.29435 4.8982 -1.91198C4.06303 -1.1392 2.31653 0.151289 0.0397506 1.46044L25.9602 46.5396C30.3501 44.0154 35.612 40.5142 40.2143 36.2557C42.5198 34.1225 45.2255 31.2819 47.57 27.7594C49.8064 24.3992 52.7424 18.8828 53.3172 11.6984C53.9686 3.55597 51.3744 -4.46044 45.9182 -10.7624C41.0936 -16.335 35.1891 -19.2657 30.743 -20.8957C22.0836 -24.0702 11.3994 -25 0 -25V27ZM13 50H35V-2H13V50ZM52.9895 42.7717L76.9895 19.7717L41.0105 -17.7717L17.0105 5.22831L52.9895 42.7717ZM59 -25H0V27H59V-25ZM65 -26H64V26H65V-26ZM45.6152 -18.3848L20.6152 6.61522L57.3848 43.3848L82.3848 18.3848L45.6152 -18.3848ZM39 51H62V-1H39V51ZM80.3848 43.3848L105.385 18.3848L68.6152 -18.3848L43.6152 6.61522L80.3848 43.3848ZM87 -26H65V26H87V-26Z" fill={(secondPilotColor) || 'gray'} mask="url(#path-1-inside-1_653_17)" />
                                                    </svg>
                                                    <h2 className="font-formula-bold text-sm uppercase">
                                                        {secondPilotName}
                                                    </h2>
                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <div className="rounded-t-xl relative  flex justify-center h-20 bg-gray-800">
                                                    <img className="absolute h-24 object-cover bottom-0" src={`../../../../public/img/drivers/${firstPilotPhoto}`} alt="" />
                                                </div>
                                                <div className="p-2 border-b border-r border-gray-300 rounded-br-xl flex gap-2 justify-center items-center">
                                                    <svg className="w-7 sm:w-7" width="92" height="24" viewBox="0 0 92 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <mask id="path-1-inside-1_660_7" fill="white">
                                                            <path d="M44.5 23.5C60.1667 15.8333 73.3 0.5 0.5 0.5H91.5L67.5 23.5H44.5Z" />
                                                        </mask>
                                                        <path d="M44.5 23.5L14.6104 -37.5787L44.5 91.5V23.5ZM67.5 23.5V91.5H94.8228L114.55 72.5952L67.5 23.5ZM91.5 0.5L138.55 49.5952L260.736 -67.5H91.5V0.5ZM0.5 68.5C16.9655 68.5 25.2847 69.4142 28.3906 69.9663C29.9469 70.2429 28.1867 70.0883 24.6589 68.636C21.8949 67.4981 11.8256 63.092 2.71099 51.7725C-8.5485 37.7894 -13.854 18.6616 -10.0187 -0.495504C-6.88672 -16.1392 1.12077 -25.7459 4.25487 -29.1784C7.93971 -33.2142 11.0991 -35.4131 12.1734 -36.1348C13.5058 -37.0299 14.363 -37.4577 14.6104 -37.5787L74.3896 84.5787C81.1421 81.2743 93.8674 74.3743 104.689 62.5222C110.12 56.574 119.693 44.3918 123.335 26.2025C127.68 4.49983 121.828 -17.1435 108.639 -33.5225C97.5952 -47.2379 84.2145 -53.92 76.431 -57.1243C67.8836 -60.643 59.3958 -62.6544 52.1907 -63.935C37.7736 -66.4976 20.4345 -67.5 0.5 -67.5V68.5ZM44.5 91.5H67.5V-44.5H44.5V91.5ZM114.55 72.5952L138.55 49.5952L44.4504 -48.5952L20.4504 -25.5952L114.55 72.5952ZM91.5 -67.5H0.5V68.5H91.5V-67.5Z" fill={(firstPilotColor) || 'gray'} mask="url(#path-1-inside-1_660_7)" />
                                                    </svg>                                                    <h2 className="font-formula-bold text-sm uppercase">
                                                        {firstPilotName}
                                                    </h2>
                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <div className="rounded-t-xl relative  flex justify-center h-14 bg-gray-800">
                                                    <img className="absolute h-20 object-cover bottom-0" src={`../../../../public/img/drivers/${thirdPilotPhoto}`} alt="" />
                                                </div>
                                                <div className="p-2 border-b border-r border-gray-300 rounded-br-xl flex gap-2 justify-center items-center">
                                                    <svg className="w-7 sm:w-5" width="102" height="26" viewBox="0 0 102 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <mask id="path-1-inside-1_642_20" fill="white">
                                                            <path d="M102 0H79L53 26L76 25.5L102 0Z" />
                                                            <path d="M74 1H51L27 25H49L74 1Z" />
                                                            <path d="M46 1L22 25H0.5C13 17 31.2 1 4 1H46Z" />
                                                        </mask>
                                                        <path d="M0 49.5H0.5V0.5H0V49.5ZM79 0V-49H58.7035L44.3518 -34.6482L79 0ZM102 0L136.31 34.983L221.94 -49L102 -49V0ZM76 25.5L77.065 74.4884L96.4601 74.0668L110.31 60.483L76 25.5ZM53 26L18.3518 -8.64823L-67.9371 77.6406L54.065 74.9884L53 26ZM51 1V-48H30.7035L16.3518 -33.6482L51 1ZM74 1L107.934 36.348L195.797 -48H74V1ZM49 25V74H68.7132L82.9341 60.348L49 25ZM27 25L-7.64823 -9.64823L-91.2965 74H27V25ZM22 25V74H42.2965L56.6482 59.6482L22 25ZM46 1L80.6482 35.6482L164.296 -48L46 -48V1ZM0.5 25L-25.9136 -16.2713L-166.963 74H0.5V25ZM79 49H102V-49H79V49ZM67.6898 -34.983L41.6898 -9.48297L110.31 60.483L136.31 34.983L67.6898 -34.983ZM74.935 -23.4884L51.935 -22.9884L54.065 74.9884L77.065 74.4884L74.935 -23.4884ZM87.6482 60.6482L113.648 34.6482L44.3518 -34.6482L18.3518 -8.64823L87.6482 60.6482ZM51 50H74V-48H51V50ZM40.0659 -34.348L15.0659 -10.348L82.9341 60.348L107.934 36.348L40.0659 -34.348ZM49 -24H27V74H49V-24ZM61.6482 59.6482L85.6482 35.6482L16.3518 -33.6482L-7.64823 -9.64823L61.6482 59.6482ZM56.6482 59.6482L80.6482 35.6482L11.3518 -33.6482L-12.6482 -9.64823L56.6482 59.6482ZM46 -48H4V50H46V-48ZM0.5 74H22V-24H0.5V74ZM4 50C5.30579 50 4.2382 50.1238 1.74677 49.5813C-0.26787 49.1427 -7.42832 47.3984 -14.9366 41.0551C-24.0362 33.3674 -30.3052 21.6423 -30.8213 8.39144C-31.2521 -2.66861 -27.5087 -10.4607 -25.9328 -13.3656C-22.9561 -18.8525 -20.0479 -20.7936 -21.8845 -19.2072C-22.7717 -18.4409 -24.2814 -17.3159 -25.9136 -16.2713L26.9136 66.2713C31.5314 63.3159 36.9842 59.4409 42.1752 54.9572C46.4167 51.2936 54.5186 43.8525 60.2078 33.3656C63.1399 27.9607 67.6192 17.7936 67.1045 4.57731C66.5044 -10.8298 59.3316 -24.4924 48.3085 -33.8051C38.8768 -41.7734 28.7733 -44.8302 22.5966 -46.1751C15.9431 -47.6238 9.49421 -48 4 -48V50Z" fill={(thirdPilotColor) || 'gray'} mask="url(#path-1-inside-1_642_20)" />
                                                    </svg>                                                    <h2 className="font-formula-bold text-sm uppercase">
                                                        {thirdPilotName}
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>

                {actualRace &&
                 <div className="cursor-pointer bg-grayTotal text-white px-4 py-6 mb-10"
                 onClick={() => handleNavigateRace(actualRace)}>
                 <div className="max-w-xl mx-auto md:max-w-3xl lg:max-w-5xl xl:max-w-7xl border-t-8 border-r-8 border-red-500 rounded-tr-3xl relative
                 md:grid md:grid-cols-2 md:gap-2 xl:grid-cols-4">

                    <div>
                    {(() => {
                    const { dayRange, monthRange } = formatDateRange(actualRace.date);
                    return (
                        <>
                               <h4 className="uppercase font-formula-bold text-red-500 pr-2 absolute -top-4 bg-grayTotal">Estágio - Próximo</h4>
                <div className="flex justify-between items-center py-4 mr-2 border-b-2 border-gray-400 mb-4">
                    <div className="flex flex-col">
                        {/* Atualize os campos aqui usando dayRange e monthRange */}
                        <h3 className="font-formula-bold text-2xl">{dayRange}</h3>
                        <h4 className="text-center font-formula-bold text-lg text-black bg-white px-2 rounded-xl uppercase">{monthRange}</h4>
                    </div>
                    <img className="border-2 w-12 h-8 rounded-md"      src={actualRace.flag ? `../../assets/img/race/${actualRace.flag}` : "https://via.placeholder.com/800x400"} alt="" />
                </div>
                <div className="pb-4 mb-10 md:mb-4 mr-2 border-b-2 border-gray-400">
                    <div className="flex">
                        <h3 className="font-formula-bold text-xl">{actualRace.name}</h3>
                        <ChevronRight className="mt-1" color="rgb(229 57 53)" />
                    </div>
                    <p className="font-formula uppercase text-sm">{actualRace.fullName}</p>
                </div>
                <div className="hidden md:flex mr-2 rounded-lg justify-center mt-2 p-2 bg-repeat bg-grade-pattern-gray bg-2">
                    <img className="h-28 raceMap" src={`../../assets/img/maps/${actualRace.map}`} alt="" />
                </div>
                 </>
                
                    );
                })()}
                
           


</div>
<div className="md:bg-cover md:rounded-xl md:m-4 md:mb-0 md:ml-0 md:p-4 md:flex md:item-center xl:col-span-3 md:justify-end" style={{ backgroundImage: `url(${imageCape})` }}>
                                        <div className='flex flex-col gap-2 bg-gray-800 md:bg-grayTotal md:justify-center mr-2 rounded-xl px-2 py-4 lg:pl-4 xl:pl-6 md:m-0'>
                                            
                                        {actualRace.phases.map((phase) => (
    <div 
        className='grid grid-cols-3 justify-items-center items-center justify-between px-2 md:px-0'
        key={phase.id}
    >
        <h3 className='text-center text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>
            {phase.name}
        </h3>
        <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>
            {phase.dayOfWeek}
        </h4>
        <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-600 rounded-xl'>
            {phase.hour}
        </h4>
    </div>
))}

                                        </div>

                                    </div>
                    </div>
                    </div>
                
                }



                <div className="max-w-xl mx-auto md:max-w-3xl lg:max-w-5xl xl:max-w-7xl md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {racesAfter.map((race, index) => {
                        const { dayRange, monthRange } = formatDateRange(race.date);


                        return (
                            <div className='px-4' key={race.id}>
                                <div className="relative pt-4 pr-2 mb-10 border-t-2 border-r-2 border-grayTotal rounded-tr-2xl cursor-pointer hover:border-red-500 hover:pt-8 duration-200"
                                    onClick={() => handleNavigateRace(race)}>
                                    <h4 className="text-red-500 bg-white absolute -top-4 font-formula-bold pr-2 uppercase">
                                        {race.phases?.length > 0
                                            ? race.phases[race.phases.length - 1]?.name || "???"
                                            : "???"}
                                    </h4>
                                    <div className="flex justify-between items-center pb-4 border-b-2 border-gray-400 mb-4">
                                        <div className="flex flex-col">
                                            <h3 className="font-formula-bold text-2xl">{dayRange || "??"}</h3>
                                            <h4 className="text-center font-formula-bold text-lg text-white bg-grayTotal px-2 rounded-xl uppercase">
                                                {monthRange || "??"}
                                            </h4>
                                        </div>
                                        <img className="border-2 w-12 h-8 rounded-md"
                                            src={race.flag ? `../../assets/img/race/${race.flag}` : "https://via.placeholder.com/800x400"}
                                            alt="" />
                                    </div>
                                    <div className="pb-4 border-b-2 border-gray-400 mb-4">
                                        <div className="flex">
                                            <h3 className="font-formula-bold text-xl">{race.name}</h3>
                                            <ChevronRight className="mt-0.5" color="rgb(229 57 53)" />
                                        </div>
                                        <p className="font-formula text-gray-700">{race.fullName}</p>
                                    </div>
                                    <div className="flex justify-center mt-2 pt-2 pb-2 bg-repeat bg-grade-pattern bg-2">
                                        <img className="h-28" src={`../../assets/img/maps/${race.map}`} alt="" />
                                    </div>
                                </div>
                            </div>

                        )
                    })}




                </div >


                <div className="max-w-xl mx-auto md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
                    <div className="cursor-pointer hover:border-red-500 flex items-center mb-10 
                    mx-4 border-t-2 border-l-2 border-gray-300 rounded-tl-xl px-2 py-4"
                        onClick={handleChangeSeason}>
                        <ChevronLeft color="rgb(229 57 53)" />
                        <div>
                            <h3 className="font-formula-bold uppercase text-xl">Season</h3>
                            <h3 className="font-formula-bold text-xl text-white text-stroke">  {displayedSeason ? displayedSeason.date - 1 : 'N/A'}</h3>
                        </div>
                    </div>
                </div>
                {/* <div className="bg-grayTotal px-8 py-4 text-white flex flex-col gap-4">
                    <div className="max-w-xl mx-auto md:max-w-3xl lg:max-w-5xl xl:max-w-7xl lg:flex lg:flex-rows lg:gap-4">
                        <div className="img-background-1 rounded-2xl p-2">
                            <div className="border-t-2 border-r-2 border-white rounded-tr-2xl pt-2 pr-2">
                                <div className="bg-gray-700 bg-opacity-20 rounded-t-2xl px-2 py-6 grid grid-cols-2">
                                    <div>
                                        <h3 className="font-formula-bold text-xl mb-2">Formula 2</h3>
                                        <p className="font-titillium mb-2">Veja o calendário da temporada da F2</p>
                                        <button className="bg-red-500 p-2 pl-4 text-sm flex rounded-md">Veja <ChevronRight height="20" /></button>
                                    </div>
                                    <img className="px-8" src={formulaLogo} alt="" />

                                </div>
                            </div>
                        </div>
                        <div className="img-background-1 rounded-2xl p-2">
                            <div className="border-t-2 border-r-2 border-white rounded-tr-2xl pt-2 pr-2">
                                <div className="bg-gray-700 bg-opacity-20 rounded-t-2xl px-2 py-6 grid grid-cols-2">
                                    <div>
                                        <h3 className="font-formula-bold text-xl mb-2">Formula 2</h3>
                                        <p className="font-titillium mb-2">Veja o calendário da temporada da F2</p>
                                        <button className="bg-red-500 p-2 pl-4 text-sm flex rounded-md">Veja <ChevronRight height="20" /></button>
                                    </div>
                                    <img className="px-8" src={formulaLogo} alt="" />

                                </div>
                            </div>
                        </div>
                    </div>

                </div> */}
            </main >
            <Footer></Footer>
        </div >
    )
}

export default Calendar
