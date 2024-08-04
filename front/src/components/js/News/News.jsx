import "../../css/news.css";
import { useLocation, useParams } from "react-router-dom";
import NewsContainer from "./newscontainer";
import Footer from "../footer";
import Header from "../header/header";
import { useQuery } from '@apollo/client';
import { ChampionshipContext } from '../../../context/championshipContext';
import { useNavigate } from 'react-router-dom';
import { GET_CHAMPIONSHIPS } from '../../../queries/getChampionship';
import { useContext, useEffect, useState } from "react";
import { GET_ALLNEWS } from '../../../queries/getAllNews';
import LoadingPage from '../boundary/loading'

const News = () => {
    const { id } = useParams();
    const location = useLocation();
    const { news: initialNews = {} } = location.state || {};
    const { selectedChampionship } = useContext(ChampionshipContext);
    const navigate = useNavigate();

    const [news, setNews] = useState(initialNews);

    const { loading: championshipsLoading, error: championshipsError, data: championshipsData } = useQuery(GET_CHAMPIONSHIPS);
    const { loading: newsLoading, error: newsError, data: newsData } = useQuery(GET_ALLNEWS);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    useEffect(() => {
        if (!news.id && newsData) {
            const fetchedNews = newsData.news.find(item => item.id == id);
            if (fetchedNews) {
                setNews(fetchedNews);
            }
        }
    }, [newsData, id, news.id]); // Ensure to include news.id in dependencies


    if (championshipsLoading || newsLoading) return <LoadingPage/>;
    if (championshipsError || newsError) return <p>Error: {championshipsError?.message || newsError?.message}</p>;

    const championshipId = selectedChampionship?.id;
    const championship = championshipsData?.championships.find(champ => champ.id === championshipId);

    if (!championship) return <p>Campeonato não encontrado</p>;

    const newsLatest = championship.seasons.flatMap(season => season.news);
    const newsLessActual = newsLatest.filter(newsItem => newsItem.id !== id);
    const mostRecent = newsLessActual.slice(newsLessActual.length - 3).reverse();
    const secondMostRecente = newsLessActual.slice(newsLessActual.length - 6, newsLessActual.length - 3);

    const sameTag = newsLessActual.filter(newsItem => {
        return news.tags?.some(tag => newsItem.tags.includes(tag));
    }).slice(-6);

    const uniqueById = (array) => {
        const seen = new Set();
        return array.filter(item => {
            const duplicate = seen.has(item.id);
            seen.add(item.id);
            return !duplicate;
        });
    };

    const sameTagPlusLastNews = uniqueById(sameTag.concat(secondMostRecente)).slice(-6).reverse();
    const sameTagPlusLastNewsFourItens = uniqueById(sameTag.concat(secondMostRecente)).slice(-4).reverse();

    if (!news.id) {
        return (
            <div>
                <Header />
                <div className="max-w-md mx-auto px-2 my-8">
                    <h1>Notícia não encontrada</h1>
                </div>
                <Footer />
            </div>
        );
    }

    const handleTagClick = (tag) => {
        
        navigate('/latest', { state: { tag } });
    };

    return (
        <div>
            <Header />
            <div className="max-w-md mx-auto px-2 my-8 md:max-w-2xl lg:max-w-5xl xl:max-w-7xl">
                <header className="flex flex-col gap-3 mb-16 md:mb-2">
                    <h4 className="uppercase font-formula text-sm lg:text-base text-gray-600">{news.tags?.[0] || 'Sem categoria'}</h4>
                    <h2 className="font-formula text-2xl lg:text-5xl mb-1">{news.title}</h2>
                    <p className="font-titillium text-xs lg:text-base text-gray-500">Escrito por {news.writer}</p>
                </header>
                <div className="hidden md:flex gap-2 py-4">
                    {news.tags?.map(tag => (
                        <button
                            key={tag}
                            className="text-xs  font-formula py-2 px-3 border-2  rounded-lg uppercase hover:border-4"
                            style={{color: selectedChampionship.color, borderColor: selectedChampionship.color}}
                            onClick={() => handleTagClick(tag)}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
                <div className="lg:grid lg:grid-cols-news gap-4">
                    <div>
                        <img className="w-full object-contain border-t-8 border-r-8 rounded-tr-xl" style={{ borderColor: selectedChampionship.color }} src={news.image ? `../../../../img/news/capa/${news.image}` : "https://via.placeholder.com/800x400"} alt="Notícia" />
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
                            
                            />
                        ))}
                    </div>
                </div>
                <div className="mt-10 flex gap-2 py-4 border-b-8 border-r-8 rounded-br-xl border-gray-400">
                    {news.tags?.map(tag => (
                        <button
                            key={tag}
                            className="text-xs  font-formula py-2 px-3 border-2  rounded-lg uppercase hover:border-4"
                            style={{color: selectedChampionship.color, borderColor: selectedChampionship.color}}
                            onClick={() => handleTagClick(tag)}
                        >
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
                                
                            />
                        ))}
                    </div>
                    <div className="hidden  mt-2 md:grid-cols-2 md:gap-x-4 md:gap-y-2 lg:grid lg:grid-cols-3 lg:max-w-6xl">
                        {sameTagPlusLastNews.map(newsItem => (
                            <NewsContainer
                                key={newsItem.id}
                                newsItem={newsItem}
                                
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
