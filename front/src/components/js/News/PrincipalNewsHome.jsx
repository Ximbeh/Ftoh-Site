import React, { forwardRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChampionshipContext } from '../../../Context/ChampionshipContext';



const PrincipalNewsHome = forwardRef(({ news, index }, ref) => {
  const { selectedChampionship } = useContext(ChampionshipContext);
  
  if (!news) {
    return (
      <div ref={ref} className="principalHome py-6 lg:py-0 font-formula bg-white">
        <p className="text-center">Sem notícias disponíveis</p>
      </div>
    );
  }

  // console.log("index: " + index);

  const { tags, title, image } = news;
  const imagePath = image ? `/img/news/capa/${image}` : "https://via.placeholder.com/800x400";
  const navigate = useNavigate();

  const handleNewsClick = (news) => {
    navigate(`/News/${news.id}`, { state: {news} });
  };

  const tagsString = tags[0];
  const tagArray = tagsString.split(', ');
  const firstTag = tagArray[0];

  return (
    <div ref={ref} className="principalHome py-6 lg:py-0 font-formula bg-white">
      <div
        className="hover:cursor-pointer pt-3 pr-3 border-l-0 border-b-0 border-r-8 border-t-8 border-solid rounded-tr-3xl max-w-lg m-auto
        md:max-w-screen-md lg:"
        style={{ borderColor: selectedChampionship.color }}
        onClick={() => handleNewsClick(news)}
      >
        <p className="text-xs font-formula-bold mb-1 uppercase" style={{ color: selectedChampionship.color }}>
          {firstTag || 'Sem categoria'}
        </p>
        <h2 className="text-black text-2xl font-formula-bold mb-5 hover:underline">{title}</h2>
        <div className="overflow-hidden inline-block rounded-sm w-full">
          <img className="w-full h-full hover:scale-110 duration-500 transition-transform mb-2" src={imagePath} alt="News" />
        </div>
        <span className="flex w-full h-4 bg-repeat bg-grade-pattern bg-2 lg:hidden" />
      </div>
    </div>
  );
});

export default PrincipalNewsHome;
