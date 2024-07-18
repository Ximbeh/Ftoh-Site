import NewsContainer from "../News/NewsContainer"

const NewsRace = () => {
    return (
        <div className="px-4 bg-gray-200 pb-10">
            <div className="m-auto max-w-lg md:max-w-5xl lg:max-w-7xl">
                <h3 className="py-4 font-formula uppercase text-lg lg:py-10">Nome completo da corrida formula 1 2024</h3>
                <div className="bg-gray-300 md:grid md:grid-cols-2 md:gap-4 md:bg-gray-200 lg:grid-cols-3">
                    <NewsContainer />
                    <NewsContainer />
                    <NewsContainer />
                </div>
                <button className="mt-4 font-formula text-sm border-t border-r rounded-tr-xl p-4 border-gray-400 hover:border-red-500 hover:text-red-500 duration-200 text-center flex justify-center items-center mx-auto">Carregar mais +</button>

            </div>
        </div>
    )
}

export default NewsRace
