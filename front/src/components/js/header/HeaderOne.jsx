import "../../css/header.css"

import { GET_CHAMPIONSHIPS } from '../../../queries/getChampionship';
import { useQuery } from '@apollo/client';
import { useState, useEffect, useContext } from 'react';
import { ChampionshipContext } from "../../../Context/ChampionshipContext";

const HeaderOne = () => {
    const { loading, error, data } = useQuery(GET_CHAMPIONSHIPS)
    const { selectedChampionshipId, setSelectedChampionshipId } = useContext(ChampionshipContext);


    useEffect(() => {
        if (data && data.championships.length > 0 && !selectedChampionshipId) {
            setSelectedChampionshipId(data.championships[0].id);
        }
    }, [data, selectedChampionshipId, setSelectedChampionshipId]);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>


    const handleChampionshipClick = (championship) => {
        setSelectedChampionshipId(championship.id);
        console.log("Selected Championship ID:", selectedChampionshipId);
    }


    return (
        <div className="bg-white hidden lg:flex">
            <div className="flex space-x-4 my-3 ml-10 max-w-screen-lg ml-10 relative">
                <img className="h-6 opacity-40 mr-6" src="https://www.formula1.com/etc/designs/fom-website/images/fia_logo.png " alt="FIA" />
                <span className="before: absolute before: bg-black before: opacity-40 before:left-10 before: flex w-px h-6 left-12"></span>
                <div className="flex space-x-4 items-center font-formula-bold text-xs">

                {data.championships.map((championship) => (
                        <a className="relative" key={championship.id} onClick={() => handleChampionshipClick(championship)}>
                            <span className={`opacity-40 hover:opacity-100 hover:cursor-pointer ${selectedChampionshipId === championship.id ? 'opacity-100' : ''}`}>
                                {championship.championshipName}
                            </span>
                            {selectedChampionshipId === championship.id && (
                                <span className="absolute left-4 -bottom-4 before:bg-red-600 before:flex triangulo-baixo"></span>
                            )}
                        </a>
                    ))}
                      
                </div>
            </div>
        </div>
    )
}

export default HeaderOne