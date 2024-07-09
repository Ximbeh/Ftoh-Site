import FtohLogo from '../../../assets/f1_logo.svg'
import { useNavigate } from 'react-router-dom';

const HeaderTwo = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-red-600 hidden lg:flex">
            <div className="flex space-x-8 max-w-screen-lg ml-10">
                <img className="h-8 my-5 cursor-pointer"
                    onClick={() => navigate('/')}
                    src={FtohLogo} />
                <div className="flex items-center font-formula text-xs text-white">
                    <a
                        className="hover:bg-grayTotal h-full flex items-center px-4 transition ease-out duration-500 cursor-pointer"
                        onClick={() => navigate('/Latest')}
                    >
                        <span className="hover:opacity-100">Notícias</span>
                    </a>
                    
                    <a
                        className="hover:bg-grayTotal h-full flex items-center px-4 transition ease-out duration-500 cursor-pointer" href="https://www.youtube.com/channel/UCsNl4k9tn7Ao7wDiykfaHfg" target='_blank'
                    >
                        <span className="hover:opacity-100">Vídeo</span>
                    </a>
                    <a
                        className="hover:bg-grayTotal h-full flex items-center px-4 transition ease-out duration-500 cursor-pointer"
                        onClick={() => navigate('/Calendar')}
                    >
                        <span className="hover:opacity-100">Calendário</span>
                    </a>
                    <a
                        className="hover:bg-grayTotal h-full flex items-center px-4 transition ease-out duration-500 cursor-pointer"
                        onClick={() => navigate('/Resultados')}
                    >
                        <span className="hover:opacity-100">Resultados</span>
                    </a>
                    <a
                        className="hover:bg-grayTotal h-full flex items-center px-4 transition ease-out duration-500 cursor-pointer"
                        onClick={() => navigate('/Pilotos')}
                    >
                        <span className="hover:opacity-100">Pilotos</span>
                    </a>
                    <a
                        className="hover:bg-grayTotal h-full flex items-center px-4 transition ease-out duration-500 cursor-pointer"
                        onClick={() => navigate('/Times')}
                    >
                        <span className="hover:opacity-100">Times</span>
                    </a>
                    <a
                        className="hover:bg-grayTotal h-full flex items-center px-4 transition ease-out duration-500 cursor-pointer"
                        onClick={() => navigate('/Vip')}
                    >
                        <span className="hover:opacity-100">Vip</span>
                    </a>
                    <a
                        className="hover:bg-grayTotal h-full flex items-center px-4 transition ease-out duration-500 cursor-pointer"
                        onClick={() => navigate('/RedesSociais')}
                    >
                        <span className="hover:opacity-100">Redes Sociais</span>
                    </a>            </div>
            </div>
        </div>
    )
}

export default HeaderTwo