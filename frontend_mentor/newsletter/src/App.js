import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import DesktopMessage from './components/Desktop';
import MobileMessage from './components/Mobile';
import Success from './components/Success'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  const [email, setEmail] = useState('')
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 850);
    }

    window.addEventListener('resize', handleResize);

    // Clean up event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures this runs on mount and unmount only

  const Message = isMobile ? MobileMessage : DesktopMessage;

  return (
    <div className={styles.container}>
      <div className={styles.news}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Message email={email} setEmail={setEmail} />} />
            <Route path="/success" element={<Success email={email} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
