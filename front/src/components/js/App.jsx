import { useState } from 'react'
import viteLogo from '/vite.svg'
import { useQuery } from '@apollo/client';

import { GET_DRIVERS } from '../../queries';

const App = () => {
  const {loading, error, data} = useQuery(GET_DRIVERS)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>

  return (
    <>
      <div>
        <h1>Drivers</h1>
        <ul>
          {data.drivers.map(driver=>(
            <li key={driver.id}>
                <h2>{driver.name}</h2>
                <p>Poles: {driver.poles}</p>
                <p>Wins: {driver.wins}</p>
                <p>Best Position: {driver.bestPosition}</p>
                <p>Hot Laps: {driver.hotLaps}</p>
                <p>Records: {driver.records}</p>
                <p>Number: {driver.number}</p>
                <p>Points: {driver.points}</p>
                <p>Position: {driver.position}</p>
                <br></br>
                <p>Team ID: {driver.teamId}</p>
                <p>Driver ID: {driver.driverId}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
