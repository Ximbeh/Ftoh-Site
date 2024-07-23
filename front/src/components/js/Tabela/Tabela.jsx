import '../../css/Tabela.css';
import TabelaDrivers from './TablelaDrivers';
import TabelaTeams from './TabelaTeams';
import TabelaLastRace from './TabelaLastRace';
import { useState } from 'react';

const Tabela = ({ championshipColorHex }) => {
  const [activeTab, setActiveTab] = useState('Pilotos');

  const handleActive = (e) => {
    const tabName = e.target.textContent;
    setActiveTab(tabName);
  };

  return (
    <div>
      <div 
        className='px-6 relative w-full flex justify-center items-center gap-11 font-formula'
        style={{ '--active-border-color': championshipColorHex }}
      >
        <a
          onClick={handleActive}
          className={`hoverTabela cursor-pointer pb-4 py-6 ${activeTab === 'Pilotos' ? 'active' : ''}`}
        >
          Pilotos
        </a>
        <a
          onClick={handleActive}
          className={`hoverTabela cursor-pointer pb-4 py-6 ${activeTab === 'Construtores' ? 'active' : ''}`}
        >
          Construtores
        </a>
        <a
          onClick={handleActive}
          className={`hoverTabela cursor-pointer pb-4 py-6 ${activeTab === 'Última Corrida' ? 'active' : ''}`}
        >
          Última Corrida
        </a>
      </div>

      {activeTab === 'Pilotos' && <TabelaDrivers  championshipColorHex={championshipColorHex}/>}
      {activeTab === 'Construtores' && <TabelaTeams championshipColorHex={championshipColorHex}/>}
      {activeTab === 'Última Corrida' && <TabelaLastRace championshipColorHex={championshipColorHex}/>}
    </div>
  );
};

export default Tabela;
