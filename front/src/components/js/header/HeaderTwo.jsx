import React from 'react';
import clsx from 'clsx';
import FtohLogo from '../../../assets/f1_logo.svg';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useContext } from 'react';
import { ChampionshipContext } from "../../../Context/ChampionshipContext";
import { GET_CHAMPIONSHIPS } from '../../../queries/getChampionship';


const HeaderTwo = ({ championshipColorHex }) => {
    const navigate = useNavigate();

    
    const { loading, error, data } = useQuery(GET_CHAMPIONSHIPS);
    const { selectedChampionship, setChampionship } = useContext(ChampionshipContext);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    // console.log(selectedChampionship);

    const selectedLogo = data.championships.find(championship => championship.id === selectedChampionship.id)?.logo;

    // console.log(selectedLogo);

    return (
        <div className="hidden lg:flex" style={{ backgroundColor: championshipColorHex }}>
            <div className="flex space-x-8 max-w-screen-lg ml-10">
                <img className="h-8 my-5 cursor-pointer"
                    onClick={() => navigate('/')}
                    src={`../../../../img/championship/${selectedLogo}`}
                    style={{ filter: 'invert(50%) brightness(200%)' }} />
                <div className="flex items-center font-formula text-xs text-white">
                    <a
                        className="hover:bg-grayTotal h-full flex items-center px-4 transition ease-out duration-500 cursor-pointer"
                        onClick={() => navigate('/Latest')}
                    >
                        <span className="hover:opacity-100">Notícias</span>
                    </a>
                    <a
                        className="hover:bg-grayTotal h-full flex items-center px-4 transition ease-out duration-500 cursor-pointer" href="https://www.youtube.com/channel/UCsNl4k9tn7Ao7wDiykfaHfg" target='_blank'
                    >
                        <span className="hover:opacity-100">Vídeo</span>
                    </a>
                    <a
                        className="hover:bg-grayTotal h-full flex items-center px-4 transition ease-out duration-500 cursor-pointer"
                        onClick={() => navigate('/Calendar')}
                    >
                        <span className="hover:opacity-100">Calendário</span>
                    </a>
                    <a
                        className="hover:bg-grayTotal h-full flex items-center px-4 transition ease-out duration-500 cursor-pointer"
                        onClick={() => navigate('/Results')}
                    >
                        <span className="hover:opacity-100">Resultados</span>
                    </a>
                    <a
                        className="hover:bg-grayTotal h-full flex items-center px-4 transition ease-out duration-500 cursor-pointer"
                        onClick={() => navigate('/Pilots')}
                    >
                        <span className="hover:opacity-100">Pilotos</span>
                    </a>
                    <a
                        className="hover:bg-grayTotal h-full flex items-center px-4 transition ease-out duration-500 cursor-pointer"
                        onClick={() => navigate('/Teams')}
                    >
                        <span className="hover:opacity-100">Times</span>
                    </a>
                    <a
                        className="hover:bg-grayTotal h-full flex items-center px-4 transition ease-out duration-500 cursor-pointer"
                        onClick={() => navigate('/Vip')}
                    >
                        <span className="hover:opacity-100">Vip</span>
                    </a>
                    <a
                        className="hover:bg-grayTotal h-full flex items-center px-4 transition ease-out duration-500 cursor-pointer"
                        onClick={() => navigate('/RedesSociais')}
                    >
                        <span className="hover:opacity-100">Redes Sociais</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default HeaderTwo;
