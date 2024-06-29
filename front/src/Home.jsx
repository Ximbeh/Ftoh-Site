import { useState } from 'react'
import viteLogo from '/vite.svg'
import { useQuery } from '@apollo/client';
import Header from './components/js/header/Header';
import NewsHome from './components/js/News/NewsHome';
import Video from './components/js/Video';
import { GET_DRIVERS } from './queries';

const App = () => {

  return (
    <>
      <div>
        <Header></Header>
        <NewsHome></NewsHome>
        <Video></Video>
        <Video></Video>
       

      </div>
    </>
  )
}

export default App
