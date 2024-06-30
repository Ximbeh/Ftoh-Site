import { Carousel } from "@material-tailwind/react";
import React from 'react';

export function CarouselCustomNavigation() {
    return (
        <div className="max-w-lg mx-auto md:max-w-screen-md max-w-screen-lg-30 xl:max-w-screen-xl">
            <div className="relative mx-2 mb-8 border-red-600 border-8 border-l-0 rounded-tr-xl rounded-br-xl">
                <h1 className="font-formula-bold text-xl absolute bg-white -top-5 pr-4">Highlights</h1>
                <div className='relative w-full pr-2 xl:flex xl:gap-4'>
                    <Carousel
                        className="rounded-xl py-4 md: py-6 pb-"
                        navigation={({ setActiveIndex, activeIndex, length }) => (
                            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                                {new Array(length).fill("").map((_, i) => (
                                    <span
                                        key={i}
                                        className={`mb-1 block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-12 bg-white" : "w-8 bg-white/50"
                                            }`}
                                        onClick={() => setActiveIndex(i)}
                                    />
                                ))}
                            </div>
                        )}
                    >
                        <div className="relative">
                            <img
                                src="https://media.formula1.com/image/upload/t_16by9North/f_auto/q_auto/v1719156582/fom-website/2024/Spain/GettyImages-2158857659.jpg.transform/4col/image.jpg"
                                alt="image 1"
                                className="h-full w-full object-cover hover:cursor-pointer"
                            />
                            <div className="absolute bottom-4 left-2 flex w-full items-end md:left-4 md:bottom-6 xl:bottom-4 xl:left-2">
                                <span className="bg-red-600 w-1 h-11 flex"></span>
                                <h2 className="ml-2 text-2xl text-white truncate w-4/5 md:w-11/12 md:ml-4 md:text-3xl xl:text-xl xl:ml-2" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="https://media.formula1.com/image/upload/t_16by9North/f_auto/q_auto/v1719156582/fom-website/2024/Spain/GettyImages-2158857659.jpg.transform/4col/image.jpg"
                                alt="image 1"
                                className="h-full w-full object-cover hover:cursor-pointer"
                            />
                            <div className="absolute bottom-4 left-2 flex w-full items-end md:left-4 md:bottom-6 xl:bottom-4 xl:left-2">
                                <span className="bg-red-600 w-1 h-11 flex"></span>
                                <h2 className="ml-2 text-2xl text-white truncate w-4/5 md:w-11/12 md:ml-4 md:text-3xl xl:text-xl xl:ml-2" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                            </div>
                        </div><div className="relative">
                            <img
                                src="https://media.formula1.com/image/upload/t_16by9North/f_auto/q_auto/v1719156582/fom-website/2024/Spain/GettyImages-2158857659.jpg.transform/4col/image.jpg"
                                alt="image 1"
                                className="h-full w-full object-cover hover:cursor-pointer"
                            />
                            <div className="absolute bottom-4 left-2 flex w-full items-end md:left-4 md:bottom-6 xl:bottom-4 xl:left-2">
                                <span className="bg-red-600 w-1 h-11 flex"></span>
                                <h2 className="ml-2 text-2xl text-white truncate w-4/5 md:w-11/12 md:ml-4 md:text-3xl xl:text-xl xl:ml-2" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                            </div>
                        </div><div className="relative">
                            <img
                                src="https://media.formula1.com/image/upload/t_16by9North/f_auto/q_auto/v1719156582/fom-website/2024/Spain/GettyImages-2158857659.jpg.transform/4col/image.jpg"
                                alt="image 1"
                                className="h-full w-full object-cover hover:cursor-pointer"
                            />
                            <div className="absolute bottom-4 left-2 flex w-full items-end md:left-4 md:bottom-6 xl:bottom-4 xl:left-2">
                                <span className="bg-red-600 w-1 h-11 flex"></span>
                                <h2 className="ml-2 text-2xl text-white truncate w-4/5 md:w-11/12 md:ml-4 md:text-3xl xl:text-xl xl:ml-2" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                            </div>
                        </div>
                    </Carousel>
                    <div className="md:grid md:grid-cols-2 gap-x-6 gap-y-2 xl:mt-6 xl:mr-4">
                        <div>
                            <div className="imagem overflow-hidden inline-block rounded-sm w-full hidden md:flex">
                                <img className="w-full h-full duration-500 transition-transform mb-2" src="https://media.formula1.com/image/upload/t_16by9North/f_auto/q_auto/v1719156582/fom-website/2024/Spain/GettyImages-2158857659.jpg.transform/4col/image.jpg" />
                            </div>
                            <div className="mb-4 duration-300 text pt-1 pb-3 px-3 border-r border-b border-l-0 border-t-0 border-solid border-gray-300 rounded-br-3xl min-h-4 hover:cursor-pointer">

                                <p className="text-red-600 text-xs font-formula-bold mb-1 uppercase">Tag</p>
                                <h2 className="text-black font-titillium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                            </div>
                        </div>
                        <div>
                            <div className="imagem overflow-hidden inline-block rounded-sm w-full  hidden md:flex">
                                <img className="w-full h-full duration-500 transition-transform mb-2" src="https://media.formula1.com/image/upload/t_16by9North/f_auto/q_auto/v1719156582/fom-website/2024/Spain/GettyImages-2158857659.jpg.transform/4col/image.jpg" />
                            </div>
                            <div className="mb-4 duration-300 text pt-1 pb-3 px-3 border-r border-b border-l-0 border-t-0 border-solid border-gray-300 rounded-br-3xl min-h-4 hover:cursor-pointer">

                                <p className="text-red-600 text-xs font-formula-bold mb-1 uppercase">Tag</p>
                                <h2 className="text-black font-titillium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                            </div>
                        </div> <div>
                            <div className="imagem overflow-hidden inline-block rounded-sm w-full  hidden xl:flex">
                                <img className="w-full h-full duration-500 transition-transform mb-2" src="https://media.formula1.com/image/upload/t_16by9North/f_auto/q_auto/v1719156582/fom-website/2024/Spain/GettyImages-2158857659.jpg.transform/4col/image.jpg" />
                            </div>
                            <div className="mb-4 duration-300 text pt-1 pb-3 px-3 border-r border-b border-l-0 border-t-0 border-solid border-gray-300 rounded-br-3xl min-h-4 hover:cursor-pointer">

                                <p className="text-red-600 text-xs font-formula-bold mb-1 uppercase">Tag</p>
                                <h2 className="text-black font-titillium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                            </div>
                        </div> <div>
                            <div className="imagem overflow-hidden inline-block rounded-sm w-full  hidden xl:flex">
                                <img className="w-full h-full duration-500 transition-transform mb-2" src="https://media.formula1.com/image/upload/t_16by9North/f_auto/q_auto/v1719156582/fom-website/2024/Spain/GettyImages-2158857659.jpg.transform/4col/image.jpg" />
                            </div>
                            <div className="mb-4 duration-300 text pt-1 pb-3 px-3 border-r border-b border-l-0 border-t-0 border-solid border-gray-300 rounded-br-3xl min-h-4 hover:cursor-pointer">

                                <p className="text-red-600 text-xs font-formula-bold mb-1 uppercase">Tag</p>
                                <h2 className="text-black font-titillium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}