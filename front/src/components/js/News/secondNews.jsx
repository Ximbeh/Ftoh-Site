import "../../css/news.css"

const SecondNews = () => {

    return (
        <div className="component hover:cursor-pointer max-w-xs m-auto mt-0
        md:max-w-screen-md
        lg: ">
            <div className="font-formula">
                <div className="imagem overflow-hidden inline-block rounded-sm w-full">
                    <img className="w-full h-full duration-500 transition-transform mb-2" src="https://media.formula1.com/image/upload/t_16by9North/f_auto/q_auto/v1719156582/fom-website/2024/Spain/GettyImages-2158857659.jpg.transform/4col/image.jpg" />
                </div>
                <div className="duration-300 text pt-1 pb-3 px-3 border-r border-b border-l-0 border-t-0 border-solid border-gray-300 rounded-br-3xl min-h-4">
                    <p className="text-red-600 text-xs font-formula-bold mb-1 uppercase">Tag</p>
                    <h2 className="text-black text-sm font-formula md:hover:underline">Manchete</h2>
                </div>
            </div>
        </div>
    )

}

export default SecondNews
