import React from 'react';
import { Home, User, GanttChart, AtSign } from 'lucide-react';
import Tooltip from './utils/ToolTip';



const Header = () => {
  return (
    <nav className="fixed bottom-0 flex-col items-center justify-center hidden h-screen right-20 lg:flex">
      <div className="p-3 bg-white shadow-lg rounded-2xl">
      <ul className="flex-col justify-between gap-8 text-sm font-medium text-gray-500 ">
        <li  data-tooltip-target="tooltip-home">
          <a href="">
          <Tooltip text="Home">
            <Home/>
          </Tooltip>
          </a>
        </li>
        <li>
      
          <a href="#about" className="flex items-center justify-center mt-5 hover:text-black">
          <a href="">
          <Tooltip text="About">
            <User/>
          </Tooltip>
          </a>
          </a>
        </li>
        <li>
       
          <a href="#projects" className="flex items-center justify-center mt-5 hover:text-black">
          <Tooltip text="Projects">
          <GanttChart />
          </Tooltip>
          </a>
        </li>
        <li>
          <a href="#contact" className="flex items-center justify-center mt-5 hover:text-black">
          <Tooltip text="contact">
          <AtSign />
          </Tooltip>
          </a>
        </li>
      </ul>
      </div>
      
    </nav>
    
  );
};

export default Header;
