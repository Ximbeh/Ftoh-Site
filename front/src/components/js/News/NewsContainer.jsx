import "../../css/news.css"

const NewsContainer = () => {

  return (
    <div className="overflow-hidden newsContainer bg-white py-3 hover:bg-grayTotal cursor-pointer flex flex-row gap-4 mb-2 hover:text-white transition ease-out duration-300
    md:flex-col md:py-0 md:pb-4 md:gap-0  md:rounded-b-xl">
        <img className="inline-block w-2/5 md:w-full object-contain duration-500 transition-transform mb-2" src="https://media.formula1.com/image/upload/t_16by9North/f_auto/q_auto/v1719156582/fom-website/2024/Spain/GettyImages-2158857659.jpg.transform/4col/image.jpg" />
        <div className="md:p-4">
            <h5 className="text-red-500 text-sm font-formula-bold mb-2">Tag</h5>
            <p className="text-sm md:text-base md:font-formula font-titillium">Titulo</p>
        </div>
    </div>
  )
}

export default NewsContainer
