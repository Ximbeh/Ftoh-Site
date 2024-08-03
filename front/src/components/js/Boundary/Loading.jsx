import React from 'react';
import '../../css/error.css'

const LoadingPage = () => {
  return (
    <div className='fullscreen'>
      <div className='flex flex-col justify-center items-center'>
        <img className="w-1/2" src="https://raw.githubusercontent.com/vallauri-ict/formula-1-thespino/master/assets/f1-illustration.gif" alt="" />
        <p className='text-center font-formula-bold text-2xl'>Carregando...</p>

      </div>
    </div>
  );
};

export default LoadingPage;
