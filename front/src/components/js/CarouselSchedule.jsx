import { Play } from 'lucide-react';
import '../css/CarouselSchedule.css'
import React, { useState, useContext, useEffect, useRef } from 'react';
import { useQuery } from '@apollo/client';
import { ChampionshipContext } from '../../Context/championshipContext';
import { GET_CHAMPIONSHIPS } from '../../queries/getChampionship';
import { GET_ALLPHASES } from '../../queries/getAllPhases';
import { GET_ALLRACES } from '../../queries/getAllRaces';
import LoadingPage from './Boundary/loading';
LoadingPage

const CarouselSchedule = () => {
    const { selectedChampionship, selectedSeason } = useContext(ChampionshipContext);

    const slideRefs = useRef([]);

    useEffect(() => {
        const scrollToHash = () => {
            const hash = window.location.hash.slice(1); // Remove '#' from hash
            const element = document.getElementById(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        };

        // Scroll to the initial hash on load
        scrollToHash();

        const handleHashChange = () => {
            scrollToHash();
        };

        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    const { loading: championshipsLoading, error: championshipsError, data: championshipsData } = useQuery(GET_CHAMPIONSHIPS);
    const { loading: raceLoading, error: raceError, data: raceData } = useQuery(GET_ALLRACES);
    const { loading: phaseLoading, error: phaseError, data: phaseData } = useQuery(GET_ALLPHASES);

    if (championshipsLoading || raceLoading || phaseLoading) return <LoadingPage/>;
    if (championshipsError || raceError || phaseError) return <p>Error: {championshipsError?.message || raceError?.message || phaseError?.message}</p>;

    const championshipId = selectedChampionship?.id;
    const championship = championshipsData?.championships.find(champ => champ.id === championshipId);

    if (!championship) return <p>Campeonato não encontrado</p>;


    const filteredRaces = raceData?.races.filter(race =>
        race.calendar.some(calendar =>
            calendar.season.some(season =>
                season.championship.id == championshipId &&
                season.seasonId == selectedSeason[0]?.seasonId
            )
        )
    );


    const raceDates = filteredRaces.map((e) => e.date);


    const extractDayAndMonth = (dateString) => {
        if (!dateString) return { day: null, month: null };
    
        // Ajuste a expressão regular para lidar com diferentes meses e formatos
        const regex = /^(\d{2}) ([A-Za-záéíóúüãõç]{3})/;
        const match = dateString.match(regex);
        if (match) {
            return { day: match[1], month: match[2] };
        }
    
        return { day: null, month: null };
    };

    const raceDateNumbers = raceDates.map(dateString => extractDayAndMonth(dateString).day);
    const raceDateMonths = raceDates.map(dateString => extractDayAndMonth(dateString).month);

    

    const filteredPhases = phaseData?.phases.filter(phase => {
        const races = Array.isArray(phase.race) ? phase.race : [phase.race];
        return races.some(race =>
            race.calendar.some(calendar =>
                calendar.season.some(season =>
                    season.championship.id === championshipId &&
                    season.id === selectedSeason?.seasonId
                )
            )
        );
    });

    const groupedPhases = filteredPhases.reduce((acc, phase) => {
        const raceId = Array.isArray(phase.race) ? phase.race[0]?.id : phase.race?.id;

        if (raceId) {
            if (!acc[raceId]) {
                acc[raceId] = [];
            }
            acc[raceId].push(phase);
        }

        return acc;
    }, {});

    // console.log(groupedPhases);
    console.log(filteredRaces);

    return (
        <div className='relative'>
            <div className="slide-container">
                {
                    filteredRaces.map((race, index) => (
                        <span
                            key={race.id}
                            id={`corrida${index + 1}`}
                            className="corrida absolute -top-28"
                        >
                        </span>
                    ))
                }

                <div className="image-slider">
                    {
                        filteredRaces.map((race, index) => (
                            <div
                                key={race.id}
                                className='slides-div'
                                id={`slide-${index + 1}`}
                                ref={(el) => slideRefs.current[index] = el} // Set ref for each slide
                            >
                                <div className='content' id={`content${index + 1}`}>
                                    <img className="rounded-md w-12 mb-2"
                                        src={race.flag ? `../../../img/race/${race.flag}` : "https://via.placeholder.com/800x400"}
                                    />
                                    <h3 className='px-2 text-gray-600 text-sm mb-3 uppercase font-formula-bold text-center text-break'>{race.name}</h3>
                                    <h2 className='leading-9 text-white text-xl mb-1 font-formula-bold'>
                                        {raceDateNumbers[index] || '??'}
                                    </h2>
                                    <h4 className='text-gray-600 text-sm uppercase font-titillium'>
                                        {raceDateMonths[index] || '???'}
                                    </h4>
                                </div>
                                <div className='content open' id={`contentOpen${index + 1}`}>
                                    <h2 className='text-white mb-2 text-center font-formula-bold text-xl px-2 md:px-0 md:text-2xl'>
                                        {race.fullName || 'Nome Completo da Corrida'}
                                    </h2>
                                    <h5 className='mb-4 text-gray-600 text-sm font-titillium'>
                                        {race.date || 'Data da Corrida'}
                                    </h5>
                                    <div className='flex flex-col gap-2'>
                                        {race.phases && race.phases.length > 0 ? race.phases.map(phase => (
                                            <div key={phase.id} className='flex items-center justify-end px-2 md:px-0'>                                                <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>
                                                {phase.name || 'Nome da Fase'}
                                            </h3>
                                                <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>
                                                    {phase.dayOfWeek || 'Dia'}
                                                </h4>
                                                <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>
                                                    {phase.hour || 'Hora'}
                                                </h4>
                                            </div>
                                        )) : (
                                            <div className='text-gray-600 text-xs px-2'>
                                                Sem informações de fases disponíveis
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <a href={`#corrida${index + 1}`} className="button" id={`button-${index + 1}`}></a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default CarouselSchedule;
