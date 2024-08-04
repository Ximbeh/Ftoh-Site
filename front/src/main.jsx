import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Home from './routes/Home.jsx'
import Latest from './routes/Latest.jsx'
import './components/css/index.css'
import News from './components/js/news/news.jsx';
import Calendar from './components/js/calendar/calendar.jsx'
import Race from './components/js/calendar/race.jsx'
import Pilots from './components/js/pilots/pilots.jsx';
import Pilot from './components/js/pilots/pilot.jsx';
import Teams from './components/js/teams/teams.jsx';
import Team from './components/js/teams/team.jsx';
import Hall from './components/js/hall.jsx';
import Results from './components/js/results/results.jsx';
import ErrorPage from './components/js/boundary/errorboundary.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ChampionshipProvider } from './context/championshipContext.jsx';


const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <ErrorPage /> },
  { path: "/:id", element: <Home />, errorElement: <ErrorPage /> },
  { path: "latest", element: <Latest />, errorElement: <ErrorPage /> },
  { path: "News/:id", element: <News />, errorElement: <ErrorPage /> },
  { path: "Calendar", element: <Calendar />, errorElement: <ErrorPage /> },
  { path: "Calendar/Race/:id", element: <Race />, errorElement: <ErrorPage /> },
  { path: "Pilots", element: <Pilots />, errorElement: <ErrorPage /> },
  { path: "/Pilots/Pilot/:id", element: <Pilot />, errorElement: <ErrorPage /> },
  { path: "Teams", element: <Teams />, errorElement: <ErrorPage /> },
  { path: "Hall", element: <Hall />, errorElement: <ErrorPage /> },
  { path: "/Teams/Team/:id", element: <Team />, errorElement: <ErrorPage /> },
  { path: "Results", element: <Results />, errorElement: <ErrorPage /> },
  { path: "*", element: <ErrorPage /> },
]);

const client = new ApolloClient({
  uri: 'https://ftoh-site.onrender.com/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ChampionshipProvider>
        <RouterProvider router={router} />
      </ChampionshipProvider>
    </ApolloProvider>
  </React.StrictMode>,
);
