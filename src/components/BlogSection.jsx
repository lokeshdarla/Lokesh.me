import React, { useState } from 'react';
import BlogCard from '../pages/BlogCard';

function BlogSection() {
  const sections = ['Latest', 'Coding', 'Tutorials', 'Stories'];
  const [activeSection, setActiveSection] = useState('Latest');

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className='flex justify-center h-screen md:items-center' id='Blog'>
       <div className='relative flex flex-col items-start justify-center' >
      <div className="max-w-md px-5 py-8">
          <h1 className="text-2xl font-bold text-gray-600">I write,sometimes</h1>
          <p className="mt-2 text-gray-600">About Tech,dsa,learning,tutorials and life.</p>
        </div>
      <div className="flex items-start px-5 border-b border-gray-200 whitespace-nowrap dark:border-gray-700">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => handleSectionClick(section)}
            className={`inline-flex items-center h-10 px-2 py-2 -mb-px text-center hover:border-b-2 ${activeSection === section ? 'text-blue-600 bg-transparent border-b-2 border-blue-500 sm:px-4 -px-1 dark:border-blue-400 dark:text-blue-300' : 'text-gray-700 bg-transparent border-b-2 border-transparent sm:px-4 -px-1 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400'}`}
          >
            <span className="mx-1 text-sm sm:text-base">{section}</span>
          </button>
        ))}
      </div>
      <BlogCard category={activeSection}/>
    </div>
    </div>
   
  );
}

export default BlogSection;
