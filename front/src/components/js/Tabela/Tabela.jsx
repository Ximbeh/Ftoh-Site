
import '../../css/Tabela.css'
import TabelaDrivers from './TablelaDrivers';

const Tabela = () => {
  return(
    <div>
      <div className='px-6 relative w-full flex justify-center items-center gap-11 font-formula'>
        <a className="pb-4 py-6 active border-white border-b-4" href="">Pilotos</a>
        <a className="pb-4 py-6 border-white border-b-4" href="">Construtores</a>
        <a className="pb-4 py-6 border-white border-b-4" href="">Última Corrida</a>
      </div>

      <TabelaDrivers></TabelaDrivers>
    </div>
  )
}

export default Tabela
