
import Header from "../header/Header"
import Footer from "../Footer"
import NewsContainer from "../News/NewsContainer"
import { ChevronRight } from "lucide-react"
import { useNavigate, useParams } from 'react-router-dom';
import { ChampionshipContext } from '../../../Context/ChampionshipContext';
import { useContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALLDRIVERS } from "../../../queries/getAllPilots";
import { GET_CHAMPIONSHIPS } from "../../../queries/getChampionship";
import { GET_ALLTEAMH } from "../../../queries/getAllTeamH";
import { GET_ALLTEAMS } from "../../../queries/getAllTeams";
import { GET_ALLDRIVERSH } from "../../../queries/getAllDriverH";
import { GET_ALLNEWS } from "../../../queries/getAllNews"
import LoadingPage from "../Boundary/Loading";




const Team = () => {
    const { selectedChampionship, selectedSeason, setSeason } = useContext(ChampionshipContext);
    const { loading: loadingChampionships, error: errorChampionships, data: dataChampionships } = useQuery(GET_CHAMPIONSHIPS);
    const { loading: loadingteamH, error: errorteamH, data: datateamH } = useQuery(GET_ALLTEAMH);
    const { loading: driversLoading, error: driversError, data: driversData } = useQuery(GET_ALLDRIVERS);
    const { loading: teamsLoading, error: teamsError, data: teamsData } = useQuery(GET_ALLTEAMS);
    const { loading: loadingdriverH, error: errordriverH, data: datadriverH } = useQuery(GET_ALLDRIVERSH);
    const { loading: newsLoading, error: newsError, data: newsData } = useQuery(GET_ALLNEWS);

    const [championship, setChampionship] = useState(null);
    const [temporarySeason, setTemporarySeason] = useState(null);

    
    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    useEffect(() => {
        if (dataChampionships && selectedChampionship) {
            const champ = dataChampionships.championships.find(champ => champ.id === selectedChampionship.id);
            setChampionship(champ);
        }
    }, [dataChampionships, selectedChampionship]);

    if (loadingChampionships || newsLoading || driversLoading || teamsLoading || loadingteamH || loadingdriverH) return <LoadingPage/>;
    if (errorChampionships) return <p>Error: {errorChampionships.message}</p>;
    if (driversError) return <p>Error: {driversError.message}</p>;
    if (teamsError) return <p>Error: {teamsError.message}</p>;
    if (errorteamH) return <p>Error: {errorteamH.message}</p>;
    if (errordriverH) return <p>Error: {errordriverH.message}</p>;
    if (newsError) return <p>Error: {newsError.message}</p>;

    if (!championship) return <p>Campeonato não encontrado</p>;

    const team = teamsData.teams.find(team=>team.id == id)

    // const teamHistory = teamsData.teams.filter(teams=>teams.name == team.name)


    const teamAllTime = datateamH.teamHistories.find(teams =>
        teams.name.some(name=>name == team.name)
    )

    
    const firstPilot = datadriverH.driverHistories.find(drivers=>drivers.name == team.drivers[0].name)
    const secondPilot =  datadriverH.driverHistories.find(drivers=>drivers.name == team.drivers[1].name)
    
    
    const handleNavigatePilot = (driver) => {
     
        
        navigate(`/Pilots/Pilot/${driver.id}`)
    }
    
    const newsWithTag = newsData.news.filter(news => news.tags.includes(team.name));


    

    return (
        <div className="bg-gray-200">
            <Header />
            <div className="bg-gray-200 px-4 m-auto max-w-lg md:max-w-5xl lg:max-w-7xl pt-4">
                <div className="bg-white">
                    <div className="grid md:grid-cols-2">
                        <div>
                            <div>
                                <img className="w-60 mt-4 mx-auto lg:h-1/2 lg:object-cover lg:object-top " src={team.logo ? `/img/logo/${team.logo}` : "https://via.placeholder.com/800x400"} alt="" />

                            </div>
                            <div className="py-5 pt-10 px-4 border-b border-gray-500 md:ml-10 md:border-0">
                                <div className="mb-10 md:mb-5">
                                    <h5 className="font-formula-bold mb-1">Nome completo</h5>
                                    <p className="font-formula text-sm">{teamAllTime.name}</p>
                                </div>

                                <div className="mb-10 md:mb-5">
                                    <h5 className="font-formula-bold mb-1">Chefe de equipe</h5>
                                    <p className="font-formula text-sm">{teamAllTime.chefe}</p>
                                </div>

                                <div className="mb-10 md:mb-5">
                                    <h5 className="font-formula-bold mb-1">Motor</h5>
                                    <p className="font-formula text-sm">{teamAllTime.motor}</p>
                                </div>
                                <div className="mb-10 md:mb-5">
                                    <h5 className="font-formula-bold mb-1">Primeira aparição</h5>
                                    <p className="font-formula text-sm">{teamAllTime.primeiraAparicao}</p>
                                </div>
                                <div className="mb-10 md:mb-5">
                                    <h5 className="font-formula-bold mb-1">Campeonatos</h5>
                                    <p className="font-formula text-sm">{teamAllTime.championships}</p>
                                </div>
                            </div>

                        </div>
                        <div className="grid grid-cols-2 gap-1">
                            <div onClick={() => handleNavigatePilot(team.drivers[0])} className="hover:bg-black hover:text-white duration-500 cursor-pointer md:border-l-2 md:border-gray-200">
                                <img className="object-cover" src={firstPilot.photo ? `/img/drivers/${firstPilot.photo}` : "https://via.placeholder.com/800x400"} alt="" />
                                <div className="px-5 py-10">
                                    <h4 className="font-formula text-3xl md:text-3xl md:font-formula-bold">{team.drivers[0].number}</h4>
                                    <p className="font-formula text-xl md:text-4xl md:text-base">{team.drivers[0].name}</p>
                                    <p className="font-formula text-gray-700 md:text-sm">{team.name}</p>
                                </div>
                            </div>
                            <div onClick={() => handleNavigatePilot(team.drivers[1])} className="hover:bg-black hover:text-white duration-500 cursor-pointer  md:border-l-2 md:border-gray-200">
                                <img src={secondPilot.photo ? `/img/drivers/${secondPilot.photo}` : "https://via.placeholder.com/800x400"} alt="" />
                                <div className="px-5 py-10">
                                    <h4 className="font-formula text-3xl md:text-3xl md:font-formula-bold">{team.drivers[1].number}</h4>
                                    <p className="font-formula text-xl md:text-4xl md:text-base">{team.drivers[1].name}</p>
                                    <p className="font-formula text-gray-700 md:text-sm">{team.name}</p>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="px-4 py-10 mb-4">
                        <h2 className="mb-10 font-formula text-center text-4xl">História</h2>
                        <div className="mb-10 w-1/2" dangerouslySetInnerHTML={{ __html: teamAllTime.text }}></div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-1 py-4 bg-gray-200 xl:grid-cols-4">
                        <NewsContainer newsItem={newsWithTag[newsWithTag.length - 1]}/>
                        <NewsContainer  newsItem={newsWithTag[newsWithTag.length - 2]}/>
                        <NewsContainer  newsItem={newsWithTag[newsWithTag.length - 3]}/>
                        <NewsContainer  newsItem={newsWithTag[newsWithTag.length - 4]}/>

                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Team
