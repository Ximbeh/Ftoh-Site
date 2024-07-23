import { Play } from 'lucide-react';
import React, { useContext } from 'react';

import { GET_ALLNEWS } from '../../queries/getAllNews';
import { useQuery } from '@apollo/client';
import { ChampionshipContext } from '../../Context/ChampionshipContext';

const Video = () => {

    const { loading, error, data } = useQuery(GET_ALLNEWS);
    const { selectedChampionship } = useContext(ChampionshipContext);


    return (
        <div className='max-w-lg mx-auto md:max-w-screen-md max-w-screen-lg-30 xl:max-w-screen-xl'>
        <div className="mx-2 mb-8 border-purple-900 border-8 border-l-0 rounded-tr-xl rounded-br-xl">
            <div className="py-2 pr-2 md:flex md:flex-row-reverse">
                <div className='relative md:flex w-full'>
                    <span className='bg-gradient-to-t from-purple-900 h-8 w-full absolute bottom-0 md:bg-gradient-to-r md:h-full md:w-10'></span>
                    <img className="w-full h-full object-cover" src="https://media.formula1.com/image/upload/t_16by9North/f_auto/q_auto/v1719156582/fom-website/2024/Spain/GettyImages-2158857659.jpg.transform/4col/image.jpg" />
                </div>
                <div className="px-4 pb-4 pt-2 bg-purple-900 md:px-7 md:max-w-1/2 flex flex-col justify-evenly">
                    <h2 className="mb-4 font-formula-bold text-white text-xl md:text-3xl">Titulo</h2>
                    <p className="mb-4 text-white font-titillium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <button className="w-min flex gap-2 font-titillium bg-white text-sm rounded-md px-4 py-3"><p className='mt-px'>ASSISTA</p> <Play width={13}/></button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Video
