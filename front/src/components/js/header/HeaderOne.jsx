import "../../css/header.css";
import { useQuery } from '@apollo/client';
import { useContext } from 'react';
import { ChampionshipContext } from "../../../Context/ChampionshipContext";
import { GET_CHAMPIONSHIPS } from '../../../queries/getChampionship';
import { useNavigate } from "react-router-dom";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import LoadingPage from "../Boundary/Loading";


const HeaderOne = () => {
    const { loading, error, data } = useQuery(GET_CHAMPIONSHIPS);
    const { selectedChampionship, setChampionship } = useContext(ChampionshipContext);
    const navigate = useNavigate();

    if (loading) return <LoadingPage/>;
    if (error) return <p>Error: {error.message}</p>;

    const handleChampionshipClick = (championship) => {
        setChampionship(championship.id, championship.championshipName, championship.color, championship.logo);
        navigate(`/${championship.id}`)
    };

    console.log(selectedChampionship);
    

    return (
        <div className="bg-white hidden lg:flex justify-between">
            <div className="flex space-x-4 my-3 ml-10 max-w-screen-lg ml-10 relative">
                <img className="h-6 opacity-40 mr-6" src="https://www.formula1.com/etc/designs/fom-website/images/fia_logo.png " alt="FIA" />
                <span className="before: absolute before: bg-black before: opacity-40 before:left-10 before: flex w-px h-6 left-12"></span>
                <div className="flex space-x-4 items-center font-formula-bold text-xs">
                    {data.championships.map((championship) => (
                        <a className="relative" key={championship.id} onClick={() => handleChampionshipClick(championship)}>
                            <span className={`opacity-40 hover:opacity-100 hover:cursor-pointer ${selectedChampionship.id === championship.id ? 'opacity-100' : ''}`}>
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
            <div className="flex gap-8 mr-40 items-center">
                <a target="_blank" href="https://www.youtube.com/channel/UCsNl4k9tn7Ao7wDiykfaHfg" className="flex font-formula-bold cursor-pointer text-gray-500 hover:text-black text-xs items-center gap-2">
                    <p>YouTohbe</p>
                    <FaYoutube size="2em" color="red" />

                </a>
                <a target="_blank" href="https://www.tiktok.com/@formulatoh" className="flex font-formula-bold cursor-pointer text-gray-500 hover:text-black text-xs items-center gap-2">
                    <p>Tik-Tohk</p>
                    <FaTiktok size="2em" color="black" />

                </a>
                <a target="_blank" href="https://discord.com/invite/MuQ7QX6cPr" className="flex font-formula-bold cursor-pointer text-gray-500 hover:text-black text-xs items-center gap-2">
                    <p>Distohrd</p>
                    <FaDiscord size="2em" color="#7289da"></FaDiscord>
                </a>
            </div>

        </div>
    );
};

export default HeaderOne;
