import { Play } from 'lucide-react';
import React from 'react';

const Video = () => {


    return (
        <div className="mx-2 mb-8 border-purple-800 border-8 border-l-0 rounded-tr-xl rounded-br-xl">
            <div className="py-2 pr-2">
                <div className='relative'>
                    <span className='bg-gradient-to-t from-purple-800 h-8 w-full absolute bottom-0'></span>
                    <img className="w-full h-full" src="https://media.formula1.com/image/upload/t_16by9North/f_auto/q_auto/v1719156582/fom-website/2024/Spain/GettyImages-2158857659.jpg.transform/4col/image.jpg" />
                </div>
                <div className="px-4 pb-4 pt-2 bg-purple-800">
                    <h2 className="mb-4 font-formula-bold text-white text-xl">Titulo</h2>
                    <p className="mb-4 text-white font-titillium">Descrição</p>
                    <button className="flex gap-2 font-titillium bg-white text-sm rounded-md px-4 py-3"><p className='mt-px'>ASSISTA</p> <Play width={13}/></button>
                </div>
            </div>
        </div>
    )
}

export default Video
