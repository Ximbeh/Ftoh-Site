import NewsContainer from "../News/NewsContainer"
import ResumeRace from "./ResumeRace"

import firstLogo from "../../../assets/First.svg"
import secondLogo from "../../../assets/Second.png"
import thirdLogo from "../../../assets/Third.svg"
import { ChevronRight, ChevronLeft } from "lucide-react"

const CalendarRace = () => {
    return (
        <div className="px-4 py-10 bg-gray-100">
            <ResumeRace/>

            <div className="m-auto max-w-lg md:max-w-5xl lg:max-w-7xl">
                <h2 className="font-formula-bold text-2xl mb-4 uppercase">Semana de corrida</h2>
                <h3 className="uppercase font-formula text-xl mb-4">Nome completo da corrida de Formula-1 2024</h3>

                <div className="border-t-8 border-r-8 border-red-500 rounded-tr-2xl p-2 flex gap-2 flex-col">
                    <div className="bg-white p-2 rounded-lg flex gap-4">
                        <div className="border-r border-gray-500 p-2 pr-4 flex flex-col justify-center items-center ">
                            <p className="font-formula text-lg">2</p>
                            <p className="bg-gray-200 text-gray-600 rounded-xl text-sm px-2 py-1 font-formula">Mar</p>
                        </div>
                        <div className="flex flex-col justify-center">
                            <h4 className="font-formula-bold text-lg">Treino-Livre 3</h4>
                                <p className="font-titillium">🏁 Finalizado</p>    
                        </div>
                    </div>
                    <div className="bg-white p-2 rounded-lg flex gap-4">
                        <div className="border-r border-gray-500 p-2 pr-4 flex flex-col justify-center items-center ">
                            <p className="font-formula text-lg">2</p>
                            <p className="bg-gray-200 text-gray-600 rounded-xl text-sm px-2 py-1 font-formula">Mar</p>
                        </div>
                        <div className="flex flex-col justify-center">
                            <h4 className="font-formula-bold text-lg">Treino-Livre 3</h4>
                                <p className="font-titillium">🏁 Finalizado</p>    
                        </div>
                    </div>
                    <div className="bg-white p-2 rounded-lg flex gap-4">
                        <div className="border-r border-gray-500 p-2 pr-4 flex flex-col justify-center items-center ">
                            <p className="font-formula text-lg">2</p>
                            <p className="bg-gray-200 text-gray-600 rounded-xl text-sm px-2 py-1 font-formula">Mar</p>
                        </div>
                        <div className="flex flex-col justify-center">
                            <h4 className="font-formula-bold text-lg">Treino-Livre 3</h4>
                                <p className="font-titillium">🏁 Finalizado</p>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CalendarRace
