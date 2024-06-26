import { useEffect, useRef } from 'react';
import PrincipalNewsHome from './PrincipalNewsHome';
import SecondNews from './SecondNews';
import {ChevronRight} from "lucide-react"
import "../../css/news.css"

const NewsHome = () => {
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
    <div className='px-3 lg:grid lg:grid-cols-2 gap-3 px-7 py-7 max-w-screen-lg-30 mx-auto xl:max-w-screen-xl'>
      <div ref={contentAreaRef} className="content-area">
        <PrincipalNewsHome ref={principalHomeRef} />
      </div>
      <div>
        <div className='grid grid-cols-2 max-w-lg m-auto md:max-w-screen-md gap-x-5 gap-y-4'>
            <SecondNews />
            <SecondNews />
            <SecondNews />
            <SecondNews />
            <SecondNews />
            <SecondNews />
        </div>
        <button className='flex gap-2 mt-7 bg-red-600 px-4 py-3 rounded-md font-formula text-white border-red-600 border-2
        hover:bg-white hover:text-red-600 duration-300
        '>Veja as últimas notícias <ChevronRight color="#fff"/></button>
      </div>
    </div>
  );
}

export default NewsHome;
