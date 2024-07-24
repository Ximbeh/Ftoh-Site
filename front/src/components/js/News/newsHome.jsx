import { useContext, useEffect, useRef } from 'react';
import PrincipalNewsHome from './PrincipalNewsHome';
import SecondNews from './SecondNews';
import { ChevronRight } from "lucide-react";
import "../../css/news.css";

import { useQuery } from '@apollo/client';
import { ChampionshipContext } from '../../../Context/ChampionshipContext';
import { useNavigate } from 'react-router-dom';
import { GET_CHAMPIONSHIPS } from '../../../queries/getChampionship';

const NewsHome = ({ championshipColorHex }) => {
  const { selectedChampionship } = useContext(ChampionshipContext);
  const navigate = useNavigate();

  const contentAreaRef = useRef(null);
  const principalHomeRef = useRef(null);

  const topSpace = 130;
  const breakpoint = 1024;
  const stickyClass = 'sticky-sidebar';
  const bottomFixedClass = 'bottom-fixed-sidebar';

  const controlSideBarFloating = () => {
    const contentArea = contentAreaRef.current;
    const sideBar = principalHomeRef.current;

    if (!contentArea || !sideBar) return;

    const rectL = contentArea.getBoundingClientRect();
    const rectR = sideBar.getBoundingClientRect();
    if (window.innerWidth >= breakpoint) {
      if (rectL.top - topSpace + (rectL.height - rectR.height) >= 0 && rectL.top - topSpace <= 0) {
        sideBar.classList.add(stickyClass);
        sideBar.classList.remove(bottomFixedClass);
      } else if (rectL.top - topSpace + (rectL.height - rectR.height) <= 0) {
        sideBar.classList.remove(stickyClass);
        sideBar.classList.add(bottomFixedClass);
      } else {
        sideBar.classList.remove(stickyClass);
        sideBar.classList.remove(bottomFixedClass);
      }
    } else {
      sideBar.classList.remove(stickyClass);
      sideBar.classList.remove(bottomFixedClass);
    }
  };

  useEffect(() => {
    const handleScrollAndResize = () => {
      window.requestAnimationFrame(controlSideBarFloating);
    };

    window.addEventListener('scroll', handleScrollAndResize);
    window.addEventListener('resize', handleScrollAndResize);

    handleScrollAndResize(); 

    return () => {
      window.removeEventListener('scroll', handleScrollAndResize);
      window.removeEventListener('resize', handleScrollAndResize);
    };
  }, []);

  const { loading: championshipsLoading, error: championshipsError, data: championshipsData } = useQuery(GET_CHAMPIONSHIPS);

  if (championshipsLoading) return <p>Loading...</p>;
  if (championshipsError) return <p>Error: {championshipsError.message}</p>;

  const championshipId = selectedChampionship?.id;

  // console.log("ID do campeonato selecionado:", championshipId);
  // console.log("Dados dos campeonatos:", championshipsData);

  const championship = championshipsData.championships.find(champ => champ.id === championshipId);

  if (!championship) return <p>Campeonato não encontrado</p>;

  const news = championship.seasons.flatMap(season => season.news);

  // console.log("Notícias associadas ao campeonato selecionado:", news);

  const principalNews = news[0];
  const secondNews = news.slice(1, 7);

  return (
    <div className='mx-auto px-2 relative lg:grid lg:grid-cols-2 gap-3 py-7 max-w-screen-lg-30 xl:max-w-screen-xl'>
      <div ref={contentAreaRef} className="content-area lg:bg-repeat lg:bg-grade-pattern lg:bg-2">
        <PrincipalNewsHome news={principalNews} championshipColorHex={championshipColorHex} ref={principalHomeRef} />
      </div>
      <div>
        <div className='grid grid-cols-2 max-w-lg mx-auto md:max-w-screen-md gap-x-5 gap-y-4'>
          {secondNews.map((news, index) => (
            <SecondNews key={news.newsId} news={news} championshipColorHex={championshipColorHex} />
          ))}
        </div>
        <button
          className='dynamic-button flex mx-auto gap-2 mt-7 px-4 py-3 rounded-md font-formula'
          style={{
            '--button-bg-color': championshipColorHex,
            '--button-text-color': championshipColorHex,
            '--button-border-color': championshipColorHex
          }}
          onClick={() => navigate('/latest')}
        >
          Veja as últimas notícias <ChevronRight color="#fff" />
        </button>
      </div>
    </div>
  );
}

export default NewsHome;
