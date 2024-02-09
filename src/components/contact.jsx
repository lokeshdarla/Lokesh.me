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
  const email="lokeshnagasaidarla@gmail.com"
  return (
    <section
    className="relative flex flex-col items-center justify-center w-full min-h-screen px-2"
    id="contact"
  >
    <div className="w-full h-full px-4 py-8">
      <h2 className="text-3xl font-bold text-center scroll-m-20 font-plus-jakarta-sans">
        Get in touch
      </h2>
    </div>

    <div className="flex flex-col items-center justify-center h-full mt-10 space-y-3">
      <span className="max-w-xl text-xl font-normal text-center text-gray-600 scroll-m-20 font-plus-jakarta-sans">
        My inbox is always open. Whether for a potential project or just to
        say Hello, I&apos;ll try my best to answer your email!
      </span>
      <a href={`mailto:${email}`} className="text-xl font-medium text-gray-900 font-plus-jakarta-sans">
        {email}
      </a>
    </div>
  </section>

  );
}

export default ContactSection;
