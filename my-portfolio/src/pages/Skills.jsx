import { motion, useMotionValue } from "framer-motion";
import { useState, useEffect, useRef } from "react";

import { FaReact, FaBootstrap, FaCss3Alt, FaDatabase } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";

import {
  SiTailwindcss,
  SiPython,
  SiHtml5,
  SiGit,
  SiGithub,
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
    { icon: <VscVscode />, name: "VS Code" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <FaDatabase />, name: "SQL" },
    { icon: <SiTypescript />, name: "TypeScript" },
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

  useEffect(() => {
    const el = sectionRef.current;

    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        setActive(
          entry.isIntersecting &&
          entry.intersectionRatio > 0.1
        );
      },
      { threshold: [0.1] }
    );

    io.observe(el);

    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!active) return;

    const onWheel = (e) => {
      setDir(e.deltaY > 0 ? -1 : 1);
    };

    const onTouchStart = (e) => {
      touchY.current = e.touches[0].clientY;
    };

    const onTouchMove = (e) => {
      if (!touchY.current) return;

      const delta =
        e.touches[0].clientY - touchY.current;

      setDir(delta > 0 ? -1 : 1);

      touchY.current = e.touches[0].clientY;
    };

    window.addEventListener("wheel", onWheel, {
      passive: true,
    });

    window.addEventListener(
      "touchstart",
      onTouchStart,
      { passive: true }
    );

    window.addEventListener(
      "touchmove",
      onTouchMove,
      { passive: true }
    );

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener(
        "touchstart",
        onTouchStart
      );
      window.removeEventListener(
        "touchmove",
        onTouchMove
      );
    };
  }, [active]);

  useEffect(() => {
    let id;

    let last = performance.now();

    const speed = 80;

    const tick = (now) => {
      const dt = (now - last) / 1000;

      last = now;

      let next = x.get() + dir * speed * dt;

      const loop =
        trackRef.current?.scrollWidth / 2 || 0;

      if (loop) {
        if (next < -loop) next += loop;

        if (next >= 0) next -= loop;
      }

      x.set(next);

      id = requestAnimationFrame(tick);
    };

    id = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(id);
  }, [dir, x]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="h-1/2 w-full pb-8 flex flex-col items-center justify-center relative bg-black text-white overflow-hidden"
    >
      <motion.h2
        className="text-4xl mt-5 sm:text-5xl font-bold"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        My Skills
      </motion.h2>

      <div className="relative w-full overflow-hidden mt-10">
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex gap-10 text-6xl text-[#1cd8d2]"
        >
          {repeated.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 min-w-[120px]"
            >
              <span className="hover:scale-125 transition-transform duration-300">
                {skill.icon}
              </span>

              <p className="text-sm text-white">
                {skill.name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}