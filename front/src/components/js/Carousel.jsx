import { Carousel } from "@material-tailwind/react";
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChampionshipContext } from "../../Context/ChampionshipContext";

const NewsItem = ({ news, onClick, color }) => (
    <div className="mb-4 duration-300 text pt-1 pb-3 px-3 border-r border-b border-l-0 border-t-0 border-solid border-gray-300 rounded-br-3xl min-h-4 hover:cursor-pointer" onClick={() => onClick(news)}>
        <p className="text-xs font-formula-bold mb-1 uppercase" style={{ color }}>{news.tags[1]}</p>
        <h2 className="text-black font-titillium">{news.title || "Título da Notícia"}</h2>
    </div>
);

export function CarouselCustomNavigation({newsItems}) {
    const { selectedChampionship } = useContext(ChampionshipContext);
    const navigate = useNavigate();

    const filteredNews = newsItems
        .filter(news => news.tags.some(tag => ['Highlights', 'highlights'].includes(tag)))
        .slice(-6)
        .reverse();

    const handleNewsClick = (news) => {
        navigate(`/News/${news.newsId}`);
    };

    return (
        <div className="max-w-lg mx-auto md:max-w-screen-md lg:max-w-screen-xl">
            <div className="relative mx-2 mb-8 border-8 border-l-0 rounded-tr-xl rounded-br-xl" style={{ borderColor: selectedChampionship.color }}>
                <h1 className="font-formula-bold text-xl absolute bg-white -top-5 pr-4">Highlights</h1>
                <div className="relative w-full pr-2 xl:flex xl:gap-4">
                    <Carousel
                        className="rounded-xl py-4 md:py-6 xl:w-[450vw]"
                        navigation={({ setActiveIndex, activeIndex, length }) => (
                            <div className="absolute bottom-8 left-2/4 z-10 flex -translate-x-2/4 gap-2">
                                {Array.from({ length }).map((_, i) => (
                                    <span
                                        key={i}
                                        className={`mb-1 block h-1 cursor-pointer rounded-2xl transition-all ${activeIndex === i ? "w-12 bg-white" : "w-8 bg-white/50"}`}
                                        onClick={() => setActiveIndex(i)}
                                    />
                                ))}
                            </div>
                        )}
                    >
                        {filteredNews.map((news, index) => (
                            <div className="relative" key={news.newsId || index}>
                                <img
                                    src={news.image ? `/img/news/capa/${news.image}` : "https://via.placeholder.com/800x400"}
                                    alt={`image ${index + 1}`}
                                    className="h-full w-full object-cover hover:cursor-pointer"
                                    onClick={() => handleNewsClick(news)}
                                />
                                <div className="absolute bottom-4 left-2 flex w-full items-end md:left-4 md:bottom-6 xl:bottom-4 xl:left-2">
                                    <span className="w-1 h-11 flex" style={{ backgroundColor: selectedChampionship.color }}></span>
                                    <h2 className="ml-2 text-2xl text-white truncate w-4/5 md:w-11/12 md:ml-4 md:text-3xl xl:text-xl xl:ml-2">
                                        {news.title || "Título da Notícia"}
                                    </h2>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                    <div>
                        <div className="md:grid md:grid-cols-2 gap-x-6 gap-y-2 xl:mt-6 xl:mr-4">
                            {filteredNews.slice(0, 2).map((news, index) => (
                                <div key={news.newsId || index}>
                                    <div className="imagem overflow-hidden inline-block rounded-sm w-full hidden md:flex">
                                        <img className="w-full h-full duration-500 transition-transform mb-2" src={news.image ? `/img/news/capa/${news.image}` : "https://via.placeholder.com/800x400"} />
                                    </div>
                                    <NewsItem news={news} onClick={handleNewsClick} color={selectedChampionship.color} />
                                </div>
                            ))}
                        </div>
                        <div className="md:grid md:grid-cols-2 gap-x-6 gap-y-2 xl:mt-6 xl:mr-4">
                            {filteredNews.slice(2, 7).map((news, index) => (
                                <NewsItem key={news.newsId || index} news={news} onClick={handleNewsClick} color={selectedChampionship.color} />
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};
