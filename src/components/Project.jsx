import React from 'react';
import { Code } from 'lucide-react';
import { Eye } from 'lucide-react';

const ProjectSection = () => {
  return (
    <section className="bg-white m-5 sm:m-10 lg:m-20">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">My Work</h1>
        <p className="mt-2 text-sm sm:text-base lg:text-xl text-gray-500 sm:mt-4 lg:mt-8">
          Crafted with skill and care to help our clients grow their business!
        </p>
      </div>

      <div className="flex flex-col-reverse sm:flex-row lg:flex-row items-center content-center mx-5 sm:mx-10 lg:mx-20 mt-5 lg:mt-10">
      
        <div className="flex flex-col w-full sm:w-1/2 lg:w-1/2 mx-auto sm:mx-20 lg:mx-20">
          <h1 className="text-gray-600 text-2xl sm:text-3xl lg:text-3xl font-extrabold mb-4">Flowbite's dashboard</h1>
          <p className="content-around text-gray-500 text-justify">Flowbite helps you connect with friends, family and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.</p>
          <div className="flex gap-2 sm:gap-5 my-5">
            <Code />
            <Code />
            <Code />
          </div>
          <div className="flex gap-3 sm:gap-8 ">
            <a href="#_" className="relative inline-block px-4 py-2 font-medium group">
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
            <span className="relative text-black group-hover:text-white">View Live</span>
            </a>
            <a href="#_" className="relative inline-block px-4 py-2 font-medium group">
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
            <span className="relative text-black group-hover:text-white">View Code</span>
            </a>
          </div>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/2 mx-auto sm:mx-20 lg:mx-20">
          <figure className="max-w-lg m-5 sm:m-10">
            <img
              className="h-auto max-w-full rounded-lg transition-transform hover:scale-105"
              src="https://images.pexels.com/photos/1037996/pexels-photo-1037996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="image description"
            />
            <figcaption className="mt-2 text-sm text-gray-500 dark:text-gray-400 text-center">Preview of Website</figcaption>
          </figure>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row lg:flex-row items-center content-center mx-5 sm:mx-10 lg:mx-20 mt-5 lg:mt-10">
        <div className="w-full sm:w-1/2 lg:w-1/2 mx-auto sm:mx-20 lg:mx-20">
          <figure className="max-w-lg m-5 sm:m-10">
            <img
              className="h-auto max-w-full rounded-lg transition-transform hover:scale-105" 
              src="https://images.pexels.com/photos/1037996/pexels-photo-1037996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="image description"
            />
            <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Preview of Website</figcaption>
          </figure>
        </div>
        <div className="flex flex-col w-full sm:w-1/2 lg:w-1/2 mx-auto sm:mx-20 lg:mx-20">
          <h1 className="text-gray-600 text-2xl sm:text-3xl lg:text-3xl font-extrabold mb-4 text-center">Flowbite's dashboard</h1>
          <p className="content-around text-gray-500 text-justify">Flowbite helps you connect with friends, family and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.</p>
          <div className="flex gap-2 sm:gap-5 my-5 justify-center items-center">
            <Code />
            <Code />
            <Code />
          </div>
          <div className="flex gap-3 sm:gap-8 items-center justify-center">
            <a href="#_" className="relative inline-block px-4 py-2 font-medium group">
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
            <span className="relative text-black group-hover:text-white">View Live</span>
            </a>
            <a href="#_" className="relative inline-block px-4 py-2 font-medium group">
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
            <span className="relative text-black group-hover:text-white">View Code</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
