import '../../css/Tabela.css'
import TabelaDrivers from './TablelaDrivers';
import TabelaTeams from './TabelaTeams';
import TabelaLastRace from './TabelaLastRace';
import { useState } from 'react';

const Tabela = () => {
  const [activeTab, setActiveTab] = useState('Pilotos');

  const handleActive = (e) => {
    const tabName = e.target.textContent;
    setActiveTab(tabName);
  };

  return (
    <div>
      <div className='px-6 relative w-full flex justify-center items-center gap-11 font-formula'>
        <a
          onClick={handleActive}
          className={`cursor-pointer pb-4 py-6 ${activeTab === 'Pilotos' ? 'active border-white border-b-4' : 'border-white border-b-4 hover:border-red-500'}`}
        >
          Pilotos
        </a>
        <a
          onClick={handleActive}
          className={`cursor-pointer pb-4 py-6 ${activeTab === 'Construtores' ? 'active border-white border-b-4' : 'border-white border-b-4 hover:border-red-500'}`}
        >
          Construtores
        </a>
        <a
          onClick={handleActive}
          className={`cursor-pointer pb-4 py-6 ${activeTab === 'Última Corrida' ? 'active border-white border-b-4' : 'border-white border-b-4 hover:border-red-500'}`}
        >
          Última Corrida
        </a>
      </div>

      {activeTab === 'Pilotos' && <TabelaDrivers />}
      {activeTab === 'Construtores' && <TabelaTeams />}
      {activeTab === 'Última Corrida' && <TabelaLastRace />}
    </div>
  );
};

export default Tabela;
