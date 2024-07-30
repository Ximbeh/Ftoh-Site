import '../../css/Tabela.css';
import TabelaDrivers from './TablelaDrivers';
import TabelaTeams from './TabelaTeams';
import TabelaLastRace from './TabelaLastRace';
import { useContext, useState } from 'react';
import { ChampionshipContext } from '../../../Context/ChampionshipContext';


const Tabela = () => {
  const [activeTab, setActiveTab] = useState('Pilotos');
  const { selectedChampionship } = useContext(ChampionshipContext);

  const handleActive = (e) => {
    const tabName = e.target.textContent;
    setActiveTab(tabName);
  };

  return (
    <div>
      <div 
        className='px-6 relative w-full flex justify-center items-center gap-11 font-formula'
        style={{ '--active-border-color': selectedChampionship.color }}
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

      {activeTab === 'Pilotos' && <TabelaDrivers />}
      {activeTab === 'Construtores' && <TabelaTeams/>}
      {activeTab === 'Última Corrida' && <TabelaLastRace/>}
    </div>
  );
};

export default Tabela;
