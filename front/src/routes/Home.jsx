import { useContext, useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import Header from '../components/js/header/Header';
import NewsHome from '@components/js/News/NewsHome';
import Video from '../components/js/Video';
import { CarouselCustomNavigation } from '../components/js/Carousel';
import CarouselSchedule from '../components/js/CarouselSchedule';
import Tabela from '../components/js/Tabela/Tabela';
import Footer from '../components/js/Footer';
import { ChampionshipContext } from '../Context/ChampionshipContext';
import { useParams } from 'react-router-dom';
import LoadingPage from '../components/js/Boundary/Loading';


const GET_CHAMPIONSHIP_BY_ID = gql`
  query GetChampionshipById($id: ID!) {
    championship(id: $id) {
      id
      championshipName
      seasons {
        id
        news {
          newsId
          title
          image
          video
          tags
        headline
        }
      }
    }
  }
`;

const Home = () => {
  const { id } = useParams();
  const { selectedChampionship, setChampionship, selectedSeason } = useContext(ChampionshipContext);

  const { id: selectedChampionshipId, name: selectedChampionshipName } = selectedChampionship;

  const { loading, error, data } = useQuery(GET_CHAMPIONSHIP_BY_ID, {
    variables: { id: id || selectedChampionshipId },
    skip: !id && !selectedChampionshipId,
  });


  useEffect(() => {
    if (data && data.championship) {
      if (data.championship.id !== selectedChampionship.id) {
        setChampionship(data.championship.id, data.championship.championshipName);
      }
    }
  }, [data, setChampionship, selectedChampionship.id]);

  if (loading) return <LoadingPage/>;
  if (error) return <p>Error: {error.message}</p>;

  if (!data || !data.championship) {
    return <p>No championship data found.</p>;
  }

  const newsWithVideo = data.championship.seasons
    .flatMap(season => season.news)
    .filter(news => news.video);

  const lastVideoNews = newsWithVideo[newsWithVideo.length - 1];
  const secondLastVideoNews = newsWithVideo[newsWithVideo.length - 2];
  const newsItems = data.championship.seasons.flatMap(season => season.news);

  return (
    <>
      <div>
        <Header />
        <NewsHome  />
        {lastVideoNews && <Video videoNews={lastVideoNews} />}
        <CarouselCustomNavigation newsItems={newsItems} />
        {secondLastVideoNews && <Video videoNews={secondLastVideoNews} />}
        <CarouselSchedule />
        <Tabela />
        <Footer />
      </div>
    </>
  );
};

export default Home;
