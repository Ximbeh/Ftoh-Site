import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import App from './components/js/App.jsx'
import Home from './routes/Home.jsx'
import Latest from './routes/Latest.jsx'
import News from './components/js/News/News.jsx'
import Calendar from './components/js/Calendar/Calendar.jsx'
import Race from './components/js/Calendar/Race.jsx'
import Pilots from './components/js/Pilots/Pilots.jsx';
import Pilot from './components/js/Pilots/Pilot.jsx';
import Teams from './components/js/Teams/Teams.jsx';
import Team from './components/js/Teams/Team.jsx';
import Hall from './components/js/Hall.jsx';
import './components/css/index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home /> 
  },
  {
    path: "latest",
    element: <Latest /> 
  },
  {
    path: "News",
    element: <News />
  },
  {
    path: "Calendar",
    element: <Calendar />
  },
  {
    path: "Race",
    element: <Race />
  },
  {
    path: "Pilots",
    element: <Pilots/>
  },
  {
    path: "Pilot",
    element: <Pilot/>
  },
  {
    path: "Teams",
    element: <Teams/>
  },
  {
    path: "Hall",
    element: <Hall/>
  },
  {
    path: "Team",
    element: <Team/>
  },
])

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router}/>
    </ApolloProvider>
  </React.StrictMode>,
)
