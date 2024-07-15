import NewsContainer from "../News/NewsContainer"

const Circuit = () => {
    return (
        <div className="px-4 bg-gray-100 pb-10">
            <div className="m-auto max-w-lg md:max-w-5xl lg:max-w-7xl">

                <div className="m-auto max-w-lg md:max-w-5xl lg:max-w-7xl">
                    <h3 className="py-4 font-formula uppercase text-lg lg:text-2xl   lg:py-10">Nome completo da corrida formula 1 2024</h3>
                </div>
                <div className="mt-10 border-t-8 border-r-8 rounded-tr-3xl py-6 pr-4 relative border-red-500">
                    <img className="absolute -top-4 lg:-top-6 left-0 w-20 lg:w-24 bg-gray-100 px-4" src="https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1000/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/bahrain-flag" alt="" />
                    <h3 className="font-formula-bold text-lg lg:text-2xl">Nome do Gp</h3>
                    <img className="mt-2 max-w-3xl mx-auto" src="https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Bahrain_Circuit" alt="" />
                    <div className="mt-4 flex gap-4 flex-col">
                        <div className="flex gap-4 flex-col md:flex-row">
                            <div className="border-b-2 border-r-2 rounded-br-xl border-gray-400 py-2 md:w-full">
                                <div>
                                    <p className="font-formula text-xs">Primeiro Grande Premio</p>
                                    <p className="font-formula-bold text-xl">2023</p>

                                </div>
                            </div>
                            <div className="border-b-2 border-r-2 rounded-br-xl border-gray-400 py-2 md:w-full">
                                <div>
                                    <p className="font-formula text-xs">Números de voltas</p>
                                    <p className="font-formula-bold text-xl">69</p>

                                </div>
                            </div>

                        </div>
                        <div className="border-b-2 border-r-2 rounded-br-xl border-gray-400 py-2 flex gap-3">
                            <div>
                                <p className="font-formula text-xs">Recorde</p>
                                <p className="font-formula-bold text-xl">4:29:205</p>
                            </div>
                            <p className="self-end font-formula text-xs mb-1">Pedro de La Rosa - 2025</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Circuit
