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
    link:"https://github.com/lokeshdarla/chemsite",
    previewLink:"https://chemsite.vercel.app/"
  },
  {
    title: "Unknown",
    description:
    "Unknown is a pseudonymous share website where users' data will be encrypted with passlib, implemented using React.js, FastAPI, and Google Auth.",
    imageSrc: Unknown,
    altText: "Unknown",
    link:"https://github.com/lokeshdarla/Unknown"
  },
];

const ProjectCard = ({ title, description, imageSrc, altText,link,previewLink }) => (
  <div className="flex flex-col-reverse items-center justify-center gap-8 p-5 sm:flex-row lg:flex-row lg:m-5">
    <div className="flex flex-col w-full p-5 lg:m-5">
      <h1 className="mb-4 text-2xl font-semibold text-gray-600 sm:text-3xl lg:text-3xl">{title}</h1>
      <p className="content-around text-justify text-gray-500">{description}</p>
      <div className="flex gap-2 my-5 sm:gap-5">
        {skills.map((skill) => (
          <a
            href={skill.link}
            target="_blank"
            rel="noopener noreferrer"
            key={skill.id}
            className="p-1 transition-shadow duration-300 ease-in-out bg-white border-gray-200 rounded-full shadow-sm hover:shadow-lg"
          >
            {skill.icon}
          </a>
        ))}
      </div>
      <div className='flex'>
      <a href={link} className='px-5 py-2 rounded-full border text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none flex items-center gap-2 text-md'>Github<span><RxExternalLink/></span></a>
      </div>
      
    </div>
    <div className="lg:p-5">
      <figure className="">
        <img className="rounded-lg shadow-lg" src={imageSrc} alt={altText} />
       {previewLink && <a href={previewLink} target='_blank' className="flex items-center justify-center gap-2 mt-2 text-sm text-center text-gray-400 cursor-pointer hover:underline">Preview of the website<span><RxExternalLink /></span></a>} 
      </figure>
    </div>
  </div>
);

const ProjectSection = () => {
  return (
    <div id='projects' className="relative flex flex-col items-center justify-center mx-1 lg:mx-20">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="mb-4 text-5xl font-bold text-gray-700">My Work</h1>
      </div>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectSection;
