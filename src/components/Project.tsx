import React from 'react'
import Image from 'next/image'
import { RxExternalLink } from 'react-icons/rx'

interface Project {
  title: string
  description: string
  imageSrc: string
  altText: string
  link: string
  previewLink?: string
}

const projects: Project[] = [
  {
    title: "Ollivander's Store",
    description:
      'Ollivanders Store is a Harry Potter-themed E-Commerce Wand store where you can purchase wands of your choice. The application ensures the secure handling and storage of user details by employing JWT-based authentication and PostgreSQL for the backend.',
    imageSrc: '/projects/Ollivanders.gif',
    altText: 'Ollivanders Store',
    link: 'https://github.com/lokeshdarla/Ollivanders_store',
  },
  {
    title: 'Chemsite',
    description:
      "Chemsite is a responsive website designed for a chemistry professor to promote and showcase his research work while encouraging students towards the field of chemistry. Built using React, this platform serves as a dynamic space for highlighting the professor's research endeavors and fostering an interest in chemistry among students.",
    imageSrc: '/projects/chemsite.gif',
    altText: 'Chemsite',
    link: 'https://github.com/lokeshdarla/chemsite',
    previewLink: 'https://chemsite.vercel.app/',
  },
  {
    title: 'Unknown',
    description: "Unknown is a pseudonymous share website where users' data will be encrypted with passlib, implemented using React.js, FastAPI, and Google Auth.",
    imageSrc: '/projects/Unknown.gif',
    altText: 'Unknown',
    link: 'https://github.com/lokeshdarla/Unknown',
  },
]

const ProjectCard: React.FC<Project> = ({ title, description, imageSrc, altText, link, previewLink }) => (
  <div className="flex items-center justify-center sm:flex-row lg:flex-row ">
    <div className="h-68 group relative block w-96">
      <span className="absolute inset-0 rounded-xl border-2 border-dashed border-black"></span>
      <div className="relative flex h-full transform items-center rounded-xl border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
        <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
          <Image src={imageSrc} alt={altText} className="mt-2" width={384} height={216} />
          <h2 className="mt-4 text-xl font-medium sm:text-2xl">{title}</h2>
        </div>
        <div className="h-max-68 absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
          <h3 className="mt-4 text-xl font-medium sm:text-2xl">{title}</h3>
          <p className="mt-4 text-xs sm:text-base">{description}</p>
          <a href={link} className="text-md mt-2 inline-flex items-center gap-2 rounded-full border bg-[#050708] px-5 py-2 text-xs text-white hover:bg-[#050708]/90 focus:outline-none focus:ring-4">
            Github
            <span>
              <RxExternalLink />
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
)

const ProjectSection: React.FC = () => {
  return (
    <div id="projects" className="relative mx-1 flex flex-col items-center justify-center lg:mx-20">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="mb-8 text-5xl font-bold text-gray-700">My Work</h1>
      </div>
      <div className="flex flex-col flex-wrap items-center justify-center gap-8 lg:flex-row">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}

export default ProjectSection
