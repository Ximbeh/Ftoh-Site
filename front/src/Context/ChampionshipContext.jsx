import React, { createContext, useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import LoadingPage from '../components/js/Boundary/Loading';

export const ChampionshipContext = createContext();

const GET_CHAMPIONSHIPS = gql`
  query GetChampionships {
    championships {
      id
      championshipName
      logo
      color
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
            // Encontrar o campeonato padrão
            const defaultChampionship = data.championships.find(champ => champ.championshipName === 'Fórmula 1') || data.championships[0];
            
            // Atualizar o campeonato selecionado e a temporada
            setSelectedChampionship({
                id: defaultChampionship.id,
                name: defaultChampionship.championshipName,
                color: defaultChampionship.color,
                logo: defaultChampionship.logo
            });

            // Filtrar e definir a temporada selecionada
            const defaultSeason = defaultChampionship.seasons.filter(season => season.date === '2023');
            setSelectedSeason(defaultSeason);
        }
    }, [data]);

    if (loading) return <LoadingPage />;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <ChampionshipContext.Provider value={{ selectedChampionship, setSelectedChampionship, selectedSeason, setSelectedSeason }}>
            {children}
        </ChampionshipContext.Provider>
    );
};
