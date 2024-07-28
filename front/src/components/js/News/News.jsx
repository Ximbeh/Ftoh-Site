import "../../css/news.css";
import { useLocation, useParams } from "react-router-dom";
import NewsContainer from "./NewsContainer";
import Footer from "../Footer";
import Header from "../header/Header";

import { useQuery } from '@apollo/client';
import { ChampionshipContext } from '../../../Context/ChampionshipContext';
import { useNavigate } from 'react-router-dom';
import { GET_CHAMPIONSHIPS } from '../../../queries/getChampionship';
import { useContext } from "react";


const News = () => {
    const { id } = useParams();
    const location = useLocation();
    const { championshipColorHex, news } = location.state || {};
    const { selectedChampionship } = useContext(ChampionshipContext);
    const navigate = useNavigate();

    // console.log("Location state:", location.state);
    // console.log("Selected Championship:", selectedChampionship);
    // console.log("Championship Color Hex:", championshipColorHex);
    // console.log("News:", news);

    const { loading: championshipsLoading, error: championshipsError, data: championshipsData } = useQuery(GET_CHAMPIONSHIPS);

    if (championshipsLoading) return <p>Loading...</p>;
    if (championshipsError) return <p>Error: {championshipsError.message}</p>;

    const championshipId = selectedChampionship?.id;
    // console.log("Championship ID:", championshipId);

    const championship = championshipsData.championships.find(champ => champ.id === championshipId);
    // console.log("Championship found:", championship);

    if (!championship) return <p>Campeonato não encontrado</p>;

    const newsLatest = championship.seasons.flatMap(season => season.news);
    // console.log("All news:", newsLatest);

    const newsLessActual = newsLatest.filter(news => news.id !== id);
    // console.log("Filtered news:", newsLessActual);

    const mostRecent = newsLessActual.slice(newsLessActual.length - 3).reverse();
    // console.log("Most recent news:", mostRecent);
    
    const secondMostRecente = newsLessActual.slice(newsLessActual.length - 6, newsLessActual.length - 3);


    const sameTag = newsLessActual.filter(newsItem => {
        return news.tags.some(tag => newsItem.tags.includes(tag));
    }).slice(-6);
    
    const uniqueById = (array) => {
        const seen = new Set();
        return array.filter(item => {
            const duplicate = seen.has(item.id);
            seen.add(item.id);
            return !duplicate;
        });
    };
    
    // Filtra duplicatas antes de mapear
    const sameTagPlusLastNews = uniqueById(sameTag.concat(secondMostRecente)).slice(-6).reverse();
    const sameTagPlusLastNewsFourItens = uniqueById(sameTag.concat(secondMostRecente)).slice(-4).reverse();

    // console.log(sameTagPlusLastNews);
    if (!news) {
        return (
            <div>
                <Header championshipColorHex={championshipColorHex} />
                <div className="max-w-md mx-auto px-2 my-8">
                    <h1>Notícia não encontrada</h1>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div>
            <Header championshipColorHex={championshipColorHex} />
            <div className="max-w-md mx-auto px-2 my-8 md:max-w-2xl lg:max-w-5xl xl:max-w-7xl">
                <header className="flex flex-col gap-3 mb-16 md:mb-2">
                    <h4 className="uppercase font-formula text-sm lg:text-base text-gray-600">{news.tags?.[0] || 'Sem categoria'}</h4>
                    <h2 className="font-formula text-2xl lg:text-5xl mb-1">{news.title}</h2>
                    <p className="font-titillium text-xs lg:text-base text-gray-500">Escrito por {news.writer}</p>
                </header>
                <div className="hidden md:flex gap-2 py-4">
                    {news.tags?.map(tag => (
                        <button key={tag} className="text-xs text-red-500 font-formula py-2 px-3 border-2 border-red-500 rounded-lg uppercase hover:border-4">
                            {tag}
                        </button>
                    ))}
                </div>
                <div className="lg:grid lg:grid-cols-news gap-4">
                    <div>
                        <img className="w-full object-contain border-t-8 border-r-8 rounded-tr-xl" style={{ borderColor: championshipColorHex }} src={news.image ? `../../../../img/news/capa/${news.image}` : "https://via.placeholder.com/800x400"} alt="Notícia" />
                        <p className="mt-10 font-titillium font-bold lg:text-xl">{news.headline}</p>
                        <div className="mt-5 font-titillium lg:text-xl">
                            <p>{news.text}</p>
                        </div>
                        <div className="mt-5">
                            <img className="rounded-tr-xl w-full object-contain" src={news.image ? `../../../../img/news/capa/${news.image}` : "https://via.placeholder.com/800x400"} alt="Notícia" />
                            <p className="pb-2 mt-2 text-xs text-gray-500 font-titillium border-b border-r border-gray-500 rounded-br-lg">{news.description}</p>
                        </div>
                    </div>
                    <div className="hidden lg:flex flex-col gap-4">
                        <h3 className="py-2 border-t border-r border-gray-500 rounded-tr-xl font-formula-bold uppercase text-lg">Recentes</h3>
                        {mostRecent.map(newsItem => (
                            <NewsContainer
                                key={newsItem.id}
                                newsItem={newsItem}
                                championshipColorHex={championshipColorHex} 
                            />
                        ))}
                    </div>
                </div>
                <div className="mt-10 flex gap-2 py-4 border-b-8 border-r-8 rounded-br-xl border-gray-400">
                    {news.tags?.map(tag => (
                        <button key={tag} className="text-xs text-red-500 font-formula py-2 px-3 border-2 border-red-500 rounded-lg uppercase hover:border-4">
                            {tag}
                        </button>
                    ))}
                </div>
                <div className="mt-10">
                    <h2 className="font-formula-bold text-xl lg:text-3xl">Você também vai curtir</h2>
                    <div className="mt-2 md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-2 lg:hidden md:max-w-3xl md:mx-auto">
                        {sameTagPlusLastNewsFourItens.map(newsItem => (
                            <NewsContainer
                                key={newsItem.id}
                                newsItem={newsItem}
                                championshipColorHex={championshipColorHex} 
                            />
                        ))}
                    </div>
                    <div className="hidden  mt-2 md:grid-cols-2 md:gap-x-4 md:gap-y-2 lg:grid lg:grid-cols-3 lg:max-w-6xl">
                        {sameTagPlusLastNews.map(newsItem => (
                            <NewsContainer
                                key={newsItem.id}
                                newsItem={newsItem}
                                championshipColorHex={championshipColorHex} 
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default News;
