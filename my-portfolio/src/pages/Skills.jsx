import { motion } from "framer-motion";
import { useState } from "react";
import { FaReact, FaBootstrap, FaCss3Alt } from "react-icons/fa";

import { IoLogoJavascript } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
import {
  SiTailwindcss,
  SiPython,
  SiHtml5,
  SiGit,
  SiGithub,
  SiFigma,
  SiPostman,
  SiTypescript,
  SiC,
  SiCplusplus,
  SiDjango,
  SiFlask,
  SiExpress,
  SiVercel,
  SiNetlify,
} from "react-icons/si";

import { TbApi } from "react-icons/tb";

import { DiMongodb, DiNodejs } from "react-icons/di";

export default function Skills() {
  const skills = [
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiPython />, name: "Python" },
    { icon: <IoLogoJavascript />, name: "JavaScript" },
    { icon: <SiHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <SiGit />, name: "Git" },
    { icon: <SiGithub />, name: "GitHub" },
    { icon: <VscVscode />, name: "Visual Studio Code" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiTypescript />, name: "Typescript" },
    { icon: <SiC />, name: "C" },
    { icon: <SiCplusplus />, name: "C++" },
    { icon: <FaBootstrap />, name: "Bootstrap" },
    { icon: <SiDjango />, name: "Django" },
    { icon: <TbApi />, name: "DRF" },
    { icon: <SiFlask />, name: "Flask" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiVercel />, name: "Vercel" },
    { icon: <SiNetlify />, name: "Netlify" },
  ];
  const repeated = [...skills, ...skills];

  const [dir, setDir] = useState(-1);
  const [active, setActive] = useState(false);
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const touchY = useRef(null);
  const x = useMotionValue(0);

  useEffect(()=>(
    const el = sectionRef.current;
    if(!el) return ;

    const io = new IntersectionObserver(([entry])=>{
      setActive(entry.isIntersecting && entry.intersectionRatio > 0.1);
    },{threshold : [0.1]});

    io.observe(el);
    return () => io.disconnect();
},[]);
  return (
    <section
      id="skills"
      ref={sectionRef}
      className="h-1/2 w-full pb-8 flex flex-col items-center justify-center relative bg-black text-white overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[120px] animate-pulse" />

        <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[120px] animate-pulse delay-500" />
      </div>

      <motion.h2
        className="text-4xl mt-5 sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        My Skills
      </motion.h2>

      <motion.p
        className="mb-8 mt-2 text-white/90 text-base sm:text-lg z-10"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Modern Applications | Modern Technologies
      </motion.p>

      <div className="relative w-full overflow-hidden">
        <motion.div
        ref={trackRef}
        className="flex gap-10 text-6xl text-[#1cd8d2]">
          {repeated.map((skill, index) => (
            <div
            key={index} className='flex flex-col items-center gap-2 min-w-[120px]'
            aria-label =  {skill.name}
            title= {skill.name}>
              <span className="hover:scale-125 transition-transform duration-300">
                {skill.icon}
              </span>
              <p className="text-sm">
                {skill.name}
                </p></div>
        ))}


        </motion.div>
      </div>
          
    </section>
  );
}
