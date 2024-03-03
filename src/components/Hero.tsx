import React from 'react'
import CustomButton from '@/components/CustomButton'
import { FaTwitter, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Image from 'next/image'

interface SocialMediaLink {
  id: number
  name: string
  icon: React.ReactNode
  link: string
}

const SocialMediaLinks: SocialMediaLink[] = [
  {
    id: 1,
    name: 'Twitter',
    icon: <FaTwitter className="h-6 w-6 text-[#1DA1F2]" />,
    link: 'https://twitter.com/LokeshDarla1011',
  },
  {
    id: 2,
    name: 'Github',
    icon: <FaGithub className="h-6 w-6 text-[#333]" />,
    link: 'https://github.com/lokeshdarla',
  },
  {
    id: 3,
    name: 'Instagram',
    icon: <FaInstagram className="h-6 w-6 text-[#C13584]" />,
    link: 'https://www.instagram.com/_lokesh_darla/',
  },
  {
    id: 4,
    name: 'Linkedin',
    icon: <FaLinkedin className="h-6 w-6 text-[#0077B5]" />,
    link: 'https://www.linkedin.com/in/lokesh-naga-sai-darla/',
  },
]

function HomeSection() {
  return (
    <div id="home" className="relative flex h-screen flex-col-reverse items-center justify-center gap-5 md:gap-40 lg:flex-row">
      <div className="flex flex-col justify-center gap-2 text-center lg:text-left">
        <h3 className="text-lg md:text-2xl">Hello, I'm</h3>
        <h1 className="text-3xl font-bold md:text-5xl">
          <span>Lokesh Naga Sai</span>
        </h1>
        <h3 className="mt-2 text-lg md:mt-4 md:text-2xl">
          And I'm a <span>Full Stack Web Developer</span>
        </h3>

        <div className="mt-2 flex w-full items-center justify-center gap-4 md:mt-4 lg:justify-start">
          {SocialMediaLinks.map((link) => (
            <a
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              key={link.id}
              className="rounded-full border-gray-200 bg-white p-1 shadow-sm transition-shadow duration-300 ease-in-out hover:shadow-lg"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <div className="mt-2 md:mt-4">
          <CustomButton url="./Resume.pdf" textArea="Download CV" />
        </div>
      </div>
      <Image
        className="ml-0 h-72 w-72 rounded-full object-cover transition-transform hover:scale-105 md:ml-8 md:h-96 md:w-96 md:rounded-full "
        src="/images/Profile.png"
        alt="Lokesh Naga Sai"
        width={10000}
        height={10000}
      />
    </div>
  )
}

export default HomeSection
