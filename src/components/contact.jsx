import React from 'react';
import { FaTwitter, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";


const SocialMediaLinks = [
  {
    id: 1,
    name: "Twitter",
    icon: <FaTwitter className="h-6 w-6 text-[#1DA1F2]" />,
    link: "https://twitter.com/LokeshDarla1011",
  },
  {
    id: 2,
    name: "Github",
    icon: <FaGithub className="h-6 w-6 text-[#333]" />,
    link: "https://github.com/lokeshdarla",
  },
  {
    id: 3,
    name: "Instagram",
    icon: <FaInstagram className="h-6 w-6 text-[#C13584]" />,
    link: "https://www.instagram.com/_lokesh_darla/",
  },
  {
    id: 4,
    name: "Linkedin",
    icon: <FaLinkedin className="h-6 w-6 text-[#0077B5]" />,
    link: "https://www.linkedin.com/in/lokesh-naga-sai-darla/",
  },
];
function ContactSection() {
  return (
 <div className='flex flex-col items-center justify-center relative gap-10 px-10 h-3/4 mb-10' id='contact'>
    <h1 className="text-5xl font-bold text-gray-700 mb-4 text-center">Connect</h1>
   <h2 className='text-2xl font-semibold text-gray-600 lg:w-3/5 text-center lg:px-10'>Say Hello!,It's Free</h2>
   <a href="#_" class="relative inline-block text-lg group">
    <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
    <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
    <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
    <span class="relative">Say Hello !</span>
    </span>
    <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
    </a>
    <div className='flex items-center justify-center gap-5'>
    {SocialMediaLinks.map((link) => (
            <a
              href={link.link}
              target="_blank"
              key={link.id}
              className="rounded-full border-gray-200 bg-white p-1 shadow-sm transition-shadow duration-300 ease-in-out hover:shadow-lg"
            >
              {link.icon}
            </a>
          ))}
    </div>
 </div>

  );
}

export default ContactSection;
