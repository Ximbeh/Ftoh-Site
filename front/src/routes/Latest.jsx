import { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Header from "../components/js/header/Header";
import NewsContainer from "../components/js/News/NewsContainer";
import { ChevronDown } from "lucide-react";
import { GET_CHAMPIONSHIPS } from '../queries/getChampionship';
import { ChampionshipContext } from "../Context/ChampionshipContext";
import Footer from '../components/js/Footer';
import LoadingPage from '../components/js/Boundary/Loading';

const Latest = () => {
  const { state } = useLocation();
  const tag = state?.tag;

  const { loading, error, data } = useQuery(GET_CHAMPIONSHIPS);
  const { selectedChampionship } = useContext(ChampionshipContext);

  const [visibleNewsCount, setVisibleNewsCount] = useState(12);
  const [championship, setChampionship] = useState(null);

  useEffect(() => {
    if (data?.championships && selectedChampionship) {
      const champ = data.championships.find(champ => champ.id === selectedChampionship.id);
      setChampionship(champ);
    }
  }, [data, selectedChampionship]);

  if (loading) return <LoadingPage />;
  if (error) return <p>Error: {error.message}</p>;
  if (!championship) return <p>Campeonato não encontrado</p>;

  const news = championship.seasons.flatMap(season => season.news);
  const latestNews = [...news].reverse();

  // Filtra por tag se uma tag for fornecida
  const filteredNews = tag ? latestNews.filter(newsItem => newsItem.tags.includes(tag)) : latestNews;

  const handleLoadMore = () => setVisibleNewsCount(prevCount => prevCount + 12);

  return (
    <>
      <Header />
      <header className="bg-white pt-10 px-2">
        <div className="mb-10 relative max-w border-t-8 border-r-8 rounded-tr-xl pb-14 md:max-w-3xl md:mx-auto lg:max-w-6xl" style={{ borderColor: selectedChampionship.color }}>
          <h1 className="font-formula-bold text-4xl md:text-5xl lg:text-7xl bg-white absolute -top-7 lg:-top-10 left-0 pr-4">
            {tag ? tag : 'Todas notícias'}
          </h1>
        </div>
      </header>
      <main className="bg-gray-200 px-2 py-4">
        <div className="md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-2 lg:grid-cols-3 md:max-w-3xl md:mx-auto lg:max-w-6xl">
          {filteredNews.slice(0, visibleNewsCount).map(newsItem => (
            <NewsContainer
              key={newsItem.newsId}
              newsItem={newsItem}
            />
          ))}
        </div>
        {visibleNewsCount < filteredNews.length && (
          <button
            className='dynamic-button flex mx-auto gap-2 mt-7 px-4 py-3 rounded-md font-formula'
            style={{
              '--button-bg-color': selectedChampionship.color,
              '--button-text-color': selectedChampionship.color,
              '--button-border-color': selectedChampionship.color
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
