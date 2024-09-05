import { useQuery } from "@apollo/client";
import NewsContainer from "../News/NewsContainer";
import { GET_ALLNEWS } from "../../../queries/getAllNews";
import { useState } from "react";
import LoadingPage from '../Boundary/Loading';
import { useContext } from "react";
import { ChampionshipContext } from "../../../Context/ChampionshipContext";
import "../../css/Tabela.css"

const NewsRace = ({ race }) => {
    const { loading, error, data } = useQuery(GET_ALLNEWS);
    const [visibleCount, setVisibleCount] = useState(16);

    if (loading) return <LoadingPage />;
    if (error) return <p>Error: {error.message}</p>;

    const filteredNews = data.news.filter(news => news.raceId === race.id).reverse();
    const displayedNews = filteredNews.slice(0, visibleCount);

    const loadMore = () => setVisibleCount(prevCount => prevCount + 16);

    return (
        <div className="px-4 bg-gray-200 pb-10">
            <div className="m-auto max-w-lg md:max-w-5xl lg:max-w-7xl">
                <h3 className="py-4 font-formula uppercase text-lg lg:text-2xl lg:py-10">{race.fullName}</h3>
                <div className="bg-gray-300 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3">
                    {displayedNews.map(newsItem => (
                        <NewsContainer
                            key={newsItem.id}
                            newsItem={newsItem}
                        />
                    ))}
                </div>
                {visibleCount < filteredNews.length && (
                    <button
                        className="mt-4 font-formula text-sm border-t border-r rounded-tr-xl p-4 border-gray-400 hoverColor duration-200 text-center flex justify-center items-center mx-auto" style={{ '--champColor': selectedChampionship.color }}
                        onClick={loadMore}
                    >
                        Carregar mais +
                    </button>
                )}
            </div>
        </div>
    );
};

export default NewsRace;
