import React, { useState, useContext } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { FaDiscord, FaYoutube, FaTiktok } from "react-icons/fa";
import "../../css/header.css";
import { useQuery } from '@apollo/client';
import { ChampionshipContext } from "../../../Context/ChampionshipContext";
import { GET_CHAMPIONSHIPS } from '../../../queries/getChampionship';
import { useNavigate } from 'react-router-dom';
import LoadingPage from "../Boundary/Loading";

const HeaderMobile = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const { loading, error, data } = useQuery(GET_CHAMPIONSHIPS);
    const { selectedChampionship, setChampionship } = useContext(ChampionshipContext);

    if (loading) return <LoadingPage />;
    if (error) return <p>Error: {error.message}</p>;

    const selectedLogo = data.championships.find(championship => championship.id === selectedChampionship.id)?.logo;

    const handleNavBarToggle = () => setIsOpen(prev => !prev);

    const handleChampionshipClick = (championship) => {
        setChampionship(championship.id, championship.championshipName, championship.color, championship.logo);
        navigate(`/${championship.id}`);
    };

    const handleNavigate = (path) => () => navigate(path);

    return (
        <div className="lg:hidden" style={{ backgroundColor: selectedChampionship.color }}>
            <div className="flex max-w-screen-lg mx-5 sm:mx-10 items-center">
                <button onClick={handleNavBarToggle}>
                    {isOpen ? <X color="#fff" /> : <Menu color="#fff" />}
                </button>
                {selectedLogo && (
                    <img
                        onClick={() => navigate('/')}
                        className="h-8 my-5 w-calc100-62"
                        src={`/img/championship/${selectedLogo}`}
                        style={{ filter: 'invert(50%) brightness(200%)' }}
                        alt="Logo"
                    />
                )}
            </div>
            {isOpen && (
                <div className="h-full relative">
                    <div className="absolute w-full no-scrollbar" style={{ height: 'calc(100vh - 56px)', overflowY: 'auto' }}>
                        <div className="text-white h-92 w-full font-formula pb-6 grid grid-cols-1 gap-y-3 md:grid-cols-2 md:gap-x-4 md:gap-y-3" style={{ backgroundColor: selectedChampionship.color }}>
                            {[
                                { path: '/latest', label: 'Notícias' },
                                { path: 'https://www.youtube.com/channel/UCsNl4k9tn7Ao7wDiykfaHfg', label: 'Video', external: true },
                                { path: '/Calendar', label: 'Calendario' },
                                { path: '/Results', label: 'Resultados' },
                                { path: '/Pilots', label: 'Pilotos' },
                                { path: '/Teams', label: 'Times' }
                            ].map((item, index) => (
                                <a
                                    key={index}
                                    className="flex items-center hover:cursor-pointer justify-between pr-4 border-r border-b border-white rounded-br-xl mx-3 py-3 md:py-0"
                                    onClick={item.external ? undefined : handleNavigate(item.path)}
                                    href={item.external ? item.path : undefined}
                                    target={item.external ? '_blank' : undefined}
                                    rel={item.external ? 'noopener noreferrer' : undefined}
                                >
                                    <span>{item.label}</span><ChevronRight color="#fff" />
                                </a>
                            ))}
                        </div>
                        <div className="flex flex-col sm:flex-row bg-white gap-2 sm:gap-8 py-4 items-center justify-center">
                            {[
                                { href: 'https://www.youtube.com/channel/UCsNl4k9tn7Ao7wDiykfaHfg', label: 'YouTohbe', icon: <FaYoutube size="2em" color="red" /> },
                                { href: 'https://www.tiktok.com/@formulatoh', label: 'Tik-Tohk', icon: <FaTiktok size="2em" color="black" /> },
                                { href: 'https://discord.com/invite/MuQ7QX6cPr', label: 'Distohrd', icon: <FaDiscord size="2em" color="#7289da" /> }
                            ].map((item, index) => (
                                <a
                                    key={index}
                                    target="_blank"
                                    href={item.href}
                                    className="flex font-formula-bold cursor-pointer text-gray-500 hover:text-black text-xs items-center gap-2"
                                    rel="noopener noreferrer"
                                >
                                    <p>{item.label}</p>
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                        <div className="h-72 w-full bg-white font-formula py-6 grid grid-cols-1 gap-y-3 md:grid-cols-2 md:gap-x-4">
                            {data.championships.map((championship) => (
                                <a
                                    key={championship.id}
                                    onClick={() => handleChampionshipClick(championship)}
                                    className="flex items-center opacity-40 pr-4 border-r border-gray-500 rounded-br-xl mx-3 py-3 md:py-0"
                                >
                                    <img className="w-20 mr-4" src={`/img/championship/${championship.logo}`} style={{ filter: 'grayscale(100%) brightness(0%)' }} alt={championship.championshipName} />
                                    {championship.championshipName}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HeaderMobile;
