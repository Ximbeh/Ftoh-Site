import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../css/news.css";
import { ChampionshipContext } from '../../../Context/ChampionshipContext';

const SecondNews = ({ news }) => {
  const { selectedChampionship } = useContext(ChampionshipContext);
  const navigate = useNavigate();

  if (!news) {
    return (
      <div className="component hover:cursor-pointer max-w-xs m-auto mt-0 md:max-w-screen-md">
        <p className="text-center">Sem notícias disponíveis</p>
      </div>
    );
  }

  const { image, tags = [], title } = news;
  const imagePath = image ? `/img/news/capa/${image}` : "https://via.placeholder.com/800x400";
  const firstTag = tags[0] || 'Sem categoria';

  const handleNewsClick = () => {
    navigate(`/News/${news.id}`, { state: { news } });
  };

  return (
    <div 
      className="component hover:cursor-pointer max-w-xs m-auto mt-0 md:max-w-screen-md"
      onClick={handleNewsClick}
    >
      <div className="font-formula">
        <div 
          className="imagem overflow-hidden inline-block rounded-sm w-full" 
          style={{ '--button-border-color': selectedChampionship.color }}
        >
          <img 
            className="w-full h-full duration-500 transition-transform mb-2" 
            src={imagePath}
            alt="News"
          />
        </div>
        <div 
          className="duration-300 text pt-1 pb-3 px-3 border-r border-b border-l-0 border-t-0 border-solid border-gray-300 rounded-br-3xl min-h-4" 
          style={{ '--button-border-color': selectedChampionship.color }}
        >
          <p 
            className="text-xs font-formula-bold mb-1 uppercase" 
            style={{ color: selectedChampionship.color }}
          >
            {firstTag}
          </p>
          <h2 className="text-black font-titillium text-sm md:hover:underline">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SecondNews;
