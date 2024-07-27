import React, { createContext, useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';

export const ChampionshipContext = createContext();

const GET_CHAMPIONSHIPS = gql`
  query GetChampionships {
    championships {
      id
      championshipName
      logo
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

    useEffect(() => {
        if (data && data.championships.length > 0) {
            // console.log('Data:', data); // Log the entire data object
            const defaultChampionship = data.championships.find(champ => champ.championshipName === 'Fórmula 1') || data.championships[0];
            // console.log('Default Championship:', defaultChampionship); // Log the default championship
            setChampionship(defaultChampionship.id, defaultChampionship.championshipName, defaultChampionship.logo);
        }
    }, [data]);

    const setChampionship = (id, name, logo) => {
        const color = name.toLowerCase().replace(/ /g, '');
        // console.log('Setting championship:', { id, name, color, logo }); // Log the values being set
        setSelectedChampionship({ id, name, color, logo });
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <ChampionshipContext.Provider value={{ selectedChampionship, setChampionship }}>
            {children}
        </ChampionshipContext.Provider>
    );
};
