import React from 'react'

interface NavLink {
  href: string
  label: string
}

export const Navbar: React.FC = () => {
  const links: NavLink[] = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#Blog', label: 'Blog' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="flex h-14 items-center justify-center">
      <div className="flex items-center justify-center space-x-8">
        {links.map(({ href, label }) => (
          <a key={`${href}${label}`} href={href} className="font-plus-jakarta-sans scroll-m-20 text-center text-sm font-normal text-gray-600 hover:underline">
            {label}
          </a>
        ))}
      </div>
    </header>
  )
}
