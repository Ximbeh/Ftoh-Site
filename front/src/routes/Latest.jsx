import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from "../components/js/header/Header";
import NewsContainer from "../components/js/News/NewsContainer";
import { ChevronDown } from "lucide-react";
import { GET_CHAMPIONSHIPS } from '../queries/getChampionship';
import { useQuery } from '@apollo/client';
import { useContext } from 'react';
import { ChampionshipContext } from "../Context/ChampionshipContext";
import Footer from '../components/js/Footer';

const Latest = () => {
  const { loading, error, data } = useQuery(GET_CHAMPIONSHIPS);
  const { selectedChampionship } = useContext(ChampionshipContext);
  const location = useLocation();
  const { state } = location;
  const { championshipColorHex = '' } = state || {};

  const [visibleNewsCount, setVisibleNewsCount] = useState(12);
  const [championship, setChampionship] = useState(null);

  useEffect(() => {
    if (data && selectedChampionship) {
      const champ = data.championships.find(champ => champ.id === selectedChampionship.id);
      setChampionship(champ);
    }
  }, [data, selectedChampionship]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!championship) return <p>Campeonato não encontrado</p>;

  const news = championship.seasons.flatMap(season => season.news);
  const latestNews = [...news].reverse();

  const handleLoadMore = () => {
    setVisibleNewsCount(prevCount => prevCount + 12);
  };

  return (
    <>
      <Header championshipColorHex={championshipColorHex} />
      <header className="bg-white pt-10 px-2">
        <div className="relative max-w border-t-8 border-r-8 border-red-500 rounded-tr-xl pb-14 md:max-w-3xl md:mx-auto lg:max-w-6xl">
          <h1 className="font-formula-bold text-4xl md:text-5xl lg:text-7xl bg-white absolute -top-7 lg:-top-10 left-0 pr-4">Todas notícias</h1>
        </div>
      </header>
      <main className="bg-gray-200 px-2 py-4">
        <div className="md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-2 lg:grid-cols-3 md:max-w-3xl md:mx-auto lg:max-w-6xl">
          {latestNews.slice(0, visibleNewsCount).map(newsItem => (
            <NewsContainer
              key={newsItem.newsId}
              newsItem={newsItem}
              championshipColorHex={championshipColorHex}
            />
          ))}
        </div>
        {visibleNewsCount < latestNews.length && (
          <button
            className='dynamic-button flex mx-auto gap-2 mt-7 px-4 py-3 rounded-md font-formula'
            style={{
              '--button-bg-color': championshipColorHex,
              '--button-text-color': championshipColorHex,
              '--button-border-color': championshipColorHex
            }}
            onClick={handleLoadMore}
          >
            Carregar mais <ChevronDown color="#fff" />
          </button>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Latest;
