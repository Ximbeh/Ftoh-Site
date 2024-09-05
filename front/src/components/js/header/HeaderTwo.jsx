import React from 'react';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useContext } from 'react';
import { ChampionshipContext } from "../../../Context/ChampionshipContext";
import { GET_CHAMPIONSHIPS } from '../../../queries/getChampionship';
import LoadingPage from '../Boundary/Loading';

const HeaderTwo = () => {
    const navigate = useNavigate();
    const { loading, error, data } = useQuery(GET_CHAMPIONSHIPS);
    const { selectedChampionship } = useContext(ChampionshipContext);

    if (loading) return <LoadingPage />;
    if (error) return <p>Error: {error.message}</p>;

    const selectedLogo = data.championships.find(
        championship => championship.id === selectedChampionship.id
    )?.logo;

    const handleNavigate = (path) => () => navigate(path);

    return (
        <div className="hidden lg:flex" style={{ backgroundColor: selectedChampionship.color }}>
            <div className="flex space-x-8 max-w-screen-lg ml-10">
                <img
                    className="h-8 my-5 cursor-pointer"
                    onClick={handleNavigate('/')}
                    src={`/img/championship/${selectedLogo}`}
                    style={{ filter: 'invert(50%) brightness(200%)' }}
                    alt="Championship Logo"
                />
                <div className="flex items-center font-formula text-xs text-white">
                    {[
                        { path: '/latest', label: 'Notícias' },
                        { path: 'https://www.youtube.com/channel/UCsNl4k9tn7Ao7wDiykfaHfg', label: 'Vídeo', target: '_blank' },
                        { path: '/Calendar', label: 'Calendário' },
                        { path: '/Results', label: 'Resultados' },
                        { path: '/Pilots', label: 'Pilotos' },
                        { path: '/Teams', label: 'Equipes' }
                    ].map(({ path, label, target }) => (
                        <a
                            key={label}
                            className="hover:bg-grayTotal h-full flex items-center px-4 transition ease-out duration-500 cursor-pointer"
                            onClick={target ? undefined : handleNavigate(path)}
                            href={target ? path : undefined}
                            target={target}
                            rel={target ? "noopener noreferrer" : undefined}
                        >
                            <span className="hover:opacity-100">{label}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HeaderTwo;
