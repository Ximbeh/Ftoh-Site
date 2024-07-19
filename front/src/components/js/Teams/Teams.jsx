
import Header from "../header/Header"
import Footer from "../Footer"
import { ChevronRight } from "lucide-react"
import { useNavigate } from 'react-router-dom';

const Teams = () => {
    const navigate = useNavigate();

    return (
        <div >
            <Header />
            <div className="px-4 m-auto max-w-lg md:max-w-5xl lg:max-w-7xl">
                <div className="my-10 py-4 pr-4 border-t-8 border-r-8 border-black rounded-tr-2xl">
                    <h1 className="font-formula-bold text-3xl">Equipes F1 2024</h1>
                </div>

                <div className="grid gap-10 mb-10 md:grid-cols-2 lg:grid-cols-2">
                    <div  onClick={() => navigate('/Team')} className="py-2 pr-2 border-t-2 border-r-2 border-black rounded-tr-2xl hover:pt-6 hover:border-blue-700 cursor-pointer duration-200">
                        <div className="flex justify-between items-center pb-4 border-b-2 border-gray-400">
                            <h1 className="font-formula-bold text-5xl">1</h1>
                            <div className="flex flex-col items-center">
                                <p className="font-formula-bold text-2xl">255</p>
                                <p className="font-formula-bold text-lg text-white bg-grayTotal rounded-xl px-3">PTS</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center my-4 pl-2 border-l-4 border-l-blue-700">
                            <div>
                                {/* <p className="font-formula text-sm">Max</p> */}
                                <p className="font-formula-bold text-lg">Red Bull Racing</p>
                            </div>
                            <img className="w-10" src="https://media.formula1.com/content/dam/fom-website/teams/2024/red-bull-racing-logo.png" alt="" />
                        </div>
                        <div className="border-t-2 border-gray-400 py-4">
                            <div className="flex flex-cols gap-4">
                                <div className="flex gap-2 items-center w-full border-b border-r border-gray-400 rounded-br-xl py-1 pr-2">
                                    <p className="font-formula text-xs">Max</p>
                                    <p className="font-formula-bold">Verstappen</p>
                                </div>
                                <div className="flex gap-2 items-center w-full border-b border-r border-gray-400 rounded-br-xl py-1 pr-2">
                                    <p className="font-formula text-xs">Max</p>
                                    <p className="font-formula-bold">Verstappen</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center bg-repeat bg-grade-pattern bg-2 mt-2">
                                <img className="" src="https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/red-bull-racing.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="py-2 pr-2 border-t-2 border-r-2 border-black rounded-tr-2xl hover:pt-6 hover:border-blue-700 cursor-pointer duration-200">
                        <div className="flex justify-between items-center pb-4 border-b-2 border-gray-400">
                            <h1 className="font-formula-bold text-5xl">1</h1>
                            <div className="flex flex-col items-center">
                                <p className="font-formula-bold text-2xl">255</p>
                                <p className="font-formula-bold text-lg text-white bg-grayTotal rounded-xl px-3">PTS</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center my-4 pl-2 border-l-4 border-l-blue-700">
                            <div>
                                {/* <p className="font-formula text-sm">Max</p> */}
                                <p className="font-formula-bold text-lg">Red Bull Racing</p>
                            </div>
                            <img className="w-10" src="https://media.formula1.com/content/dam/fom-website/teams/2024/red-bull-racing-logo.png" alt="" />
                        </div>
                        <div className="border-t-2 border-gray-400 py-4">
                            <div className="flex flex-cols gap-4">
                                <div className="flex gap-2 items-center w-full border-b border-r border-gray-400 rounded-br-xl py-1 pr-2">
                                    <p className="font-formula text-xs">Max</p>
                                    <p className="font-formula-bold">Verstappen</p>
                                </div>
                                <div className="flex gap-2 items-center w-full border-b border-r border-gray-400 rounded-br-xl py-1 pr-2">
                                    <p className="font-formula text-xs">Max</p>
                                    <p className="font-formula-bold">Verstappen</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center bg-repeat bg-grade-pattern bg-2 mt-2">
                                <img className="" src="https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/red-bull-racing.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="py-2 pr-2 border-t-2 border-r-2 border-black rounded-tr-2xl hover:pt-6 hover:border-blue-700 cursor-pointer duration-200">
                        <div className="flex justify-between items-center pb-4 border-b-2 border-gray-400">
                            <h1 className="font-formula-bold text-5xl">1</h1>
                            <div className="flex flex-col items-center">
                                <p className="font-formula-bold text-2xl">255</p>
                                <p className="font-formula-bold text-lg text-white bg-grayTotal rounded-xl px-3">PTS</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center my-4 pl-2 border-l-4 border-l-blue-700">
                            <div>
                                {/* <p className="font-formula text-sm">Max</p> */}
                                <p className="font-formula-bold text-lg">Red Bull Racing</p>
                            </div>
                            <img className="w-10" src="https://media.formula1.com/content/dam/fom-website/teams/2024/red-bull-racing-logo.png" alt="" />
                        </div>
                        <div className="border-t-2 border-gray-400 py-4">
                            <div className="flex flex-cols gap-4">
                                <div className="flex gap-2 items-center w-full border-b border-r border-gray-400 rounded-br-xl py-1 pr-2">
                                    <p className="font-formula text-xs">Max</p>
                                    <p className="font-formula-bold">Verstappen</p>
                                </div>
                                <div className="flex gap-2 items-center w-full border-b border-r border-gray-400 rounded-br-xl py-1 pr-2">
                                    <p className="font-formula text-xs">Max</p>
                                    <p className="font-formula-bold">Verstappen</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center bg-repeat bg-grade-pattern bg-2 mt-2">
                                <img className="" src="https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/red-bull-racing.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="py-2 pr-2 border-t-2 border-r-2 border-black rounded-tr-2xl hover:pt-6 hover:border-blue-700 cursor-pointer duration-200">
                        <div className="flex justify-between items-center pb-4 border-b-2 border-gray-400">
                            <h1 className="font-formula-bold text-5xl">1</h1>
                            <div className="flex flex-col items-center">
                                <p className="font-formula-bold text-2xl">255</p>
                                <p className="font-formula-bold text-lg text-white bg-grayTotal rounded-xl px-3">PTS</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center my-4 pl-2 border-l-4 border-l-blue-700">
                            <div>
                                {/* <p className="font-formula text-sm">Max</p> */}
                                <p className="font-formula-bold text-lg">Red Bull Racing</p>
                            </div>
                            <img className="w-10" src="https://media.formula1.com/content/dam/fom-website/teams/2024/red-bull-racing-logo.png" alt="" />
                        </div>
                        <div className="border-t-2 border-gray-400 py-4">
                            <div className="flex flex-cols gap-4">
                                <div className="flex gap-2 items-center w-full border-b border-r border-gray-400 rounded-br-xl py-1 pr-2">
                                    <p className="font-formula text-xs">Max</p>
                                    <p className="font-formula-bold">Verstappen</p>
                                </div>
                                <div className="flex gap-2 items-center w-full border-b border-r border-gray-400 rounded-br-xl py-1 pr-2">
                                    <p className="font-formula text-xs">Max</p>
                                    <p className="font-formula-bold">Verstappen</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center bg-repeat bg-grade-pattern bg-2 mt-2">
                                <img className="" src="https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/red-bull-racing.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <button className="flex  duration-200  mx-auto  mb-10 border-t-2 border-r-2 border-black rounded-tr-xl py-4 text-black font-formula hover:border-red-500 hover:text-red-500 cursor-pointer">Hall da fama <ChevronRight color="rgb(229 57 53)" /> </button>
            </div>
            <Footer />
        </div>
    )
}

export default Teams
