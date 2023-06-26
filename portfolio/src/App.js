import "./App.css";
import Intro from './components/Intro/Intro'
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects"
import { useState, useRef, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const [section, setSection] = useState('intro');

  // Refs for each component
  const introRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // // Scroll to the selected section when the section state changes
  // useEffect(() => {
  //   if (section === 'intro') {
  //     introRef.current.scrollIntoView({ behavior: 'smooth' });
  //   } else if (section === 'experience') {
  //     experienceRef.current.scrollIntoView({ behavior: 'smooth' });
  //   } else if (section === 'projects') {
  //     projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  //   } else if (section === 'contact') {
  //     contactRef.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }, [section]);
  
  return (
    <div className="App">
      <div className="nav">
        <NavBar setSection={setSection}/>
      </div>
      <div class="squiggly-line"></div>
      <div className="Intro" ref={introRef}>
        {section === 'intro' && <Intro setSection={setSection} />}
      </div>
      <div className="experience" ref={experienceRef}>
        {section === 'experience' && <Experience setSection={setSection} />}
      </div>
      <div className="projects" ref={projectsRef}>
        {section === 'projects' && <Projects setSection={setSection} />}
      </div>
      <div className="contact" ref={contactRef}>
        {section === 'contact' && <Contact setSection={setSection} />}
      </div>
    </div>
  );
}

export default App;


