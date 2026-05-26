import { useState } from "react";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import IntroAnimation from "./components/IntroAnimation";
import Home from './pages/Home';
import About from './pages/About';
import Skills from "./pages/Skills";
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Testimonials from "./pages/Testimonials";
import Contact from './pages/Contact';
import Footer from "./pages/Footer";
export default function App() {
  const [introDone, setIntroDone] = useState(false);
  return (
    <>
    {!introDone && <IntroAnimation onFinish={()=>setIntroDone(true)} />}
      {introDone && (
  
    <div className=" relative gradient text-white">
      <CustomCursor />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer /> 
    </div>
    )}
    </>
  )
}

