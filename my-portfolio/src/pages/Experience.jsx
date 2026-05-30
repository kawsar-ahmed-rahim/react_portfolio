const experiences = [
  {
    role: "Web Developer",
    company: "Brain Mentors",
    duration: "2022",
    description: "Built high-performance apps, integrated AI features, improved engagement by 10%.",
  },
  {
    role: "Web Developer Intern",
    company: "Mobi  soft Technologies",
    duration: "2022 - 2023",
    description: "Gained hands-on web development experience.",
  },
  {
    role: "Graduate Engineer",
    company: "HCL Technologies",
    duration: "2024 - 2025",
    description: "Built frontend of GenAI-powered PV Intake App with Next.js & TS for US client.",
  },
];
 function ExperienceItem({ exp, idx, start, end, scrollYProgress, layout }) {
  const scale = useTransform(scrollYProgress, [start, end], [0,1]);
  const opacity = useTransform(scrollYProgress, [start, end], [0,1]);
  const y = useTransform(scrollYProgress, [start, end], [idx%2 === 0 ? 30 : -30, 0]);
  const x = useTransform(scrollYProgress, [start, end], [-24,0]);
  if(layout === "desktop"){
    return (
      <div className="relative flex flex-1 items-center justify-center min-w-0">
        <motion.div className="w-7 h-7 z-10 rounded-full bg-white shadow-[0_0_0_8px_rgba(255,255,,255,0.1)]"
         style={{scale, opacity}} />
          
        </motion.div>
        <motion.div className={`absolute ${idx%2 === 0 ? "-top-8" : "-bottom-8"} 
        w-[3px bg-white/40`}
        style={{height: 40, opacity}} >

        </motion.div>
        <motion.article>
        </motion.article>
      </div>)}
export default function Experience(){
  return (
    <section id="experience" className="relative bg-black text-white">

    </section>
  )
}