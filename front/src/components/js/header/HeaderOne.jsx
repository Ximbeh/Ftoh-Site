import "../../css/header.css";
import { useQuery } from '@apollo/client';
import { useContext } from 'react';
import { ChampionshipContext } from "../../../Context/ChampionshipContext";
import { GET_CHAMPIONSHIPS } from '../../../queries/getChampionship';
import { useNavigate } from "react-router-dom";

const HeaderOne = ({championshipColorHex}) => {
    const { loading, error, data } = useQuery(GET_CHAMPIONSHIPS);
    const { selectedChampionship, setChampionship } = useContext(ChampionshipContext);
    const navigate = useNavigate();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const handleChampionshipClick = (championship) => {
        setChampionship(championship.id, championship.championshipName);
        navigate(`/${championship.id}`)
    };

    return (
        <div className="bg-white hidden lg:flex">
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
                                style={{ color: championshipColorHex }}
                            ></span>
                            )}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeaderOne;
