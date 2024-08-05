import NewsContainer from "../News/NewsContainer"
import ResumeRace from "./ResumeRace"

import { ChevronRight, ChevronLeft } from "lucide-react"
import { ChampionshipContext } from '../../../Context/ChampionshipContext';
import { } from "@apollo/client"
import { useContext, useEffect } from "react"



const CalendarRace = (raceObj) => {
    const { selectedChampionship } = useContext(ChampionshipContext);

    const race = raceObj.race

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);


    return (
        <div className="px-4 py-10 bg-gray-200">
            {race.finished && <ResumeRace race={race} selectedChampionship={selectedChampionship} />}


            <div className="m-auto max-w-lg md:max-w-5xl lg:max-w-7xl">
                <h2 className="font-formula-bold text-2xl mb-4 uppercase">Programação   </h2>
                <h3 className="uppercase font-formula text-xl mb-4">{race.fullName}</h3>

                <div className="border-t-8 border-r-8 rounded-tr-2xl p-2 flex gap-2 flex-col" style={{ borderColor: selectedChampionship.color }}>
                    {race.phases.map(phase => (
                        <div className="bg-white p-2 rounded-lg flex gap-4" key={phase.id}>
                            <div className="border-r border-gray-500 p-2 pr-4 flex flex-col justify-center items-center">
                                <p className="font-formula text-lg">{phase.dayOfMonth ? phase.dayOfMonth : '??'}</p>
                                <p className="bg-gray-200 text-gray-600 rounded-xl text-sm px-2 py-1 font-formula">{phase.Month ? phase.Month : '??'}</p>
                            </div>
                            <div className="flex flex-col justify-center">
                                <h4 className="font-formula-bold text-lg">{phase.name}</h4>
                                <p className="font-titillium">{phase.hour}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default CalendarRace
