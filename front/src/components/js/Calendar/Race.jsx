import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from "../header/Header";
import Footer from "../Footer";
import CalendarRace from "./CalendarRace";
import NewsRace from "./NewsRace";
import Circuit from "./Circuit";
import "../../css/Calendar.css";
import { ChampionshipContext } from '../../../Context/ChampionshipContext';
import { GET_ALLRACES } from '../../../queries/getAllRaces';
import { useQuery } from '@apollo/client';

// Importe suas imagens
import defaultCape from '../../../../img/capes/defaultHeader.jpg';

const Race = () => {
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState('Calendário');
    const { selectedChampionship } = useContext(ChampionshipContext);
    const { loading: raceLoading, error: raceError, data: raceData } = useQuery(GET_ALLRACES);

    if (raceLoading) return <p>Loading....</p>;
    if (raceError) return <p>Error: {raceError?.message}</p>;
    
    // Encontrar a corrida com base no id
    const race = raceData.races.find(race => race.id === id);

 
            document.documentElement.style.setProperty('--background-color', selectedChampionship.color);
            document.documentElement.style.setProperty('--hover-color', selectedChampionship.color);


    // Verifique se a imagem é importada corretamente
    const imageHeader = race && race.capeTwo 
        ? (`../../../../img/capes/${race.capeTwo}`)
        : defaultCape;

    const handleActive = (e) => {
        const tabName = e.target.textContent;
        setActiveTab(tabName);
    };

    return (
        <div>
            <Header />
            <header 
                style={{ backgroundImage: `url(${imageHeader})` }} 
                className="bg-cover bg-center text-white"
            >
                <div className="bg-grayTotal bg-opacity-70 w-full h-full p-10 md:p-20 flex flex-col items-center">
                    <h1 className="font-formula-bold text-4xl md:text-7xl text-center">{race.name}</h1>
                    <h3 className="font-formula-bold text-5xl text-transparent text-stroke-white">{race.calendar[0].season[0].date}</h3>
                    <p className="bg-black font-formula text-sm md:text-md px-2 py-1 rounded-xl mt-4">{race.date}</p>
                </div>
            </header>

            <div className='px-6 relative w-full flex justify-center items-center gap-4 sm:gap-11 font-formula bg-grayTotal text-white text-sm sm:text-base'>
                <a
                    onClick={handleActive}
                    className={`cursor-pointer pb-4 py-6 tab-hover ${activeTab === 'Calendário' ? 'active border-grayTotal border-b-4' : 'border-grayTotal border-b-4'}`}
                >
                    Calendário
                </a>
                <a
                    onClick={handleActive}
                    className={`cursor-pointer pb-4 py-6 tab-hover ${activeTab === 'Notícias' ? 'active border-grayTotal border-b-4' : 'border-grayTotal border-b-4'}`}
                >
                    Notícias
                </a>
                <a
                    onClick={handleActive}
                    className={`cursor-pointer pb-4 py-6 tab-hover ${activeTab === 'Circuito' ? 'active border-grayTotal border-b-4' : 'border-grayTotal border-b-4'}`}
                >
                    Circuito
                </a>
            </div>

            {activeTab === 'Calendário' && <CalendarRace race={race} />}
            {activeTab === 'Notícias' && <NewsRace race={race}/>}
            {activeTab === 'Circuito' && <Circuit race={race} />}
            <Footer />
        </div>
    );
};

export default Race;
