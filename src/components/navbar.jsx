import React from 'react';



export const Navbar = () => {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#Blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="flex items-center justify-center h-14">
      <div className="flex items-center justify-center space-x-8">
        {links.map(({ href, label }) => (
          <a
            key={`${href}${label}`}
            href={href}
            className="text-sm font-normal text-center text-gray-600 scroll-m-20 font-plus-jakarta-sans hover:underline"
          >
            {label}
          </a>
        ))}
      </div>
    </header>
  );
};
