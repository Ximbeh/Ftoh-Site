import React from 'react';
import error from '/img/logo/error.png'
import '../../css/error.css'

const ErrorPage = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <img className="error w-96 -mb-20 sm:mt-5 md:mt-10 lg:mt-20" src={error} alt="" />
      <h1 className='font-formula-bold text-red-500 text-8xl'>Erro!</h1>
      <p className=''>Ocorreu algum erro, tente reiniciar a página ou comunique o dono do site no discord: <a className='text-blue-800' href="https://discord.com/invite/MuQ7QX6cPr" target="_blank">ximbeh</a></p>
    </div>
  );
};

export default ErrorPage;
