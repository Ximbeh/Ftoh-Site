import NewsContainer from "../News/NewsContainer"
import firstLogo from "../../../assets/First.svg"
import secondLogo from "../../../assets/Second.png"
import thirdLogo from "../../../assets/Third.svg"
import { ChevronRight, ChevronLeft } from "lucide-react"

const ResumeRace = () => {
    return (
        <div className="px-4 py-10 bg-gray-200">
            <div className="relative border-t-8 border-r-8 rounded-tr-xl border-gray-500 pr-2 m-auto max-w-lg md:max-w-5xl lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-4">
                <div>
                    <p className="bg-gray-200 pr-4 text-gray-500 font-formula uppercase absolute -top-3.5 text-xs">Review da Corrida</p>
                    <h3 className="mt-3 font-formula text-gray-900 text-lg md:text-2xl mb-3">Resumo da corrida escrito aqui</h3>
                    
                    <div className="grid gap-1 mb-4">
                        <div className="bg-white p-4 flex  justify-between items-center">
                            <div className="flex flex-cols">
                                <img className="max-w-5 mr-4 sm:max-w-8" src={firstLogo} alt="" />
                                <p className="font-formula mr-1 hidden md:flex">Max</p>
                                <p className="font-formula-bold text-sm sm:text-base uppercase">Verstappen</p>
                            </div>
                            <p className="text-xs px-2 bg-gray-200 rounded-xl">1:20:43.273</p>
                        </div>
                        <div className="bg-white p-4 flex  justify-between items-center">
                            <div className="flex flex-cols">
                                <img className="max-w-5 sm:max-w-8 max-h-2 sm:max-h-4 self-center mr-4" src={secondLogo} alt="" />
                                <p className="font-formula mr-1 hidden md:flex">Max</p>
                                <p className="font-formula-bold text-sm sm:text-base uppercase">Verstappen</p>
                            </div>
                            <p className="text-xs px-2 bg-gray-200 rounded-xl">1:20:43.273</p>
                        </div>
                        <div className="bg-white p-4 flex  justify-between items-center">
                            <div className="flex flex-cols">
                                <img className="max-w-5 mr-4 sm:max-w-8" src={thirdLogo} alt="" />
                                <p className="font-formula mr-1 hidden md:flex">Max</p>
                                <p className="font-formula-bold text-sm sm:text-base uppercase">Verstappen</p>
                            </div>
                            <p className="text-xs px-2 bg-gray-200 rounded-xl">1:20:43.273</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 mb-2 md:flex-row">
                        <button className="w-full md:w-min flex justify-between items-center bg-red-500 text-white rounded-md text-start px-4 py-3 font-formula text-xs uppercase">Resultados <ChevronRight color="white" /></button>
                        <button className="w-full md:w-min flex justify-between items-center border-2 border-gray-400 rounded-md text-start px-4 py-3 font-formula text-xs hover:border-red-500 duration-200 uppercase">Highlights <ChevronRight color="rgb(229 57 53)" /></button>
                    </div>

                </div>
                <div className="flex flex-col gap-1 md:grid md:grid-cols-2 md:gap-4 lg:mt-4">
                    <div>
                        <NewsContainer />
                    </div>
                    <div>
                        <NewsContainer />
                    </div>
                    <div className="md:hidden">
                        <NewsContainer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResumeRace
