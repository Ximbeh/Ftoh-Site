import { Play } from 'lucide-react';
import React from 'react';

const Video = ({ videoNews }) => {
  console.log(videoNews );
  const imagePath =  videoNews.image ? `../../../../img/news/capa/${videoNews.image}` : "https://via.placeholder.com/800x400";

  return (
    <div className='max-w-lg mx-auto md:max-w-screen-md max-w-screen-lg-30 xl:max-w-screen-xl'>
      <div className="mx-2 mb-8 border-purple-900 border-8 border-l-0 rounded-tr-xl rounded-br-xl">
        <div className="py-2 pr-2 md:flex md:flex-row-reverse">
          <div className='relative md:flex w-full'>
            <span className='bg-gradient-to-t from-purple-900 h-8 w-full absolute bottom-0 md:bg-gradient-to-r md:h-full md:w-10'></span>
            <img className="w-full h-full object-cover" src={imagePath} alt="Video" />
          </div>
          <div className="px-4 pb-4 pt-2 bg-purple-900 md:px-7 md:max-w-1/2 flex flex-col justify-evenly">
            <h2 className="mb-4 font-formula-bold text-white text-xl md:text-3xl">{videoNews.title}</h2>
            <p className="mb-4 text-white font-titillium">{videoNews.headline}</p>
            <a href={videoNews.video} target="_blank" rel="noopener noreferrer" className="w-min flex gap-2 font-titillium bg-white text-sm rounded-md px-4 py-3">
              <p className='mt-px'>ASSISTA</p> <Play width={13} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
