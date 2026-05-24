import ParticlesBackground from "../components/ParticlesBackground";
import { useMemo } from "react";
import {motion} from 'framer-motion';
export default function Home() {
  const roles = useMemo(()=> [" Web Developer", "Frontend Developer", "Backend Developer", "Full Stack Developer"], []);

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[index];
    const timeout = setTimeout(() => {
      if(!deleting && subIndex < currentRole.length) {
        setSubIndex(v => v + 1);

  return (
    <section
      id="home"
      className="w-full h-screen relative bg-black overflow-hidden"
    >
      <ParticlesBackground />
      <div className="absolute inset-0">
        <div
          className="absolute -top-32 -left-32
       w-[70vw] sm:w-[z-500vw] md:w-[40vw]
       h-[70vw] sm:h-[z-500vw] md:h-[40vw]
       max-w-[500px] max-h-[500px]
       rounded-full
       bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
       opacity-30 sm:opacity-20 md:opacity-10
       blur-[100px] sm:blur-[130px] md:blur-[150px]
       animate-pulse"
        ></div>
 <div
          className="absolute bottom-0 right-0
       w-[70vw] sm:w-[z-500vw] md:w-[40vw]
       h-[70vw] sm:h-[z-500vw] md:h-[40vw]
       max-w-[500px] max-h-[500px]
       rounded-full
       bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
       opacity-30 sm:opacity-20 md:opacity-10
       blur-[100px] sm:blur-[130px] md:blur-[150px]
       animate-pulse delay-5000"
        ></div>      </div>

        <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center h-full text-center lg:text-left relative">
            <div className="w-full lg:pr-24 mx-auto max-w-[48rem]">
              <motion.div>

              </motion.div>
            </div>
          </div>
        </div>
    </section>
  );
}
