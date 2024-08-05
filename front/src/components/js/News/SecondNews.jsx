import React, { useContext } from 'react';
import "../../css/news.css";
import { useNavigate } from 'react-router-dom';
import { ChampionshipContext } from '../../../Context/ChampionshipContext';


const SecondNews = (news) => {
  const { selectedChampionship } = useContext(ChampionshipContext);
  

  if (!news) {
    return (
      <div className="component hover:cursor-pointer max-w-xs m-auto mt-0 md:max-w-screen-md lg:">
        <p className="text-center">Sem notícias disponíveis</p>
      </div>
    );
  }

  const imagePath = news.news.image ? `../../../../public/img/news/capa/${news.news.image}` : "https://via.placeholder.com/800x400";

  const navigate = useNavigate();

  const handleNewsClick = (news) => {
    navigate(`/News/${news.news.id}`, { state: {news} });
  };


  return (
    <div className="component hover:cursor-pointer max-w-xs m-auto mt-0 md:max-w-screen-md lg:"
    onClick={() => handleNewsClick(news)}>
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
        <div className="duration-300 text pt-1 pb-3 px-3 border-r border-b border-l-0 border-t-0 border-solid border-gray-300 rounded-br-3xl min-h-4" style={{ '--button-border-color': selectedChampionship.color }}>
          <p className="text-xs font-formula-bold mb-1 uppercase" style={{ color: selectedChampionship.color }}>
            {news.news.tags?.[0] || 'Sem categoria'}
          </p>
          <h2 className="text-black font-titillium text-sm md:hover:underline">
            {news.news.title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SecondNews;
