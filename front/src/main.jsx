import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import App from './components/js/app.jsx'
import Home from './routes/home.jsx'
import Latest from './routes/latest.jsx'
import News from './components/js/News/news.jsx'
import Calendar from './components/js/Calendar/calendar.jsx'
import Race from './components/js/Calendar/race.jsx'
import Pilots from './components/js/Pilots/pilots.jsx';
import Pilot from './components/js/Pilots/pilot.jsx';
import Teams from './components/js/Teams/teams.jsx';
import Team from './components/js/Teams/team.jsx';
import Hall from './components/js/hall.jsx';
import Results from './components/js/Results/results.jsx';
import ErrorPage from './components/js/Boundary/errorboundary.jsx';
import './components/css/index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ChampionshipProvider } from './Context/championshipContext.jsx';


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
