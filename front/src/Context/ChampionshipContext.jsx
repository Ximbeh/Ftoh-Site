import React, { createContext, useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';

export const ChampionshipContext = createContext();

const GET_CHAMPIONSHIPS = gql`
  query GetChampionships {
    championships {
      id
      championshipName
    }
  }
`;

export const ChampionshipProvider = ({ children }) => {
    const { loading, error, data } = useQuery(GET_CHAMPIONSHIPS);
    const [selectedChampionship, setSelectedChampionship] = useState({
        id: null,
        name: '',
        color: ''
    });

    useEffect(() => {
        if (data && data.championships.length > 0) {
            const defaultChampionship = data.championships.find(champ => champ.championshipName === 'Fórmula 1') || data.championships[0];
            setChampionship(defaultChampionship.id, defaultChampionship.championshipName);
        }
    }, [data]);

    const setChampionship = (id, name) => {
        const color = name.toLowerCase().replace(/ /g, '');
        setSelectedChampionship({ id, name, color });
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <ChampionshipContext.Provider value={{ selectedChampionship, setChampionship }}>
            {children}
        </ChampionshipContext.Provider>
    );
};
