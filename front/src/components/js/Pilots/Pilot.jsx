
import Header from "../header/Header"
import Footer from "../Footer"
import NewsContainer from "../News/NewsContainer"
import { useParams } from 'react-router-dom';
import { ChampionshipContext } from '../../../Context/ChampionshipContext';
import { useContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import LoadingPage from "../Boundary/Loading";
import { GET_PILOTSINFO } from "../../../queries/getPilotsInfo";


const Pilot = () => {


    const {loading, error, data} = useQuery(GET_PILOTSINFO)
    const { selectedChampionship, selectedSeason, setSeason } = useContext(ChampionshipContext);
   
    const [championship, setChampionship] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    useEffect(() => {
        if (data && selectedChampionship) {
            const champ = data.championships.find(champ => champ.id === selectedChampionship.id);
            setChampionship(champ);
        }
    }, [data, selectedChampionship]);

    if (loading) return <LoadingPage/>;
    if (error) return <p>Error: {error.message}</p>;
    if (!championship) return <p>Campeonato não encontrado</p>;

    
    const driver = data.drivers.find(driver => driver.id == id)
    // console.log(driver);

    const driverHistory = data.drivers.filter(drivers=> drivers.name == driver.name)
    // console.log(driverHistory);
    // console.log(phasesData);
    // console.log(driverHistory);
  
    
    
    const phasesDriver = data.phases.filter(phase => 
        phase.pilots.some(pilot => 
            driverHistory.some(driver => driver.id === pilot.pilotId)
        )
    );
    console.log(driverHistory[0]);
    console.log(data.phases);
    
    

    console.log(phasesDriver);
    
    const races = phasesDriver.filter(phase=>phase.name == "Corrida")
    
    console.log(races);

    
    const totalPoints = races.reduce((total, phase) => {
        return total + phase.pilots.reduce((phaseTotal, pilot) => {
            if (driverHistory.some(driver => driver.id === pilot.pilotId)) {
                return phaseTotal + (pilot.points || 0);
            }
            return phaseTotal;
        }, 0);
    }, 0);

    const positionCounts = {
        1: 0,
        2: 0,
        3: 0
    };
    
    races.forEach(phase => {
        phase.pilots.forEach(pilot => {
            if (driverHistory.some(driver => driver.id === pilot.pilotId)) {
                if (positionCounts.hasOwnProperty(pilot.position)) {
                    positionCounts[pilot.position]++;
                }
            }
        });
    });

    const polesCount = {
        1: 0,
    };
    
    races.forEach(phase => {
        phase.pilots.forEach(pilot => {
            if (driverHistory.some(driver => driver.id === pilot.pilotId)) {
                if (polesCount.hasOwnProperty(pilot.positionStartingGrid)) {
                    polesCount[pilot.positionStartingGrid]++;
                }
            }
        });
    });


    const totalPodiuns = Object.values(positionCounts).reduce((total, count) => total + count, 0);

    const positions = races.flatMap(phase => 
        phase.pilots
            .filter(pilot => driverHistory.some(driver => driver.id === pilot.pilotId))
            .map(pilot => pilot.position)
    );
    
    const maxPosition = Math.min(...positions);
    const countMaxPosition = positions.filter(position => position === maxPosition).length;
    
    const resultMaxPosition = countMaxPosition > 1 ? `${maxPosition} (x${countMaxPosition})` : `${maxPosition}`;
    
    const fastLapCounts = driverHistory.reduce((counts, driver) => {
        counts[driver.id] = 0;
        return counts;
    }, {});
    
    races.forEach(phase => {
        const bestTime = phase.pilots.reduce((best, pilot) => {
            if (!best || (pilot.timeFastLap && pilot.timeFastLap < best)) {
                return pilot.timeFastLap;
            }
            return best;
        }, null);
    
        phase.pilots.forEach(pilot => {
            if (pilot.timeFastLap === bestTime && driverHistory.some(driver => driver.id === pilot.pilotId)) {
                fastLapCounts[pilot.pilotId] = (fastLapCounts[pilot.pilotId] || 0) + 1;
            }
        });
    });
    
    const totalFastLaps = Object.values(fastLapCounts).reduce((sum, count) => sum + count, 0);

   
    const driverAllTime = data.driverHistories.find(drivers => 
        drivers.name.some(name => name === driver.name)
      );

      const nameParts = driver.name.split(" ");
    const lastName = nameParts[nameParts.length - 1];
      const newsWithTag = data.news.filter(news => news.tags.includes(lastName));
    

      
    return (
        <div className="bg-gray-200">
            <Header />
            <div className="bg-gray-200 px-4 m-auto max-w-lg md:max-w-5xl lg:max-w-7xl pt-4">
                <div className="bg-white">
                    <div className="grid md:grid-cols-2">
                        <div>
                            <img className="lg:h-1/2 w-full lg:object-cover lg:object-top" src={driverAllTime.photo ? `/img/drivers/${driverAllTime.photo}` : "https://via.placeholder.com/800x400"} alt="" />
                            <div className="py-5 pt-10 px-4 border-b border-gray-500 md:border-0 md:px-10">
                                <div className="flex flex-cols items-center gap-4">
                                    <h4 className="font-formula text-gray-600 text-3xl md:text-4xl">{driver.number}</h4>
                                    <img className="w-14 rounded border border-gray-500" src={driver.flag ? `/img/race/${driver.flag}` : "https://via.placeholder.com/800x400"} alt="" />
                                </div>
                                <h3 className="font-formula-bold text-2xl md:text-5xl">{driver.name}</h3>
                            </div>

                        </div>
                        <div className="py-5 pt-10 px-4 border-b border-gray-500 md:ml-10 md:border-0">
                            <div className="mb-10 md:mb-5">
                                <h5 className="font-formula-bold mb-1">Time</h5>
                                <p className="font-formula text-sm">{driver.team.name}</p>
                            </div>
                            <div className="mb-10 md:mb-5">
                                <h5 className="font-formula-bold mb-1">Campeonatos</h5>
                                <p className="font-formula text-sm">{driverAllTime.championships}</p>
                            </div>
                            <div className="mb-10 md:mb-5">
                                <h5 className="font-formula-bold mb-1">Nacionalidade</h5>
                                <p className="font-formula text-sm">{driverAllTime.nacionality}</p>
                            </div>
                            <div className="mb-10 md:mb-5">
                                <h5  className="font-formula-bold mb-1">Pódios</h5>
                                <p className="font-formula text-sm">{totalPodiuns}</p>
                            </div>
                            <div className="mb-10 md:mb-5">
                                <h5  className="font-formula-bold mb-1">Pontos</h5>
                                <p className="font-formula text-sm">{totalPoints}</p>
                            </div>
                            <div className="mb-10 md:mb-5">
                                <h5  className="font-formula-bold mb-1">Grand Premios participados</h5>
                                <p className="font-formula text-sm">{races.length}</p>
                            </div>
                            <div className="mb-10 md:mb-5">
                                <h5  className="font-formula-bold mb-1">Maior posição final</h5>
                                <p className="font-formula text-sm">{resultMaxPosition}</p>
                            </div>
                            <div className="mb-10 md:mb-5">
                                <h5 className="font-formula-bold mb-1">Pole Position</h5>
                                <p className="font-formula text-sm">{polesCount[1]}</p>
                            </div>
                            <div className="mb-10 md:mb-5">
                                <h5  className="font-formula-bold mb-1">Voltas mais rapidas</h5>
                                <p className="font-formula text-sm">{totalFastLaps}</p>
                            </div>
                        </div>

                    </div>
                    <div className="px-4 py-10 mb-4">
                        <h2 className="mb-10 font-formula text-center text-4xl">História</h2>
                        <div className="mb-10 lg:w-1/2" dangerouslySetInnerHTML={{ __html: driverAllTime.text }}></div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-1 py-4 bg-gray-200 xl:grid-cols-4">
                        <NewsContainer newsItem={newsWithTag[newsWithTag.length - 1]} />
                        <NewsContainer newsItem={newsWithTag[newsWithTag.length - 2]} />
                        <NewsContainer newsItem={newsWithTag[newsWithTag.length - 3]} />
                        <NewsContainer newsItem={newsWithTag[newsWithTag.length - 4]} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Pilot
