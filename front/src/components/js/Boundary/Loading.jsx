import React, { useState, useEffect } from 'react';
import '../../css/error.css';

const LoadingPage = () => {
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWarning(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='fullscreen'>
      <div className='flex flex-col justify-center items-center'>
        <img className="w-1/2" src="https://raw.githubusercontent.com/vallauri-ict/formula-1-thespino/master/assets/f1-illustration.gif" alt="" />
        <p className='text-center font-formula-bold text-2xl'>Carregando...</p>
        {showWarning && (
          <p className='text-center font-formula text-sm text-gray-800 mt-4'>
            O servidor gratuito é lento, tente entrar e sair se demorar muito
          </p>
        )}
      </div>
    </div>
  );
};

export default LoadingPage;
