import "../../css/news.css";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ChampionshipContext } from "../../../context/ChampionshipContext";


const NewsContainer = ({ newsItem }) => {
  // console.log("NewsContainer props:", { newsItem });
  const { selectedChampionship } = useContext(ChampionshipContext);

  if (!newsItem) {
    return (
      <div className="component hover:cursor-pointer max-w-xs m-auto mt-0 md:max-w-screen-md lg:">
        <p className="text-center">Sem notícias disponíveis</p>
      </div>
    );
  }

  const { tags, title, image } = newsItem;
  const imagePath = image ? `../../../../img/news/capa/${image}` : "https://via.placeholder.com/800x400";


  const navigate = useNavigate();

  const handleNewsClick = (news) => {
    navigate(`/News/${newsItem.id}`, { state: { news} });
  };
  return (
    <div className="overflow-hidden newsContainer bg-white py-3 hover:bg-grayTotal cursor-pointer flex flex-row gap-4 mb-2 hover:text-white transition ease-out duration-300 md:flex-col md:py-0 md:pb-4 md:gap-0 md:rounded-b-xl"
    onClick={() => handleNewsClick(newsItem)}>
      <img className="inline-block w-2/5 md:w-full object-contain duration-500 transition-transform mb-2" src={imagePath} alt="Notícia" />
      <div className="md:p-4">
        <h5 className="text-sm font-formula-bold mb-2"
           style={{color: selectedChampionship.color}}>{tags[0]}</h5>
        <p className="text-sm md:text-base md:font-formula font-titillium">{title}</p>
      </div>
    </div>
  );
}

export default NewsContainer;
