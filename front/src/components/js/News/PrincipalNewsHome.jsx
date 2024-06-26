import React, { forwardRef } from 'react';

const PrincipalNewsHome = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="principalHome py-6 lg:py-0 font-formula">
      {/* Noticia principal */}
      <div className="hover:cursor-pointer pt-3 pr-3 border-l-0 border-b-0 border-r-8 border-t-8 border-solid border-red-600 rounded-tr-3xl max-w-lg m-auto
      md:max-w-screen-md
      lg: ">
        <p className="text-red-600 text-xs font-formula-bold mb-1 uppercase">Tag</p>
        <h2 className="text-black text-2xl font-formula-bold mb-5 hover:underline">Manchete</h2>
        <div className="overflow-hidden inline-block rounded-sm w-full">
          <img className="w-full h-full hover:scale-110 duration-500 transition-transform mb-2" src="https://media.formula1.com/image/upload/t_16by9North/f_auto/q_auto/v1719156582/fom-website/2024/Spain/GettyImages-2158857659.jpg.transform/4col/image.jpg"/>
        </div>
        <span
          className="flex w-full h-4 bg-repeat bg-grade-pattern bg-2"
        />
      </div>
    </div>
  );
});

export default PrincipalNewsHome;
