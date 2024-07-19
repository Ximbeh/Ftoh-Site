
import Header from "../header/Header"
import Footer from "../Footer"
import NewsContainer from "../News/NewsContainer"
import { ChevronRight } from "lucide-react"

const Pilot = () => {
    return (
        <div className="bg-gray-200">
            <Header />
            <div className="bg-gray-200 px-4 m-auto max-w-lg md:max-w-5xl lg:max-w-7xl pt-4">
                <div className="bg-white">
                    <div className="grid md:grid-cols-2">
                        <div>
                            <img className="lg:h-1/2 w-full lg:object-cover lg:object-top "src="https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/2024Drivers/verstappen" alt="" />
                            <div className="py-5 pt-10 px-4 border-b border-gray-500 md:border-0 md:px-10">
                                <div className="flex flex-cols items-center gap-4">
                                    <h4 className="font-formula text-gray-600 text-3xl md:text-4xl">1</h4>
                                    <img className="w-14 rounded border border-gray-500" src="https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/netherlands-flag.png" alt="" />
                                </div>
                                <h3 className="font-formula-bold text-2xl md:text-5xl">Max Verstappen</h3>
                            </div>

                        </div>
                        <div className="py-5 pt-10 px-4 border-b border-gray-500 md:ml-10 md:border-0">
                            <div className="mb-10 md:mb-5">
                                <h5 className="font-formula-bold mb-1">Time</h5>
                                <p className="font-formula text-sm">Red Bull Racing</p>
                            </div>

                            <div className="mb-10 md:mb-5">
                                <h5  className="font-formula-bold mb-1">País</h5>
                                <p className="font-formula text-sm">Países-Baixos</p>
                            </div>

                            <div className="mb-10 md:mb-5">
                                <h5  className="font-formula-bold mb-1">Pódios</h5>
                                <p className="font-formula text-sm">107</p>
                            </div>
                            <div className="mb-10 md:mb-5">
                                <h5  className="font-formula-bold mb-1">Pontos</h5>
                                <p className="font-formula text-sm">2841.5</p>
                            </div>
                            <div className="mb-10 md:mb-5">
                                <h5  className="font-formula-bold mb-1">Grand Premios participados</h5>
                                <p className="font-formula text-sm">197</p>
                            </div>
                            <div className="mb-10 md:mb-5">
                                <h5  className="font-formula-bold mb-1">Campeonatos</h5>
                                <p className="font-formula text-sm">3</p>
                            </div>
                            <div className="mb-10 md:mb-5">
                                <h5  className="font-formula-bold mb-1">Maior posição final</h5>
                                <p className="font-formula text-sm">1 (x61)</p>
                            </div>
                            <div className="mb-10 md:mb-5">
                                <h5  className="font-formula-bold mb-1">Maior posição no grid</h5>
                                <p className="font-formula text-sm">1</p>
                            </div>
                            <div className="mb-10 md:mb-5">
                                <h5  className="font-formula-bold mb-1">Pole Position</h5>
                                <p className="font-formula text-sm">105</p>
                            </div>
                            <div className="mb-10 md:mb-5">
                                <h5  className="font-formula-bold mb-1">Voltas mais rapidas</h5>
                                <p className="font-formula text-sm">97</p>
                            </div>
                        </div>

                    </div>
                    <div className="px-4 py-10 mb-4">
                        <h2 className="mb-10 font-formula text-center text-4xl">História</h2>
                        <div className="mb-10">
                            <h4 className="font-formula-bold mb-1 text-2xl">2023</h4>
                            <p className="font-titillium">História do piloto aqui blablablabla</p>
                        </div>
                        <div>
                            <h4 className="font-formula-bold mb-1 text-2xl">2024</h4>
                            <p className="font-titillium">História do piloto aqui blablablabla</p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-1 py-4 bg-gray-200 xl:grid-cols-4">
                        <NewsContainer />
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

export default Pilot
