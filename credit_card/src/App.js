import './App.css';
import CreditCards from './components/CreditCards';
import MobileCreditCards from './components/MobileCreditCards';
import Form from './components/Form';
import MobileForm from './components/MobileForm';
import { useState, useEffect } from 'react';

function App() {
  const [name, setName] = useState('JANE APPLESEED');
  const [number, setNumber] = useState("0000 0000 0000 0000");
  const [month, setMonth] = useState('00');
  const [year, setYear] = useState('00');
  const [cvc, setCvc] = useState('000');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="App">
      {isMobile ? (
        <>
          <MobileCreditCards name={name} number={number} cvc={cvc} month={month} year={year}/>
          <MobileForm setName={setName} setNumber={setNumber} setCvc={setCvc} setMonth={setMonth} setYear={setYear}/>
        </>
      ) : (
        <>
          <CreditCards name={name} number={number} cvc={cvc} month={month} year={year}/>
          <Form setName={setName} setNumber={setNumber} setCvc={setCvc} setMonth={setMonth} setYear={setYear}/>
        </>
      )}
    </div>
  );
}

export default App;

