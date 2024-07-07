import "../../css/news.css"
import NewsContainer from "./NewsContainer"
import Footer from "../Footer"
import Header from "../header/Header"

const News = () => {

    return (
        <div>
            <Header />
            <div className="max-w-md mx-auto px-2 my-8 md:max-w-2xl lg:max-w-5xl xl:max-w-7xl">
                <header className="flex flex-col gap-3 mb-16 md:mb-2">
                    <h4 className="uppercase font-formula text-sm lg:text-base text-gray-600">Tag</h4>
                    <h2 className="font-formula text-2xl lg:text-5xl mb-1">Titulo</h2>
                    <p className="font-titillium text-xs lg:text-base text-gray-500">Tempo</p>
                </header>
                <div className="hidden md:flex gap-2 py-4">
                    <button className="text-xs text-red-500 font-formula py-2 px-3 border-2 border-red-500 rounded-lg uppercase hover:border-4">Tag 1</button>
                    <button className="text-xs text-red-500 font-formula py-2 px-3 border-2 border-red-500 rounded-lg uppercase hover:border-4">Tag 2</button>
                    <button className="text-xs text-red-500 font-formula py-2 px-3 border-2 border-red-500 rounded-lg uppercase hover:border-4">Tag 3</button>
                </div>
                <div className="lg:grid lg:grid-cols-news gap-4">
                    <div>
                        <img className="w-full object-contain border-t-8 border-r-8 rounded-tr-xl border-red-500" src="https://media.formula1.com/image/upload/t_16by9North/f_auto/q_auto/v1719156582/fom-website/2024/Spain/GettyImages-2158857659.jpg.transform/4col/image.jpg" />
                        <p className="mt-10 font-titillium font-bold lg:text-xl">Manchete</p>
                        <div className="mt-5 font-titillium lg:text-xl">
                            <p>Texto</p>
                        </div>
                        <div className="mt-5">
                            <img className="rounded-tr-xl w-full object-contain border-b-8 border-red-500" src="https://media.formula1.com/image/upload/t_16by9North/f_auto/q_auto/v1719156582/fom-website/2024/Spain/GettyImages-2158857659.jpg.transform/4col/image.jpg" />
                            <p className="pb-2 mt-2 text-xs text-gray-500 font-titillium border-b border-r border-gray-500 rounded-br-lg">Descrição</p>
                        </div>

                    </div>
                    <div className="hidden lg:flex flex-col gap-4">
                        <h3 className="py-2 border-t border-r border-gray-500 rounded-tr-xl font-formula-bold uppercase text-lg">Recentes</h3>
                        <NewsContainer/>
                        <NewsContainer/>
                        <NewsContainer/>
                    </div>
                </div>
                <div className="mt-10 flex gap-2 py-4 border-b-8 border-r-8 rounded-br-xl border-gray-400">
                    <button className="text-xs text-red-500 font-formula py-2 px-3 border-2 border-red-500 rounded-lg uppercase hover:border-4">Tag 1</button>
                    <button className="text-xs text-red-500 font-formula py-2 px-3 border-2 border-red-500 rounded-lg uppercase hover:border-4">Tag 2</button>
                    <button className="text-xs text-red-500 font-formula py-2 px-3 border-2 border-red-500 rounded-lg uppercase hover:border-4">Tag 3</button>
                </div>
                <div className="mt-10">
                    <h2 className="font-formula-bold text-xl lg:text-3xl">Você também vai curtir</h2>
                    <div className="mt-2 md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-2 lg:grid-cols-3  md:max-w-3xl md:mx-auto lg:max-w-6xl">
                        <a onClick={() => navigate('/News')}>
                            <NewsContainer />
                        </a>
                        <NewsContainer />
                        <NewsContainer />
                        <NewsContainer />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default News
