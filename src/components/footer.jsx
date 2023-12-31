import React from 'react';
import { Linkedin } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow m-4">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 <a href="https://flowbite.com/" className="hover:underline">Lokesh Naga Sai</a>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="flex items-center content-center ml-3" ><Instagram/></a>
          </li>
          <li>
            <a href="#" className="flex items-center content-center ml-3"><Github/></a>
          </li>
          <li>
            <a href="#" className="flex items-center content-center ml-3"><Linkedin/></a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
