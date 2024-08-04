
import Header from "../header/header"
import Footer from "../footer"
import { ChevronRight } from "lucide-react"
import { ChampionshipContext } from '../../../Context/championshipContext';
import { useContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALLDRIVERS } from "../../../queries/getAllPilots";
import { GET_CHAMPIONSHIPS } from "../../../queries/getChampionship";
import { GET_ALLTEAMH } from "../../../queries/getAllTeamH";
import { GET_ALLTEAMS } from "../../../queries/getAllTeams";
import { GET_ALLDRIVERSH } from "../../../queries/getAllDriverH";
import { GET_ALLNEWS } from "../../../queries/getAllNews"
import { GET_ALLSEASONS } from "../../../queries/getAllSeasons"
import { GET_ALLRACES } from "../../../queries/getAllRaces"
import LoadingPage from "../Boundary/loading";



const Results = () => {
    const { selectedChampionship, selectedSeason, setSeason } = useContext(ChampionshipContext);
    const { loading: loadingChampionships, error: errorChampionships, data: dataChampionships } = useQuery(GET_CHAMPIONSHIPS);
    const { loading: seasonLoading, error: seasonError, data: seasonData } = useQuery(GET_ALLSEASONS);
    const { loading: driversLoading, error: driversError, data: driversData } = useQuery(GET_ALLDRIVERS);
    const { loading: teamsLoading, error: teamsError, data: teamsData } = useQuery(GET_ALLTEAMS);
    const { loading: racesLoading, error: racesError, data: racesData } = useQuery(GET_ALLRACES);

    const [championship, setChampionship] = useState(null);
    const [temporarySeason, setTemporarySeason] = useState(null);
    const [midSelect, setMidSelect] = useState('Corridas');
    const [finalSelect, setFinalSelect] = useState('All');
    const [raceSelect, setRaceSelect] = useState('Resultado da corrida');

    useEffect(() => {
        if (dataChampionships && selectedChampionship) {
            const champ = dataChampionships.championships.find(champ => champ.id === selectedChampionship.id);
            setChampionship(champ);
        }
    }, [dataChampionships, selectedChampionship]);

    useEffect(() => {
        if (championship && seasonData) {
            const filteredSeasons = seasonData.seasons.filter(season => season.championshipName === championship.championshipName);

            if (selectedSeason && selectedSeason.length > 0) {
                setTemporarySeason(filteredSeasons[filteredSeasons.length - 1]);
            }
        }
    }, [championship, seasonData, selectedSeason]);

    const handleSeasonChange = (event) => {
        const selectedSeasonId = event.target.value;
        const selectedSeasonObj = filteredSeasons.find(season => season.seasonId === selectedSeasonId);

        if (selectedSeasonObj) {
            setTemporarySeason(selectedSeasonObj);
        } else {
            setTemporarySeason(null);  // Use `null` instead of an empty string
        }
    };

    if (loadingChampionships || driversLoading || teamsLoading || seasonLoading || racesLoading) return <LoadingPage/>;
    if (errorChampionships) return <p>Error: {errorChampionships.message}</p>;
    if (driversError) return <p>Error: {driversError.message}</p>;
    if (teamsError) return <p>Error: {teamsError.message}</p>;
    if (seasonError) return <p>Error: {seasonError.message}</p>;
    if (racesError) return <p>Error: {racesError.message}</p>;

    if (!championship) return <p>Campeonato não encontrado</p>;

    const filteredSeasons = seasonData.seasons.filter(season => season.championshipName === championship.championshipName);
    const filteredRaces = racesData.races.filter(race => race.calendar[0].season[0].seasonId === temporarySeason?.seasonId);
    const filteredDrivers = driversData.drivers
        .filter(driver => driver.team.seasonId === temporarySeason?.seasonId)
        .sort((a, b) => a.position - b.position);
    const filteredTeams = teamsData.teams.filter(team => team.seasonId === temporarySeason?.seasonId).sort((a, b) => a.position - b.position);

    const handleMidSelectChange = (event) => {
        const selectedMid = event.target.value;
        setMidSelect(selectedMid);
        setFinalSelect('All');  // Reset `finalSelect` when `midSelect` changes
    };

    const handleFinalSelectChange = (event) => {
        const selectedFinal = event.target.value;
        setFinalSelect(selectedFinal === 'all' ? 'All' : selectedFinal); // Ajuste para garantir que 'all' se torne 'All'
    };

    const raceOptions = filteredRaces.map(race => (
        <option key={race.id} value={race.id}>{race.name}</option>
    ));
    const driversOption = filteredDrivers.map(driver => (
        <option key={driver.id} value={driver.id}>{driver.name}</option>
    ));
    const teamsOption = filteredTeams.map(team => (
        <option key={team.id} value={team.id}>{team.name}</option>
    ));

    const getName = (id) => {
        const driver = filteredDrivers.find(driver => driver.id === id);
        if (driver) return driver.name;

        const team = filteredTeams.find(team => team.id === id);
        if (team) return team.name;

        const race = filteredRaces.find(race => race.id === id);
        if (race) return race.name;

        return 'N/A';
    };

    const nameFinal = finalSelect !== 'All'
    ? ` - ${getName(finalSelect)}`
    : ''; 

    const getClassName = (value) => {
        return `font-formula hover:bg-gray-200 cursor-pointer p-3 border-l-4 mb-1 ${raceSelect === value ? 'bg-gray-400 border-gray-500' : 'border-gray-300'}`;
    };

    const raceSelected = midSelect === 'Corridas' && finalSelect !== 'All'
    ? filteredRaces.find(race => race.id === finalSelect)
    : null; 


    return (
        <div>
            <Header />
            <div className="bg-gray-200 pb-10">
                <div className="m-auto max-w-lg md:max-w-5xl lg:max-w-7xl pt-4">
                    <div className="px-4 flex flex-col gap-4 pb-10">
                        <select className="rounded-t-sm border-b-2 border-gray-400 font-formula px-2 py-4" name="year" id="year"
                            onChange={handleSeasonChange}>
                            {filteredSeasons.slice().reverse().map(season => (
                                <option key={season.id} value={season.seasonId}>{season.date}</option>
                            ))}
                        </select>
                        <select onChange={handleMidSelectChange} className="rounded-t-sm border-b-2 border-gray-400 font-formula px-2 py-4" name="category" id="category">
                            <option value="Corridas">Corridas</option>
                            <option value="Pilotos">Pilotos</option>
                            <option value="Times">Times</option>
                            <option value="Fast-Lap">Fast-Lap</option>
                        </select>
                        <select
                            onChange={handleFinalSelectChange}
                            className={`rounded-t-sm border-b-2 border-gray-400 font-formula px-2 py-4 ${midSelect === 'Fast-Lap' ? 'hidden' : ''}`}
                            name="race"
                            id="race"
                        >
                            <option value="all">All</option>
                            {midSelect === 'Corridas' && raceOptions}
                            {midSelect === 'Pilotos' && driversOption}
                            {midSelect === 'Times' && teamsOption}
                        </select>
                    </div>
                    <div className="bg-white md:px-6 md:m-auto md:max-w-5xl lg:max-w-7xl">
                        <h2 className="px-4 py-10 font-formula-bold text-xl md:px-0 md:text-3xl">{temporarySeason?.date} - {midSelect}{nameFinal} </h2>
                        <div>
                            {/* Corrida Escolhida */}
                            {midSelect === 'Corridas' && finalSelect !== 'All' && raceSelected ? (
                                <div>
                                    <h4 className="pl-4 font-formula text-sm">{raceSelected.date}</h4>
                                    <p className="pl-4 mb-4 font-formula text-xs text-gray-600">{raceSelected.location}</p>
                                    <div>
                                        <div>
                                            <p onClick={() => setRaceSelect('Resultado da corrida')} className={getClassName('Resultado da corrida')}>Resultado da corrida</p>
                                            <p onClick={() => setRaceSelect('Voltas mais rapidas')} className={getClassName('Voltas mais rapidas')}>Voltas mais rapidas</p>
                                            <p onClick={() => setRaceSelect('Pit-Stops')} className={getClassName('Pit-Stops')}>Pit-Stops</p>
                                            <p onClick={() => setRaceSelect('Grid Inicial')} className={getClassName('Grid Inicial')}>Grid Inicial</p>
                                            {raceSelected.phases
                                                .slice(0, -1) // Obtém todas as fases, exceto a última
                                                .map(phase => (
                                                    <p key={phase.id} onClick={() => setRaceSelect(phase.name)} className={getClassName(phase.name)}>
                                                        {phase.name}
                                                    </p>
                                                ))}
                                        </div>
                                        {raceSelect === 'Resultado da corrida' && (
                                            <div>
                                                <table className="min-w-full divide-y divide-gray-200 font-formula">
                                                    <thead>
                                                        <tr>
                                                            <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Posição</th>
                                                            <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:table-cell hidden">Número</th>
                                                            <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:table-cell hidden">Piloto</th>
                                                            <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Carro</th>
                                                            <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:table-cell hidden">Laps</th>
                                                            <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pontos</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            raceSelected.phases[raceSelected.phases.length - 1].pilots
                                                                .slice()
                                                                .sort((a, b) => a.position - b.position)
                                                                .map((pilot, index) => (
                                                                    <tr key={pilot.id} className={index % 2 === 0 ? 'bg-gray-300' : 'bg-white'}>
                                                                        <td className="pl-3 py-4 whitespace-nowrap text-xs font-medium text-gray-900">{pilot.position ?? 'N/A'}</td>
                                                                        <td className="pl-3 py-4 whitespace-nowrap text-xs text-gray-900 md:table-cell hidden">
                                                                            {filteredDrivers.find(driver => driver.id == pilot.pilotId)?.number}
                                                                        </td>
                                                                        <td className="pl-3 py-4 whitespace-nowrap text-xs text-gray-900">
                                                                            <span className="sm:hidden">
                                                                                {filteredDrivers.find(driver => driver.id == pilot.pilotId)?.nameAbreviado}
                                                                            </span>
                                                                            <span className="hidden sm:flex">
                                                                                {filteredDrivers.find(driver => driver.id == pilot.pilotId)?.name}
                                                                            </span>
                                                                        </td>
                                                                        <td className="pl-3 py-4 whitespace-nowrap text-xs text-gray-900 md:table-cell hidden">
                                                                            {filteredTeams.find(team => team.id == pilot.teamId)?.name}
                                                                        </td>
                                                                        <td className="pl-3 py-4 whitespace-nowrap text-xs text-gray-900 md:table-cell hidden">
                                                                            {pilot.lapsCompleted ?? 'DSQ'}
                                                                        </td>
                                                                        <td className="pl-3 py-4 whitespace-nowrap text-xs text-gray-900">
                                                                            {pilot.points ?? 'N/A'}
                                                                        </td>
                                                                    </tr>
                                                                ))
                                                        }
                                                    </tbody>
                                                </table>

                                            </div>
                                        )}
                                        {raceSelect === 'Voltas mais rapidas' && (
                                            <div>
                                                <table className="min-w-full divide-y divide-gray-200 font-formula">
                                                    <thead>
                                                        <tr>
                                                            <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Posição</th>
                                                            <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Piloto</th>
                                                            <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Volta</th>
                                                            <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tempo</th>

                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            raceSelected.phases[raceSelected.phases.length - 1].pilots.
                                                                slice()
                                                                .sort((a, b) => a.timeFastLap - b.timeFastLap).
                                                                map((pilot, index) => (
                                                                    <tr key={pilot.id} className={index % 2 === 0 ? 'bg-gray-300' : 'bg-white'}>
                                                                        <td className="pl-3 py-4 whitespace-nowrap text-xs font-medium text-gray-900">{index + 1}</td>
                                                                        <td className="pl-3 py-4 whitespace-nowrap text-xs text-gray-900">
                                                                            <span className="sm:hidden">
                                                                                {filteredDrivers.find(driver => driver.id == pilot.pilotId).nameAbreviado}

                                                                            </span>
                                                                            <span className="hidden sm:flex">
                                                                                {filteredDrivers.find(driver => driver.id == pilot.pilotId).name}

                                                                            </span>
                                                                        </td>
                                                                        <td className="pl-3 py-4 whitespace-nowrap text-xs text-gray-900">
                                                                            {pilot.fastlapLap ?? 'N/A'}
                                                                        </td>
                                                                        <td className="pl-3 py-4 whitespace-nowrap text-xs text-gray-900">
                                                                            {pilot.timeFastLap ?? 'N/A'}
                                                                        </td>
                                                                    </tr>
                                                                ))
                                                        }
                                                    </tbody>
                                                </table>

                                            </div>
                                        )}
                                        {raceSelect === 'Pit-Stops' && (
                                            <div>
                                                <table className="min-w-full divide-y divide-gray-200 font-formula">
                                                    <thead>
                                                        <tr>
                                                            <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Parada</th>
                                                            <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:table-cell hidden">Número</th>
                                                            <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Piloto</th>
                                                            <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:table-cell hidden">Carro</th>
                                                            <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lap</th>
                                                            <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:table-cell hidden">Horário</th>
                                                            <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tempo</th>

                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {raceSelected.phases[raceSelected.phases.length - 1].pilots.some(pilot => Array.isArray(pilot.pitStop))
                                                            ? raceSelected.phases[raceSelected.phases.length - 1].pilots
                                                                .flatMap(pilot =>
                                                                    Array.isArray(pilot.pitStop) ? pilot.pitStop.map(pitStop => ({
                                                                        ...pitStop,
                                                                        pilot: pilot // Adiciona o piloto ao pit stop para referência posterior
                                                                    })) : []
                                                                )
                                                                .slice()
                                                                .sort((a, b) => {
                                                                    // Ordena por timeOfRace se disponível, senão por pilot.position, senão por pilot.pilotId
                                                                    const timeA = a.timeOfRace ?? a.pilot.position ?? a.pilot.pilotId;
                                                                    const timeB = b.timeOfRace ?? b.pilot.position ?? b.pilot.pilotId;
                                                                    return timeA - timeB;
                                                                })
                                                                .map((pitStop, index) => (
                                                                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-300' : 'bg-white'}>
                                                                        <td className="pl-3 py-4 whitespace-nowrap text-xs font-medium text-gray-900">
                                                                            {pitStop.stops ?? 'N/A'}
                                                                        </td>
                                                                        <td className="pl-3 py-4 whitespace-nowrap text-xs text-gray-900 md:table-cell hidden">
                                                                            {pitStop.pilot.numero ?? 'N/A'}
                                                                        </td>
                                                                        <td className="pl-3 py-4 whitespace-nowrap text-xs text-gray-900">
                                                                            <span className="sm:hidden">
                                                                                {pitStop.pilot.nameAbreviado ?? 'N/A'}
                                                                            </span>
                                                                            <span className="hidden sm:flex">
                                                                                {pitStop.pilot.name ?? 'N/A'}
                                                                            </span>
                                                                        </td>
                                                                        <td className="pl-3 py-4 whitespace-nowrap text-xs text-gray-900">
                                                                            {filteredTeams.find(team => team.id === pitStop.pilot.teamId)?.name ?? 'N/A'}
                                                                        </td>
                                                                        <td className="pl-3 py-4 whitespace-nowrap text-xs font-medium text-gray-900">
                                                                            {pitStop.lapPitStop ?? 'N/A'}
                                                                        </td>
                                                                        <td className="pl-3 py-4 whitespace-nowrap text-xs text-gray-900">
                                                                            {pitStop.timeOfRace ?? 'N/A'}
                                                                        </td>
                                                                        <td className="pl-3 py-4 whitespace-nowrap text-xs font-medium text-gray-900">
                                                                            {pitStop.timePitStop ?? 'N/A'}
                                                                        </td>
                                                                    </tr>
                                                                ))
                                                            : <tr>
                                                                <td colSpan="7" className="text-center py-4 text-gray-500">Não houve pitStops nesta corrida</td>
                                                            </tr>
                                                        }
                                                    </tbody>
                                                </table>

                                            </div>
                                        )}
                                        {raceSelect === 'Grid Inicial' && (
                                            <div>
                                                <table className="min-w-full divide-y divide-gray-200 font-formula">
                                                    <thead>
                                                        <tr>
                                                            <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Posição</th>
                                                            <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:table-cell hidden">Número</th>
                                                            <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Piloto</th>
                                                            <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:table-cell hidden">Carro</th>
                                                            <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tempo</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            raceSelected.phases[raceSelected.phases.length - 2].pilots
                                                                .slice()
                                                                .sort((a, b) => a.position - b.position)
                                                                .map((pilot, index) => (
                                                                    <tr key={pilot.id} className={index % 2 === 0 ? 'bg-gray-300' : 'bg-white'}>
                                                                        <td className="pl-3 py-4 whitespace-nowrap text-xs font-medium text-gray-900">{pilot.position ?? 'N/A'}</td>
                                                                        <td className="pl-3 py-4 whitespace-nowrap text-xs text-gray-900 md:table-cell hidden">
                                                                            {filteredDrivers.find(driver => driver.id == pilot.pilotId)?.number}
                                                                        </td>
                                                                        <td className="pl-3 py-4 whitespace-nowrap text-xs text-gray-900">
                                                                            <span className="sm:hidden">
                                                                                {filteredDrivers.find(driver => driver.id == pilot.pilotId)?.nameAbreviado}
                                                                            </span>
                                                                            <span className="hidden sm:flex">
                                                                                {filteredDrivers.find(driver => driver.id == pilot.pilotId)?.name}
                                                                            </span>
                                                                        </td>
                                                                        <td className="pl-3 py-4 whitespace-nowrap text-xs text-gray-900 md:table-cell hidden">
                                                                            {filteredTeams.find(team => team.id == pilot.teamId)?.name ?? 'N/A'}
                                                                        </td>
                                                                        <td className="pl-3 py-4 whitespace-nowrap text-xs text-gray-900 ">
                                                                            {pilot.timeFastLap ?? 'N/A'}
                                                                        </td>

                                                                    </tr>
                                                                ))
                                                        }
                                                    </tbody>
                                                </table>

                                            </div>
                                        )}
                                        {raceSelected.phases
                                            .filter(phase => phase.name === raceSelect) // Filtra a fase selecionada
                                            .map(phase => (
                                                <div key={phase.id}>
                                                    <table className="min-w-full divide-y divide-gray-200 font-formula">
                                                        <thead>
                                                            <tr>
                                                                <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Posição</th>
                                                                <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:table-cell hidden">Número</th>
                                                                <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Piloto</th>
                                                                <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:table-cell hidden">Carro</th>
                                                                <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Laps</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                raceSelected.phases.find(p => p.name === raceSelect)?.pilots
                                                                    .slice()
                                                                    .sort((a, b) => a.position - b.position)
                                                                    .map((pilot, index) => (
                                                                        <tr key={pilot.id} className={index % 2 === 0 ? 'bg-gray-300' : 'bg-white'}>
                                                                            <td className="pl-3 py-4 whitespace-nowrap text-xs font-medium text-gray-900">{pilot.position ?? 'N/A'}</td>
                                                                            <td className="pl-3 py-4 whitespace-nowrap text-xs text-gray-900 md:table-cell hidden">
                                                                                {filteredDrivers.find(driver => driver.id == pilot.pilotId)?.number}
                                                                            </td>
                                                                            <td className="pl-3 py-4 whitespace-nowrap text-xs text-gray-900">
                                                                                <span className="sm:hidden">
                                                                                    {filteredDrivers.find(driver => driver.id == pilot.pilotId)?.nameAbreviado}
                                                                                </span>
                                                                                <span className="hidden sm:flex">
                                                                                    {filteredDrivers.find(driver => driver.id == pilot.pilotId)?.name}
                                                                                </span>
                                                                            </td>
                                                                            <td className="pl-3 py-4 whitespace-nowrap text-xs text-gray-900 md:table-cell hidden">
                                                                                {filteredTeams.find(team => team.id == pilot.teamId)?.name}
                                                                            </td>
                                                                            <td className="pl-3 py-4 whitespace-nowrap text-xs text-gray-900">
                                                                                {pilot.lapsCompleted ?? 'DSQ'}
                                                                            </td>

                                                                        </tr>
                                                                    ))
                                                            }
                                                        </tbody>
                                                    </table>
                                                </div>
                                            ))}
                                    </div>
                                </div>

                            ) : (
                                // Corrida All
                                midSelect === 'Corridas' && finalSelect === 'All' && (
                                    <table className="min-w-full divide-y divide-gray-200 font-formula">
                                        <thead>
                                            <tr>
                                                <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grand Prix</th>
                                                <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:table-cell hidden">Date</th>
                                                <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Winner</th>
                                                <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Car</th>
                                                <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:table-cell hidden">Laps</th>
                                                <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider lg:table-cell hidden">Time</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredRaces.map((race, index) => {
                                                const lastPhase = race.phases[race.phases.length - 1];
                                                const winningPilotId = lastPhase?.pilots.find(pilot => pilot.position === 1)?.pilotId;
                                                const winningDriver = filteredDrivers.find(driver => driver.id === winningPilotId);

                                                return (
                                                    <tr key={race.id} className={index % 2 === 0 ? 'bg-gray-300' : 'bg-white'}>
                                                        <td className="pl-3 py-4 whitespace-nowrap text-xs font-medium text-gray-900">{race.name}</td>
                                                        <td className="pl-3 py-4 whitespace-nowrap text-xs text-gray-900 md:table-cell hidden">
                                                            {lastPhase?.dayOfMonth} {lastPhase?.Month}
                                                        </td>
                                                        <td className="pl-3 py-4 whitespace-nowrap text-xs text-gray-900">
                                                            <span className="sm:hidden">
                                                                {winningDriver?.nameAbreviado ?? 'N/A'}
                                                            </span>
                                                            <span className="hidden sm:flex">
                                                                {winningDriver?.name ?? 'N/A'}
                                                            </span>
                                                        </td>
                                                        <td className="pl-3 py-4 whitespace-nowrap text-xs text-gray-900">
                                                            {winningDriver?.team.name ?? 'N/A'}
                                                        </td>
                                                        <td className="pl-3 py-4 whitespace-nowrap text-xs text-gray-900 md:table-cell hidden">
                                                            {race.laps ?? 'N/A'}
                                                        </td>
                                                        <td className="pl-3 py-4 whitespace-nowrap text-xs text-gray-900 lg:table-cell hidden">
                                                            {lastPhase?.pilots.find(pilot => pilot.position === 1)?.timeTaken ?? 'N/A'}
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                )
                            )}



                            {/* Pilotos All */}
                            {midSelect === 'Pilotos' && finalSelect === 'All' && (
                                <table className="min-w-full divide-y divide-gray-200 font-formula">
                                    <thead>
                                        <tr>
                                            <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pos</th>
                                            <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:table-cell hidden">Piloto</th>
                                            <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Carro</th>
                                            <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pontos</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredDrivers.map((driver, index) => (
                                            <tr key={driver.id} className={index % 2 === 0 ? 'bg-gray-300' : 'bg-white'}>
                                                <td className="pl-3 py-4 whitespace-nowrap text-xs font-medium text-gray-900">{driver.position}</td>
                                                <td className="pl-3 py-4 whitespace-nowrap text-xs font-medium text-gray-900">
                                                    <span className="sm:hidden">{driver.nameAbreviado}</span>
                                                    <span className="hidden sm:flex">{driver.name}</span>

                                                </td>
                                                <td className="pl-3 py-4 whitespace-nowrap text-xs font-medium text-gray-900">{driver.team.name}</td>
                                                <td className="pl-3 py-4 whitespace-nowrap text-xs font-medium text-gray-900">{driver.points}</td>
                                            </tr>

                                        ))}
                                    </tbody>
                                </table>
                            )}

                            {/* Pilotos Escolhido */}
                            {midSelect === 'Pilotos' && finalSelect !== 'All' && (
                                <table className="min-w-full divide-y divide-gray-200 font-formula">
                                    <thead>
                                        <tr>
                                            <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grand Prix</th>
                                            <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
                                            <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Equipe</th>
                                            <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Posição</th>
                                            <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pontos</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredRaces
                                            .filter(race => {
                                                // Verifica se a última fase tem pilotos e se algum piloto tem o ID desejado
                                                const lastPhase = race.phases[race.phases.length - 1];
                                                return lastPhase && lastPhase.pilots.some(pilot => pilot.pilotId === finalSelect);
                                            })
                                            .map((race, index) => {
                                                const lastPhase = race.phases[race.phases.length - 1];
                                                const pilot = lastPhase?.pilots.find(pilot => pilot.pilotId === finalSelect);
                                                const teamName = filteredTeams.find(team => team.id === pilot?.teamId)?.name ?? 'N/A';
                                                const position = pilot?.position ?? 'N/A';
                                                const points = pilot?.points ?? 'N/A'
                                                console.log(points);

                                                return (
                                                    <tr key={race.id} className={index % 2 === 0 ? 'bg-gray-300' : 'bg-white'}>
                                                        <td className="pl-3 py-4 whitespace-nowrap text-xs font-medium text-gray-900">{race.name}</td>
                                                        <td className="pl-3 py-4 whitespace-nowrap text-xs text-gray-900">
                                                            {lastPhase?.dayOfMonth} {lastPhase?.Month}
                                                        </td>
                                                        <td className="pl-3 py-4 whitespace-nowrap text-xs text-gray-900">
                                                            {teamName}
                                                        </td>
                                                        <td className="pl-3 py-4 whitespace-nowrap text-xs text-gray-900">
                                                            {position}
                                                        </td>
                                                        <td className="pl-3 py-4 whitespace-nowrap text-xs text-gray-900">
                                                            {points}
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                    </tbody>
                                </table>
                            )}

                            {/* Times All */}
                            {midSelect === 'Times' && finalSelect === 'All' && (
                                <table className="min-w-full divide-y divide-gray-200 font-formula">
                                    <thead>
                                        <tr>
                                            <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pos</th>
                                            <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                                            <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pontos</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredTeams.map((team, index) => (
                                            <tr key={team.id} className={index % 2 === 0 ? 'bg-gray-300' : 'bg-white'}>
                                                <td className="pl-3 py-4 whitespace-nowrap text-xs font-medium text-gray-900">{team.position}</td>
                                                <td className="pl-3 py-4 whitespace-nowrap text-xs font-medium text-gray-900">{team.name}</td>
                                                <td className="pl-3 py-4 whitespace-nowrap text-xs font-medium text-gray-900">{team.points}</td>
                                            </tr>

                                        ))}
                                    </tbody>
                                </table>
                            )}

                            {/* Pilotos Escolhido */}
                            {midSelect === 'Times' && finalSelect !== 'All' && (
                                <table className="min-w-full divide-y divide-gray-200 font-formula">
                                    <thead>
                                        <tr>
                                            <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grand Prix</th>
                                            <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
                                            <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pontos</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredRaces
                                            .filter(race => {
                                                // Verifica se a corrida tem fases e se a última fase contém pilotos com o teamId correspondente
                                                const lastPhase = race.phases[race.phases.length - 1];
                                                return lastPhase && lastPhase.pilots.some(pilot => pilot.teamId === finalSelect);
                                            })
                                            .map((race, index) => {
                                                const lastPhase = race.phases[race.phases.length - 1];

                                                // Filtra os pilotos com o teamId e calcula a soma dos pontos
                                                const pilots = lastPhase?.pilots.filter(pilot => pilot.teamId === finalSelect);
                                                // console.log("pilots", pilots);

                                                const points = pilots?.reduce((sum, pilot) => sum + (pilot.points || 0), 0);

                                                return (
                                                    <tr key={race.id} className={index % 2 === 0 ? 'bg-gray-300' : 'bg-white'}>
                                                        <td className="pl-3 py-4 whitespace-nowrap text-xs font-medium text-gray-900">{race.name}</td>
                                                        <td className="pl-3 py-4 whitespace-nowrap text-xs text-gray-900">
                                                            {lastPhase?.dayOfMonth} {lastPhase?.Month}
                                                        </td>
                                                        <td className="pl-3 py-4 whitespace-nowrap text-xs text-gray-900">
                                                            {points ?? 'N/A'}
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                    </tbody>
                                </table>
                            )}

                            {/* Fast Time */}
                            {midSelect === 'Fast-Lap' && (
                                <table className="min-w-full divide-y divide-gray-200 font-formula">
                                    <thead>
                                        <tr>
                                            <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grand Prix</th>
                                            <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Piloto</th>
                                            <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                                            <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:table-cell hidden">Tempo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredRaces.map((race, index) => (
                                            <tr key={race.id} className={index % 2 === 0 ? 'bg-gray-300' : 'bg-white'}>
                                                <td className="pl-3 py-4 whitespace-nowrap text-xs font-medium text-gray-900">{race.name}</td>
                                                <td className="pl-3 py-4 whitespace-nowrap text-xs text-gray-900">
                                                    <span className="sm:hidden">
                                                        {filteredDrivers
                                                            .find(driver => driver.id ===
                                                                race.phases[race.phases.length - 1].pilots
                                                                    .reduce((fastestPilot, currentPilot) =>
                                                                        (currentPilot.timeFastLap < (fastestPilot?.timeFastLap || Infinity)) ? currentPilot : fastestPilot,
                                                                        null)?.pilotId
                                                            )?.nameAbreviado ?? 'N/A'}
                                                    </span>
                                                    <span className="hidden sm:flex">
                                                        {filteredDrivers
                                                            .find(driver => driver.id ===
                                                                race.phases[race.phases.length - 1].pilots
                                                                    .reduce((fastestPilot, currentPilot) =>
                                                                        (currentPilot.timeFastLap < (fastestPilot?.timeFastLap || Infinity)) ? currentPilot : fastestPilot,
                                                                        null)?.pilotId
                                                            )?.name ?? 'N/A'}
                                                    </span>
                                                </td>
                                                <td className="pl-3 py-4 whitespace-nowrap text-xs text-gray-900">
                                                    {filteredDrivers
                                                        .find(driver => driver.id ===
                                                            race.phases[race.phases.length - 1].pilots
                                                                .reduce((fastestPilot, currentPilot) =>
                                                                    (currentPilot.timeFastLap < (fastestPilot?.timeFastLap || Infinity)) ? currentPilot : fastestPilot,
                                                                    null)?.pilotId
                                                        )?.team.name ?? 'N/A'}
                                                </td>
                                                <td className="pl-3 py-4 whitespace-nowrap text-xs text-gray-900 md:table-cell hidden">
                                                    {race.phases[race.phases.length - 1].pilots
                                                        .reduce((fastestPilot, currentPilot) =>
                                                            (currentPilot.timeFastLap < (fastestPilot?.timeFastLap || Infinity)) ? currentPilot : fastestPilot,
                                                            null)?.timeFastLap ?? 'N/A'}
                                                </td>
                                            </tr>

                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Results
