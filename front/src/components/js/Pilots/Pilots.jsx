import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Header from '../header/Header';
import Footer from '../Footer';
import { ChevronRight } from 'lucide-react';
import { ChampionshipContext } from '../../../Context/ChampionshipContext';
import { GET_CHAMPIONSHIPS } from '../../../queries/getChampionship';
import { GET_PILOTS } from '../../../queries/getPilots';
import LoadingPage from '../Boundary/Loading';
import '../../css/Tabela.css';

const Pilots = () => {
    const { selectedChampionship, selectedSeason } = useContext(ChampionshipContext);
    const navigate = useNavigate();

    const { loading: loadingChampionships, error: errorChampionships, data: dataChampionships } = useQuery(GET_CHAMPIONSHIPS);
    const { loading: driversLoading, error: driversError, data: driversData } = useQuery(GET_PILOTS);

    const [championship, setChampionship] = useState(null);

    useEffect(() => {
        if (dataChampionships && selectedChampionship) {
            const champ = dataChampionships.championships.find(champ => champ.id === selectedChampionship.id);
            setChampionship(champ);
        }
    }, [dataChampionships, selectedChampionship]);

    if (loadingChampionships || driversLoading) return <LoadingPage />;
    if (errorChampionships) return <p>Error: {errorChampionships.message}</p>;
    if (driversError) return <p>Error: {driversError.message}</p>;
    if (!championship) return <p>Campeonato não encontrado</p>;

// Filtrar os pilotos com seasonId nulo ou undefined
const driversWithoutSeasonId = driversData.drivers.filter(
    driver => !driver.team || driver.team.seasonId == null // Verifica se 'team' é nulo/undefined e depois verifica 'seasonId'
  );
  
  // Logar os nomes dos pilotos com seasonId nulo ou undefined
  console.log("Pilotos com seasonId nulo ou undefined:");
  driversWithoutSeasonId.forEach(driver => {
    console.log(driver.name); // Substitua "name" pela propriedade que armazena o nome do piloto, se diferente.
  });
  

    const filteredDrivers = driversData.drivers.filter(driver => driver.team.seasonId === selectedSeason[0].seasonId);

    const getNomeESobrenome = (name) => {
        const [nome, ...sobrenomeArr] = name.split(' ');
        return { nome, sobrenome: sobrenomeArr.join(' ') };
    };

    const handleNavigatePilot = (driver) => {
        navigate(`Pilot/${driver.id}`);
    };

    return (
        <div>
            <Header />
            <div className="px-4 m-auto max-w-lg md:max-w-5xl lg:max-w-7xl">
                <div className="my-10 py-4 pr-4 border-t-8 border-r-8 border-black rounded-tr-2xl">
                    <h1 className="font-formula-bold text-3xl">
                        Pilotos {selectedChampionship.name} {selectedSeason[0].date}
                    </h1>
                </div>

                <div className="grid gap-10 mb-10 md:grid-cols-2 lg:grid-cols-3">
                    {filteredDrivers.map(driver => {
                        const { nome, sobrenome } = getNomeESobrenome(driver.name);
                        return (
                            <div
                                key={driver.id}
                                onClick={() => handleNavigatePilot(driver)}
                                className="py-2 pr-2 border-t-2 border-r-2 border-black rounded-tr-2xl hover:pt-6 cursor-pointer duration-200 containerPilot"
                                style={{ '--selected-color': selectedChampionship.color }}
                            >
                                <div className="flex justify-between items-center pb-4 border-b-2 border-gray-400">
                                    <h1 className="font-formula-bold text-5xl">{driver.position}</h1>
                                    <div className="flex flex-col items-center">
                                        <p className="font-formula-bold text-2xl">{driver.points}</p>
                                        <p className="font-formula-bold text-lg text-white bg-grayTotal rounded-xl px-3">PTS</p>
                                    </div>
                                </div>
                                <div
                                    className="flex justify-between items-center my-4 pl-2 border-l-4"
                                    style={{ borderColor: driver.team.color }}
                                >
                                    <div>
                                        <p className="font-formula text-sm">{nome}</p>
                                        <p className="font-formula-bold text-lg">{sobrenome}</p>
                                    </div>
                                    <img
                                        className="w-10 rounded border border-gray-400"
                                        src={driver.flag ? `/img/race/${driver.flag}` : "https://via.placeholder.com/800x400"}
                                        alt={driver.name}
                                    />
                                </div>
                                <div className="border-t-2 border-gray-400 py-4">
                                    <p className="font-formula text-xs text-gray-700">{driver.team.name}</p>
                                    <div className="flex">
                                        <p className="self-end w-1/4 font-formula-bold text-6xl" style={{ color: driver.team.color }}>
                                            {driver.number}
                                        </p>
                                        <img
                                            className="w-2/3 object-cover h-32 sm:h-64"
                                            src={driver.photo ? `/img/drivers/${driver.photo}` : "/img/drivers/default.png"}
                                            alt={driver.name}
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <button
                    onClick={() => navigate('/Hall')}
                    className="flex duration-200 mx-auto mb-10 border-t-2 border-r-2 border-black rounded-tr-xl py-4 text-black font-formula hallDaFama cursor-pointer"
                    style={{ '--selected-color': selectedChampionship.color }}
                >
                    Hall da fama <ChevronRight color="rgb(229 57 53)" />
                </button>
            </div>
            <Footer />
        </div>
    );
};

export default Pilots;
