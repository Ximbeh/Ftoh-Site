import { useContext, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import Header from '../components/js/header/Header';
import NewsHome from '../components/js/News/Home';
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
      logo
      color
      seasons {
        id
        seasonId
        date
        championshipName
        news {
          id
          title
          tags
          image
          newsId
          writer
          text
          headline
        }
      }
    }
  }
`;

const Home = () => {
  const { id } = useParams();
  const { selectedChampionship, setChampionship, setSelectedSeason } = useContext(ChampionshipContext);
  const { id: selectedChampionshipId } = selectedChampionship;

  const { loading, error, data } = useQuery(GET_CHAMPIONSHIP_BY_ID, {
    variables: { id: id || selectedChampionshipId },
    skip: !id && !selectedChampionshipId,
  });

  useEffect(() => {
    if (data?.championship && data.championship.id !== selectedChampionship.id) {
       setChampionship({
            id: data.championship.id,
            name: data.championship.championshipName,
            color: data.championship.color,
            logo: data.championship.logo
        });

        const lastSeason = data.championship.seasons[data.championship.seasons.length - 1];        
        setSelectedSeason([lastSeason]);
     
    }
  }, [data, selectedChampionship.id, setChampionship]);


  if (loading) return <LoadingPage />;
  if (error) return <p>Error: {error.message}</p>;

  if (!data?.championship) {
    return <p>No championship data found.</p>;
  }
  

  const newsItems = data.championship.seasons.flatMap(season => season.news);
  const newsWithVideo = newsItems.filter(news => news.video);

  const lastVideoNews = newsWithVideo.at(-1);
  const secondLastVideoNews = newsWithVideo.at(-2);

  return (
    <>
      <Header />
      <NewsHome />
      {lastVideoNews && <Video videoNews={lastVideoNews} />}
      <CarouselCustomNavigation newsItems={newsItems} />
      {secondLastVideoNews && <Video videoNews={secondLastVideoNews} />}
      <CarouselSchedule />
      <Tabela />
      <Footer />
    </>
  );
};

export default Home;
