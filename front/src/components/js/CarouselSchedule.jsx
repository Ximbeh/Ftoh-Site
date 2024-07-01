
import { Play } from 'lucide-react';
import '../css/CarouselSchedule.css'
import React, { useEffect } from 'react';


const CarouselSchedule = () => {

    useEffect(() => {
        const initialHashCheck = () => {
          if (!window.location.hash) {
            window.location.hash = '#corrida1';
          } else {
            window.scrollTo(0, 0);
          }
        };
    
        const handleHashChange = () => {
          window.scrollTo(0, 0);
        };
    
        initialHashCheck();
        window.addEventListener('hashchange', handleHashChange);
    
        const timeoutId = setTimeout(() => {
          window.removeEventListener('hashchange', handleHashChange);
        }, 5000);
    
        return () => {
          clearTimeout(timeoutId);
          window.removeEventListener('hashchange', handleHashChange);
        };
      }, []);
    

    return (
        <div className='relative'>
            <div class="slide-container">
                <span class="corrida absolute -top-32" id="corrida1"></span>
                <span class="corrida absolute -top-32" id="corrida2"></span>
                <span class="corrida absolute -top-32" id="corrida3"></span>
                <span class="corrida absolute -top-32" id="corrida4"></span>
                <span class="corrida absolute -top-32" id="corrida5"></span>
                <span class="corrida absolute -top-32" id="corrida6"></span>
                <span class="corrida absolute -top-32" id="corrida7"></span>
                <span class="corrida absolute -top-32" id="corrida8"></span>
                <span class="corrida absolute -top-32" id="corrida9"></span>
                <span class="corrida absolute -top-32" id="corrida10"></span>
                <span class="corrida absolute -top-32" id="corrida11"></span>
                <span class="corrida absolute -top-32" id="corrida12"></span>
                <span class="corrida absolute -top-32" id="corrida13"></span>
                <span class="corrida absolute -top-32" id="corrida14"></span>
                <span class="corrida absolute -top-32" id="corrida15"></span>
                <span class="corrida absolute -top-32" id="corrida16"></span>

                <div class="image-slider">
                    <div class="slides-div" id="slide-1">
                        <div className='content' id="content1">
                            <img className="rounded-md w-12 mb-2" src="https://media.formula1.com/content/dam/fom-website/manual/races/Austria/austria-flag.GIF" alt="" />
                            <h3 className='text-gray-600 text-sm mb-3 uppercase font-formula-bold'>Circuito</h3>
                            <h2 className='leading-9 text-white text-xl mb-1 font-formula-bold'>29</h2>
                            <h4 className='text-gray-600 text-sm uppercase font-titillium'>Jul</h4>
                        </div>
                        <div className='content open' id="contentOpen1">
                            <h2 className='text-white mb-2 text-center font-formula-bold text-xl  px-2 md:px-0 md:text-2xl'>Nome completo da pista de formula-1</h2>
                            <h5 className='mb-4 text-gray-600 text-sm font-titillium'>29 Abr 2024 - 09 Jun 2024</h5>
                            <div className='flex flex-col gap-2'>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Treino-Livre 1</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Ter</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Treino-Livre 2</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Qua</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-xm mr-4 uppercase'>Treino-Livre 3</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Qui</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Qualy</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Sex</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Corrida</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Sab</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                               
                            </div>
                        </div>
                        <a  href="#corrida1" class="button" id="button-1"></a>
                    </div>
                    <div class="slides-div" id="slide-2">
                        <div className='content' id="content2">
                            <img className="rounded-md w-12 mb-2" src="https://media.formula1.com/content/dam/fom-website/manual/races/Austria/austria-flag.GIF" alt="" />
                            <h3 className='text-gray-600 text-sm mb-3 uppercase font-formula-bold'>Circuito</h3>
                            <h2 className='leading-9 text-white text-xl mb-1 font-formula-bold'>29</h2>
                            <h4 className='text-gray-600 text-sm uppercase font-titillium'>Jul</h4>
                        </div>
                        <div className='content open' id="contentOpen2">
                            <h2 className='text-white mb-2 text-center font-formula-bold text-xl  px-2 md:px-0 md:text-2xl'>Nome completo da pista de formula-1</h2>
                            <h5 className='mb-4 text-gray-600 text-sm font-titillium'>29 Abr 2024 - 09 Jun 2024</h5>
                            <div className='flex flex-col gap-2'>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Treino-Livre 1</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Ter</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Treino-Livre 2</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Qua</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-xm mr-4 uppercase'>Treino-Livre 3</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Qui</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Qualy</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Sex</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Corrida</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Sab</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                               
                            </div>
                        </div>
                        <a href="#corrida2" class="button" id="button-2"></a>
                    </div>
                    <div class="slides-div" id="slide-3">
                        <div className='content' id="content3">
                            <img className="rounded-md w-12 mb-2" src="https://media.formula1.com/content/dam/fom-website/manual/races/Austria/austria-flag.GIF" alt="" />
                            <h3 className='text-gray-600 text-sm mb-3 uppercase font-formula-bold'>Circuito</h3>
                            <h2 className='leading-9 text-white text-xl mb-1 font-formula-bold'>29</h2>
                            <h4 className='text-gray-600 text-sm uppercase font-titillium'>Jul</h4>
                        </div>
                        <div className='content open' id="contentOpen3">
                            <h2 className='text-white mb-2 text-center font-formula-bold text-xl  px-2 md:px-0 md:text-2xl'>Nome completo da pista de formula-1</h2>
                            <h5 className='mb-4 text-gray-600 text-sm font-titillium'>29 Abr 2024 - 09 Jun 2024</h5>
                            <div className='flex flex-col gap-2'>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Treino-Livre 1</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Ter</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Treino-Livre 2</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Qua</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-xm mr-4 uppercase'>Treino-Livre 3</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Qui</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Qualy</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Sex</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Corrida</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Sab</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                               
                            </div>
                        </div>
                        <a href="#corrida3" class="button" id="button-3"></a>
                    </div>
                    
                    <div class="slides-div" id="slide-4">
                        <div className='content' id="content4">
                            <img className="rounded-md w-12 mb-2" src="https://media.formula1.com/content/dam/fom-website/manual/races/Austria/austria-flag.GIF" alt="" />
                            <h3 className='text-gray-600 text-sm mb-3 uppercase font-formula-bold'>Circuito</h3>
                            <h2 className='leading-9 text-white text-xl mb-1 font-formula-bold'>29</h2>
                            <h4 className='text-gray-600 text-sm uppercase font-titillium'>Jul</h4>
                        </div>
                        <div className='content open' id="contentOpen4">
                            <h2 className='text-white mb-2 text-center font-formula-bold text-xl  px-2 md:px-0 md:text-2xl'>Nome completo da pista de formula-1</h2>
                            <h5 className='mb-4 text-gray-600 text-sm font-titillium'>29 Abr 2024 - 09 Jun 2024</h5>
                            <div className='flex flex-col gap-2'>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Treino-Livre 1</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Ter</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Treino-Livre 2</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Qua</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-xm mr-4 uppercase'>Treino-Livre 3</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Qui</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Qualy</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Sex</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Corrida</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Sab</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                               
                            </div>
                        </div>
                        <a href="#corrida4" class="button" id="button-4"></a>
                    </div>







                    <div class="slides-div" id="slide-5">
                        <div className='content' id="content5">
                            <img className="rounded-md w-12 mb-2" src="https://media.formula1.com/content/dam/fom-website/manual/races/Austria/austria-flag.GIF" alt="" />
                            <h3 className='text-gray-600 text-sm mb-3 uppercase font-formula-bold'>Circuito</h3>
                            <h2 className='leading-9 text-white text-xl mb-1 font-formula-bold'>29</h2>
                            <h4 className='text-gray-600 text-sm uppercase font-titillium'>Jul</h4>
                        </div>
                        <div className='content open' id="contentOpen5">
                            <h2 className='text-white mb-2 text-center font-formula-bold text-xl  px-2 md:px-0 md:text-2xl'>Nome completo da pista de formula-1</h2>
                            <h5 className='mb-4 text-gray-600 text-sm font-titillium'>29 Abr 2024 - 09 Jun 2024</h5>
                            <div className='flex flex-col gap-2'>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Treino-Livre 1</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Ter</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Treino-Livre 2</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Qua</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-xm mr-4 uppercase'>Treino-Livre 3</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Qui</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Qualy</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Sex</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Corrida</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Sab</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                               
                            </div>
                        </div>
                        <a href="#corrida5" class="button" id="button-5"></a>
                    </div>
                    <div class="slides-div" id="slide-6">
                        <div className='content' id="content6">
                            <img className="rounded-md w-12 mb-2" src="https://media.formula1.com/content/dam/fom-website/manual/races/Austria/austria-flag.GIF" alt="" />
                            <h3 className='text-gray-600 text-sm mb-3 uppercase font-formula-bold'>Circuito</h3>
                            <h2 className='leading-9 text-white text-xl mb-1 font-formula-bold'>29</h2>
                            <h4 className='text-gray-600 text-sm uppercase font-titillium'>Jul</h4>
                        </div>
                        <div className='content open' id="contentOpen6">
                            <h2 className='text-white mb-2 text-center font-formula-bold text-xl  px-2 md:px-0 md:text-2xl'>Nome completo da pista de formula-1</h2>
                            <h5 className='mb-4 text-gray-600 text-sm font-titillium'>29 Abr 2024 - 09 Jun 2024</h5>
                            <div className='flex flex-col gap-2'>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Treino-Livre 1</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Ter</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Treino-Livre 2</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Qua</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-xm mr-4 uppercase'>Treino-Livre 3</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Qui</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Qualy</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Sex</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Corrida</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Sab</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                               
                            </div>
                        </div>
                        <a href="#corrida6" class="button" id="button-6"></a>
                    </div>
                    <div class="slides-div" id="slide-7">
                        <div className='content' id="content7">
                            <img className="rounded-md w-12 mb-2" src="https://media.formula1.com/content/dam/fom-website/manual/races/Austria/austria-flag.GIF" alt="" />
                            <h3 className='text-gray-600 text-sm mb-3 uppercase font-formula-bold'>Circuito</h3>
                            <h2 className='leading-9 text-white text-xl mb-1 font-formula-bold'>29</h2>
                            <h4 className='text-gray-600 text-sm uppercase font-titillium'>Jul</h4>
                        </div>
                        <div className='content open' id="contentOpen7">
                            <h2 className='text-white mb-2 text-center font-formula-bold text-xl  px-2 md:px-0 md:text-2xl'>Nome completo da pista de formula-1</h2>
                            <h5 className='mb-4 text-gray-600 text-sm font-titillium'>29 Abr 2024 - 09 Jun 2024</h5>
                            <div className='flex flex-col gap-2'>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Treino-Livre 1</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Ter</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Treino-Livre 2</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Qua</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-xm mr-4 uppercase'>Treino-Livre 3</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Qui</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Qualy</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Sex</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Corrida</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Sab</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                               
                            </div>
                        </div>
                        <a href="#corrida7" class="button" id="button-7"></a>
                    </div>
                    <div class="slides-div" id="slide-8">
                        <div className='content' id="content8">
                            <img className="rounded-md w-12 mb-2" src="https://media.formula1.com/content/dam/fom-website/manual/races/Austria/austria-flag.GIF" alt="" />
                            <h3 className='text-gray-600 text-sm mb-3 uppercase font-formula-bold'>Circuito</h3>
                            <h2 className='leading-9 text-white text-xl mb-1 font-formula-bold'>29</h2>
                            <h4 className='text-gray-600 text-sm uppercase font-titillium'>Jul</h4>
                        </div>
                        <div className='content open' id="contentOpen8">
                            <h2 className='text-white mb-2 text-center font-formula-bold text-xl  px-2 md:px-0 md:text-2xl'>Nome completo da pista de formula-1</h2>
                            <h5 className='mb-4 text-gray-600 text-sm font-titillium'>29 Abr 2024 - 09 Jun 2024</h5>
                            <div className='flex flex-col gap-2'>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Treino-Livre 1</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Ter</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Treino-Livre 2</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Qua</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-xm mr-4 uppercase'>Treino-Livre 3</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Qui</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Qualy</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Sex</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Corrida</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Sab</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                               
                            </div>
                        </div>
                        <a href="#corrida8" class="button" id="button-8"></a>
                    </div>
                    <div class="slides-div" id="slide-9">
                        <div className='content' id="content9">
                            <img className="rounded-md w-12 mb-2" src="https://media.formula1.com/content/dam/fom-website/manual/races/Austria/austria-flag.GIF" alt="" />
                            <h3 className='text-gray-600 text-sm mb-3 uppercase font-formula-bold'>Circuito</h3>
                            <h2 className='leading-9 text-white text-xl mb-1 font-formula-bold'>29</h2>
                            <h4 className='text-gray-600 text-sm uppercase font-titillium'>Jul</h4>
                        </div>
                        <div className='content open' id="contentOpen9">
                            <h2 className='text-white mb-2 text-center font-formula-bold text-xl  px-2 md:px-0 md:text-2xl'>Nome completo da pista de formula-1</h2>
                            <h5 className='mb-4 text-gray-600 text-sm font-titillium'>29 Abr 2024 - 09 Jun 2024</h5>
                            <div className='flex flex-col gap-2'>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Treino-Livre 1</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Ter</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Treino-Livre 2</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Qua</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-xm mr-4 uppercase'>Treino-Livre 3</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Qui</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Qualy</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Sex</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Corrida</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Sab</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                               
                            </div>
                        </div>
                        <a href="#corrida9" class="button" id="button-9"></a>
                    </div>
                    <div class="slides-div" id="slide-10">
                        <div className='content' id="content10">
                            <img className="rounded-md w-12 mb-2" src="https://media.formula1.com/content/dam/fom-website/manual/races/Austria/austria-flag.GIF" alt="" />
                            <h3 className='text-gray-600 text-sm mb-3 uppercase font-formula-bold'>Circuito</h3>
                            <h2 className='leading-9 text-white text-xl mb-1 font-formula-bold'>29</h2>
                            <h4 className='text-gray-600 text-sm uppercase font-titillium'>Jul</h4>
                        </div>
                        <div className='content open' id="contentOpen10">
                            <h2 className='text-white mb-2 text-center font-formula-bold text-xl  px-2 md:px-0 md:text-2xl'>Nome completo da pista de formula-1</h2>
                            <h5 className='mb-4 text-gray-600 text-sm font-titillium'>29 Abr 2024 - 09 Jun 2024</h5>
                            <div className='flex flex-col gap-2'>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Treino-Livre 1</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Ter</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Treino-Livre 2</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Qua</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-xm mr-4 uppercase'>Treino-Livre 3</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Qui</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Qualy</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Sex</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Corrida</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Sab</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                               
                            </div>
                        </div>
                        <a href="#corrida10" class="button" id="button-10"></a>
                    </div>
                    <div class="slides-div" id="slide-11">
                        <div className='content' id="content11">
                            <img className="rounded-md w-12 mb-2" src="https://media.formula1.com/content/dam/fom-website/manual/races/Austria/austria-flag.GIF" alt="" />
                            <h3 className='text-gray-600 text-sm mb-3 uppercase font-formula-bold'>Circuito</h3>
                            <h2 className='leading-9 text-white text-xl mb-1 font-formula-bold'>29</h2>
                            <h4 className='text-gray-600 text-sm uppercase font-titillium'>Jul</h4>
                        </div>
                        <div className='content open' id="contentOpen11">
                            <h2 className='text-white mb-2 text-center font-formula-bold text-xl  px-2 md:px-0 md:text-2xl'>Nome completo da pista de formula-1</h2>
                            <h5 className='mb-4 text-gray-600 text-sm font-titillium'>29 Abr 2024 - 09 Jun 2024</h5>
                            <div className='flex flex-col gap-2'>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Treino-Livre 1</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Ter</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Treino-Livre 2</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Qua</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-xm mr-4 uppercase'>Treino-Livre 3</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Qui</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Qualy</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Sex</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Corrida</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Sab</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                               
                            </div>
                        </div>
                        <a href="#corrida11" class="button" id="button-11"></a>
                    </div>
                    <div class="slides-div" id="slide-12">
                        <div className='content' id="content12">
                            <img className="rounded-md w-12 mb-2" src="https://media.formula1.com/content/dam/fom-website/manual/races/Austria/austria-flag.GIF" alt="" />
                            <h3 className='text-gray-600 text-sm mb-3 uppercase font-formula-bold'>Circuito</h3>
                            <h2 className='leading-9 text-white text-xl mb-1 font-formula-bold'>29</h2>
                            <h4 className='text-gray-600 text-sm uppercase font-titillium'>Jul</h4>
                        </div>
                        <div className='content open' id="contentOpen12">
                            <h2 className='text-white mb-2 text-center font-formula-bold text-xl  px-2 md:px-0 md:text-2xl'>Nome completo da pista de formula-1</h2>
                            <h5 className='mb-4 text-gray-600 text-sm font-titillium'>29 Abr 2024 - 09 Jun 2024</h5>
                            <div className='flex flex-col gap-2'>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Treino-Livre 1</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Ter</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Treino-Livre 2</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Qua</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-xm mr-4 uppercase'>Treino-Livre 3</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Qui</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Qualy</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Sex</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Corrida</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Sab</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                               
                            </div>
                        </div>
                        <a href="#corrida12" class="button" id="button-12"></a>
                    </div>
                    <div class="slides-div" id="slide-13">
                        <div className='content' id="content13">
                            <img className="rounded-md w-12 mb-2" src="https://media.formula1.com/content/dam/fom-website/manual/races/Austria/austria-flag.GIF" alt="" />
                            <h3 className='text-gray-600 text-sm mb-3 uppercase font-formula-bold'>Circuito</h3>
                            <h2 className='leading-9 text-white text-xl mb-1 font-formula-bold'>29</h2>
                            <h4 className='text-gray-600 text-sm uppercase font-titillium'>Jul</h4>
                        </div>
                        <div className='content open' id="contentOpen13">
                            <h2 className='text-white mb-2 text-center font-formula-bold text-xl  px-2 md:px-0 md:text-2xl'>Nome completo da pista de formula-1</h2>
                            <h5 className='mb-4 text-gray-600 text-sm font-titillium'>29 Abr 2024 - 09 Jun 2024</h5>
                            <div className='flex flex-col gap-2'>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Treino-Livre 1</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Ter</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Treino-Livre 2</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Qua</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-xm mr-4 uppercase'>Treino-Livre 3</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Qui</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Qualy</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Sex</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Corrida</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Sab</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                               
                            </div>
                        </div>
                        <a href="#corrida13" class="button" id="button-13"></a>
                    </div>
                    <div class="slides-div" id="slide-14">
                        <div className='content' id="content14">
                            <img className="rounded-md w-12 mb-2" src="https://media.formula1.com/content/dam/fom-website/manual/races/Austria/austria-flag.GIF" alt="" />
                            <h3 className='text-gray-600 text-sm mb-3 uppercase font-formula-bold'>Circuito</h3>
                            <h2 className='leading-9 text-white text-xl mb-1 font-formula-bold'>29</h2>
                            <h4 className='text-gray-600 text-sm uppercase font-titillium'>Jul</h4>
                        </div>
                        <div className='content open' id="contentOpen14">
                            <h2 className='text-white mb-2 text-center font-formula-bold text-xl  px-2 md:px-0 md:text-2xl'>Nome completo da pista de formula-1</h2>
                            <h5 className='mb-4 text-gray-600 text-sm font-titillium'>29 Abr 2024 - 09 Jun 2024</h5>
                            <div className='flex flex-col gap-2'>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Treino-Livre 1</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Ter</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Treino-Livre 2</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Qua</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-xm mr-4 uppercase'>Treino-Livre 3</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Qui</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Qualy</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Sex</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Corrida</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Sab</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                               
                            </div>
                        </div>
                        <a href="#corrida14" class="button" id="button-14"></a>
                    </div>
                    <div class="slides-div" id="slide-15">
                        <div className='content' id="content15">
                            <img className="rounded-md w-12 mb-2" src="https://media.formula1.com/content/dam/fom-website/manual/races/Austria/austria-flag.GIF" alt="" />
                            <h3 className='text-gray-600 text-sm mb-3 uppercase font-formula-bold'>Circuito</h3>
                            <h2 className='leading-9 text-white text-xl mb-1 font-formula-bold'>29</h2>
                            <h4 className='text-gray-600 text-sm uppercase font-titillium'>Jul</h4>
                        </div>
                        <div className='content open' id="contentOpen15">
                            <h2 className='text-white mb-2 text-center font-formula-bold text-xl  px-2 md:px-0 md:text-2xl'>Nome completo da pista de formula-1</h2>
                            <h5 className='mb-4 text-gray-600 text-sm font-titillium'>29 Abr 2024 - 09 Jun 2024</h5>
                            <div className='flex flex-col gap-2'>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Treino-Livre 1</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Ter</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Treino-Livre 2</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Qua</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-xm mr-4 uppercase'>Treino-Livre 3</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Qui</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Qualy</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Sex</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Corrida</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Sab</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                               
                            </div>
                        </div>
                        <a href="#corrida15" class="button" id="button-15"></a>
                    </div>
                    <div class="slides-div" id="slide-16">
                        <div className='content' id="content16">
                            <img className="rounded-md w-12 mb-2" src="https://media.formula1.com/content/dam/fom-website/manual/races/Austria/austria-flag.GIF" alt="" />
                            <h3 className='text-gray-600 text-sm mb-3 uppercase font-formula-bold'>Circuito</h3>
                            <h2 className='leading-9 text-white text-xl mb-1 font-formula-bold'>29</h2>
                            <h4 className='text-gray-600 text-sm uppercase font-titillium'>Jul</h4>
                        </div>
                        <div className='content open' id="contentOpen16">
                            <h2 className='text-white mb-2 text-center font-formula-bold text-xl  px-2 md:px-0 md:text-2xl'>Nome completo da pista de formula-1</h2>
                            <h5 className='mb-4 text-gray-600 text-sm font-titillium'>29 Abr 2024 - 09 Jun 2024</h5>
                            <div className='flex flex-col gap-2'>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Treino-Livre 1</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Ter</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Treino-Livre 2</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Qua</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-xm mr-4 uppercase'>Treino-Livre 3</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Qui</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Qualy</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Sex</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                                <div className='flex items-center justify-between px-2 md:px-0'>
                                    <h3 className='text-gray-400 font-formula text-xs md:text-sm mr-4 uppercase'>Corrida</h3>
                                    <h4 className='text-gray-600 font-formula-bold text-xs mr-2 uppercase'>Sab</h4>
                                    <h4 className='text-white font-formula text-xs px-1 py-2 bg-gray-800 rounded-xl'>08:30 - 09:30</h4>
                                </div>
                               
                            </div>
                        </div>
                        <a href="#corrida16" class="button" id="button-16"></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarouselSchedule