import FtohLogo from '../../assets/f1_logo.svg'

const HeaderTwo = () => {

    return (
        <>
        <div className="flex space-x-4 my-3 ml-3 bg-red-600">
            <img className="h-12
            " src={FtohLogo}/>
            <div className="flex space-x-4 items-center font-formula text-xs text-white">
                <a><span className="hover:opacity-100 hover:cursor-pointer">Recente</span></a>
                <a><span className="hover:opacity-100 hover:cursor-pointer">Video</span></a>
                <a><span className="hover:opacity-100 hover:cursor-pointer">Calendario</span></a>
                <a><span className="hover:opacity-100 hover:cursor-pointer">Resultados</span></a>
                <a><span className="hover:opacity-100 hover:cursor-pointer">Pilotos</span></a>
                <a><span className="hover:opacity-100 hover:cursor-pointer">Times</span></a>
                <a><span className="hover:opacity-100 hover:cursor-pointer">Vip</span></a>
                <a><span className="hover:opacity-100 hover:cursor-pointer">Redes Sociais</span></a>
            </div>
        </div>
        </>
    )
}

export default HeaderTwo