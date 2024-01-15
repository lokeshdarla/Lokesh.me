import React from 'react';
import { FaHtml5, FaCss3Alt, FaPython, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import Ollivanders from '../assets/Ollivanders.gif';
import chemsite from '../assets/chemsite.gif';
import Unknown from '../assets/Unknown.gif'
import { RxExternalLink } from "react-icons/rx";

const skills = [
  { id: 1, icon: <FaHtml5 className="h-8 w-8 text-[#FB8B24]" />, link: '' },
  { id: 2, icon: <FaCss3Alt className="h-8 w-8 text-[#3081D0]" />, link: '' },
  { id: 3, icon: <IoLogoJavascript className="h-8 w-8 text-[#FFD600]" />, link: '' },
  { id: 4, icon: <FaPython className="h-8 w-8 text-[#38419D]" />, link: '' },
  { id: 6, icon: <FaReact className="h-8 w-8 text-[#7BD3EA]" />, link: '' },
];

const projects = [
  {
    title: "Ollivander's Store",
    description:
      "Ollivanders Store is a Harry Potter-themed E-Commerce Wand store where you can purchase wands of your choice. The application ensures the secure handling and storage of user details by employing JWT-based authentication and PostgreSQL for the backend.",
    imageSrc: Ollivanders,
    altText: "Ollivanders Store",
    link:"https://github.com/lokeshdarla/Ollivanders_store"
  },
  {
    title: "Chemsite",
    description:
      "Chemsite is a responsive website designed for a chemistry professor to promote and showcase his research work while encouraging students towards the field of chemistry. Built using React, this platform serves as a dynamic space for highlighting the professor's research endeavors and fostering an interest in chemistry among students.",
    imageSrc: chemsite,
    altText: "Chemsite",
    link:""
  },
  {
    title: "Unknown",
    description:
    "Unknown is a pseudonymous share website where users' data will be encrypted with passlib, implemented using React.js, FastAPI, and Google Auth.",
    imageSrc: Unknown,
    altText: "Unknown",
    link:""
  },
];

const ProjectCard = ({ title, description, imageSrc, altText }) => (
  <div className="flex flex-col-reverse sm:flex-row lg:flex-row items-center justify-center p-5 lg:m-5 gap-8">
    <div className="flex flex-col w-full p-5 lg:m-5">
      <h1 className="text-gray-600 text-2xl sm:text-3xl lg:text-3xl font-semibold mb-4">{title}</h1>
      <p className="content-around text-gray-500 text-justify">{description}</p>
      <div className="flex gap-2 sm:gap-5 my-5">
        {skills.map((skill) => (
          <a
            href={skill.link}
            target="_blank"
            rel="noopener noreferrer"
            key={skill.id}
            className="rounded-full border-gray-200 bg-white p-1 shadow-sm transition-shadow duration-300 ease-in-out hover:shadow-lg"
          >
            {skill.icon}
          </a>
        ))}
      </div>
      <div className='flex'>
      <a href='#' className='px-5 py-2 rounded-full border text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none flex items-center gap-2 text-md'>Github<span><RxExternalLink/></span></a>
      </div>
      
    </div>
    <div className="lg:p-5">
      <figure className="">
        <img className="rounded-lg shadow-lg" src={imageSrc} alt={altText} />
        <a className="mt-2 text-sm text-gray-400 hover:underline cursor-pointer flex items-center justify-center gap-2 text-center">Preview of Website<span><RxExternalLink /></span></a>
      </figure>
    </div>
  </div>
);

const ProjectSection = () => {
  return (
    <div id='projects' className="flex flex-col items-center justify-center lg:mx-20 mx-1 relative">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="font-bold text-5xl text-gray-700 mb-4">My Work</h1>
      </div>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectSection;
