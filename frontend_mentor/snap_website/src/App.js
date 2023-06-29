import './App.css';
import NavBar from './NavBar/NavBar';
import Content from './Content/Content';
import { useState,useEffect } from 'react';
import Mobile from './Mobile/Mobile';

function App() {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Set initial state

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set isMobile state based on window width
      setIsMobile(window.innerWidth <= 768);
    }

    // Subscribe to window resize events
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Unsubscribe from events on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures effect is only run on mount and unmount

  return (
    <div className="App">
      {isMobile ? (
        <Mobile/>
      ) : (
        <>
          <NavBar/>
          <Content/>
        </>
      )}
    </div>
  );
}

export default App;
