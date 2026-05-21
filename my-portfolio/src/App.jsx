import ParticlesBackground from "./components/ParticlesBackground";
import Home from './pages/Home';
import About from './pages/About';
import Skills from "./pages/Skills";
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Testimonials from "./pages/Testimonials";
import Contact from './pages/Contact';
import Footer from "./pages/Footer";
export default function App() {
  return (
    <div className=" relative gradient text-white">
      <ParticlesBackground />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer /> 
    </div>
  )
}

