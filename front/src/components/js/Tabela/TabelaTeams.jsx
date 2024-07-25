import '../../css/Tabela.css';
import { ChevronRight } from 'lucide-react';
import First from '../../../assets/First.svg';
import Second from '../../../assets/Second.png';
import Third from '../../../assets/Third.svg';
import { useContext } from 'react';
import { ChampionshipContext } from '../../../Context/ChampionshipContext';
import { GET_CHAMPIONSHIPS } from '../../../queries/getChampionship';
import { useQuery } from '@apollo/client';
import { GET_ALLDRIVERS } from '../../../queries/getAllPilots';
import { GET_ALLTEAMS } from '../../../queries/getAllTeams';

const TabelaTeams = ({ championshipColorHex }) => {
  const { selectedChampionship } = useContext(ChampionshipContext);

  const { loading: championshipsLoading, error: championshipsError, data: championshipsData } = useQuery(GET_CHAMPIONSHIPS);
  const { loading: driversLoading, error: driversError, data: driversData } = useQuery(GET_ALLDRIVERS);
  const { loading: teamsLoading, error: teamsError, data: teamsData } = useQuery(GET_ALLTEAMS);

  if (championshipsLoading || driversLoading || teamsLoading) return <p>Loading....</p>;
  if (championshipsError || driversError || teamsError) return <p>Error: {championshipsError?.message || driversError?.message || teamsError?.message}</p>;

  const championshipId = selectedChampionship?.id;
  const championship = championshipsData?.championships.find(champ => champ.id === championshipId);

  if (!championship) return <p>Campeonato não encontrado</p>;

  const firstSeason = championship?.seasons?.[0];

  if (!firstSeason) return <p>Temporada não encontrada</p>;

  const filteredTeams = teamsData?.teams.filter(team => {
    if (team && team.seasonId) {
      const hasSeason = team.seasonId === firstSeason.id;
      return hasSeason;
    }
    return false;
  });

  const topTeams = filteredTeams
    ?.sort((a, b) => a.position - b.position)
    .slice(0, 10);

  const teamDetails = topTeams.map(team => {
    // Find drivers associated with the team
    const teamDrivers = driversData?.drivers.filter(driver => driver.teamId === team.id);
    const driverNames = teamDrivers?.map(driver => {
      const [, ...sobrenomeArr] = driver.name.split(' ');
      return sobrenomeArr.join(' ');
    });

    return { ...team, driverNames };
  });

  return (
    <div>
      <div className='z-1 relative px-6 bg-gray-200'>
        <div className='max-w-lg mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-5xl'>
          <h1 className='relative font-formula-bold text-white text-3xl w-full text-center justify-center pt-10 pb-28'>Campeonato de Construtores</h1>
          <div>
            <div className='py-4 flex flex-col bg-white shadow-lg relative w-full rounded-t-2xl flex items-center md:hidden'>
              <img className="w-48" src="https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/team%20logos/red%20bull.jpg.transform/2col/image.jpg"></img>
              <img className="w-22 h-22" src={First} />
              <img className="w-72" src="https://media.formula1.com/content/dam/fom-website/teams/2023/teamcar-redbull.png.transform/3col/image.png"></img>
              <span className='bg-blue-900 absolute w-full h-3 bottom-0'></span>
            </div>
            <div className='flex gap-8 items-end'>
              <div className='relative w-4/12 hidden md:flex flex-col'>
                <div className='flex items-center flex-col bg-white relative rounded-t-2xl flex p-4 mb-6'>
                  <img className="w-48" src="https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/team%20logos/red%20bull.jpg.transform/2col/image.jpg"></img>
                  <img className="w-24 mb-10" src={Second} />
                  <img className="w-60 lg:w-72 max-w-none absolute -bottom-4 -left-6 lg:-left-4 xl:left-2" src="https://media.formula1.com/content/dam/fom-website/teams/2023/teamcar-redbull.png.transform/3col/image.png"></img>
                </div>
              </div>
              <div className='relative w-5/12 hidden md:flex flex-col'>
                <div className='flex items-center flex-col bg-white relative rounded-t-2xl flex p-4 mb-6'>
                  <img className="w-64" src="https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/team%20logos/red%20bull.jpg.transform/2col/image.jpg"></img>
                  <img className="w-24 mb-10" src={First} />
                  <img className="w-72 lg:w-80 max-w-none absolute -bottom-4 -left-5 lg:left-0 xl:left-6" src="https://media.formula1.com/content/dam/fom-website/teams/2023/teamcar-redbull.png.transform/3col/image.png"></img>
                </div>
              </div>
              <div className='relative w-4/12 hidden md:flex flex-col'>
                <div className='flex items-center flex-col bg-white relative rounded-t-2xl flex p-4 mb-6'>
                  <img className="w-48" src="https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/team%20logos/red%20bull.jpg.transform/2col/image.jpg"></img>
                  <img className="w-24 mb-10" src={Third} />
                  <img className="w-60 lg:w-72 max-w-none absolute -bottom-4 -left-6 lg:-left-4 xl:left-2" src="https://media.formula1.com/content/dam/fom-website/teams/2023/teamcar-redbull.png.transform/3col/image.png"></img>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center'>
              {teamDetails.map((team, index) => (
                <div key={team.id} className='cursor-pointer w-full gap-2 p-4 bg-white hover:bg-gray-800 transition duration-500 flex justify-between items-center rounded-md mb-2 hover-text-white'>
                  <div className='flex items-center font-formula-bold'>
                    <h5 className='mr-2 pr-2 border-r-4 border-blue-900'>{team.position}</h5>
                    <h5 className='uppercase mr-2'>{team.name}</h5>
                    <p className='hidden md:flex font-titillium text-sm text-gray-600'>{team.driverNames?.join(' / ')}</p>
                  </div>
                  <div className='flex items-center'>
                    <img className="w-28 mr-4 lg:w-40" src={team.imageUrl || "https://media.formula1.com/content/dam/fom-website/teams/2023/teamcar-redbull.png.transform/3col/image.png"}></img>
                    <p className='bg-gray-300 font-titillium rounded-2xl px-3 py-1 text-center'>{team.points} PTS</p>
                    <ChevronRight className="chevron-right" style={{ color: championshipColorHex }} />
                  </div>
                </div>
              ))}
              <button className='tabela-completa-btn md:max-w-max md:px-4 w-full text-sm font-formula-bold py-4 mt-4 mb-10 rounded-lg uppercase border-2' style={{ '--championship-color': championshipColorHex }}>
                <span className='tabela-completa-btn-text' style={{ '--championship-color': championshipColorHex }}>Tabela Completa</span>
              </button>
            </div>
          </div>
        </div>
        <img className="z-m1 bg-g absolute w-full h-72 left-0 top-0 " src="https://www.formula1.com/etc/designs/fom-website/images/homepage/standings/bg.jpg" alt="" />
      </div>
    </div>
  );
};

export default TabelaTeams;
