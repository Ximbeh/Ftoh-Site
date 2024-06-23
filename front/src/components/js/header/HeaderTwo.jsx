import FtohLogo from '../../../assets/f1_logo.svg'

const HeaderTwo = () => {

    return (
        <div className="bg-red-600 hidden lg:flex">
        <div className="flex space-x-8 max-w-screen-lg ml-10">
            <img className="h-8 my-5
            " src={FtohLogo}/>
            <div className="flex items-center font-formula text-xs text-white">
                <a className="hover:bg-gray-800 h-full flex items-center px-4 transition ease-out duration-500 hover:cursor-pointer"><span className="hover:opacity-100">Recente</span></a>
                <a className="hover:bg-gray-800 h-full flex items-center px-4 transition ease-out duration-500 hover:cursor-pointer"><span className="hover:opacity-100">Video</span></a>
                <a className="hover:bg-gray-800 h-full flex items-center px-4 transition ease-out duration-500 hover:cursor-pointer"><span className="hover:opacity-100">Calendario</span></a>
                <a className="hover:bg-gray-800 h-full flex items-center px-4 transition ease-out duration-500 hover:cursor-pointer"><span className="hover:opacity-100">Resultados</span></a>
                <a className="hover:bg-gray-800 h-full flex items-center px-4 transition ease-out duration-500 hover:cursor-pointer"><span className="hover:opacity-100">Pilotos</span></a>
                <a className="hover:bg-gray-800 h-full flex items-center px-4 transition ease-out duration-500 hover:cursor-pointer"><span className="hover:opacity-100">Times</span></a>
                <a className="hover:bg-gray-800 h-full flex items-center px-4 transition ease-out duration-500 hover:cursor-pointer"><span className="hover:opacity-100">Vip</span></a>
                <a className="hover:bg-gray-800 h-full flex items-center px-4 transition ease-out duration-500 hover:cursor-pointer"><span className="hover:opacity-100">Redes Sociais</span></a>
            </div>
        </div>
        </div>
    )
}

export default HeaderTwo