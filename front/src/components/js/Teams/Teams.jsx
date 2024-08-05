import Header from "../header/Header";
import Footer from "../Footer";
import { ChevronRight } from "lucide-react";
import { ChampionshipContext } from '../../../Context/ChampionshipContext';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_CHAMPIONSHIPS } from "../../../queries/getChampionship";
import LoadingPage from '../Boundary/Loading';
import '../../css/Tabela.css';
import { GET_TEAMS } from "../../../queries/getTeams";

const Teams = () => {
    const { selectedChampionship, selectedSeason } = useContext(ChampionshipContext);
    const { loading: loadingChampionships, error: errorChampionships, data: dataChampionships } = useQuery(GET_CHAMPIONSHIPS);
    const { loading: loadingTeams, error: errorTeams, data: dataTeams } = useQuery(GET_TEAMS);

    const [championship, setChampionship] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (dataChampionships && selectedChampionship) {
            const champ = dataChampionships.championships.find(champ => champ.id === selectedChampionship.id);
            setChampionship(champ);
        }
    }, [dataChampionships, selectedChampionship]);

    if (loadingChampionships || loadingTeams) return <LoadingPage />;
    if (errorChampionships) return <p>Error: {errorChampionships.message}</p>;
    if (errorTeams) return <p>Error: {errorTeams.message}</p>;
    if (!championship) return <p>Campeonato não encontrado</p>;

    const filteredTeams = dataTeams.teams
        .filter(team => team.seasonId === selectedSeason[0].seasonId)
        .sort((a, b) => a.position - b.position);

    const getNomeESobrenome = (name) => {
        const [nome, ...sobrenomeArr] = name.split(' ');
        return { nome, sobrenome: sobrenomeArr.join(' ') };
    };

    const handleNavigateTeam = (teamId) => navigate(`Team/${teamId}`);

    const TeamCard = ({ team }) => {
        const { id, color, position, points, name, logo, drivers, car } = team;
        return (
            <div 
                key={id} 
                onClick={() => handleNavigateTeam(id)} 
                className="py-2 pr-2 border-t-2 border-r-2 border-black rounded-tr-2xl hover:pt-6 cursor-pointer duration-200 hoverContainer" 
                style={{ '--colorTeam': color }}
            >
                <div className="flex justify-between items-center pb-4 border-b-2 border-gray-400">
                    <h1 className="font-formula-bold text-5xl" style={{ color }}>{position}</h1>
                    <div className="flex flex-col items-center">
                        <p className="font-formula-bold text-2xl">{points}</p>
                        <p className="font-formula-bold text-lg text-white bg-grayTotal rounded-xl px-3">PTS</p>
                    </div>
                </div>
                <div className="flex justify-between items-center my-4 pl-2 border-l-4" style={{ borderColor: color }}>
                    <p className="font-formula-bold text-lg">{name}</p>
                    <img className="w-10" src={logo ? `/img/logo/${logo}` : "/img/drivers/default.png"} alt={name} />
                </div>
                <div className="border-t-2 border-gray-400 py-4">
                    <div className="flex flex-cols gap-4">
                        {drivers.map((driver, index) => {
                            const { nome, sobrenome } = getNomeESobrenome(driver.name);
                            return (
                                <div key={index} className="flex gap-2 items-center w-full border-b border-r border-gray-400 rounded-br-xl py-1 pr-2">
                                    <p className="font-formula text-xs">{nome}</p>
                                    <p className="font-formula-bold break-all">{sobrenome}</p>
                                </div>
                            );
                        })}
                    </div>
                    <div className="flex items-center justify-center bg-repeat bg-grade-pattern bg-2 mt-2">
                        <img className="" src={car ? `/img/cars/${car}` : "/img/car/default.png"} alt={name} />
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div>
            <Header />
            <div className="px-4 m-auto max-w-lg md:max-w-5xl lg:max-w-7xl">
                <div className="my-10 py-4 pr-4 border-t-8 border-r-8 border-black rounded-tr-2xl">
                    <h1 className="font-formula-bold text-3xl">
                        Equipes {selectedChampionship.name} {selectedSeason[0].date}
                    </h1>
                </div>

                <div className="grid gap-10 mb-10 md:grid-cols-2 lg:grid-cols-2">
                    {filteredTeams.map(team => (
                        <TeamCard key={team.id} team={team} />
                    ))}
                </div>

                <button className="flex duration-200 mx-auto mb-10 border-t-2 border-r-2 border-black rounded-tr-xl py-4 text-black font-formula hover:border-red-500 hover:text-red-500 cursor-pointer">
                    Hall da fama <ChevronRight color="rgb(229 57 53)" />
                </button>
            </div>
            <Footer />
        </div>
    );
};

export default Teams;
