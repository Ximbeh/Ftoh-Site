import { useState, useContext } from 'react'
import viteLogo from '/vite.svg'
import { useQuery } from '@apollo/client';
import Header from '../components/js/header/Header';
import NewsHome from '../components/js/News/NewsHome';
import Video from '../components/js/Video';
import { CarouselCustomNavigation } from '../components/js/Carousel';
import CarouselSchedule from '../components/js/CarouselSchedule';
import Tabela from '../components/js/Tabela/Tabela'
import Footer from '../components/js/Footer';
import { ChampionshipContext } from '../Context/ChampionshipContext';
import { GET_CHAMPIONSHIPS } from '../queries/getChampionship';


const App = () => {
  const { selectedChampionshipId } = useContext(ChampionshipContext);

  const { loading, error, data } = useQuery(GET_CHAMPIONSHIPS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  
  return (
    <>
      <div>
        <Header></Header>
        <p>Selected Championship ID: {selectedChampionshipId}</p>
        <NewsHome></NewsHome>
        <Video></Video>
        <CarouselCustomNavigation></CarouselCustomNavigation>
        <Video></Video>
        <CarouselSchedule></CarouselSchedule>
        <Tabela></Tabela>
        <Footer></Footer>

      </div>
    </>
  )
}

export default App
