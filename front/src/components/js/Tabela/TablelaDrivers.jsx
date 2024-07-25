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

const TabelaDrivers = ({ championshipColorHex }) => {
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

  const filteredDrivers = driversData?.drivers.filter(driver => {
    const team = teamsData?.teams.find(team => team.id === driver.teamId);
    if (team && team.seasonId) {
      const hasSeason = team.seasonId === firstSeason.id;
      return hasSeason;
    }
    return false;
  });

  const topDrivers = filteredDrivers
    ?.sort((a, b) => a.position - b.position)
    .slice(0, 10);

  const driversWithNames = topDrivers.map(driver => {
    const [nome, ...sobrenomeArr] = driver.name.split(' ');
    const sobrenome = sobrenomeArr.join(' ');
    return { ...driver, nome, sobrenome };
  });

  return (
    <div>
      <div className='z-1 relative px-6 bg-gray-200'>
        <div className='max-w-lg mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-5xl'>
          <h1 className='relative font-formula-bold text-white text-3xl w-full text-center justify-center pt-10 pb-28'>Campeonato de drivers</h1>
          <div>
            <div className='bg-white shadow-lg relative w-full h-36 rounded-t-2xl flex items-center md:hidden'>
              <img className="ml-4 w-28 h-28" src={First} />
              <span className='bg-blue-900 absolute w-full h-3 bottom-0'></span>
              <img className="w-72 absolute bottom-0 right-2" src="https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/homepage/driver-standings-component/MAXVER01.png.transform/4col/image.png"></img>
            </div>
            <div className='flex gap-4 items-end'>
              <div className='relative w-4/12 hidden md:flex flex-col'>
                <div className='bg-white relative h-24 rounded-t-2xl flex'>
                  <img className="ml-4 mt-4 w-12 h-12 object-contain" src={Second} />
                  <span className='bg-blue-900 absolute w-full h-2 bottom-0'></span>
                  <img className="w-56 absolute bottom-0 right-2" src="https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/homepage/driver-standings-component/MAXVER01.png.transform/4col/image.png"></img>
                </div>
                <div className='bg-gray-800 h-24 rounded-b-2xl flex text-white flex-col justify-center pl-4'>
                  <div className='flex gap-2 items-center'>
                    {driversWithNames.length > 1 && (
                      <h4 className='font-formula'>{driversWithNames[1].nome}</h4>
                    )}
                    <img className="w-5 h-min rounded-sm" src="https://media.formula1.com/content/dam/fom-website/flags/Netherlands.gif.transform/1col/image.gif" alt="" />
                  </div>
                  {driversWithNames.length > 1 && (
                    <h3 className='text-lg font-formula-bold uppercase'>{driversWithNames[1].sobrenome}</h3>
                  )}
                </div>
              </div>
              <div className='relative w-5/12 hidden md:flex flex-col'>
                <div className='bg-white relative h-32 rounded-t-2xl flex'>
                  <img className="ml-4 mt-4 w-12 h-12" src={First} />
                  <span className='bg-blue-900 absolute w-full h-2 bottom-0'></span>
                  <img className="w-56 absolute bottom-0 right-2" src="https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/homepage/driver-standings-component/MAXVER01.png.transform/4col/image.png"></img>
                </div>
                <div className='bg-gray-800 h-24 rounded-b-2xl flex text-white flex-col justify-center pl-4'>
                  <div className='flex gap-2 items-center'>
                    {driversWithNames.length > 0 && (
                      <h4 className='font-formula'>{driversWithNames[0].nome}</h4>
                    )}
                    <img className="w-5 h-min rounded-sm" src="https://media.formula1.com/content/dam/fom-website/flags/Netherlands.gif.transform/1col/image.gif" alt="" />
                  </div>
                  {driversWithNames.length > 0 && (
                    <h3 className='text-lg font-formula-bold uppercase'>{driversWithNames[0].sobrenome}</h3>
                  )}
                </div>
              </div>
              <div className='relative w-4/12 hidden md:flex flex-col'>
                <div className='bg-white relative h-24 rounded-t-2xl flex'>
                  <img className="ml-4 mt-4 w-12 h-12" src={Third} />
                  <span className='bg-blue-900 absolute w-full h-2 bottom-0'></span>
                  <img className="w-56 absolute bottom-0 right-2" src="https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/homepage/driver-standings-component/MAXVER01.png.transform/4col/image.png"></img>
                </div>
                <div className='bg-gray-800 h-24 rounded-b-2xl flex text-white flex-col justify-center pl-4'>
                  <div className='flex gap-2 items-center'>
                    {driversWithNames.length > 2 && (
                      <h4 className='font-formula'>{driversWithNames[2].nome}</h4>
                    )}
                    <img className="w-5 h-min rounded-sm" src="https://media.formula1.com/content/dam/fom-website/flags/Netherlands.gif.transform/1col/image.gif" alt="" />
                  </div>
                  {driversWithNames.length > 2 && (
                    <h3 className='text-lg font-formula-bold uppercase'>{driversWithNames[2].sobrenome}</h3>
                  )}
                </div>
              </div>
            </div>

            <div className='flex flex-col items-center'>
              {topDrivers.map((driver, index) => (
                <div
                  key={driver.id}
                  className='cursor-pointer w-full gap-2 p-4 bg-white hover:bg-gray-800 transition duration-500 flex justify-between items-center rounded-md mb-2 hover-text-white'
                  style={{ borderColor: championshipColorHex }}
                >
                  <div className='flex items-center font-formula-bold'>
                    <h5 className='mr-2 pr-2 border-r-4' style={{ borderColor: championshipColorHex }}>
                      {index + 1}
                    </h5>
                    {driversWithNames.length > 1 && (
                      <h5 className='hidden md:flex font-formula mr-1'>{driversWithNames[index].nome}</h5>
                    )}
                    {driversWithNames.length > 1 && (
                      <h5 className='uppercase mr-2'>{driversWithNames[index].sobrenome}</h5>
                    )}
                  
                    <p className='hidden md:flex font-titillium text-sm text-gray-600'>{teamsData?.teams.find(team => team.id === driver.teamId)?.name || 'Unknown Team'}</p>
                  </div>
                  <div className='flex items-center'>
                    <p className='bg-gray-300 font-titillium rounded-2xl px-3 py-1'>{driver.points} PTS</p>
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

export default TabelaDrivers; 