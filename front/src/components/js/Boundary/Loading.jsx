import React, { useState, useEffect } from 'react';
import '../../css/error.css';

const LoadingPage = () => {
  const [warningText, setWarningText] = useState("Carregando...");
  const [showWarning, setShowWarning] = useState(false);

  const curiosities = [
    "Schumacchio é o maior vencedor de corridas da FTOH, ele tem 4 vitórias!",
    "O primeiro piloto a vencer uma corrida na FTOH foi Schumacchio, em Melbourne 2023.",
    "A FTOH já teve uma temporada secreta no inicio de 2023 que acabou tendo só 4 corridas.",
    "Ximbastian Vettel não tem nenhuma vitória.",
    "A FTOH tem um campeonato de Futsal no hax também, a TOHAX!.",
    "A corrida mais longa da FTOH foi Nurburgring, sendo completada em 17 minutos.",
    "O primeiro, atual e único campeão da FTOH é Leo Alonso.",
    "O campeonato de 2023 teve uma diferença de 2 pontos entre o primeiro e segundo piloto.",
    "O piloto com mais pódio da história da FTOH é Leo Alonso, com 12 pódios.",
    "Monaco 2023 é uma LostMedia, sendo o único GP da FTOH não tendo registros.",
    "Em Imola, 2023, Michael Schumaicon e Opper Prost marcaram a mesma Hot-Lap, 0.33.983s!",
    "Kos Vertappen é o recordistas em DNF's, colecionando 4 desistencias em 9 corridas!",
    "A única vitória de fora do top-3 é da Konardi em Suzuka, pilotada por Kos Verstappen"
  ];

  useEffect(() => {
    const initialWarningTimer = setTimeout(() => {
      setWarningText("O servidor gratuito é lento, tente entrar e sair se demorar muito");
      setShowWarning(true);
    }, 2000);

    const middleWarningTimer = setTimeout(() => {
      setWarningText("Você deve estar acordando o servidor! Isso deve demorar cerca de 30 segundos, depois desse tempo, reinicie");
    }, 6000);

    const finalWarningTimer = setTimeout(() => {
      setWarningText("Reinicie a página");
    }, 30000);

    const curiosityTimer = setTimeout(() => {
      const interval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * curiosities.length);
        setWarningText(curiosities[randomIndex]);
      }, 5000);

      return () => clearInterval(interval);
    }, 10000);

    return () => {
      clearTimeout(initialWarningTimer);
      clearTimeout(middleWarningTimer);
      clearTimeout(finalWarningTimer);
      clearTimeout(curiosityTimer); // Limpa o timeout de curiosidade
    };
  }, []);

  return (
    <div className='fullscreen'>
      <div className='flex flex-col justify-center items-center'>
        <img className="w-1/2" src="https://raw.githubusercontent.com/vallauri-ict/formula-1-thespino/master/assets/f1-illustration.gif" alt="" />
        <p className='text-center font-formula-bold text-2xl'>Carregando...</p>
        {showWarning && (
          <p className='text-center font-formula text-sm text-gray-800 mt-4'>
            {warningText}
          </p>
        )}
      </div>
    </div>
  );
};

export default LoadingPage;
