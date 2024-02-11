import React from 'react';
import { articles } from './BlogData';

function BlogCard({ category }) {
  return (
    <section className="py-10">
      <div className="">
        <ul className="flex flex-col items-start space-y-3 divide-y">
          {articles.map((item, idx) => (
            ((category === 'Latest' && idx < 3) || (item.category === category)) && (
              <li key={idx} className="py-5 mx-4 duration-150 hover:border-white hover:rounded-xl hover:bg-gray-50">
                <a href={item.path} className="space-y-3">
                  <div className="flex items-center gap-x-3">
                    <div className="flex items-center justify-center w-20 h-20">
                      <img src={item.image_path} alt="" className='rounded-lg shadow-lg' />
                    </div>
                    <div className='flex flex-col items-start justify-center'>
                      <div className="flex items-center gap-6 text-xs text-gray-600">
                        <span className="flex items-center gap-2">
                          {item.date}
                        </span>
                        <span className="flex items-center gap-2">
                          {item.readTime} MIN READ
                        </span>
                      </div>
                      <h2 className="block mt-2 text-lg font-medium ">{item.title}</h2>
                      <h3 className="mt-1 text-gray-600 md:w-[700px]">{item.description}</h3>
                    </div>
                  </div>
                </a>
              </li>
            )
          ))}
        </ul>
      </div>
    </section>
  );
}

export default BlogCard;
