import { useState } from 'react'
import viteLogo from '/vite.svg'
import { useQuery } from '@apollo/client';
import Header from './components/js/header/Header';
import NewsHome from './components/js/News/NewsHome';
import Video from './components/js/Video';
import { CarouselCustomNavigation } from './components/js/Carousel';
import { GET_DRIVERS } from './queries';

const App = () => {

  return (
    <>
      <div>
        <Header></Header>
        <NewsHome></NewsHome>
        <Video></Video>
        <CarouselCustomNavigation></CarouselCustomNavigation>
        <Video></Video>
       

      </div>
    </>
  )
}

export default App
