import "../../css/header.css";
import { useQuery } from '@apollo/client';
import { useContext } from 'react';
import { ChampionshipContext } from "../../../Context/ChampionshipContext";
import { GET_CHAMPIONSHIPS } from '../../../queries/getChampionship';
import { useNavigate } from "react-router-dom";
import { FaDiscord, FaYoutube, FaTiktok } from "react-icons/fa";
import LoadingPage from "../Boundary/Loading";

const HeaderOne = () => {
    const { loading, error, data } = useQuery(GET_CHAMPIONSHIPS);
    const { selectedChampionship, setChampionship, setSelectedSeason } = useContext(ChampionshipContext);
    const navigate = useNavigate();

    if (loading) return <LoadingPage />;
    if (error) return <p>Error: {error.message}</p>;

    const handleChampionshipClick = (championship) => {
        setChampionship({
            id: championship.id,
            name: championship.championshipName,
            color: championship.color,
            logo: championship.logo
        });
        
        const lastSeason = championship.seasons[0];        
        setSelectedSeason([lastSeason]);
        navigate(`/${championship.id}`);
    };

    return (
        <div className="bg-white hidden lg:flex justify-between items-center px-10">
            <div className="flex space-x-4 my-3 max-w-screen-lg relative">
                <img 
                    className="h-6 opacity-40 mr-6" 
                    src="https://www.formula1.com/etc/designs/fom-website/images/fia_logo.png" 
                    alt="FIA" 
                />
                <span className="absolute bg-black opacity-40 w-px h-6 left-12"></span>
                <div className="flex space-x-4 items-center font-formula-bold text-xs">
                    {data.championships.map((championship) => (
                        <a 
                            className="relative" 
                            key={championship.id} 
                            onClick={() => handleChampionshipClick(championship)}
                        >
                            <span 
                                className={`opacity-40 hover:opacity-100 cursor-pointer ${selectedChampionship.id === championship.id ? 'opacity-100' : ''}`}
                            >
                                {championship.championshipName}
                            </span>
                            {selectedChampionship.id === championship.id && (
                                <span
                                    className="absolute left-4 -bottom-4 triangulo-baixo"
                                    style={{ color: selectedChampionship.color }}
                                ></span>
                            )}
                        </a>
                    ))}
                </div>
            </div>
            <div className="flex gap-8 items-center">
                {[
                    {
                        href: "https://www.youtube.com/channel/UCsNl4k9tn7Ao7wDiykfaHfg",
                        label: "YouTohbe",
                        Icon: FaYoutube,
                        iconColor: "red"
                    },
                    {
                        href: "https://www.tiktok.com/@formulatoh",
                        label: "Tik-Tohk",
                        Icon: FaTiktok,
                        iconColor: "black"
                    },
                    {
                        href: "https://discord.com/invite/MuQ7QX6cPr",
                        label: "Distohrd",
                        Icon: FaDiscord,
                        iconColor: "#7289da"
                    }
                ].map(({ href, label, Icon, iconColor }) => (
                    <a 
                        key={label}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        href={href} 
                        className="flex font-formula-bold cursor-pointer text-gray-500 hover:text-black text-xs items-center gap-2"
                    >
                        <p>{label}</p>
                        <Icon size="2em" color={iconColor} />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default HeaderOne;
