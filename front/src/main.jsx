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
import Results from './components/js/Results/Results.jsx';
import ErrorPage from './components/js/Boundary/ErrorBoundary.jsx';
import './components/css/index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ChampionshipProvider } from './Context/ChampionshipContext.jsx';


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
