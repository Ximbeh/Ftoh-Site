import { useState } from 'react'
import viteLogo from '/vite.svg'
import { useQuery } from '@apollo/client';
import Header from './components/js/Header';
import { GET_DRIVERS } from './queries';

const App = () => {

  return (
    <>
      <div>
        <Header></Header>
        <h1>aaaa</h1>
      </div>
    </>
  )
}

export default App
