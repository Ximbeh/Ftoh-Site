import { useState } from 'react'
import viteLogo from '/vite.svg'
import { useQuery } from '@apollo/client';
import HeaderOne from './components/js/HeaderOne';
import HeaderTwo from './components/js/HeaderTwo';
import { GET_DRIVERS } from './queries';

const App = () => {

  return (
    <>
      <div>
        <HeaderOne></HeaderOne>
        <HeaderTwo></HeaderTwo>
       
      </div>
    </>
  )
}

export default App
