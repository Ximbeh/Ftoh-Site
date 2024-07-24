
import Header from "../header/Header"
import Footer from "../Footer"
import { ChevronRight } from "lucide-react"

import { useNavigate } from 'react-router-dom';

const Results = () => {
    const navigate = useNavigate();

    return (
        <div >
            <Header />
            <div className="bg-gray-200 pb-10">
                <div className="m-auto max-w-lg md:max-w-5xl lg:max-w-7xl pt-4">
                    <div className="px-4  flex flex-col gap-4 pb-10">
                        <select className="rounded-t-sm border-b-2 border-gray-400 font-formula px-2 py-4" name="year" id="year">
                            <option value="2024">2024</option>
                            <option value="2023">2023</option>
                        </select>
                        <select className="rounded-t-sm border-b-2 border-gray-400 font-formula px-2 py-4" name="category" id="category">
                            <option value="races">Corridas</option>
                            <option value="drivers">Pilotos</option>
                            <option value="teams">Times</option>
                            <option value="fast-lap">Fast-Lap</option>
                        </select>
                        <select className="rounded-t-sm border-b-2 border-gray-400 font-formula px-2 py-4" name="race" id="race">
                            <option value="all">All</option>
                            <option value="qatar">Qatar</option>
                            <option value="brasil">Brasil</option>

                        </select>
                    </div>
                    <div className="bg-white md:px-6 md:m-auto md:max-w-5xl lg:max-w-7xl">
                        <h2 className="px-4 py-10 font-formula-bold text-xl md:px-0 md:text-3xl">2024 - Resultado das corridas</h2>
                        <div className="">
                            <table className="min-w-full divide-y divide-gray-200 font-formula">
                                <thead>
                                    <tr>
                                        <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grand Prix</th>
                                        <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:table-cell hidden">Date</th>
                                        <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Winner</th>
                                        <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Car</th>
                                        <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:table-cell hidden">Laps</th>
                                        <th className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider lg:table-cell hidden">Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-gray-300">
                                        <td className="pl-3 py-4 whitespace-nowrap text-xs font-medium text-gray-900">Monaco</td>
                                        <td className="pl-3 py-4 whitespace-nowrap text-xs text-gray-900 md:table-cell hidden">28 May 2023</td>
                                        <td className="pl-3 py-4 whitespace-nowrap text-xs text-gray-900">
                                            <span className="md:hidden">Lew</span>
                                            <span className="hidden md:inline">Lewis Hamilton</span>
                                        </td>
                                        <td className="pl-3 py-4 whitespace-nowrap text-xs text-gray-900">Mercedes</td>
                                        <td className="pl-3 py-4 whitespace-nowrap text-xs text-gray-900 md:table-cell hidden">78</td>
                                        <td className="pl-3 py-4 whitespace-nowrap text-xs text-gray-900 lg:table-cell hidden">1:31:444</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="pl-3 py-4 whitespace-nowrap text-xs font-medium text-gray-900">British</td>
                                        <td className="pl-3 py-4 whitespace-nowrap text-xs text-gray-900 md:table-cell hidden">09 Jul 2023</td>
                                        <td className="pl-3 py-4 whitespace-nowrap text-xs text-gray-900">
                                            <span className="md:hidden">Max</span>
                                            <span className="hidden md:inline">Max Verstappen</span>
                                        </td>
                                        <td className="pl-3 py-4 whitespace-nowrap text-xs text-gray-900">Red Bull</td>
                                        <td className="pl-3 py-4 whitespace-nowrap text-xs text-gray-900 md:table-cell hidden">52</td>
                                        <td className="pl-3 py-4 whitespace-nowrap text-xs text-gray-900 lg:table-cell hidden">1:27:256</td>
                                    </tr>
                                    <tr className="bg-gray-300">
                                        <td className="pl-3 py-4 whitespace-nowrap text-xs font-medium text-gray-900">Italian</td>
                                        <td className="pl-3 py-4 whitespace-nowrap text-xs text-gray-900 md:table-cell hidden">03 Sep 2023</td>
                                        <td className="pl-3 py-4 whitespace-nowrap text-xs text-gray-900">
                                            <span className="md:hidden">Lec</span>
                                            <span className="hidden md:inline">Charles Leclerc</span>
                                        </td>
                                        <td className="pl-3 py-4 whitespace-nowrap text-xs text-gray-900">Ferrari</td>
                                        <td className="pl-3 py-4 whitespace-nowrap text-xs text-gray-900 md:table-cell hidden">53</td>
                                        <td className="pl-3 py-4 whitespace-nowrap text-xs text-gray-900 lg:table-cell hidden">1:21:745</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="pl-3 py-4 whitespace-nowrap text-xs font-medium text-gray-900">Japanese</td>
                                        <td className="pl-3 py-4 whitespace-nowrap text-xs text-gray-900 md:table-cell hidden">24 Sep 2023</td>
                                        <td className="pl-3 py-4 whitespace-nowrap text-xs text-gray-900">
                                            <span className="md:hidden">Per</span>
                                            <span className="hidden md:inline">Sergio Perez</span>
                                        </td>
                                        <td className="pl-3 py-4 whitespace-nowrap text-xs text-gray-900">Red Bull</td>
                                        <td className="pl-3 py-4 whitespace-nowrap text-xs text-gray-900 md:table-cell hidden">53</td>
                                        <td className="pl-3 py-4 whitespace-nowrap text-xs text-gray-900 lg:table-cell hidden">1:29:552</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Results
