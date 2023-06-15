import { useRef } from "react";
import useScrollSnap from "react-use-scroll-snap";
import "./App.css";
import Intro from './components/Intro/Intro'
import Experience from "./components/Experience/Experience";



function App() {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 10, delay: 1000 });
  
  return (
    <div className="App" ref={scrollRef}>
      <div className="Intro">
        <Intro/>
      </div>
      <div className="projects">
        <Experience/>
      </div>
      <div className="contact">
        <p>Page 3</p>
      </div>
    </div>
  );
}

export default App;

