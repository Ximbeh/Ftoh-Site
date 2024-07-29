import React, { createContext, useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';

export const ChampionshipContext = createContext();

const GET_CHAMPIONSHIPS = gql`
  query GetChampionships {
    championships {
      id
      championshipName
      logo
      seasons {
        seasonId
        date
        championshipName
      }
    }
  }
`;

export const ChampionshipProvider = ({ children }) => {
    const { loading, error, data } = useQuery(GET_CHAMPIONSHIPS);
    const [selectedChampionship, setSelectedChampionship] = useState({
        id: null,
        name: '',
        color: '',
        logo: ''
    });
    const [selectedSeason, setSelectedSeason] = useState([]);

    useEffect(() => {
        if (data && data.championships.length > 0) {
            const defaultChampionship = data.championships.find(champ => champ.championshipName === 'Fórmula 1') || data.championships[0];
            setChampionship(defaultChampionship.id, defaultChampionship.championshipName, defaultChampionship.logo);
            
            const seasons2024 = defaultChampionship.seasons.filter(season => season.date === "2024");
            setSelectedSeason(seasons2024);
        }
    }, [data]);

    const setChampionship = (id, name, logo) => {
        const color = name.toLowerCase().replace(/ /g, '');
        setSelectedChampionship({ id, name, color, logo });
    };

    const setSeason = (seasons) => {
        setSelectedSeason(seasons);
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <ChampionshipContext.Provider value={{ selectedChampionship, setChampionship, selectedSeason, setSelectedSeason }}>
            {children}
        </ChampionshipContext.Provider>
    );
};
