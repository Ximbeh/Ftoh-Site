import NewsContainer from "../News/newscontainer"
import "../../css/Calendar.css"
import { ChevronRight, ChevronLeft } from "lucide-react"
import { useQuery } from "@apollo/client"
import { GET_ALLDRIVERS } from "../../../queries/getAllPilots"
import { GET_ALLNEWS } from "../../../queries/getAllNews"
import LoadingPage from "../Boundary/loading"


const ResumeRace = ({ race, selectedChampionship }) => {
    const { loading: driverLoading, error: driverError, data: driverData } = useQuery(GET_ALLDRIVERS);
    const { loading: newsLoading, error: newsError, data: newsData } = useQuery(GET_ALLNEWS);

    if (driverLoading || newsLoading) return <LoadingPage/>;
    if (driverError) return <p>Error: {driverError?.message}</p>;
    if (newsError) return <p>Error: {newsError?.message}</p>;



    const firstPilot = race.phases[race.phases.length - 1].pilots.find((pilot) => pilot.position == 1);
    const secondPilot = race.phases[race.phases.length - 1].pilots.find((pilot) => pilot.position == 2);
    const thirdPilot = race.phases[race.phases.length - 1].pilots.find((pilot) => pilot.position == 3);


    const firstPilotInfo = driverData.drivers.find((driver) => driver.id == firstPilot.pilotId)
    const secondPilotInfo = driverData.drivers.find((driver) => driver.id == secondPilot.pilotId)
    const thirdPilotInfo = driverData.drivers.find((driver) => driver.id == thirdPilot.pilotId)

    const getNomeESobrenome = (name) => {
        const [nome, ...sobrenomeArr] = name.split(' ');
        const sobrenome = sobrenomeArr.join(' ');
        return { nome, sobrenome };
    };

    const { nome: firstNome, sobrenome: firstSobrenome } = getNomeESobrenome(firstPilotInfo.name);
    const { nome: secondNome, sobrenome: secondSobrenome } = getNomeESobrenome(secondPilotInfo.name);
    const { nome: thirdNome, sobrenome: thirdSobrenome } = getNomeESobrenome(thirdPilotInfo.name);



    const newsWithTag = newsData.news.filter(news => news.tags.includes(race.name));

    return (
        <div className="px-4 py-10 bg-gray-200">
            <div className="relative border-t-8 border-r-8 rounded-tr-xl border-gray-500 pr-2 m-auto max-w-lg md:max-w-5xl lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-4">
                <div>
                    <p className="bg-gray-200 pr-4 text-gray-500 font-formula uppercase absolute -top-3.5 text-xs">Review da Corrida</p>
                    <h3 className="mt-3 font-formula text-gray-900 text-lg md:text-2xl mb-3">{race.resume ? race.resume : ""}</h3>

                    <div className="grid gap-1 mb-4">
                        <div className="bg-white p-4 flex  justify-between items-center">
                            <div className="flex items-center flex-cols">
                                <svg className="max-w-5 mr-4 sm:max-w-8" width="92" height="24" viewBox="0 0 92 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="path-1-inside-1_660_7" fill="white">
                                        <path d="M44.5 23.5C60.1667 15.8333 73.3 0.5 0.5 0.5H91.5L67.5 23.5H44.5Z" />
                                    </mask>
                                    <path d="M44.5 23.5L14.6104 -37.5787L44.5 91.5V23.5ZM67.5 23.5V91.5H94.8228L114.55 72.5952L67.5 23.5ZM91.5 0.5L138.55 49.5952L260.736 -67.5H91.5V0.5ZM0.5 68.5C16.9655 68.5 25.2847 69.4142 28.3906 69.9663C29.9469 70.2429 28.1867 70.0883 24.6589 68.636C21.8949 67.4981 11.8256 63.092 2.71099 51.7725C-8.5485 37.7894 -13.854 18.6616 -10.0187 -0.495504C-6.88672 -16.1392 1.12077 -25.7459 4.25487 -29.1784C7.93971 -33.2142 11.0991 -35.4131 12.1734 -36.1348C13.5058 -37.0299 14.363 -37.4577 14.6104 -37.5787L74.3896 84.5787C81.1421 81.2743 93.8674 74.3743 104.689 62.5222C110.12 56.574 119.693 44.3918 123.335 26.2025C127.68 4.49983 121.828 -17.1435 108.639 -33.5225C97.5952 -47.2379 84.2145 -53.92 76.431 -57.1243C67.8836 -60.643 59.3958 -62.6544 52.1907 -63.935C37.7736 -66.4976 20.4345 -67.5 0.5 -67.5V68.5ZM44.5 91.5H67.5V-44.5H44.5V91.5ZM114.55 72.5952L138.55 49.5952L44.4504 -48.5952L20.4504 -25.5952L114.55 72.5952ZM91.5 -67.5H0.5V68.5H91.5V-67.5Z" fill={(firstPilotInfo.team.color) || 'gray'} mask="url(#path-1-inside-1_660_7)" />
                                </svg>

                                <p className="font-formula mr-1 hidden md:flex">{firstNome}</p>
                                <p className="font-formula-bold text-sm sm:text-base uppercase">{firstSobrenome}</p>
                            </div>
                            <p className="text-xs px-2 bg-gray-200 rounded-xl">{firstPilot.timeTaken}</p>
                        </div>
                        <div className="bg-white p-4 flex  justify-between items-center">
                            <div className="flex items-center flex-cols">
                                <svg className="max-w-5 mr-4 sm:max-w-8" width="87" height="25" viewBox="0 0 87 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="path-1-inside-1_653_17" fill="white">
                                        <path d="M13 24C26.3333 16.3333 42.4 1 0 1H59L35 24H13Z" />
                                        <path d="M64 0H65H87L62 25H39L64 0Z" />
                                    </mask>
                                    <path d="M13 24L0.0397506 1.46044L-84.3769 50L13 50V24ZM35 24V50H45.447L52.9895 42.7717L35 24ZM59 1L76.9895 19.7717L123.708 -25L59 -25V1ZM64 0V-26H53.2304L45.6152 -18.3848L64 0ZM39 25L20.6152 6.61522L-23.7696 51H39V25ZM62 25V51H72.7696L80.3848 43.3848L62 25ZM87 0L105.385 18.3848L149.77 -26H87V0ZM0 27C9.80063 27 13.008 27.9869 12.8445 27.9269C12.6463 27.8542 9.64078 26.7803 6.60522 23.2741C2.93812 19.0386 1.02308 13.2982 1.4828 7.55162C1.86589 2.76308 3.73938 -0.237707 4.28158 -1.05233C4.93183 -2.02931 5.31146 -2.29435 4.8982 -1.91198C4.06303 -1.1392 2.31653 0.151289 0.0397506 1.46044L25.9602 46.5396C30.3501 44.0154 35.612 40.5142 40.2143 36.2557C42.5198 34.1225 45.2255 31.2819 47.57 27.7594C49.8064 24.3992 52.7424 18.8828 53.3172 11.6984C53.9686 3.55597 51.3744 -4.46044 45.9182 -10.7624C41.0936 -16.335 35.1891 -19.2657 30.743 -20.8957C22.0836 -24.0702 11.3994 -25 0 -25V27ZM13 50H35V-2H13V50ZM52.9895 42.7717L76.9895 19.7717L41.0105 -17.7717L17.0105 5.22831L52.9895 42.7717ZM59 -25H0V27H59V-25ZM65 -26H64V26H65V-26ZM45.6152 -18.3848L20.6152 6.61522L57.3848 43.3848L82.3848 18.3848L45.6152 -18.3848ZM39 51H62V-1H39V51ZM80.3848 43.3848L105.385 18.3848L68.6152 -18.3848L43.6152 6.61522L80.3848 43.3848ZM87 -26H65V26H87V-26Z" fill={(secondPilotInfo.team.color) || 'gray'} mask="url(#path-1-inside-1_653_17)" />
                                </svg>
                                <p className="font-formula mr-1 hidden md:flex">{secondNome}</p>
                                <p className="font-formula-bold text-sm sm:text-base uppercase">{secondSobrenome}</p>
                            </div>
                            <p className="text-xs px-2 bg-gray-200 rounded-xl">{secondPilot.timeTaken}</p>
                        </div>
                        <div className="bg-white p-4 flex  justify-between items-center">
                            <div className="flex items-center flex-cols">
                                <svg className="max-w-5 mr-4 sm:max-w-8" width="102" height="26" viewBox="0 0 102 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="path-1-inside-1_642_20" fill="white">
                                        <path d="M102 0H79L53 26L76 25.5L102 0Z" />
                                        <path d="M74 1H51L27 25H49L74 1Z" />
                                        <path d="M46 1L22 25H0.5C13 17 31.2 1 4 1H46Z" />
                                    </mask>
                                    <path d="M0 49.5H0.5V0.5H0V49.5ZM79 0V-49H58.7035L44.3518 -34.6482L79 0ZM102 0L136.31 34.983L221.94 -49L102 -49V0ZM76 25.5L77.065 74.4884L96.4601 74.0668L110.31 60.483L76 25.5ZM53 26L18.3518 -8.64823L-67.9371 77.6406L54.065 74.9884L53 26ZM51 1V-48H30.7035L16.3518 -33.6482L51 1ZM74 1L107.934 36.348L195.797 -48H74V1ZM49 25V74H68.7132L82.9341 60.348L49 25ZM27 25L-7.64823 -9.64823L-91.2965 74H27V25ZM22 25V74H42.2965L56.6482 59.6482L22 25ZM46 1L80.6482 35.6482L164.296 -48L46 -48V1ZM0.5 25L-25.9136 -16.2713L-166.963 74H0.5V25ZM79 49H102V-49H79V49ZM67.6898 -34.983L41.6898 -9.48297L110.31 60.483L136.31 34.983L67.6898 -34.983ZM74.935 -23.4884L51.935 -22.9884L54.065 74.9884L77.065 74.4884L74.935 -23.4884ZM87.6482 60.6482L113.648 34.6482L44.3518 -34.6482L18.3518 -8.64823L87.6482 60.6482ZM51 50H74V-48H51V50ZM40.0659 -34.348L15.0659 -10.348L82.9341 60.348L107.934 36.348L40.0659 -34.348ZM49 -24H27V74H49V-24ZM61.6482 59.6482L85.6482 35.6482L16.3518 -33.6482L-7.64823 -9.64823L61.6482 59.6482ZM56.6482 59.6482L80.6482 35.6482L11.3518 -33.6482L-12.6482 -9.64823L56.6482 59.6482ZM46 -48H4V50H46V-48ZM0.5 74H22V-24H0.5V74ZM4 50C5.30579 50 4.2382 50.1238 1.74677 49.5813C-0.26787 49.1427 -7.42832 47.3984 -14.9366 41.0551C-24.0362 33.3674 -30.3052 21.6423 -30.8213 8.39144C-31.2521 -2.66861 -27.5087 -10.4607 -25.9328 -13.3656C-22.9561 -18.8525 -20.0479 -20.7936 -21.8845 -19.2072C-22.7717 -18.4409 -24.2814 -17.3159 -25.9136 -16.2713L26.9136 66.2713C31.5314 63.3159 36.9842 59.4409 42.1752 54.9572C46.4167 51.2936 54.5186 43.8525 60.2078 33.3656C63.1399 27.9607 67.6192 17.7936 67.1045 4.57731C66.5044 -10.8298 59.3316 -24.4924 48.3085 -33.8051C38.8768 -41.7734 28.7733 -44.8302 22.5966 -46.1751C15.9431 -47.6238 9.49421 -48 4 -48V50Z" fill={(thirdPilotInfo.team.color) || 'gray'} mask="url(#path-1-inside-1_642_20)" />
                                </svg>
                                <p className="font-formula mr-1 hidden md:flex">{thirdNome}</p>
                                <p className="font-formula-bold text-sm sm:text-base uppercase">{thirdSobrenome}</p>
                            </div>
                            <p className="text-xs px-2 bg-gray-200 rounded-xl">{thirdPilot.timeTaken}</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 mb-2 md:flex-row">
                        <button
                            className="buttonResultados w-full md:w-min flex justify-between items-center hover:bg-gray-200 text-white rounded-md text-start px-4 py-3 font-formula text-xs uppercase"
                            style={{ '--selected-color': selectedChampionship.color }}
                        >Resultados <ChevronRight color="white" /></button>
                        <button className="buttonHighlights w-full md:w-min flex justify-between items-center border-2  rounded-md text-start px-4 py-3 font-formula text-xs duration-200 uppercase"
                            style={{ '--selected-color': selectedChampionship.color }}>Highlights <ChevronRight color="rgb(229 57 53)" /></button>
                    </div>

                </div>
                <div className="flex flex-col gap-1 md:grid md:grid-cols-2 md:gap-4 lg:mt-4">
                    <div>
                        <NewsContainer newsItem={newsWithTag[newsWithTag.length - 1]} />
                    </div>
                    <div>
                        <NewsContainer newsItem={newsWithTag[newsWithTag.length - 2]} />
                    </div>
                    <div className="md:hidden">
                        <NewsContainer newsItem={newsWithTag[newsWithTag.length - 3]} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResumeRace
