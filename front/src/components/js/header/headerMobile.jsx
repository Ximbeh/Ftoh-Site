import React, { useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import "../../css/header.css";
import { useQuery } from '@apollo/client';
import { useContext } from 'react';
import { ChampionshipContext } from "../../../Context/ChampionshipContext";
import { GET_CHAMPIONSHIPS } from '../../../queries/getChampionship';
import { useNavigate } from 'react-router-dom';

const HeaderMobile = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavBar = () => {
        setIsOpen(!isOpen);
    };

    const handleChampionshipClick = (championship) => {
        setChampionship(championship.id, championship.championshipName);
        navigate(`/${championship.id}`);
    };

    const { loading, error, data } = useQuery(GET_CHAMPIONSHIPS);
    const { selectedChampionship, setChampionship } = useContext(ChampionshipContext);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const selectedLogo = data.championships.find(championship => championship.id === selectedChampionship.id)?.logo;
    
    const handleNavigateLatest = () => {
        navigate('/latest')
    }

    const handleNavigateCalendar = () => {
        navigate('/Calendar')
    }

    return (
        <div className="lg:hidden" style={{ backgroundColor: selectedChampionship.color }}>
            <div className="flex max-w-screen-lg mx-5 sm:mx-10">
                <button onClick={toggleNavBar}>
                    {isOpen ? <X color="#fff" /> : <Menu color="#fff" />}
                </button>
                {selectedLogo && (
                    <img
                        className="h-8 my-5 w-calc100-62"
                        src={`../../../../img/championship/${selectedLogo}`}
                        style={{ filter: 'invert(50%) brightness(200%)' }}
                    />
                )}
            </div>
            {isOpen && (
                <div className="h-full relative">
                    <div className="absolute w-full no-scrollbar" style={{ height: 'calc(100vh - 56px)', overflowY: 'auto' }}>
                        <div className="text-white h-92 w-full font-formula pb-6 md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-3 md:h-64" style={{ backgroundColor: selectedChampionship.color }}>
                            <a className="flex items-center hover:cursor-pointer flex justify-between pr-4 border-r border-t-0 border-l-0 border-b border-solid border-white rounded-br-xl mx-3 py-3 mb-3 md:py-0 md:mb-0"
                                onClick={handleNavigateLatest}><span>Notícias</span><ChevronRight color="#fff" /></a>
                            <a className="flex items-center hover:cursor-pointer flex justify-between pr-4 border-r border-t-0 border-l-0 border-b border-solid border-white rounded-br-xl mx-3 py-3 mb-3 md:py-0 md:mb-0"><span>Video</span><ChevronRight color="#fff" /></a>
                            <a className="flex items-center hover:cursor-pointer flex justify-between pr-4 border-r border-t-0 border-l-0 border-b border-solid border-white rounded-br-xl mx-3 py-3 mb-3 md:py-0 md:mb-0"
                                 onClick={handleNavigateCalendar}><span>Calendario</span><ChevronRight color="#fff" /></a>
                            <a className="flex items-center hover:cursor-pointer flex justify-between pr-4 border-r border-t-0 border-l-0 border-b border-solid border-white rounded-br-xl mx-3 py-3 mb-3 md:py-0 md:mb-0"
                               onClick={handleNavigateCalendar}><span>Resultados</span><ChevronRight color="#fff" /></a>
                            <a className="flex items-center hover:cursor-pointer flex justify-between pr-4 border-r border-t-0 border-l-0 border-b border-solid border-white rounded-br-xl mx-3 py-3 mb-3 md:py-0 md:mb-0"
                                onClick={() => navigate('/Pilots')}><span>Pilotos</span><ChevronRight color="#fff" /></a>
                            <a className="flex items-center hover:cursor-pointer flex justify-between pr-4 border-r border-t-0 border-l-0 border-b border-solid border-white rounded-br-xl mx-3 py-3 mb-3 md:py-0 md:mb-0"
                                onClick={() => navigate('/Teams')}><span>Times</span><ChevronRight color="#fff" /></a>
                            <a className="flex items-center hover:cursor-pointer flex justify-between pr-4 border-r border-t-0 border-l-0 border-b border-solid border-white rounded-br-xl mx-3 py-3 mb-3 md:py-0 md:mb-0"><span>Vip</span><ChevronRight color="#fff" /></a>
                            <a className="flex items-center hover:cursor-pointer flex justify-between pr-4 border-r border-t-0 border-l-0 border-b border-solid border-white rounded-br-xl mx-3 py-3 mb-3 md:py-0 md:mb-0"><span>Redes Sociais</span><ChevronRight color="#fff" /></a>
                        </div>
                        <div className="h-72 w-full bg-white font-formula py-6 md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-3 md:h-40">
                            {data.championships.map((championship) => (
                                <a key={championship.id} onClick={() => handleChampionshipClick(championship)} className="flex items-center hover:cursor-pointer opacity-40 flex pr-4 border-r border-gray-500 border-t-0 border-l-0 border-b border-solid rounded-br-xl mx-3 py-3 mb-3 md:py-0 md:mb-0">
                                    <img className="w-20 mr-4" src={`../../../../img/championship/${championship.logo}`} style={{ filter: 'grayscale(100%) brightness(0%)' }} />
                                    {championship.championshipName}
                                </a>
                            ))}
                            <a className="flex items-center hover:cursor-pointer opacity-40 flex pr-4 border-r border-gray-500 border-t-0 border-l-0 border-b border-solid rounded-br-xl mx-3 py-3 mb-3 md:py-0 md:mb-0"><FaDiscord className="w-14" />Discord</a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HeaderMobile;
