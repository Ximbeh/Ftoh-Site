import { useState } from 'react'
import viteLogo from '/vite.svg'
import { useQuery } from '@apollo/client';
import Header from './components/js/header/Header';
import NewsHome from './components/js/News/newsHome';
import SecondNews from './components/js/News/secondNews';

import { GET_DRIVERS } from './queries';

const App = () => {

  return (
    <>
      <div>
        <Header></Header>
        <NewsHome></NewsHome>
        <div className='grid grid-cols-2 max-w-lg m-auto
            md:max-w-screen-md'>
        <SecondNews></SecondNews>
        <SecondNews></SecondNews>
        <SecondNews></SecondNews>
        <SecondNews></SecondNews>
        </div>
      </div>
    </>
  )
}

export default App
