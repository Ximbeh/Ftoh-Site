
import '../../css/Tabela.css'
import { ChevronRight } from 'lucide-react';
import First from '../../../assets/First.svg'
import Second from '../../../assets/Second.png'
import Third from '../../../assets/Third.svg'

const TabelaLastRace = ({championshipColorHex}) => {
  return (
    <div>
      <div className='z-1 relative px-6 bg-gray-200'>
        <div className='max-w-lg mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-5xl'>
          <h1 className='relative font-formula-bold text-white text-6xl w-full text-center justify-center pt-10 uppercase'>Austria</h1>
          <h2 className='text-stroke relative font-formula-bold text-transparent text-5xl w-full text-center justify-center pt-2 uppercase'>2024</h2>
          <div className='cursor-pointer flex relative font-formula w-full text-center justify-center pt-4 pb-6'>
            <p className='mt-0.5 text-white text-sm uppercase'>Nome completo da corrida de fórmula 1</p>
            <ChevronRight className="chevron-right" style={{ color: championshipColorHex}} />
          </div>
          <div>
            <div className='flex flex-col items-center bg-gray-200 p-3 rounded-lg'>
              <div className='cursor-pointer w-full gap-2 p-4 bg-white hover:bg-gray-800 transition duration-500 flex justify-between items-center rounded-md mb-2 hover-text-white'>
                <div className='flex items-center font-formula-bold'>
                <h5 className='mr-2 pr-2 border-r-4 border-blue-900'>1</h5>
                  <h5 className='hidden md:flex font-formula mr-1'>Max</h5>
                  <h5 className='uppercase mr-2'>Verstappen</h5>
                  <p className='hidden md:flex font-titillium text-sm text-gray-600'>Red Bull Racing</p>
                </div>
                <div className='flex items-center'>
                 
                  <p className='bg-gray-300 font-titillium rounded-2xl px-3 py-1 text-center'>237 PTS</p>
                  <ChevronRight className="chevron-right" style={{ color: championshipColorHex }} />
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
                 
                  <p className='bg-gray-300 font-titillium rounded-2xl px-3 py-1 text-center'>237 PTS</p>
                  <ChevronRight className="chevron-right" style={{ color: championshipColorHex }} />
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
                 
                  <p className='bg-gray-300 font-titillium rounded-2xl px-3 py-1 text-center'>237 PTS</p>
                  <ChevronRight className="chevron-right" style={{ color: championshipColorHex }} />
                </div>
              </div>

              <button className='tabela-completa-btn md:max-w-max md:px-4 w-full text-sm font-formula-bold py-4 mt-4 mb-10 rounded-lg uppercase border-2' style={{'--championship-color': championshipColorHex}}>
                <span className='tabela-completa-btn-text'  style={{'--championship-color': championshipColorHex}}>Resultado da Corrida</span>
              </button>
            </div>
          </div>
        </div>
        <img className="z-m1 bg-g absolute w-full h-72 left-0 top-0 " src="	https://www.formula1.com/etc/designs/fom-website/images/homepage/standings/bg.jpg" alt="" />
      </div>


    </div>
  )
}

export default TabelaLastRace


