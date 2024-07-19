
import Header from "../header/Header"
import Footer from "../Footer"
import NewsContainer from "../News/NewsContainer"
import { ChevronRight } from "lucide-react"




const Team = () => {

    return (
        <div className="bg-gray-200">
            <Header />
            <div className="bg-gray-200 px-4 m-auto max-w-lg md:max-w-5xl lg:max-w-7xl pt-4">
                <div className="bg-white">
                    <div className="grid md:grid-cols-2">
                        <div>
                            <div>
                                <img className="w-60 mt-4 mx-auto lg:h-1/2 lg:object-cover lg:object-top " src="https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/2018-redesign-assets/team%20logos/red%20bull" alt="" />

                            </div>
                            <div className="py-5 pt-10 px-4 border-b border-gray-500 md:ml-10 md:border-0">
                                <div className="mb-10 md:mb-5">
                                    <h5 className="font-formula-bold mb-1">Nome completo</h5>
                                    <p className="font-formula text-sm">Oracle Red Bull Racing</p>
                                </div>

                                <div className="mb-10 md:mb-5">
                                    <h5 className="font-formula-bold mb-1">Chefe de equipe</h5>
                                    <p className="font-formula text-sm">Cristian Honner</p>
                                </div>

                                <div className="mb-10 md:mb-5">
                                    <h5 className="font-formula-bold mb-1">Motor</h5>
                                    <p className="font-formula text-sm">BMW</p>
                                </div>
                                <div className="mb-10 md:mb-5">
                                    <h5 className="font-formula-bold mb-1">Primeira aparição</h5>
                                    <p className="font-formula text-sm">1993</p>
                                </div>
                                <div className="mb-10 md:mb-5">
                                    <h5 className="font-formula-bold mb-1">Campeonatos</h5>
                                    <p className="font-formula text-sm">3</p>
                                </div>
                                <div className="mb-10 md:mb-5">
                                    <h5 className="font-formula-bold mb-1">Maior posição final</h5>
                                    <p className="font-formula text-sm">1 (x120)</p>
                                </div>
                                <div className="mb-10 md:mb-5">
                                    <h5 className="font-formula-bold mb-1">Pole Position</h5>
                                    <p className="font-formula text-sm">105</p>
                                </div>
                                <div className="mb-10 md:mb-5">
                                    <h5 className="font-formula-bold mb-1">Voltas mais rapidas</h5>
                                    <p className="font-formula text-sm">97</p>
                                </div>
                                <div className="mb-10 md:mb-5">
                                    <h5 className="font-formula-bold mb-1">Maior posição no grid</h5>
                                    <p className="font-formula text-sm">1</p>
                                </div>
                            </div>

                        </div>
                        <div className="grid grid-cols-2 gap-1">
                            <div className="hover:bg-black hover:text-white duration-500 cursor-pointer md:border-l-2 md:border-gray-200">
                                <img className="object-cover" src="https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/2024Drivers/verstappen" alt="" />
                                <div className="px-5 py-10">
                                    <h4 className="font-formula text-3xl md:text-3xl md:font-formula-bold">1</h4>
                                    <p className="font-formula text-xl md:text-4xl md:text-base">Max Verstappen</p>
                                    <p className="font-formula text-gray-700 md:text-sm">Red Bull Racing</p>
                                </div>
                            </div>
                            <div className="hover:bg-black hover:text-white duration-500 cursor-pointer  md:border-l-2 md:border-gray-200">
                                <img src="https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/2024Drivers/verstappen" alt="" />
                                <div className="px-5 py-10">
                                    <h4 className="font-formula text-3xl md:text-3xl md:font-formula-bold">1</h4>
                                    <p className="font-formula text-xl md:text-4xl md:text-base">Max Verstappen</p>
                                    <p className="font-formula text-gray-700 md:text-sm">Red Bull Racing</p>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="px-4 py-10 mb-4">
                        <h2 className="mb-10 font-formula text-center text-4xl">História</h2>
                        <div className="mb-10">
                            <h4 className="font-formula-bold mb-1 text-2xl">2023</h4>
                            <p className="font-titillium">História do Team aqui blablablabla</p>
                        </div>
                        <div>
                            <h4 className="font-formula-bold mb-1 text-2xl">2024</h4>
                            <p className="font-titillium">História do Team aqui blablablabla</p>
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

export default Team
