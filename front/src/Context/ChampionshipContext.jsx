import React, { createContext, useState } from 'react';

export const ChampionshipContext = createContext();

export const ChampionshipProvider = ({ children }) => {
    const [selectedChampionshipId, setSelectedChampionshipId] = useState(null);

    return (
        <ChampionshipContext.Provider value={{ selectedChampionshipId, setSelectedChampionshipId }}>
            {children}
        </ChampionshipContext.Provider>
    );
};
