import { useQuery } from "@apollo/client";
import { GET_CIRCUIT } from "../../../queries/getCircuit";
import LoadingPage from '../Boundary/Loading';
import { GET_DRIVERCIRCUIT } from "../../../queries/getDriverCircuit";
import { useContext } from "react";
import { ChampionshipContext } from "../../../Context/ChampionshipContext";

const findFirstCircuit = (filteredCircuit) => {
    let minDate = null;
    let firstCircuit = null;

    filteredCircuit.forEach(circuit => {
        circuit.calendar.forEach(cal => {
            cal.season.forEach(season => {
                if (minDate === null || season.date < minDate) {
                    minDate = season.date;
                    firstCircuit = circuit;
                }
            });
        });
    });

    return firstCircuit;
};

const findMinFastLap = (filteredCircuit) => {
    let minFastLap = null;
    let minFastLapInfo = null;

    filteredCircuit.forEach(circuit => {
        circuit.phases.forEach(phase => {
            phase.pilots.forEach(pilot => {
                const [minutes, seconds, milliseconds] = pilot.timeFastLap.split(':').map(Number);
                const totalMilliseconds = (minutes * 60 * 1000) + (seconds * 1000) + milliseconds;

                if (minFastLap === null || totalMilliseconds < minFastLap) {
                    minFastLap = totalMilliseconds;
                    minFastLapInfo = {
                        timeFastLap: pilot.timeFastLap,
                        pilotId: pilot.pilotId,
                        date: circuit.calendar[0].season[0].date
                    };
                }
            });
        });
    });

    return minFastLapInfo;
};

const Circuit = ({ race }) => {
    const { loading: circuitLoading, error: circuitError, data: circuitData } = useQuery(GET_CIRCUIT);
    const { loading: driverLoading, error: driverError, data: driverData } = useQuery(GET_DRIVERCIRCUIT);
    const { selectedChampionship } = useContext(ChampionshipContext);
    if (circuitLoading || driverLoading) return <LoadingPage />;
    if (circuitError || driverError) return <p>Error: {circuitError?.message || driverError?.message}</p>;

    const filteredCircuit = circuitData.races.filter(circuit => circuit.name === race.name);

    const firstCircuit = findFirstCircuit(filteredCircuit);
    const minFastLapInfo = findMinFastLap(filteredCircuit);

    const pilotoNameFast = driverData.drivers.find(driver => driver.id === minFastLapInfo?.pilotId);

    return (
        <div className="px-4 bg-gray-200 pb-10">
            <div className="m-auto max-w-lg md:max-w-5xl lg:max-w-7xl">
                <div className="m-auto max-w-lg md:max-w-5xl lg:max-w-7xl">
                    <h3 className="py-4 font-formula uppercase text-lg lg:text-2xl lg:py-10">{race.fullName}</h3>
                </div>
                <div className="mt-10 border-t-8 border-r-8 rounded-tr-3xl py-6 pr-4 relative" style={{borderColor:selectedChampionship.color}}>
                    <img
                        className="absolute -top-4 lg:-top-6 left-0 w-20 lg:w-24 bg-gray-200 px-4"
                        src={race.flag ? `/img/race/${race.flag}` : "https://via.placeholder.com/800x400"}
                        alt={`${race.name} flag`}
                    />
                    <h3 className="font-formula-bold text-lg lg:text-2xl">{race.name}</h3>
                    <img
                        className="w-full mt-2 max-w-3xl mx-auto"
                        src={race.mapDetalhes ? `/img/maps/${race.mapDetalhes}` : "https://via.placeholder.com/800x400"}
                        alt={`${race.name} map`}
                    />
                    <div className="mt-4 flex gap-4 flex-col">
                        <div className="flex gap-4 flex-col md:flex-row">
                            <div className="border-b-2 border-r-2 rounded-br-xl border-gray-400 py-2 md:w-full">
                                <div>
                                    <p className="font-formula text-xs">Primeiro Grande Premio</p>
                                    <p className="font-formula-bold text-xl">{firstCircuit?.calendar[0].season[0].date || 'N/A'}</p>
                                </div>
                            </div>
                            <div className="border-b-2 border-r-2 rounded-br-xl border-gray-400 py-2 md:w-full">
                                <div>
                                    <p className="font-formula text-xs">Número de voltas</p>
                                    <p className="font-formula-bold text-xl">{race.laps}</p>
                                </div>
                            </div>
                        </div>
                        <div className="border-b-2 border-r-2 rounded-br-xl border-gray-400 py-2 flex gap-3">
                            <div>
                                <p className="font-formula text-xs">Recorde</p>
                                <p className="font-formula-bold text-xl">{minFastLapInfo?.timeFastLap || 'N/A'}</p>
                            </div>
                            <p className="self-end font-formula text-xs mb-1">
                                {pilotoNameFast?.name || 'N/A'} - {minFastLapInfo?.date || 'N/A'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Circuit;
