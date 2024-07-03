
import Header from "../components/js/header/Header"
import NewsContainer from "../components/js/News/NewsContainer"


const News = () => {

  return (
    <>
     <Header/>
     <header className="bg-white pt-10 px-2">
      <div className="relative max-w border-t-8 border-r-8 border-red-500 rounded-tr-xl pb-14 md:max-w-3xl md:mx-auto lg:max-w-6xl">
        <h1 className="font-formula-bold text-4xl md:text-5xl lg:text-7xl bg-white absolute -top-7 lg:-top-10 left-0 pr-4">Todas notícias</h1>
      </div>
     </header>
     <main className="bg-gray-200 px-2 py-4">
      <div className="md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-2 lg:grid-cols-3  md:max-w-3xl md:mx-auto lg:max-w-6xl">
        <NewsContainer />
        <NewsContainer />
        <NewsContainer />
        <NewsContainer />
      </div>
     </main>
    
    </>
  )
}

export default News
