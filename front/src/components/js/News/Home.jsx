import { useContext, useEffect, useRef } from 'react';
import PrincipalNewsHome from './PrincipalNewsHome';
import SecondNews from './SecondNews';
import { ChevronRight } from "lucide-react";
import "../../css/news.css";
import { useQuery } from '@apollo/client';
import { ChampionshipContext } from '../../../Context/ChampionshipContext';
import { useNavigate } from 'react-router-dom';
import { GET_CHAMPIONSHIPS } from '../../../queries/getChampionship';
import LoadingPage from '../Boundary/Loading';

const NewsHome = ({ championshipColorHex }) => {
  const { selectedChampionship } = useContext(ChampionshipContext);
  const navigate = useNavigate();

  const contentAreaRef = useRef(null);
  const principalHomeRef = useRef(null);

  const BREAKPOINT = 1024;
  const TOP_SPACE = 130;
  const STICKY_CLASS = 'sticky-sidebar';
  const BOTTOM_FIXED_CLASS = 'bottom-fixed-sidebar';

  const handleScrollAndResize = () => {
    window.requestAnimationFrame(() => {
      const contentArea = contentAreaRef.current;
      const sideBar = principalHomeRef.current;

      if (!contentArea || !sideBar) return;

      const rectL = contentArea.getBoundingClientRect();
      const rectR = sideBar.getBoundingClientRect();

      if (window.innerWidth >= BREAKPOINT) {
        if (rectL.top - TOP_SPACE + (rectL.height - rectR.height) >= 0 && rectL.top - TOP_SPACE <= 0) {
          sideBar.classList.add(STICKY_CLASS);
          sideBar.classList.remove(BOTTOM_FIXED_CLASS);
        } else if (rectL.top - TOP_SPACE + (rectL.height - rectR.height) <= 0) {
          sideBar.classList.remove(STICKY_CLASS);
          sideBar.classList.add(BOTTOM_FIXED_CLASS);
        } else {
          sideBar.classList.remove(STICKY_CLASS, BOTTOM_FIXED_CLASS);
        }
      } else {
        sideBar.classList.remove(STICKY_CLASS, BOTTOM_FIXED_CLASS);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollAndResize);
    window.addEventListener('resize', handleScrollAndResize);
    handleScrollAndResize(); 

    return () => {
      window.removeEventListener('scroll', handleScrollAndResize);
      window.removeEventListener('resize', handleScrollAndResize);
    };
  }, []);

  const { loading: championshipsLoading, error: championshipsError, data: championshipsData } = useQuery(GET_CHAMPIONSHIPS);

  if (championshipsLoading) return <LoadingPage />;
  if (championshipsError) return <p>Error: {championshipsError.message}</p>;

  const championshipId = selectedChampionship?.id;
  const championship = championshipsData.championships.find(champ => champ.id === championshipId);

  if (!championship) return <p>Campeonato não encontrado</p>;

  const news = championship.seasons.flatMap(season => season.news);

  const filterNews = (news) => {
    const videoNews = news.filter(item => item.video);
    const highlightNews = news.filter(item => item.tags?.includes('Highlights'));

    const hasTag = (item, tag) => Array.isArray(item.tags) ? item.tags.includes(tag) : item.tags === tag;

    return news.map(newsItem => {
      const isVideo = newsItem.video;
      const isHighlight = highlightNews.includes(newsItem);

      if (isVideo && videoNews.length > 2 && [videoNews.length - 1, videoNews.length - 2].includes(videoNews.indexOf(newsItem))) {
        return videoNews[videoNews.length - 3];
      }

      if (isHighlight) {
        return highlightNews[highlightNews.length - 4] || newsItem;
      }

      return newsItem;
    }).filter((item, index, self) =>
      index === self.findIndex(t => t.newsId === item.newsId)
    );
  };

  const acceptableNews = filterNews(news);
  const principalNews = acceptableNews.slice(-1)[0];
  const secondNews = acceptableNews.slice(Math.max(news.length - 12, 0), news.length - 6).reverse();

  const handleNavigate = () => {
    navigate('/latest', { state: { news } });
  };

  return (
    <div className='mx-auto px-2 relative lg:grid lg:grid-cols-2 gap-3 py-7 max-w-screen-lg-30 xl:max-w-screen-xl'>
      <div ref={contentAreaRef} className="content-area lg:bg-repeat lg:bg-grade-pattern lg:bg-2">
        <PrincipalNewsHome index={acceptableNews.length - 1} news={principalNews} ref={principalHomeRef} />
      </div>
      <div>
      <div className='grid grid-cols-2 max-w-lg mx-auto md:max-w-screen-md gap-x-5 gap-y-4'>
          {secondNews.map((news, index) => (
            <SecondNews key={news.newsId} news={news}  />
          ))}
        </div>
        <button
          className='dynamic-button flex mx-auto gap-2 mt-7 px-4 py-3 rounded-md font-formula'
          style={{
            '--button-bg-color': selectedChampionship.color,
            '--button-text-color': selectedChampionship.color,
            '--button-border-color': selectedChampionship.color
          }}
          onClick={handleNavigate}
        >
          Veja as últimas notícias <ChevronRight color="#fff" />
        </button>
      </div>
    </div>
  );
}

export default NewsHome;
