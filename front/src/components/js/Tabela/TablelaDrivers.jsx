import '../../css/Tabela.css';
import { ChevronRight } from 'lucide-react';
import First from '../../../assets/First.svg';
import Second from '../../../assets/Second.svg';
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
    return team && team.seasonId === firstSeason.id;
  });

  const topDrivers = filteredDrivers
    ?.sort((a, b) => a.position - b.position)
    .slice(0, 10);

  const driversInfo = topDrivers.map(driver => {
    const team = teamsData?.teams.find(team => team.id === driver.teamId);
    const [nome, ...sobrenomeArr] = driver.name.split(' ');
    const sobrenome = sobrenomeArr.join(' ');
    const teamColor = team?.color || 'gray'; // Default color if team color is not available
    return { ...driver, nome, sobrenome, teamColor };
  });

  // console.log(driversInfo);

  return (
    <div>
      <div className='z-1 relative px-6 bg-gray-200'>
        <div className='max-w-lg mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-5xl'>
          <img className="z-m1 bg-g absolute w-full h-72 left-0 top-0 " src="https://www.formula1.com/etc/designs/fom-website/images/homepage/standings/bg.jpg" alt="" />
          <h1 className='relative font-formula-bold text-white text-3xl w-full text-center justify-center pt-10 pb-28'>Campeonato de pilotos</h1>
          <div>
            <div className='bg-white shadow-lg relative w-full h-36 rounded-t-2xl flex items-center md:hidden'>
              <svg className="ml-4 mt-4 w-12 h-12" width="93" height="24" viewBox="0 0 93 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1_642_14" fill="white">
                  <path d="M69 24H46C61.6667 16 74.4 0 0 0H93L69 24Z" />
                </mask>
                <path d="M46 24L14.1656 -38.3424L46 94V24ZM69 24V94H97.9949L118.497 73.4975L69 24ZM93 0L142.497 49.4975L261.995 -70L93 -70V0ZM46 94H69V-46H46V94ZM118.497 73.4975L142.497 49.4975L43.5025 -49.4975L19.5025 -25.4975L118.497 73.4975ZM93 -70H0V70H93V-70ZM0 70C16.7518 70 25.2193 70.9491 28.3723 71.5169C29.9372 71.7987 28.1954 71.6433 24.6675 70.1868C21.8241 69.0128 12.0386 64.6817 2.95542 53.7599C-8.07178 40.5008 -14.245 21.8904 -11.2471 2.30117C-8.74291 -14.062 -0.849738 -24.4679 2.57995 -28.4972C6.45702 -33.0521 9.89654 -35.5909 11.1702 -36.4911C12.7084 -37.5783 13.7633 -38.137 14.1656 -38.3424L77.8344 86.3424C84.8039 82.7835 98.124 75.2464 109.189 62.2472C114.853 55.5929 124.231 42.4995 127.142 23.4801C130.546 1.23458 123.701 -20.0008 110.595 -35.7599C99.4322 -49.1817 86.1603 -55.8878 78.0942 -59.218C69.3437 -62.8308 60.6431 -64.9237 53.1839 -66.2669C38.289 -68.9491 20.4482 -70 0 -70V70Z" fill={(driversInfo[0] && driversInfo[0].teamColor) || 'gray'} mask="url(#path-1-inside-1_642_14)" />
              </svg>
              <span
                className='absolute w-full h-3 bottom-0'
                style={{ backgroundColor: (driversInfo[0] && driversInfo[0].teamColor) || 'gray' }}
              ></span>
              <img className="w-72 absolute bottom-0 right-2"
                src={driversInfo[0].photo ? `../../../../img/drivers/${driversInfo[0].photo}` : "../../../../img/drivers/default.png"}></img>
            </div>
            <div className='flex gap-4 items-end'>
              <div className='relative w-4/12 hidden md:flex flex-col'>
                <div className='bg-white relative h-24 rounded-t-2xl flex'>
                  <svg className="ml-4 mt-4 w-12 h-12 object-contain" width="87" height="25" viewBox="0 0 87 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="path-1-inside-1_653_17" fill="white">
                      <path d="M13 24C26.3333 16.3333 42.4 1 0 1H59L35 24H13Z" />
                      <path d="M64 0H65H87L62 25H39L64 0Z" />
                    </mask>
                    <path d="M13 24L0.0397506 1.46044L-84.3769 50L13 50V24ZM35 24V50H45.447L52.9895 42.7717L35 24ZM59 1L76.9895 19.7717L123.708 -25L59 -25V1ZM64 0V-26H53.2304L45.6152 -18.3848L64 0ZM39 25L20.6152 6.61522L-23.7696 51H39V25ZM62 25V51H72.7696L80.3848 43.3848L62 25ZM87 0L105.385 18.3848L149.77 -26H87V0ZM0 27C9.80063 27 13.008 27.9869 12.8445 27.9269C12.6463 27.8542 9.64078 26.7803 6.60522 23.2741C2.93812 19.0386 1.02308 13.2982 1.4828 7.55162C1.86589 2.76308 3.73938 -0.237707 4.28158 -1.05233C4.93183 -2.02931 5.31146 -2.29435 4.8982 -1.91198C4.06303 -1.1392 2.31653 0.151289 0.0397506 1.46044L25.9602 46.5396C30.3501 44.0154 35.612 40.5142 40.2143 36.2557C42.5198 34.1225 45.2255 31.2819 47.57 27.7594C49.8064 24.3992 52.7424 18.8828 53.3172 11.6984C53.9686 3.55597 51.3744 -4.46044 45.9182 -10.7624C41.0936 -16.335 35.1891 -19.2657 30.743 -20.8957C22.0836 -24.0702 11.3994 -25 0 -25V27ZM13 50H35V-2H13V50ZM52.9895 42.7717L76.9895 19.7717L41.0105 -17.7717L17.0105 5.22831L52.9895 42.7717ZM59 -25H0V27H59V-25ZM65 -26H64V26H65V-26ZM45.6152 -18.3848L20.6152 6.61522L57.3848 43.3848L82.3848 18.3848L45.6152 -18.3848ZM39 51H62V-1H39V51ZM80.3848 43.3848L105.385 18.3848L68.6152 -18.3848L43.6152 6.61522L80.3848 43.3848ZM87 -26H65V26H87V-26Z" fill={(driversInfo[1] && driversInfo[1].teamColor) || 'gray'} mask="url(#path-1-inside-1_653_17)" />
                  </svg>
                  <span className='absolute w-full h-2 bottom-0' style={{ backgroundColor: (driversInfo[1] && driversInfo[1].teamColor) || 'gray' }}></span>
                  <img className="w-40 absolute bottom-0 right-2" src={driversInfo[1].photo ? `../../../../img/drivers/${driversInfo[1].photo}` : "../../../../img/drivers/default.png"}></img>
                </div>
                <div className='bg-gray-800 h-24 rounded-b-2xl flex text-white flex-col justify-center pl-4'>
                  <div className='flex gap-2 items-center'>
                    {driversInfo.length > 1 && (
                      <h4 className='font-formula'>{driversInfo[1].nome}</h4>
                    )}
                    <img className="w-5 h-min rounded-sm" src={driversInfo[1].flag ? `../../../../img/race/${driversInfo[1].flag}` : "https://via.placeholder.com/800x400"} alt="" />
                  </div>
                  {driversInfo.length > 1 && (
                    <h3 className='text-lg font-formula-bold uppercase'>{driversInfo[1].sobrenome}</h3>
                  )}
                </div>
              </div>
              <div className='relative w-5/12 hidden md:flex flex-col'>
                <div className='bg-white relative h-32 rounded-t-2xl flex'>
                  <svg className="ml-4 mt-4 w-12 h-12" width="92" height="24" viewBox="0 0 92 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="path-1-inside-1_660_7" fill="white">
                      <path d="M44.5 23.5C60.1667 15.8333 73.3 0.5 0.5 0.5H91.5L67.5 23.5H44.5Z" />
                    </mask>
                    <path d="M44.5 23.5L14.6104 -37.5787L44.5 91.5V23.5ZM67.5 23.5V91.5H94.8228L114.55 72.5952L67.5 23.5ZM91.5 0.5L138.55 49.5952L260.736 -67.5H91.5V0.5ZM0.5 68.5C16.9655 68.5 25.2847 69.4142 28.3906 69.9663C29.9469 70.2429 28.1867 70.0883 24.6589 68.636C21.8949 67.4981 11.8256 63.092 2.71099 51.7725C-8.5485 37.7894 -13.854 18.6616 -10.0187 -0.495504C-6.88672 -16.1392 1.12077 -25.7459 4.25487 -29.1784C7.93971 -33.2142 11.0991 -35.4131 12.1734 -36.1348C13.5058 -37.0299 14.363 -37.4577 14.6104 -37.5787L74.3896 84.5787C81.1421 81.2743 93.8674 74.3743 104.689 62.5222C110.12 56.574 119.693 44.3918 123.335 26.2025C127.68 4.49983 121.828 -17.1435 108.639 -33.5225C97.5952 -47.2379 84.2145 -53.92 76.431 -57.1243C67.8836 -60.643 59.3958 -62.6544 52.1907 -63.935C37.7736 -66.4976 20.4345 -67.5 0.5 -67.5V68.5ZM44.5 91.5H67.5V-44.5H44.5V91.5ZM114.55 72.5952L138.55 49.5952L44.4504 -48.5952L20.4504 -25.5952L114.55 72.5952ZM91.5 -67.5H0.5V68.5H91.5V-67.5Z" fill={(driversInfo[0] && driversInfo[0].teamColor) || 'gray'} mask="url(#path-1-inside-1_660_7)" />
                  </svg>
                  <span className='absolute w-full h-2 bottom-0' style={{ backgroundColor: (driversInfo[0] && driversInfo[0].teamColor) || 'gray' }}></span>
                  <img className="w-56 absolute bottom-0 right-2" src={driversInfo[0].photo ? `../../../../img/drivers/${driversInfo[0].photo}` : "../../../../img/drivers/default.png"}></img>
                </div>
                <div className='bg-gray-800 h-24 rounded-b-2xl flex text-white flex-col justify-center pl-4'>
                  <div className='flex gap-2 items-center'>
                    {driversInfo.length > 0 && (
                      <h4 className='font-formula'>{driversInfo[0].nome}</h4>
                    )}
                    <img className="w-5 h-min rounded-sm" src={driversInfo[0].flag ? `../../../../img/race/${driversInfo[0].flag}` : "https://via.placeholder.com/800x400"} alt="" />
                  </div>
                  {driversInfo.length > 0 && (
                    <h3 className='text-lg font-formula-bold uppercase'>{driversInfo[0].sobrenome}</h3>
                  )}
                </div>
              </div>
              <div className='relative w-4/12 hidden md:flex flex-col'>
                <div className='bg-white relative h-24 rounded-t-2xl flex'>
                  <svg className="ml-4 mt-4 w-12 h-12" width="102" height="26" viewBox="0 0 102 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="path-1-inside-1_642_20" fill="white">
                      <path d="M102 0H79L53 26L76 25.5L102 0Z" />
                      <path d="M74 1H51L27 25H49L74 1Z" />
                      <path d="M46 1L22 25H0.5C13 17 31.2 1 4 1H46Z" />
                    </mask>
                    <path d="M0 49.5H0.5V0.5H0V49.5ZM79 0V-49H58.7035L44.3518 -34.6482L79 0ZM102 0L136.31 34.983L221.94 -49L102 -49V0ZM76 25.5L77.065 74.4884L96.4601 74.0668L110.31 60.483L76 25.5ZM53 26L18.3518 -8.64823L-67.9371 77.6406L54.065 74.9884L53 26ZM51 1V-48H30.7035L16.3518 -33.6482L51 1ZM74 1L107.934 36.348L195.797 -48H74V1ZM49 25V74H68.7132L82.9341 60.348L49 25ZM27 25L-7.64823 -9.64823L-91.2965 74H27V25ZM22 25V74H42.2965L56.6482 59.6482L22 25ZM46 1L80.6482 35.6482L164.296 -48L46 -48V1ZM0.5 25L-25.9136 -16.2713L-166.963 74H0.5V25ZM79 49H102V-49H79V49ZM67.6898 -34.983L41.6898 -9.48297L110.31 60.483L136.31 34.983L67.6898 -34.983ZM74.935 -23.4884L51.935 -22.9884L54.065 74.9884L77.065 74.4884L74.935 -23.4884ZM87.6482 60.6482L113.648 34.6482L44.3518 -34.6482L18.3518 -8.64823L87.6482 60.6482ZM51 50H74V-48H51V50ZM40.0659 -34.348L15.0659 -10.348L82.9341 60.348L107.934 36.348L40.0659 -34.348ZM49 -24H27V74H49V-24ZM61.6482 59.6482L85.6482 35.6482L16.3518 -33.6482L-7.64823 -9.64823L61.6482 59.6482ZM56.6482 59.6482L80.6482 35.6482L11.3518 -33.6482L-12.6482 -9.64823L56.6482 59.6482ZM46 -48H4V50H46V-48ZM0.5 74H22V-24H0.5V74ZM4 50C5.30579 50 4.2382 50.1238 1.74677 49.5813C-0.26787 49.1427 -7.42832 47.3984 -14.9366 41.0551C-24.0362 33.3674 -30.3052 21.6423 -30.8213 8.39144C-31.2521 -2.66861 -27.5087 -10.4607 -25.9328 -13.3656C-22.9561 -18.8525 -20.0479 -20.7936 -21.8845 -19.2072C-22.7717 -18.4409 -24.2814 -17.3159 -25.9136 -16.2713L26.9136 66.2713C31.5314 63.3159 36.9842 59.4409 42.1752 54.9572C46.4167 51.2936 54.5186 43.8525 60.2078 33.3656C63.1399 27.9607 67.6192 17.7936 67.1045 4.57731C66.5044 -10.8298 59.3316 -24.4924 48.3085 -33.8051C38.8768 -41.7734 28.7733 -44.8302 22.5966 -46.1751C15.9431 -47.6238 9.49421 -48 4 -48V50Z" fill={(driversInfo[2] && driversInfo[2].teamColor) || 'gray'} mask="url(#path-1-inside-1_642_20)" />
                  </svg>
                  <span className=' absolute w-full h-2 bottom-0' style={{ backgroundColor: (driversInfo[2] && driversInfo[2].teamColor) || 'gray' }}></span>
                  <img className="w-48 absolute bottom-0 right-2" src={driversInfo[1].photo ? `../../../../img/drivers/${driversInfo[2].photo}` : "../../../../img/drivers/default.png"}></img>
                </div>
                <div className='bg-gray-800 h-24 rounded-b-2xl flex text-white flex-col justify-center pl-4'>
                  <div className='flex gap-2 items-center'>
                    {driversInfo.length > 2 && (
                      <h4 className='font-formula'>{driversInfo[2].nome}</h4>
                    )}
                    <img className="w-5 h-min rounded-sm" src={driversInfo[2].flag ? `../../../../img/race/${driversInfo[2].flag}` : "https://via.placeholder.com/800x400"} alt="" />
                  </div>
                  {driversInfo.length > 2 && (
                    <h3 className='text-lg font-formula-bold uppercase'>{driversInfo[2].sobrenome}</h3>
                  )}
                </div>
              </div>
            </div>

            <div className='flex flex-col items-center'>
              {driversInfo.map((driver, index) => (
                <div
                  key={driver.id}
                  className='cursor-pointer w-full gap-2 p-4 bg-white hover:bg-gray-800 transition duration-500 flex justify-between items-center rounded-md mb-2 hover-text-white'
                  style={{ borderColor: championshipColorHex }}
                >
                  <div className='flex items-center font-formula-bold'>
                    <h5 className='mr-2 pr-2 border-r-4' style={{ borderColor: (driver.teamColor) || 'gray' }}>
                      {index + 1}
                    </h5>
                    <h5 className='hidden md:flex font-formula mr-1'>{driver.nome}</h5>
                    <h5 className='uppercase mr-2'>{driver.sobrenome}</h5>
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
      </div>
    </div>
  );
};

export default TabelaDrivers;
