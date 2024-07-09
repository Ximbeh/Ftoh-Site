import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import App from './components/js/App.jsx'
import Home from './routes/Home.jsx'
import Latest from './routes/Latest.jsx'
import News from './components/js/News/News.jsx'
import Calendar from './components/js/Calendar/Calendar.jsx'
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
  }
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
