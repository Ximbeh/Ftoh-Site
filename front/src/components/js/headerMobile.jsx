import React, { useState } from "react"
import FtohLogo from '../../assets/f1_logo.svg'
import {Menu, X, ChevronRight} from "lucide-react"
import { FaDiscord } from "react-icons/fa";
import "../css/header.css"


const HeaderMobile= () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleNavBar = ()=>{
        setIsOpen(!isOpen);
    }

    return (
    <div className="bg-red-600 lg:hidden">
        <div className="flex max-w-screen-lg mx-10">
            <button onClick={toggleNavBar}>
                {isOpen ? <X  color="#fff"/>:<Menu color="#fff"/>}
            </button>
            <img className="h-8 my-5 w-calc100-62" src={FtohLogo}/>
        </div>
        {isOpen &&(
            <div className="h-full relative">
                <div className="absolute w-full">
                <div className="text-white h-92 w-full bg-red-600 font-formula pb-6 md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-3 md:h-64">
                    <a className="flex items-center hover:cursor-pointer flex justify-between pr-4 border-r border-t-0 border-l-0 border-b border-solid border-white rounded-br-xl mx-3 py-3 mb-3 md:py-0 md:mb-0"><span>Recente</span><ChevronRight color="#fff"/></a>
                    <a className="flex items-center hover:cursor-pointer flex justify-between pr-4 border-r border-t-0 border-l-0 border-b border-solid border-white rounded-br-xl mx-3 py-3 mb-3 md:py-0 md:mb-0"><span>Video</span><ChevronRight color="#fff"/></a>
                    <a className="flex items-center hover:cursor-pointer flex justify-between pr-4 border-r border-t-0 border-l-0 border-b border-solid border-white rounded-br-xl mx-3 py-3 mb-3 md:py-0 md:mb-0"><span>Calendario</span><ChevronRight color="#fff"/></a>
                    <a className="flex items-center hover:cursor-pointer flex justify-between pr-4 border-r border-t-0 border-l-0 border-b border-solid border-white rounded-br-xl mx-3 py-3 mb-3 md:py-0 md:mb-0"><span>Resultados</span><ChevronRight color="#fff"/></a>
                    <a className="flex items-center hover:cursor-pointer flex justify-between pr-4 border-r border-t-0 border-l-0 border-b border-solid border-white rounded-br-xl mx-3 py-3 mb-3 md:py-0 md:mb-0"><span>Pilotos</span><ChevronRight color="#fff"/></a>
                    <a className="flex items-center hover:cursor-pointer flex justify-between pr-4 border-r border-t-0 border-l-0 border-b border-solid border-white rounded-br-xl mx-3 py-3 mb-3 md:py-0 md:mb-0"><span>Times</span><ChevronRight color="#fff"/></a>
                    <a className="flex items-center hover:cursor-pointer flex justify-between pr-4 border-r border-t-0 border-l-0 border-b border-solid border-white rounded-br-xl mx-3 py-3 mb-3 md:py-0 md:mb-0"><span>Vip</span><ChevronRight color="#fff"/></a>
                    <a className="flex items-center hover:cursor-pointer flex justify-between pr-4 border-r border-t-0 border-l-0 border-b border-solid border-white rounded-br-xl mx-3 py-3 mb-3 md:py-0 md:mb-0"><span>Redes Sociais</span><ChevronRight color="#fff"/></a>
                </div>
                <div className="h-72 w-full bg-white font-formula py-6 md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-3 md:h-40">
                    <a className="flex items-center hover:cursor-pointer opacity-40 flex justify-between pr-4 border-r border-gray-500 border-t-0 border-l-0 border-b border-solid rounded-br-xl mx-3 py-3 mb-3 md:py-0 md:mb-0"><img className="w-14" src={FtohLogo}/></a>
                    <a className="flex items-center hover:cursor-pointer opacity-40 flex justify-between pr-4 border-r border-gray-500 border-t-0 border-l-0 border-b border-solid rounded-br-xl mx-3 py-3 mb-3 md:py-0 md:mb-0"><img className="w-14" src={FtohLogo}/></a>
                    <a className="flex items-center hover:cursor-pointer opacity-40 flex justify-between pr-4 border-r border-gray-500 border-t-0 border-l-0 border-b border-solid rounded-br-xl mx-3 py-3 mb-3 md:py-0 md:mb-0"><img className="w-14" src={FtohLogo}/></a>
                    <a className="flex items-center hover:cursor-pointer opacity-40 flex pr-4 border-r border-gray-500 border-t-0 border-l-0 border-b border-solid rounded-br-xl mx-3 py-3 mb-3 md:py-0 md:mb-0"><FaDiscord className="w-14"/>Discord</a>
                </div>
                {/* <div className="h-full bg-black opacity-40"></div> */}

                </div>

            </div>
        )}
    </div>
    )
}

export default HeaderMobile