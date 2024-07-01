
import '../../css/Tabela.css'
import { ChevronRight } from 'lucide-react';

const TabelaDrivers = () => {
  return (
    <div>
      <div className='z-1 relative px-6 bg-gray-200'>
        <div className='max-w-lg mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-5xl'>
          <h1 className='relative  font-formula-bold text-white text-3xl w-full text-center justify-center pt-10 pb-28'>Campeonato de Pilotos</h1>
          <div>
            <div className='bg-white shadow-lg relative w-full h-36 rounded-t-2xl flex items-center md:hidden'>
              <img className="ml-4 w-28 h-28 bg-blue-900" src="" />
              <span className='bg-blue-900 absolute w-full h-3 bottom-0'></span>
              <img className="w-72 absolute bottom-0 right-2" src="https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/homepage/driver-standings-component/MAXVER01.png.transform/4col/image.png"></img>
            </div>
            <div className='flex gap-4 items-end'>
              <div className=' relative w-4/12 hidden md:flex flex-col'>
                <div className='bg-white relative h-24 rounded-t-2xl flex'>
                  <img className="ml-4 mt-4 w-12 h-12 bg-blue-900" src="" />
                  <span className='bg-blue-900 absolute w-full h-2 bottom-0'></span>
                  <img className="w-56 absolute bottom-0 right-2" src="https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/homepage/driver-standings-component/MAXVER01.png.transform/4col/image.png"></img>
                </div>
                <div className='bg-gray-800 h-24 rounded-b-2xl flex text-white flex-col justify-center pl-4'>
                  <div className='flex gap-2 items-center'>
                    <h4 className='font-formula'>Max</h4>
                    <img className="w-5 h-min rounded-sm" src="https://media.formula1.com/content/dam/fom-website/flags/Netherlands.gif.transform/1col/image.gif" alt="" />
                  </div>
                  <h3 className='text-lg font-formula-bold uppercase'>Verstappen</h3>
                </div>
              </div>
              <div className=' relative w-5/12 hidden md:flex flex-col'>
                <div className='bg-white relative h-32 rounded-t-2xl flex'>
                  <img className="ml-4 mt-4 w-12 h-12 bg-blue-900" src="" />
                  <span className='bg-blue-900 absolute w-full h-2 bottom-0'></span>
                  <img className="w-56 absolute bottom-0 right-2" src="https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/homepage/driver-standings-component/MAXVER01.png.transform/4col/image.png"></img>
                </div>
                <div className='bg-gray-800 h-24 rounded-b-2xl flex text-white flex-col justify-center pl-4'>
                  <div className='flex gap-2 items-center'>
                    <h4 className='font-formula'>Max</h4>
                    <img className="w-5 h-min rounded-sm" src="https://media.formula1.com/content/dam/fom-website/flags/Netherlands.gif.transform/1col/image.gif" alt="" />
                  </div>
                  <h3 className='text-lg font-formula-bold uppercase'>Verstappen</h3>
                </div>
              </div>
              <div className=' relative w-4/12 hidden md:flex flex-col'>
                <div className='bg-white relative h-24 rounded-t-2xl flex'>
                  <img className="ml-4 mt-4 w-12 h-12 bg-blue-900" src="" />
                  <span className='bg-blue-900 absolute w-full h-2 bottom-0'></span>
                  <img className="w-56 absolute bottom-0 right-2" src="https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/homepage/driver-standings-component/MAXVER01.png.transform/4col/image.png"></img>
                </div>
                <div className='bg-gray-800 h-24 rounded-b-2xl flex text-white flex-col justify-center pl-4'>
                  <div className='flex gap-2 items-center'>
                    <h4 className='font-formula'>Max</h4>
                    <img className="w-5 h-min rounded-sm" src="https://media.formula1.com/content/dam/fom-website/flags/Netherlands.gif.transform/1col/image.gif" alt="" />
                  </div>
                  <h3 className='text-lg font-formula-bold uppercase'>Verstappen</h3>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <div className='cursor-pointer w-full gap-2 p-4 bg-white hover:bg-gray-800 transition duration-500 flex justify-between items-center rounded-md mb-2 hover-text-white'>
                <div className='flex items-center font-formula-bold'>
                  <h5 className='mr-2 pr-2 border-r-4 border-blue-900'>1</h5>
                  <h5 className='hidden md:flex font-formula mr-1'>Max</h5>
                  <h5 className='uppercase mr-2'>Verstappen</h5>
                  <p className='hidden md:flex font-titillium text-sm text-gray-600'>Red Bull Racing</p>
                </div>
                <div className='flex items-center'>
                  <p className='bg-gray-300 font-titillium rounded-2xl px-3 py-1'>237 PTS</p>
                  <ChevronRight className="chevron-right" style={{ color: "red" }} />
                </div>
              </div>
              <div className='cursor-pointer w-full gap-2 p-4 bg-white hover:bg-gray-800 transition duration-500 flex justify-between items-center rounded-md mb-2 hover-text-white'>
                <div className='flex items-center font-formula-bold'>
                  <h5 className='mr-2 pr-2 border-r-4 border-blue-900'>1</h5>
                  <h5 className='hidden md:flex font-formula mr-1'>Max</h5>
                  <h5 className='uppercase mr-2'>Verstappen</h5>
                  <p className='hidden md:flex font-titillium text-sm text-gray-600'>Red Bull Racing</p>
                </div>
                <div className='flex items-center'>
                  <p className='bg-gray-300 font-titillium rounded-2xl px-3 py-1'>237 PTS</p>
                  <ChevronRight className="chevron-right" style={{ color: "red" }} />
                </div>
              </div>
              <div className='cursor-pointer w-full gap-2 p-4 bg-white hover:bg-gray-800 transition duration-500 flex justify-between items-center rounded-md mb-2 hover-text-white'>
                <div className='flex items-center font-formula-bold'>
                  <h5 className='mr-2 pr-2 border-r-4 border-blue-900'>1</h5>
                  <h5 className='hidden md:flex font-formula mr-1'>Max</h5>
                  <h5 className='uppercase mr-2'>Verstappen</h5>
                  <p className='hidden md:flex font-titillium text-sm text-gray-600'>Red Bull Racing</p>
                </div>
                <div className='flex items-center'>
                  <p className='bg-gray-300 font-titillium rounded-2xl px-3 py-1'>237 PTS</p>
                  <ChevronRight className="chevron-right" style={{ color: "red" }} />
                </div>
              </div>

              <button className='md:max-w-max md:px-4 w-full bg-red-600 text-white text-sm font-formula-bold py-4 mt-4 mb-10 rounded-lg uppercase border-2 border-white hover:border-red-600 hover:bg-white hover:text-gray-800 transition duration-500'>Veja o resultado completo</button>
            </div>
          </div>
        </div>
        <img className="z-m1 bg-g absolute w-full h-72 left-0 top-0 " src="	https://www.formula1.com/etc/designs/fom-website/images/homepage/standings/bg.jpg" alt="" />
      </div>


    </div>
  )
}

export default TabelaDrivers
