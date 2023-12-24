import React from 'react';
import { Home, User, GanttChart, AtSign } from 'lucide-react';
import Tooltip from './utils/ToolTip';



const Header = () => {
  return (
    <nav className="fixed top-0 right-20 h-screen lg:flex flex-col items-center justify-center hidden">
      <div className="bg-white shadow-lg p-3 rounded-2xl">
      <ul className="flex-col justify-between text-sm font-medium text-gray-500 gap-8 ">
        <li  data-tooltip-target="tooltip-home">
          <a href="">
          <Tooltip text="Home">
            <Home/>
          </Tooltip>
          </a>
        </li>
        <li>
      
          <a href="#about" className="flex items-center justify-center hover:text-black mt-5">
          <a href="">
          <Tooltip text="About">
            <User/>
          </Tooltip>
          </a>
          </a>
        </li>
        <li>
       
          <a href="#projects" className="flex items-center justify-center hover:text-black mt-5">
          <Tooltip text="Projects">
          <GanttChart />
          </Tooltip>
          </a>
        </li>
        <li>
          <a href="#contact" className="flex items-center justify-center hover:text-black mt-5">
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
