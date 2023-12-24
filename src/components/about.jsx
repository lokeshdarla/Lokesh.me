import CustomButton from "./buttons";
import { Code } from 'lucide-react';
import { Coffee } from 'lucide-react';
import { ArrowRightSquare } from 'lucide-react';
import { FaPython,FaCss3Alt,FaHtml5,FaReact} from "react-icons/fa";
import { SiTailwindcss,SiFastapi } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";

const btnStyle = "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow";
const font="font-family: 'JetBrains Mono', monospace;"

const skills=[
  {
    id:1,
    icon:<FaHtml5 className="h-8 w-8 text-[#FB8B24]" />,
    link:""
  },
  {
    id:2,
    icon:<FaCss3Alt className="h-8 w-8 text-[#3081D0]"/>,
    link:""
  },
  {
    id:3,
    icon:<IoLogoJavascript className="h-8 w-8 text-[#FFD600]" />,
    link:""
  },
  {
    id:4,
    icon:<FaPython className="h-8 w-8 text-[#38419D]"/>,
    link:""
  },

  {
    id:5,
    icon:<SiTailwindcss className="h-8 w-8 text-[#7BD3EA]" />,
    link:""
  },

  {
    id:6,
    icon: <FaReact className="h-8 w-8 text-[#7BD3EA]"/>,
    link:""
  },
  {
    id:7,
    icon:<SiFastapi className="h-8 w-8 text-[#29ADB2]"/>,
    link:""
  },
  {
    id:8,
    icon:<BiLogoPostgresql className="h-8 w-8 text-[#0766AD]"/>,
    link:""

  }

]

function AboutSection() {
  return (
    <div  id="about" className="flex flex-col items-center justify-center h-screen p-10">
      <div className="w-full lg:w-1/2 text-center mb-8">
        
        <h1 className="text-4xl font-semibold mb-4"> Web Developer</h1>
        <div className="flex flex-col items-center gap-4 w-full text-center">
        
    <p className="m-4 font-extralight text-xl text-black text-justify">
    Hello! I'm   Lokesh Naga Sai, a computer science undergraduate at SRM University AP. I specialize in full-stack web development, crafting robust and user-friendly applications. My expertise extends from the back-end, utilizing technologies like FastAPI, to the front-end, where I design beautiful and intuitive user interfaces.
    </p>
    <div className="flex gap-4 mb-4" style={{fontFamily: "'JetBrains Mono', monospace"}}>
      <p>I turn</p>
      <p><Coffee /></p>
      <p>Coffee</p>
      <p><ArrowRightSquare /></p>
      <p><Code /></p>
      <p>Code</p>
    </div>
  </div>
        <h3 className="text-3xl font-semibold mb-2">Skills</h3>
        <div className="flex flex-wrap gap-4 justify-center mt-5">
        {skills.map((skill) => (
            <a
              href={skill.link}
              target="_blank"
              key={skill.id}
              className="rounded-full border-gray-200 bg-white p-1 shadow-sm transition-shadow duration-300 ease-in-out hover:shadow-lg"
            >
              {skill.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
