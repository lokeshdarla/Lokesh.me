import React from 'react';
import { Code } from 'lucide-react';
import { Eye } from 'lucide-react';
import { ArrowRightSquare } from 'lucide-react';
import { FaPython,FaCss3Alt,FaHtml5,FaReact} from "react-icons/fa";
import { SiTailwindcss,SiFastapi } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import Ollivanders from "../assets/Ollivanders.gif"

const skills=[
  {
    id:1,
    icon:<FaHtml5 className="h-8 w-8 text-[#FB8B24]" />,
    link:""
  },
  {
    id:2,
    icon:<FaCss3Alt className="h-8 w-8 text-[#3081D0]"/>,
    link:""
  },
  {
    id:3,
    icon:<IoLogoJavascript className="h-8 w-8 text-[#FFD600]" />,
    link:""  },
  {
    id:4,
    icon:<FaPython className="h-8 w-8 text-[#38419D]"/>,
    link:""
  },


  {
    id:6,
    icon: <FaReact className="h-8 w-8 text-[#7BD3EA]"/>,
    link:""
  },

]

const ProjectSection = () => {
  return (
    <section className="bg-transparent m-5 sm:m-10 lg:m-20 h-screen flex flex-col items-center justify-center">
      <div className="max-w-2xl mx-auto text-center">
      <h1
  className="font-bold text-5xl text-gray-700 mb-4"
>
  My Work
</h1>

      </div>
     
     <div className="flex flex-col-reverse sm:flex-row lg:flex-row items-center justify-center p-5 lg:m-5">
      
        <div className="flex flex-col w-full p-5 lg:m-5">
          <h1 className="text-gray-600 text-2xl sm:text-3xl lg:text-3xl font-semibold mb-4">Ollivander's Store</h1>
          <p className="content-around text-gray-500 text-justify">Ollivanders Store is a Harry Potter-themed E-Commerce Wand store where you can purchase wands of your choice. 
          The application ensures the secure handling and storage of user details by employing JWT-based authentication and PostgreSQL for the backend.</p>
          <div className="flex gap-2 sm:gap-5 my-5">
          {skills.map((skill) => (
            <>
            <a
              href={skill.link}
              target="_blank"
              key={skill.id}
              className="rounded-full border-gray-200 bg-white p-1 shadow-sm transition-shadow duration-300 ease-in-out hover:shadow-lg"
            >
              {skill.icon}
            </a>
            </>
          ))}
          </div>
        </div>

        <div className="lg:p-5">
          <figure className="">
            <img
              className="rounded-lg shadow-lg"
              src={Ollivanders}
              alt="image description"
            />
            <figcaption className="mt-2 text-sm text-gray-500 dark:text-gray-400 text-center">Preview of Website</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
