import { useEffect, useRef } from 'react';
import PrincipalNewsHome from './PrincipalNewsHome';
import SecondNews from './SecondNews';
import { ChevronRight } from "lucide-react";
import "../../css/news.css";

const NewsHome = ({ championshipColorHex }) => {
  const contentAreaRef = useRef(null);
  const principalHomeRef = useRef(null);

  const topSpace = 130;
  const breakpoint = 1024;
  const stickyClass = 'sticky-sidebar';
  const bottomFixedClass = 'bottom-fixed-sidebar';

  useEffect(() => {
    const contentArea = contentAreaRef.current;
    const sideBar = principalHomeRef.current;

    const controlSideBarFloating = () => {
      if (!contentArea || !sideBar) return;

      const rectL = contentArea.getBoundingClientRect();
      const rectR = sideBar.getBoundingClientRect();
      if (window.innerWidth >= breakpoint) {
        if (rectL.top - topSpace + (rectL.height - rectR.height) >= 0 && rectL.top - topSpace <= 0) {
          sideBar.classList.add(stickyClass);
          sideBar.classList.remove(bottomFixedClass);
        } else if (rectL.top - topSpace + (rectL.height - rectR.height) <= 0) {
          sideBar.classList.remove(stickyClass);
          sideBar.classList.add(bottomFixedClass);
        } else {
          sideBar.classList.remove(stickyClass);
          sideBar.classList.remove(bottomFixedClass);
        }
      } else {
        sideBar.classList.remove(stickyClass);
        sideBar.classList.remove(bottomFixedClass);
      }
    };

    window.addEventListener('scroll', controlSideBarFloating);
    window.addEventListener('resize', controlSideBarFloating);

    controlSideBarFloating();

    return () => {
      window.removeEventListener('scroll', controlSideBarFloating);
      window.removeEventListener('resize', controlSideBarFloating);
    };
  }, []);

  return (
    <div className='mx-auto px-2 relative lg:grid lg:grid-cols-2 gap-3 py-7 max-w-screen-lg-30 xl:max-w-screen-xl'>
      <div ref={contentAreaRef} className="content-area lg:bg-repeat lg:bg-grade-pattern lg:bg-2">
        <PrincipalNewsHome championshipColorHex={championshipColorHex} ref={principalHomeRef} />
      </div>
      <div>
        <div className='grid grid-cols-2 max-w-lg mx-auto md:max-w-screen-md gap-x-5 gap-y-4'>
          <SecondNews championshipColorHex={championshipColorHex}/>
          <SecondNews championshipColorHex={championshipColorHex}/>
          <SecondNews championshipColorHex={championshipColorHex}/>
          <SecondNews championshipColorHex={championshipColorHex}/>
          <SecondNews championshipColorHex={championshipColorHex}/>
          <SecondNews championshipColorHex={championshipColorHex}/>
        </div>
        <button
          className='dynamic-button flex mx-auto gap-2 mt-7 px-4 py-3 rounded-md font-formula'
          style={{
            '--button-bg-color': championshipColorHex,
            '--button-text-color': championshipColorHex,
            '--button-border-color': championshipColorHex
          }}
        >
          Veja as últimas notícias <ChevronRight color="#fff" />
        </button>
      </div>
    </div>
  );
}

export default NewsHome;
