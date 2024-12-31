import { Play } from 'lucide-react';
import '../css/CarouselSchedule.css';
import React, { useState, useContext, useEffect, useRef } from 'react';
import { useQuery } from '@apollo/client';
import { ChampionshipContext } from '../../Context/ChampionshipContext';
import { GET_CHAMPIONSHIPS } from '../../queries/getChampionship';
import LoadingPage from './Boundary/Loading';
import { GET_CAROUSEL } from '../../queries/getCarousel';

// Função auxiliar para extrair dia e mês de uma string de data
const extractDayAndMonth = (dateString) => {
    if (!dateString) return { day: null, month: null };
    const regex = /^(\d{2}) ([A-Za-záéíóúüãõç]{3})/;
    const match = dateString.match(regex);
    return match ? { day: match[1], month: match[2] } : { day: null, month: null };
};

// Função auxiliar para filtrar races com base no campeonato e na temporada selecionados
const filterRaces = (races, championshipId, seasonId) => {
    const filteredRaces = races.filter(race => {
        const hasMatchingCalendar = race.calendar.some(calendar => {
            const hasMatchingSeason = calendar.season.some(season => {
                const isMatch = season.championship.id === championshipId &&
                                season.seasonId === seasonId;
                return isMatch;
            });
            return hasMatchingSeason;
        });
        return hasMatchingCalendar;
    });
    return filteredRaces;
};


// Função auxiliar para agrupar fases por ID da race
const groupPhasesByRaceId = (phases) => {
    return phases.reduce((acc, phase) => {
        const raceId = Array.isArray(phase.race) ? phase.race[0]?.id : phase.race?.id;
        if (raceId) {
            if (!acc[raceId]) acc[raceId] = [];
            acc[raceId].push(phase);
        }
        return acc;
    }, {});
};

const CarouselSchedule = () => {
    const { selectedChampionship, selectedSeason } = useContext(ChampionshipContext);
    const slideRefs = useRef([]);

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.slice(1);
            const element = document.getElementById(hash);
            if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        };

        handleHashChange();
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const { loading: championshipsLoading, error: championshipsError, data: championshipsData } = useQuery(GET_CHAMPIONSHIPS);
    const { loading: carouselLoading, error: carouselError, data: carouselData } = useQuery(GET_CAROUSEL);

    if (championshipsLoading || carouselLoading) return <LoadingPage />;
    if (championshipsError || carouselError) return <p>Error: {championshipsError?.message || carouselError?.message}</p>;

    const championshipId = selectedChampionship?.id;
    const championship = championshipsData?.championships.find(champ => champ.id === championshipId);

    if (!championship) return <p>Campeonato não encontrado</p>;

    const filteredRaces = filterRaces(carouselData?.races || [], championshipId, selectedSeason[0]?.seasonId);
    const raceDates = filteredRaces.map(race => race.date);

    const raceDateNumbers = raceDates.map(dateString => extractDayAndMonth(dateString).day);
    const raceDateMonths = raceDates.map(dateString => extractDayAndMonth(dateString).month);

const filteredPhases = carouselData?.phases.filter((phase) => {
    const races = Array.isArray(phase.race) ? phase.race : [phase.race];

    return races.some((race, index) => {
        if (!race) {
            console.warn(`Race é null ou undefined na posição ${index}:`, race);
            return false;
        }

        if (!race.calendar) {
            console.warn(`Race com calendar null na posição ${index}:`, race);
            return false;
        }

        return race.calendar.some((calendar, calIndex) => {
            if (!calendar) {
                console.warn(`Calendar é null ou undefined no índice ${calIndex}:`, calendar);
                return false;
            }

            return calendar.season.some((season, seasonIndex) => {
                if (!season) {
                    console.warn(`Season é null ou undefined no índice ${seasonIndex}:`, season);
                    return false;
                }

                return (
                    season.championship.id === championshipId &&
                    season.id === selectedSeason?.seasonId
                );
            });
        });
    });
});


    const groupedPhases = groupPhasesByRaceId(filteredPhases || []);
    

    return (
        <div className='relative'>
            <div className="slide-container">
                {filteredRaces.map((race, index) => (
                    <span key={race.id} id={`race${index + 1}`} className="race absolute -top-28" />
                ))}

                <div className="image-slider">
                    {filteredRaces.map((race, index) => (
                        <div
                            key={race.id}
                            className='slides-div'
                            id={`slide-${index + 1}`}
                            ref={(el) => (slideRefs.current[index] = el)}
                        >
                            <div className='content' id={`content${index + 1}`}>
                                <img
                                    className="rounded-md w-12 mb-2"
                                    src={race.flag ? `/img/race/${race.flag}` : "https://via.placeholder.com/800x400"}
                                />
                                <h3 className='px-2 text-gray-600 text-sm mb-3 uppercase font-formula-bold text-center text-break'>
                                    {race.name}
                                </h3>
                                <h2 className='leading-9 text-white text-xl mb-1 font-formula-bold'>
                                    {raceDateNumbers[index] || '??'}
                                </h2>
                                <h4 className='text-gray-600 text-sm uppercase font-titillium'>
                                    {raceDateMonths[index] || '???'}
                                </h4>
                            </div>
                            <div className='content open' id={`contentOpen${index + 1}`}>
                                <h2 className='text-white mb-2 text-center font-formula-bold text-xl px-2 md:px-0 md:text-2xl'>
                                    {race.fullName || 'Nome Completo da Race'}
                                </h2>
                                <h5 className='mb-4 text-gray-600 text-sm font-titillium'>
                                    {race.date || 'Data da Race'}
                                </h5>
                                <div className='flex flex-col gap-2'>
                                    {race.phases && race.phases.length > 0 ? (
                                        race.phases.map(phase => (
                                            <div key={phase.id} className='flex items-center justify-end px-2 md:px-0'>
                                                <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>
                                                    {phase.name || 'Nome da Fase'}
                                                </h3>
                                                <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>
                                                    {phase.dayOfWeek || 'Dia'}
                                                </h4>
                                                <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>
                                                    {phase.hour || 'Hora'}
                                                </h4>
                                            </div>
                                        ))
                                    ) : (
                                        <div className='text-gray-600 text-xs px-2'>
                                            No phases information yet
                                        </div>
                                    )}
                                </div>
                            </div>
                            <a href={`#race${index + 1}`} className="button" id={`button-${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CarouselSchedule;
