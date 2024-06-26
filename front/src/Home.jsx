import { useState } from 'react'
import viteLogo from '/vite.svg'
import { useQuery } from '@apollo/client';
import Header from './components/js/header/Header';
import NewsHome from './components/js/News/NewsHome';
import { GET_DRIVERS } from './queries';

const App = () => {

  return (
    <>
      <div>
        <Header></Header>
        <NewsHome></NewsHome>
      </div>
    </>
  )
}

export default App
