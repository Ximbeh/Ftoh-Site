import { useQuery } from "@apollo/client"
import { GET_CIRCUIT } from "../../../queries/getCircuit"
import NewsContainer from "../News/NewsContainer"
import { GET_ALLDRIVERS } from "../../../queries/getAllPilots"
import LoadingPage from '../Boundary/Loading'

const Circuit = (race) => {

    const { loading: circuitLoading, error: circuitError, data: circuitData } = useQuery(GET_CIRCUIT)
    const { loading: driverLoading, error: driverError, data: driverData } = useQuery(GET_ALLDRIVERS)

    if (circuitLoading || driverLoading) return <LoadingPage/>;
    if (circuitError || driverError) return <p>Error: {driverError?.message || newsError?.message}</p>;

    race = race.race

    const filteredCircuit = circuitData.races.filter(circuit => circuit.name == race.name)

    // console.log(filteredCircuit);

    let minDate = null;
    let firstCircuit = null;

    filteredCircuit.forEach(circuit => {
        circuit.calendar.forEach(cal => {
            cal.season.forEach(season => {
                // Verifica se a data é menor que a data mínima atual
                if (minDate === null || season.date < minDate) {
                    minDate = season.date;
                    firstCircuit = circuit;
                }
            });
        });
    });

    // console.log(firstCircuit);

    let minFastLap = null;
    let minFastLapInfo = null;

    filteredCircuit.forEach(circuit => {
        circuit.phases.forEach(phase => {
            phase.pilots.forEach(pilot => {
                // Converte o tempoFastLap para um formato numérico para comparação
                const [minutes, seconds, milliseconds] = pilot.timeFastLap.split(':').map(Number);
                const totalMilliseconds = (minutes * 60 * 1000) + (seconds * 1000) + milliseconds;

                // Verifica se o tempo é menor que o tempo mínimo atual
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

    // console.log(minFastLapInfo);

    // console.log(driverData);
    

    const pilotoNameFast = driverData.drivers.find(driver=>driver.id == minFastLapInfo.pilotId)

    // console.log(pilotoNameFast);
    

    return (
        <div className="px-4 bg-gray-200 pb-10">
            <div className="m-auto max-w-lg md:max-w-5xl lg:max-w-7xl">

                <div className="m-auto max-w-lg md:max-w-5xl lg:max-w-7xl">
                    <h3 className="py-4 font-formula uppercase text-lg lg:text-2xl   lg:py-10">{race.fullName}</h3>
                </div>
                <div className="mt-10 border-t-8 border-r-8 rounded-tr-3xl py-6 pr-4 relative border-red-500">
                    <img className="absolute -top-4 lg:-top-6 left-0 w-20 lg:w-24 bg-gray-200 px-4" src={race.flag ? `../../assets/img/race/${race.flag}` : "https://via.placeholder.com/800x400"} alt="" />
                    <h3 className="font-formula-bold text-lg lg:text-2xl">{race.name}</h3>
                    <img className="mt-2 max-w-3xl mx-auto" src={race.mapDetalhes ? `../../assets/img/maps/${race.mapDetalhes}` : "https://via.placeholder.com/800x400"} alt="" />
                    <div className="mt-4 flex gap-4 flex-col">
                        <div className="flex gap-4 flex-col md:flex-row">
                            <div className="border-b-2 border-r-2 rounded-br-xl border-gray-400 py-2 md:w-full">
                                <div>
                                    <p className="font-formula text-xs">Primeiro Grande Premio</p>
                                    <p className="font-formula-bold text-xl">{firstCircuit.calendar[0].season[0].date}</p>

                                </div>
                            </div>
                            <div className="border-b-2 border-r-2 rounded-br-xl border-gray-400 py-2 md:w-full">
                                <div>
                                    <p className="font-formula text-xs">Números de voltas</p>
                                    <p className="font-formula-bold text-xl">{race.laps}</p>

                                </div>
                            </div>

                        </div>
                        <div className="border-b-2 border-r-2 rounded-br-xl border-gray-400 py-2 flex gap-3">
                            <div>
                                <p className="font-formula text-xs">Recorde</p>
                                <p className="font-formula-bold text-xl">{minFastLapInfo.timeFastLap}</p>
                            </div>
                            <p className="self-end font-formula text-xs mb-1">{pilotoNameFast.name} - {minFastLapInfo.date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Circuit
