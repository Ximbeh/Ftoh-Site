import '../../css/Tabela.css';
import { ChevronRight } from 'lucide-react';
import { useContext } from 'react';
import { ChampionshipContext } from '../../../Context/ChampionshipContext';
import { useQuery } from '@apollo/client';
import { GET_CHAMPIONSHIPS } from '../../../queries/getChampionship';
import { GET_TABELALAST } from '../../../queries/getTabelaLastRace';
import LoadingPage from '../Boundary/Loading';
import { useNavigate } from 'react-router-dom';

const TabelaLastRace = () => {
  const navigate = useNavigate();
  const { selectedChampionship, selectedSeason } = useContext(ChampionshipContext);

  const { loading: tabelaLoading, error: tabelaError, data: tabelaData } = useQuery(GET_TABELALAST);
  const { loading: championshipsLoading, error: championshipsError, data: championshipsData } = useQuery(GET_CHAMPIONSHIPS);

  if (championshipsLoading || tabelaLoading) return <LoadingPage />;
  if (championshipsError || tabelaError) return <p>Error: {championshipsError?.message || tabelaError?.message}</p>;

  const championshipId = selectedChampionship?.id;
  const championship = championshipsData?.championships.find(champ => champ.id === championshipId);

  if (!championship) return <p>Campeonato não encontrado</p>;

  const filteredSeason = selectedSeason.find(season => season.seasonId === championship.seasons.find(s => s.date === selectedSeason[0].date)?.seasonId);


  
  
  if (!filteredSeason) return <p>Temporada não encontrada</p>;

  const createDateFromFormat = (dateStr, monthStr) => {
   
    const monthMap = {
      Jan: 0, Feb: 1, Mar: 2, Apr: 3, Mai: 4, Jun: 5,
      Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dez: 11
    };

    const monthIndex = monthMap[monthStr];
    if (monthIndex === undefined) {
      // console.error(`Mês inválido: ${monthStr}`);
      return new Date(NaN);
    }
    const [day] = dateStr.split(' ');
    const dayNumber = parseInt(day, 10);
    if (isNaN(dayNumber)) {
      // console.error(`Dia inválido: ${day}`);
      return new Date(NaN);
    }
    // Criar e retornar a data
    return new Date(2024, monthIndex, dayNumber);
  };

const findLatestRace = (races) => {
  const seasonIds = selectedSeason.map(season =>
    championship.seasons.find(s => s.date === season.date)?.seasonId
  ).filter(seasonId => seasonId);

  const finishedRaces = races.filter(race =>
    race.finished &&
    race.calendar.some(calendar =>
      calendar.season.some(season => seasonIds.includes(season.seasonId))
    )
  );


  return finishedRaces.reduce((latest, race) => {

    const latestPhase = race.phases.reduce((latestPhase, phase) => {
      const phaseDate = createDateFromFormat(phase.dayOfMonth, phase.Month);
      const latestPhaseDate = createDateFromFormat(latestPhase.dayOfMonth, latestPhase.Month);
      // console.log(`Comparing Phase Date: ${phaseDate} with Latest Phase Date: ${latestPhaseDate}`);
      return phaseDate > latestPhaseDate ? phase : latestPhase;
    }, { Month: 'Jan', dayOfMonth: '01' });

    const latestDate = createDateFromFormat(latestPhase.dayOfMonth, latestPhase.Month);
    const currentLatestDate = createDateFromFormat(latest?.phases?.[0]?.dayOfMonth || '01', latest?.phases?.[0]?.Month || 'Jan');

    // console.log(`Latest Date: ${latestDate} Current Latest Date: ${currentLatestDate}`);

    return latestDate > currentLatestDate ? race : latest;
  }, null);
};

  
  const lastRace = findLatestRace(tabelaData.races);
  if (!lastRace) return <p className='my-10 text-center'>A temporada não teve nenhuma corrida ainda!</p>;
 

  const lastPhase = lastRace.phases?.slice(-1)[0];

  const pilotsPositions = lastPhase.pilots
    .map(pilot => {
      const driverInfo = tabelaData?.drivers.find(driver => driver.id === pilot.pilotId);
      const team = tabelaData?.teams.find(t => t.id === driverInfo?.teamId);
      const [nome, ...sobrenomeArr] = driverInfo?.name.split(' ') || [];
      const sobrenome = sobrenomeArr.join(' ') || '';
      return {
        ...pilot,
        driverInfo: {
          ...driverInfo,
          nome,
          sobrenome,
          teamColor: team?.color || 'gray',
          teamName: team?.name || 'Unknown Team'
        }
      };
    })
    .filter(pilot => pilot.driverInfo)
    .sort((a, b) => a.position - b.position)
    .slice(0, 10);

  const handleButtonClick = () => {
    navigate('/Results', {
      state: {
        temporarySeason: selectedSeason[0].seasonId,
        midSelect: 'Corridas',
        finalSelect: lastRace.id,
      }
    });
  };

  const handleNavigatePilot = (driver) => {
    navigate(`Pilots/Pilot/${driver.id}`);
  };

  const handleNavigateRace = (race) => {
    navigate(`Calendar/Race/${race.id}`);
  };

  return (
    <div>
      <div className='z-1 relative px-6 bg-gray-200'>
        <div className='max-w-lg mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-5xl'>
          <h1 className='relative font-formula-bold text-white text-6xl w-full text-center pt-10 uppercase'>{lastRace.name}</h1>
          <h2 className='text-stroke relative font-formula-bold text-transparent text-5xl w-full text-center pt-2 uppercase'>{filteredSeason.date}</h2>
          <div onClick={() => handleNavigateRace(lastRace)} className='cursor-pointer flex font-formula w-full text-center justify-center pt-4 pb-6'>
            <p className='mt-0.5 text-white text-sm uppercase'>{lastRace.fullName}</p>
            <ChevronRight className="chevron-right" style={{ color: selectedChampionship.color }} />
          </div>
          <div>
            <div className='flex flex-col items-center bg-gray-200 p-3 rounded-lg'>
              {pilotsPositions.map(pilot => (
                <div
                  key={pilot.driverInfo.id}
                  onClick={() => handleNavigatePilot(pilot.driverInfo)}
                  className='cursor-pointer w-full gap-2 p-4 bg-white hover:bg-grayTotal transition duration-500 flex justify-between items-center rounded-md mb-2 hover-text-white'
                  style={{ borderColor: pilot.driverInfo.teamColor }}>
                  <div className='flex items-center font-formula-bold'>
                    <h5 className='mr-2 pr-2 border-r-4' style={{ borderColor: pilot.driverInfo.teamColor }}>{pilot.position}</h5>
                    <h5 className='hidden md:flex font-formula mr-1'>{pilot.driverInfo.nome}</h5>
                    <h5 className='hidden sm:flex uppercase mr-2'>{pilot.driverInfo.sobrenome}</h5>
                    <h5 className='sm:hidden font-formula mr-1'>{pilot.driverInfo.nameAbreviado}</h5>
                    <p className='hidden md:flex font-titillium text-sm text-gray-600'>{pilot.driverInfo.teamName}</p>
                  </div>
                  <div className='flex items-center'>
                    <p className='bg-gray-300 font-titillium rounded-2xl px-3 py-1 text-center'>{pilot.points} PTS</p>
                    <ChevronRight className="chevron-right" style={{ color: selectedChampionship.color }} />
                  </div>
                </div>
              ))}
              <button onClick={handleButtonClick} className='tabela-completa-btn md:max-w-max md:px-4 w-full text-sm font-formula-bold py-4 mt-4 mb-10 rounded-lg uppercase border-2' style={{ '--championship-color': selectedChampionship.color }}>
                <span className='tabela-completa-btn-text' style={{ '--championship-color': selectedChampionship.color }}>Resultado da Corrida</span>
              </button>
            </div>
          </div>
        </div>
        <img className="z-m1 bg-g absolute w-full h-72 left-0 top-0 " src="https://www.formula1.com/etc/designs/fom-website/images/homepage/standings/bg.jpg" alt="" />
      </div>
    </div>
  );
}

export default TabelaLastRace;
