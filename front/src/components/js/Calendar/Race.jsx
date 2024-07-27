
import Header from "../header/Header"
import Footer from "../Footer"
import CalendarRace from "./CalendarRace"
import NewsRace from "./NewsRace"
import Circuit from "./Circuit"

import "../../css/Calendar.css"
import { useState } from "react"



const Race = () => {
    const [activeTab, setActiveTab] = useState('Calendário');

    const handleActive = (e) => {
        const tabName = e.target.textContent;
        setActiveTab(tabName);
    };
    // console.log(activeTab);

    return (
        <div>
            <Header></Header>
            <header className="bg-image-header-race bg-cover text-white">
                <div className="bg-grayTotal bg-opacity-70 w-full h-full p-10 md:p-20 flex flex-col items-center">
                    <h1 className="font-formula-bold text-4xl md:text-7xl text-center">Saudi Arabia</h1>
                    <h3 className="font-formula-bold text-5xl text-transparent text-stroke-white">2024</h3>
                    <p className="bg-black font-formula text-sm md:text-md px-2 py-1 rounded-xl mt-4">07 - 09 Mar</p>

                </div>
            </header>

            <div className='px-6 relative w-full flex justify-center items-center gap-4 sm:gap-11 font-formula bg-grayTotal text-white text-sm sm:text-base'>
                <a
                    onClick={handleActive}
                    className={`cursor-pointer pb-4 py-6 ${activeTab === 'Calendário' ? 'active border-grayTotal border-b-4' : 'border-grayTotal border-b-4 hover:border-red-500'}`}
                >
                    Calendário
                </a>
                <a
                    onClick={handleActive}
                    className={`cursor-pointer pb-4 py-6 ${activeTab === 'Notícias' ? 'active border-grayTotal border-b-4' : 'border-grayTotal border-b-4 hover:border-red-500'}`}
                >
                    Notícias
                </a>
                <a
                    onClick={handleActive}
                    className={`cursor-pointer pb-4 py-6 ${activeTab === 'Circuito' ? 'active border-grayTotal border-b-4' : 'border-grayTotal border-b-4 hover:border-red-500'}`}
                >
                    Circuito
                </a>
            </div>

            {activeTab === 'Calendário' && <CalendarRace />}
            {activeTab === 'Notícias' && <NewsRace />}
            {activeTab === 'Circuito' && <Circuit/>}
            <Footer></Footer>
        </div>
    )
}

export default Race
