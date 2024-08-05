import '../../css/Tabela.css';
import TabelaDrivers from './TablelaDrivers';
import TabelaTeams from './TabelaTeams';
import TabelaLastRace from './TabelaLastRace';
import { useContext, useState } from 'react';
import { ChampionshipContext } from '../../../Context/ChampionshipContext';

const Tabela = () => {
  const [activeTab, setActiveTab] = useState('Pilotos');
  const { selectedChampionship } = useContext(ChampionshipContext);

  const handleActive = (tabName) => () => setActiveTab(tabName);

  const tabs = [
    { name: 'Pilotos', component: <TabelaDrivers /> },
    { name: 'Construtores', component: <TabelaTeams /> },
    { name: 'Última Corrida', component: <TabelaLastRace /> },
  ];

  return (
    <div>
      <div 
        className='px-6 relative w-full flex justify-center items-center gap-11 font-formula'
        style={{ '--active-border-color': selectedChampionship.color }}
      >
        {tabs.map(tab => (
          <a
            key={tab.name}
            onClick={handleActive(tab.name)}
            className={`hoverTabela cursor-pointer pb-4 py-6 ${activeTab === tab.name ? 'active' : ''}`}
          >
            {tab.name}
          </a>
        ))}
      </div>

      {tabs.find(tab => tab.name === activeTab)?.component}
    </div>
  );
};

export default Tabela;
