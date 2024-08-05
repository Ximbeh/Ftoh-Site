import '../../css/Tabela.css';
import { ChevronRight } from 'lucide-react';
import { useContext } from 'react';
import { ChampionshipContext } from '../../../Context/ChampionshipContext';
import { GET_CHAMPIONSHIPS } from '../../../queries/getChampionship';
import { useQuery } from '@apollo/client';
import { GET_ALLDRIVERS } from '../../../queries/getAllPilots';
import { GET_ALLTEAMS } from '../../../queries/getAllTeams';
import { GET_ALLRACES } from '../../../queries/getAllRaces';
import LoadingPage from '../Boundary/Loading';
import { useNavigate } from 'react-router-dom';

const TabelaLastRace = () => {
  const navigate = useNavigate();
  const { selectedChampionship, selectedSeason } = useContext(ChampionshipContext);

  const { loading: championshipsLoading, error: championshipsError, data: championshipsData } = useQuery(GET_CHAMPIONSHIPS);
  const { loading: driversLoading, error: driversError, data: driversData } = useQuery(GET_ALLDRIVERS);
  const { loading: teamsLoading, error: teamsError, data: teamsData } = useQuery(GET_ALLTEAMS);
  const { loading: racesLoading, error: racesError, data: racesData } = useQuery(GET_ALLRACES);

  if (championshipsLoading || driversLoading || teamsLoading || racesLoading) return <LoadingPage />;
  if (championshipsError || driversError || teamsError || racesError) return <p>Error: {championshipsError?.message || driversError?.message || teamsError?.message}</p>;

  const championshipId = selectedChampionship?.id;
  const championship = championshipsData?.championships.find(champ => champ.id === championshipId);

  if (!championship) return <p>Campeonato não encontrado</p>;

  const season = selectedSeason.find(season => season.seasonId === championship.seasons.find(season => season.date === selectedSeason[0].date)?.seasonId);

  if (!season) return <p>Temporada não encontrada</p>;

  const findLatestRace = (races) => {
    // Função auxiliar para converter o formato de data para um objeto Date
    const createDateFromFormat = (dateStr, monthStr) => {
      const monthMap = {
        'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'Mai': 4, 'Jun': 5,
        'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dez': 11
      };
      const [day] = dateStr.split(' ');
      return new Date(2024, monthMap[monthStr], parseInt(day, 10));
    };

    // Filtrar as corridas que foram finalizadas
    const finishedRaces = races.filter(race => race.finished);

    if (finishedRaces.length === 0) return null;

    // Encontrar a fase mais distante do fim do ano
    const latestRace = finishedRaces.reduce((latest, race) => {
      // Obter a fase mais recente
      const latestPhase = race.phases.reduce((latestPhase, phase) => {
        const phaseDate = createDateFromFormat(phase.dayOfMonth, phase.Month);
        const latestPhaseDate = createDateFromFormat(latestPhase.dayOfMonth, latestPhase.Month);

        // console.log('Comparando:', phaseDate, 'com', latestPhaseDate); // Log para depuração

        return phaseDate > latestPhaseDate ? phase : latestPhase;
      }, { Month: 'Jan', dayOfMonth: '01' });

      // console.log('Fase mais recente da corrida atual:', latestPhase); // Log para depuração

      // Compare com a fase mais distante atual
      const latestDate = createDateFromFormat(latestPhase.dayOfMonth, latestPhase.Month);
      const currentLatestDate = createDateFromFormat(latest?.phases?.[0]?.dayOfMonth || '01', latest?.phases?.[0]?.Month || 'Jan');

      // console.log('Comparando datas:', latestDate, 'com', currentLatestDate); // Log para depuração

      return latestDate > currentLatestDate ? race : latest;
    }, null);

    return latestRace;
  };

  // Exemplo de uso
  const lastRace = findLatestRace(racesData.races);
  if (!lastRace) return <p>Última corrida não encontrada</p>;



  const lastPhase = lastRace.phases?.slice(-1)[0];

  // Mapear pilotos da última fase e incluir informações dos pilotos
  const pilotsPositions = lastPhase.pilots
    .map(pilot => {
      const driverInfo = driversData?.drivers.find(driver => driver.id === pilot.pilotId);
      const team = teamsData?.teams.find(t => t.id === driverInfo?.teamId);
      const [nome, ...sobrenomeArr] = driverInfo?.name.split(' ') || [];
      const sobrenome = sobrenomeArr.join(' ') || '';
      const teamColor = team?.color || 'gray';
      const teamName = team?.name || 'Unknown Team';
      return {
        ...pilot,
        driverInfo: {
          ...driverInfo,
          nome,
          sobrenome,
          teamColor,
          teamName
        }
      };
    })
    .filter(pilot => pilot.driverInfo) // Certificar-se de incluir apenas pilotos com informações
    .sort((a, b) => a.position - b.position) // Ordenar por posição
    .slice(0, 10); // Limitar aos 10 primeiros


  const handleButtonClick = () => {
    navigate('/Results', {
      state: {
        temporarySeason: selectedSeason[0].seasonId,
        midSelect: 'Corridas',
        finalSelect: lastRace.id, // substitua com a lógica para obter o ID da corrida
      }
    });
  };

  

  return (
    <div>
      <div className='z-1 relative px-6 bg-gray-200'>
        <div className='max-w-lg mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-5xl'>
          <h1 className='relative font-formula-bold text-white text-6xl w-full text-center justify-center pt-10 uppercase'>{lastRace.name}</h1>
          <h2 className='text-stroke relative font-formula-bold text-transparent text-5xl w-full text-center justify-center pt-2 uppercase'>{season.date}</h2>
          <div className='cursor-pointer flex relative font-formula w-full text-center justify-center pt-4 pb-6'>
            <p className='mt-0.5 text-white text-sm uppercase'>{lastRace.fullName}</p>
            <ChevronRight className="chevron-right" style={{ color: selectedChampionship.color }} />
          </div>
          <div>
            <div className='flex flex-col items-center bg-gray-200 p-3 rounded-lg'>
              {pilotsPositions.map(pilot => {
                const { driverInfo } = pilot;
                return (
                  <div
                    key={driverInfo.id}
                    className='cursor-pointer w-full gap-2 p-4 bg-white hover:bg-grayTotal transition duration-500 flex justify-between items-center rounded-md mb-2 hover-text-white'
                    style={{ borderColor: driverInfo.teamColor }}>
                    <div className='flex items-center font-formula-bold'>
                      <h5 className='mr-2 pr-2 border-r-4' style={{ borderColor: driverInfo.teamColor }}>{pilot.position}</h5>
                      <h5 className='hidden md:flex font-formula mr-1'>{driverInfo.nome}</h5>
                      <h5 className='hidden sm:flex uppercase mr-2'>{driverInfo.sobrenome}</h5>
                      <h5 className='sm:flex font-formula mr-1'>{driverInfo.nameAbreviado}</h5>
                      <p className='hidden md:flex font-titillium text-sm text-gray-600'>{driverInfo.teamName}</p>
                    </div>
                    <div className='flex items-center'>
                      <p className='bg-gray-300 font-titillium rounded-2xl px-3 py-1 text-center'>{pilot.points} PTS</p>
                      <ChevronRight className="chevron-right" style={{ color: selectedChampionship.color }} />
                    </div>
                  </div>
                );
              })}
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