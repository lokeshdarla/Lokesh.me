import React from 'react';
import profile from './profile.jpeg';
import CustomButton from './buttons';
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

function HomeSection() {
  return (
    <div id="home" className="flex flex-col-reverse lg:flex-row items-center justify-center gap-5 md:gap-40 h-screen relative">
      <div className="flex flex-col justify-center gap-2 text-center lg:text-left">
        <h3 className="text-lg md:text-2xl">Hello, I'm</h3>
        <h1 className="text-3xl md:text-5xl font-bold">
          <span>Lokesh Naga Sai</span>
        </h1>
        <h3 className="text-lg md:text-2xl mt-2 md:mt-4">And I'm a <span>Full Stack Web Developer</span></h3>

        <div className="flex gap-4 mt-2 md:mt-4 items-center w-full lg:justify-start justify-center">
         
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
        <div className="mt-2 md:mt-4"> <CustomButton textArea="Download CV" /></div>
      </div>
      <img
        className="rounded-full md:w-96 w-72 h-72 md:h-96 ml-0 md:ml-8 md:rounded-full object-cover brightness-105 transition-transform transform hover:scale-105 "
        src={profile}
        alt="Lokesh Naga Sai"
      />
    </div>
  );
}

export default HomeSection;
