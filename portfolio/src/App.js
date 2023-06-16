import "./App.css";
import Intro from './components/Intro/Intro'
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects"
import { useState, useRef, useEffect } from "react";

function App() {
  const [section, setSection] = useState('');

  // Refs for each component
  const introRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll to the selected section when the section state changes
  useEffect(() => {
    if (section === 'intro') {
      introRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'experience') {
      experienceRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'projects') {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'contact') {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [section]);

  return (
    <div className="App">
      <div className="Intro" ref={introRef}>
        <Intro section={section} setSection={setSection} />
      </div>
      <div className="experience" ref={experienceRef}>
        <Experience />
      </div>
      <div className="projects" ref={projectsRef}>
        <Projects />
      </div>
      <div className="contact" ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}

export default App;


