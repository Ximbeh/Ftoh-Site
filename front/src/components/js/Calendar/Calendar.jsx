
import Header from "../header/Header"
import Footer from "../Footer"
import { ChevronRight, ChevronLeft } from "lucide-react"
import firstLogo from "../../../assets/First.svg"
import secondLogo from "../../../assets/Second.png"
import thirdLogo from "../../../assets/Third.svg"
import formulaLogo from "../../../assets/f1_logo.svg"

import { useNavigate } from 'react-router-dom';

import "../../css/Calendar.css"

const Calendar = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header></Header>
            <main>
                <div className="max-w-xl mx-auto md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
                    <h1 className="mx-4 border-t-8 border-r-8 border-grayTotal rounded-tr-2xl mt-10 mb-10 pt-4 text-4xl text-6xl font-formula-bold">Calendário F1 2024</h1>
                </div>
                <div className="max-w-xl mx-auto md:max-w-3xl lg:max-w-5xl xl:max-w-7xl md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <div className="px-4">
                        <div className="relative pt-4 pr-2 mb-10 border-t-2 border-r-2 border-grayTotal rounded-tr-2xl cursor-pointer hover:border-red-500 hover:pt-8 duration-200"
                        onClick={() => navigate('/Race')}>
                            <h4 className="text-red-500 bg-white absolute -top-4 font-formula-bold pr-2 uppercase">Estágio</h4>
                            <div className="flex justify-between items-center pb-4 border-b-2 border-gray-400 mb-4">
                                <div className="flex flex-col">
                                    <h3 className="font-formula-bold text-2xl">29-02</h3>
                                    <h4 className="text-center font-formula-bold text-lg text-white bg-grayTotal px-2 rounded-xl uppercase">Feb-Mar</h4>
                                </div>
                                <img className="border-2 w-12 h-8 rounded-md" src="https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/bahrain-flag.png" alt="" />
                            </div>
                            <div className="pb-4 border-b-2 border-gray-400 mb-4">
                                <div className="flex">
                                    <h3 className="font-formula-bold text-xl">Nome Corrida</h3>
                                    <ChevronRight className="mt-0.5" color="rgb(229 57 53)" />
                                </div>
                                <p className="font-formula text-gray-700">Nome completo da corrida de formula-1</p>
                            </div>
                            <div className="flex items-end gap-1">
                                <div className="w-full">
                                    <div className="rounded-t-xl relative flex justify-center h-16 bg-gray-800">
                                        <img className="absolute h-20 bottom-0 left-1/5" src="https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/2024/maxver01.png.transform/2col/image.png" alt="" />
                                    </div>
                                    <div className="p-2 border-b border-r border-gray-300 rounded-br-xl flex items-center gap-2 justify-center">
                                        <img className="w-10 h-full" src={secondLogo} alt="" />
                                        <h2 className="font-formula-bold text-lg uppercase">Ver</h2>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="rounded-t-xl relative  flex justify-center h-20 bg-gray-800">
                                        <img className="absolute h-24 bottom-0" src="https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/2024/maxver01.png.transform/2col/image.png" alt="" />
                                    </div>
                                    <div className="p-2 border-b border-r border-gray-300 rounded-br-xl flex gap-2 justify-center">
                                        <img className="w-10" src={firstLogo} alt="" />
                                        <h2 className="font-formula-bold text-lg uppercase">Ver</h2>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="rounded-t-xl relative  flex justify-center h-14 bg-gray-800">
                                        <img className="absolute h-20 bottom-0" src="https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/2024/maxver01.png.transform/2col/image.png" alt="" />
                                    </div>
                                    <div className="p-2 border-b border-r border-gray-300 rounded-br-xl flex gap-2 justify-center">
                                        <img className="w-10" src={thirdLogo} alt="" />
                                        <h2 className="font-formula-bold text-lg uppercase">Ver</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-4">
                        <div className="relative pt-4 pr-2 mb-10 border-t-2 border-r-2 border-grayTotal rounded-tr-2xl cursor-pointer hover:border-red-500 hover:pt-8 duration-200"
                        onClick={() => navigate('/Race')}>
                            <h4 className="text-red-500 bg-white absolute -top-4 font-formula-bold pr-2 uppercase">Estágio</h4>
                            <div className="flex justify-between items-center pb-4 border-b-2 border-gray-400 mb-4">
                                <div className="flex flex-col">
                                    <h3 className="font-formula-bold text-2xl">29-02</h3>
                                    <h4 className="text-center font-formula-bold text-lg text-white bg-grayTotal px-2 rounded-xl uppercase">Feb-Mar</h4>
                                </div>
                                <img className="border-2 w-12 h-8 rounded-md" src="https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/bahrain-flag.png" alt="" />
                            </div>
                            <div className="pb-4 border-b-2 border-gray-400 mb-4">
                                <div className="flex">
                                    <h3 className="font-formula-bold text-xl">Nome Corrida</h3>
                                    <ChevronRight className="mt-0.5" color="rgb(229 57 53)" />
                                </div>
                                <p className="font-formula text-gray-700">Nome completo da corrida de formula-1</p>
                            </div>
                            <div className="flex items-end gap-1">
                                <div className="w-full">
                                    <div className="rounded-t-xl relative flex justify-center h-16 bg-gray-800">
                                        <img className="absolute h-20 bottom-0 left-1/5" src="https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/2024/maxver01.png.transform/2col/image.png" alt="" />
                                    </div>
                                    <div className="p-2 border-b border-r border-gray-300 rounded-br-xl flex items-center gap-2 justify-center">
                                        <img className="w-10 h-full" src={secondLogo} alt="" />
                                        <h2 className="font-formula-bold text-lg uppercase">Ver</h2>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="rounded-t-xl relative  flex justify-center h-20 bg-gray-800">
                                        <img className="absolute h-24 bottom-0" src="https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/2024/maxver01.png.transform/2col/image.png" alt="" />
                                    </div>
                                    <div className="p-2 border-b border-r border-gray-300 rounded-br-xl flex gap-2 justify-center">
                                        <img className="w-10" src={firstLogo} alt="" />
                                        <h2 className="font-formula-bold text-lg uppercase">Ver</h2>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="rounded-t-xl relative  flex justify-center h-14 bg-gray-800">
                                        <img className="absolute h-20 bottom-0" src="https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/2024/maxver01.png.transform/2col/image.png" alt="" />
                                    </div>
                                    <div className="p-2 border-b border-r border-gray-300 rounded-br-xl flex gap-2 justify-center">
                                        <img className="w-10" src={thirdLogo} alt="" />
                                        <h2 className="font-formula-bold text-lg uppercase">Ver</h2>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="px-4">
                        <div className="relative pt-4 pr-2 mb-10 border-t-2 border-r-2 border-grayTotal rounded-tr-2xl cursor-pointer hover:border-red-500 hover:pt-8 duration-200"
                        onClick={() => navigate('/Race')}>
                            <h4 className="text-red-500 bg-white absolute -top-4 font-formula-bold pr-2 uppercase">Estágio</h4>
                            <div className="flex justify-between items-center pb-4 border-b-2 border-gray-400 mb-4">
                                <div className="flex flex-col">
                                    <h3 className="font-formula-bold text-2xl">29-02</h3>
                                    <h4 className="text-center font-formula-bold text-lg text-white bg-grayTotal px-2 rounded-xl uppercase">Feb-Mar</h4>
                                </div>
                                <img className="border-2 w-12 h-8 rounded-md" src="https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/bahrain-flag.png" alt="" />
                            </div>
                            <div className="pb-4 border-b-2 border-gray-400 mb-4">
                                <div className="flex">
                                    <h3 className="font-formula-bold text-xl">Nome Corrida</h3>
                                    <ChevronRight className="mt-0.5" color="rgb(229 57 53)" />
                                </div>
                                <p className="font-formula text-gray-700">Nome completo da corrida de formula-1</p>
                            </div>
                            <div className="flex items-end gap-1">
                                <div className="w-full">
                                    <div className="rounded-t-xl relative flex justify-center h-16 bg-gray-800">
                                        <img className="absolute h-20 bottom-0 left-1/5" src="https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/2024/maxver01.png.transform/2col/image.png" alt="" />
                                    </div>
                                    <div className="p-2 border-b border-r border-gray-300 rounded-br-xl flex items-center gap-2 justify-center">
                                        <img className="w-10 h-full" src={secondLogo} alt="" />
                                        <h2 className="font-formula-bold text-lg uppercase">Ver</h2>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="rounded-t-xl relative  flex justify-center h-20 bg-gray-800">
                                        <img className="absolute h-24 bottom-0" src="https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/2024/maxver01.png.transform/2col/image.png" alt="" />
                                    </div>
                                    <div className="p-2 border-b border-r border-gray-300 rounded-br-xl flex gap-2 justify-center">
                                        <img className="w-10" src={firstLogo} alt="" />
                                        <h2 className="font-formula-bold text-lg uppercase">Ver</h2>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="rounded-t-xl relative  flex justify-center h-14 bg-gray-800">
                                        <img className="absolute h-20 bottom-0" src="https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/2024/maxver01.png.transform/2col/image.png" alt="" />
                                    </div>
                                    <div className="p-2 border-b border-r border-gray-300 rounded-br-xl flex gap-2 justify-center">
                                        <img className="w-10" src={thirdLogo} alt="" />
                                        <h2 className="font-formula-bold text-lg uppercase">Ver</h2>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="px-4">
                        <div className="relative pt-4 pr-2 mb-10 border-t-2 border-r-2 border-grayTotal rounded-tr-2xl cursor-pointer hover:border-red-500 hover:pt-8 duration-200"
                        onClick={() => navigate('/Race')}>
                            <h4 className="text-red-500 bg-white absolute -top-4 font-formula-bold pr-2 uppercase">Estágio</h4>
                            <div className="flex justify-between items-center pb-4 border-b-2 border-gray-400 mb-4">
                                <div className="flex flex-col">
                                    <h3 className="font-formula-bold text-2xl">29-02</h3>
                                    <h4 className="text-center font-formula-bold text-lg text-white bg-grayTotal px-2 rounded-xl uppercase">Feb-Mar</h4>
                                </div>
                                <img className="border-2 w-12 h-8 rounded-md" src="https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/bahrain-flag.png" alt="" />
                            </div>
                            <div className="pb-4 border-b-2 border-gray-400 mb-4">
                                <div className="flex">
                                    <h3 className="font-formula-bold text-xl">Nome Corrida</h3>
                                    <ChevronRight className="mt-0.5" color="rgb(229 57 53)" />
                                </div>
                                <p className="font-formula text-gray-700">Nome completo da corrida de formula-1</p>
                            </div>
                            <div className="flex items-end gap-1">
                                <div className="w-full">
                                    <div className="rounded-t-xl relative flex justify-center h-16 bg-gray-800">
                                        <img className="absolute h-20 bottom-0 left-1/5" src="https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/2024/maxver01.png.transform/2col/image.png" alt="" />
                                    </div>
                                    <div className="p-2 border-b border-r border-gray-300 rounded-br-xl flex items-center gap-2 justify-center">
                                        <img className="w-10 h-full" src={secondLogo} alt="" />
                                        <h2 className="font-formula-bold text-lg uppercase">Ver</h2>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="rounded-t-xl relative  flex justify-center h-20 bg-gray-800">
                                        <img className="absolute h-24 bottom-0" src="https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/2024/maxver01.png.transform/2col/image.png" alt="" />
                                    </div>
                                    <div className="p-2 border-b border-r border-gray-300 rounded-br-xl flex gap-2 justify-center">
                                        <img className="w-10" src={firstLogo} alt="" />
                                        <h2 className="font-formula-bold text-lg uppercase">Ver</h2>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="rounded-t-xl relative  flex justify-center h-14 bg-gray-800">
                                        <img className="absolute h-20 bottom-0" src="https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/2024/maxver01.png.transform/2col/image.png" alt="" />
                                    </div>
                                    <div className="p-2 border-b border-r border-gray-300 rounded-br-xl flex gap-2 justify-center">
                                        <img className="w-10" src={thirdLogo} alt="" />
                                        <h2 className="font-formula-bold text-lg uppercase">Ver</h2>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="px-4">
                        <div className="relative pt-4 pr-2 mb-10 border-t-2 border-r-2 border-grayTotal rounded-tr-2xl cursor-pointer hover:border-red-500 hover:pt-8 duration-200"
                        onClick={() => navigate('/Race')}>
                            <h4 className="text-red-500 bg-white absolute -top-4 font-formula-bold pr-2 uppercase">Estágio</h4>
                            <div className="flex justify-between items-center pb-4 border-b-2 border-gray-400 mb-4">
                                <div className="flex flex-col">
                                    <h3 className="font-formula-bold text-2xl">29-02</h3>
                                    <h4 className="text-center font-formula-bold text-lg text-white bg-grayTotal px-2 rounded-xl uppercase">Feb-Mar</h4>
                                </div>
                                <img className="border-2 w-12 h-8 rounded-md" src="https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/bahrain-flag.png" alt="" />
                            </div>
                            <div className="pb-4 border-b-2 border-gray-400 mb-4">
                                <div className="flex">
                                    <h3 className="font-formula-bold text-xl">Nome Corrida</h3>
                                    <ChevronRight className="mt-0.5" color="rgb(229 57 53)" />
                                </div>
                                <p className="font-formula text-gray-700">Nome completo da corrida de formula-1</p>
                            </div>
                            <div className="flex items-end gap-1">
                                <div className="w-full">
                                    <div className="rounded-t-xl relative flex justify-center h-16 bg-gray-800">
                                        <img className="absolute h-20 bottom-0 left-1/5" src="https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/2024/maxver01.png.transform/2col/image.png" alt="" />
                                    </div>
                                    <div className="p-2 border-b border-r border-gray-300 rounded-br-xl flex items-center gap-2 justify-center">
                                        <img className="w-10 h-full" src={secondLogo} alt="" />
                                        <h2 className="font-formula-bold text-lg uppercase">Ver</h2>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="rounded-t-xl relative  flex justify-center h-20 bg-gray-800">
                                        <img className="absolute h-24 bottom-0" src="https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/2024/maxver01.png.transform/2col/image.png" alt="" />
                                    </div>
                                    <div className="p-2 border-b border-r border-gray-300 rounded-br-xl flex gap-2 justify-center">
                                        <img className="w-10" src={firstLogo} alt="" />
                                        <h2 className="font-formula-bold text-lg uppercase">Ver</h2>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="rounded-t-xl relative  flex justify-center h-14 bg-gray-800">
                                        <img className="absolute h-20 bottom-0" src="https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/drivers/2024/maxver01.png.transform/2col/image.png" alt="" />
                                    </div>
                                    <div className="p-2 border-b border-r border-gray-300 rounded-br-xl flex gap-2 justify-center">
                                        <img className="w-10" src={thirdLogo} alt="" />
                                        <h2 className="font-formula-bold text-lg uppercase">Ver</h2>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                <div className="cursor-pointer bg-grayTotal text-white px-4 py-6 mb-10"
                 onClick={() => navigate('/Race')}>
                    <div className="max-w-xl mx-auto md:max-w-3xl lg:max-w-5xl xl:max-w-7xl border-t-8 border-r-8 border-red-500 rounded-tr-3xl relative
                    md:grid md:grid-cols-2 md:gap-2 xl:grid-cols-4">
                        <div>
                            <h4 className="uppercase font-formula-bold text-red-500 pr-2 absolute -top-4 bg-grayTotal">Estágio - Próximo</h4>
                            <div className="flex justify-between items-center py-4 mr-2 border-b-2 border-gray-400 mb-4">
                                <div className="flex flex-col">
                                    <h3 className="font-formula-bold text-2xl">29-02</h3>
                                    <h4 className="text-center font-formula-bold text-lg text-black bg-white px-2 rounded-xl uppercase">Feb-Mar</h4>
                                </div>
                                <img className="border-2 w-12 h-8 rounded-md" src="https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/bahrain-flag.png" alt="" />
                            </div>
                            <div className="pb-4 mb-10 md:mb-4 mr-2 border-b-2 border-gray-400 ">
                                <div className="flex">
                                    <h3 className="font-formula-bold text-xl">Nome Corrida</h3>
                                    <ChevronRight className="mt-1" color="rgb(229 57 53)" />
                                </div>
                                <p className="font-formula uppercase text-sm">Nome completo da corrida de formula-1</p>
                            </div>
                            <div className="hidden md:flex mr-2 rounded-lg justify-center mt-2 p-2 bg-repeat bg-grade-pattern-gray bg-2">
                                <img className="h-28" src="https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Hungary.png" alt="" />
                            </div>
                        </div>
                        <div className="md:bg-image-schedule md:bg-cover md:rounded-xl md:m-4 md:mb-0 md:ml-0 md:p-4 md:flex md:item-center xl:col-span-3 md:justify-end">
                            <div className='flex flex-col gap-2 bg-gray-800 md:bg-grayTotal md:justify-center mr-2 rounded-xl px-2 py-4 lg:pl-4 xl:pl-6 md:m-0'>
                                <div className='grid grid-cols-3 justify-items-center items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-center text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Treino-Livre 1</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Ter</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-600 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='grid grid-cols-3 justify-items-center  items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-center text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Treino-Livre 2</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Qua</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-600 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='grid grid-cols-3 justify-items-center  items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-center text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Treino-Livre 3</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Qui</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-600 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='grid grid-cols-3 justify-items-center  items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-center text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Qualy</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Sex</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-600 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='grid grid-cols-3 justify-items-center  items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-center text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Corrida</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Sab</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-600 rounded-xl'>08:30 - 09:30</h4>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                
                <div className="max-w-xl mx-auto md:max-w-3xl lg:max-w-5xl xl:max-w-7xl md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <div className="px-4">
                        <div className="relative pt-4 pr-2 mb-10 border-t-2 border-r-2 border-grayTotal rounded-tr-2xl cursor-pointer hover:border-red-500 hover:pt-8 duration-200"
                        onClick={() => navigate('/Race')}>
                            <h4 className="text-red-500 bg-white absolute -top-4 font-formula-bold pr-2 uppercase">Estágio</h4>
                            <div className="flex justify-between items-center pb-4 border-b-2 border-gray-400 mb-4">
                                <div className="flex flex-col">
                                    <h3 className="font-formula-bold text-2xl">29-02</h3>
                                    <h4 className="text-center font-formula-bold text-lg text-white bg-grayTotal px-2 rounded-xl uppercase">Feb-Mar</h4>
                                </div>
                                <img className="border-2 w-12 h-8 rounded-md" src="https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/bahrain-flag.png" alt="" />
                            </div>
                            <div className="pb-4 border-b-2 border-gray-400 mb-4">
                                <div className="flex">
                                    <h3 className="font-formula-bold text-xl">Nome Corrida</h3>
                                    <ChevronRight className="mt-0.5" color="rgb(229 57 53)" />
                                </div>
                                <p className="font-formula text-gray-700">Nome completo da corrida de formula-1</p>
                            </div>
                            <div className="flex justify-center mt-2 pt-2 pb-2 bg-repeat bg-grade-pattern bg-2">
                                <img className="h-28 raceMap" src="https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Hungary.png" alt="" />
                            </div>
                        </div>

                    </div>
                    <div className="px-4">
                        <div className="relative pt-4 pr-2 mb-10 border-t-2 border-r-2 border-grayTotal rounded-tr-2xl cursor-pointer hover:border-red-500 hover:pt-8 duration-200"
                        onClick={() => navigate('/Race')}>
                            <h4 className="text-red-500 bg-white absolute -top-4 font-formula-bold pr-2 uppercase">Estágio</h4>
                            <div className="flex justify-between items-center pb-4 border-b-2 border-gray-400 mb-4">
                                <div className="flex flex-col">
                                    <h3 className="font-formula-bold text-2xl">29-02</h3>
                                    <h4 className="text-center font-formula-bold text-lg text-white bg-grayTotal px-2 rounded-xl uppercase">Feb-Mar</h4>
                                </div>
                                <img className="border-2 w-12 h-8 rounded-md" src="https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/bahrain-flag.png" alt="" />
                            </div>
                            <div className="pb-4 border-b-2 border-gray-400 mb-4">
                                <div className="flex">
                                    <h3 className="font-formula-bold text-xl">Nome Corrida</h3>
                                    <ChevronRight className="mt-0.5" color="rgb(229 57 53)" />
                                </div>
                                <p className="font-formula text-gray-700">Nome completo da corrida de formula-1</p>
                            </div>
                            <div className="flex justify-center mt-2 pt-2 pb-2 bg-repeat bg-grade-pattern bg-2">
                                <img className="h-28 raceMap" src="https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Hungary.png" alt="" />
                            </div>
                        </div>

                    </div>
                    <div className="px-4">
                        <div className="relative pt-4 pr-2 mb-10 border-t-2 border-r-2 border-grayTotal rounded-tr-2xl cursor-pointer hover:border-red-500 hover:pt-8 duration-200"
                        onClick={() => navigate('/Race')}>
                            <h4 className="text-red-500 bg-white absolute -top-4 font-formula-bold pr-2 uppercase">Estágio</h4>
                            <div className="flex justify-between items-center pb-4 border-b-2 border-gray-400 mb-4">
                                <div className="flex flex-col">
                                    <h3 className="font-formula-bold text-2xl">29-02</h3>
                                    <h4 className="text-center font-formula-bold text-lg text-white bg-grayTotal px-2 rounded-xl uppercase">Feb-Mar</h4>
                                </div>
                                <img className="border-2 w-12 h-8 rounded-md" src="https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/bahrain-flag.png" alt="" />
                            </div>
                            <div className="pb-4 border-b-2 border-gray-400 mb-4">
                                <div className="flex">
                                    <h3 className="font-formula-bold text-xl">Nome Corrida</h3>
                                    <ChevronRight className="mt-0.5" color="rgb(229 57 53)" />
                                </div>
                                <p className="font-formula text-gray-700">Nome completo da corrida de formula-1</p>
                            </div>
                            <div className="flex justify-center mt-2 pt-2 pb-2 bg-repeat bg-grade-pattern bg-2">
                                <img className="h-28 raceMap" src="https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Hungary.png" alt="" />
                            </div>
                        </div>

                    </div>
                    <div className="px-4">
                        <div className="relative pt-4 pr-2 mb-10 border-t-2 border-r-2 border-grayTotal rounded-tr-2xl cursor-pointer hover:border-red-500 hover:pt-8 duration-200"
                        onClick={() => navigate('/Race')}>
                            <h4 className="text-red-500 bg-white absolute -top-4 font-formula-bold pr-2 uppercase">Estágio</h4>
                            <div className="flex justify-between items-center pb-4 border-b-2 border-gray-400 mb-4">
                                <div className="flex flex-col">
                                    <h3 className="font-formula-bold text-2xl">29-02</h3>
                                    <h4 className="text-center font-formula-bold text-lg text-white bg-grayTotal px-2 rounded-xl uppercase">Feb-Mar</h4>
                                </div>
                                <img className="border-2 w-12 h-8 rounded-md" src="https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/bahrain-flag.png" alt="" />
                            </div>
                            <div className="pb-4 border-b-2 border-gray-400 mb-4">
                                <div className="flex">
                                    <h3 className="font-formula-bold text-xl">Nome Corrida</h3>
                                    <ChevronRight className="mt-0.5" color="rgb(229 57 53)" />
                                </div>
                                <p className="font-formula text-gray-700">Nome completo da corrida de formula-1</p>
                            </div>
                            <div className="flex justify-center mt-2 pt-2 pb-2 bg-repeat bg-grade-pattern bg-2">
                                <img className="h-28 raceMap" src="https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Hungary.png" alt="" />
                            </div>
                        </div>

                    </div>
                    <div className="px-4">
                        <div className="relative pt-4 pr-2 mb-10 border-t-2 border-r-2 border-grayTotal rounded-tr-2xl cursor-pointer hover:border-red-500 hover:pt-8 duration-200"
                        onClick={() => navigate('/Race')}>
                            <h4 className="text-red-500 bg-white absolute -top-4 font-formula-bold pr-2 uppercase">Estágio</h4>
                            <div className="flex justify-between items-center pb-4 border-b-2 border-gray-400 mb-4">
                                <div className="flex flex-col">
                                    <h3 className="font-formula-bold text-2xl">29-02</h3>
                                    <h4 className="text-center font-formula-bold text-lg text-white bg-grayTotal px-2 rounded-xl uppercase">Feb-Mar</h4>
                                </div>
                                <img className="border-2 w-12 h-8 rounded-md" src="https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/bahrain-flag.png" alt="" />
                            </div>
                            <div className="pb-4 border-b-2 border-gray-400 mb-4">
                                <div className="flex">
                                    <h3 className="font-formula-bold text-xl">Nome Corrida</h3>
                                    <ChevronRight className="mt-0.5" color="rgb(229 57 53)" />
                                </div>
                                <p className="font-formula text-gray-700">Nome completo da corrida de formula-1</p>
                            </div>
                            <div className="flex justify-center mt-2 pt-2 pb-2 bg-repeat bg-grade-pattern bg-2">
                                <img className="h-28 raceMap" src="https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Hungary.png" alt="" />
                            </div>
                        </div>

                    </div>
                </div>


                <div className="max-w-xl mx-auto md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
                    <div className="cursor-pointer hover:border-red-500 flex items-center mb-10 
                    onClick={() => navigate('/Race')}mx-4 border-t-2 border-l-2 border-gray-300 rounded-tl-xl px-2 py-4">
                        <ChevronLeft color="rgb(229 57 53)" />
                        <div>
                            <h3 className="font-formula-bold uppercase text-xl">Season</h3>
                            <h3 className="font-formula-bold text-xl text-white text-stroke">2023</h3>
                        </div>
                    </div>
                </div>
                <div className="bg-grayTotal px-8 py-4 text-white flex flex-col gap-4">
                    <div className="max-w-xl mx-auto md:max-w-3xl lg:max-w-5xl xl:max-w-7xl lg:flex lg:flex-rows lg:gap-4">
                        <div className="img-background-1 rounded-2xl p-2">
                            <div className="border-t-2 border-r-2 border-white rounded-tr-2xl pt-2 pr-2">
                                <div className="bg-gray-700 bg-opacity-20 rounded-t-2xl px-2 py-6 grid grid-cols-2">
                                    <div>
                                        <h3 className="font-formula-bold text-xl mb-2">Formula 2</h3>
                                        <p className="font-titillium mb-2">Veja o calendário da temporada da F2</p>
                                        <button className="bg-red-500 p-2 pl-4 text-sm flex rounded-md">Veja <ChevronRight height="20" /></button>
                                    </div>
                                    <img className="px-8" src={formulaLogo} alt="" />

                                </div>
                            </div>
                        </div>
                        <div className="img-background-1 rounded-2xl p-2">
                            <div className="border-t-2 border-r-2 border-white rounded-tr-2xl pt-2 pr-2">
                                <div className="bg-gray-700 bg-opacity-20 rounded-t-2xl px-2 py-6 grid grid-cols-2">
                                    <div>
                                        <h3 className="font-formula-bold text-xl mb-2">Formula 2</h3>
                                        <p className="font-titillium mb-2">Veja o calendário da temporada da F2</p>
                                        <button className="bg-red-500 p-2 pl-4 text-sm flex rounded-md">Veja <ChevronRight height="20" /></button>
                                    </div>
                                    <img className="px-8" src={formulaLogo} alt="" />

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
            <Footer></Footer>
        </div>
    )
}

export default Calendar
