import './App.css';
import CreditCards from './components/CreditCards';
import Form from './components/Form';
import {useState} from 'react'

function App() {

  const [name, setName] = useState('JANE APPLESEED')
  const [number, setNumber] = useState("0000 0000 0000 0000")
  const [month, setMonth] =useState('00')
  const [year, setYear] =useState('00')
  const [cvc, setCvc] = useState('000')

  return (
    <div className="App">
      <CreditCards name={name} number={number} cvc={cvc} month={month} year={year}/>
      <Form setName={setName} setNumber={setNumber} setCvc={setCvc} setMonth={setMonth} setYear={setYear}/>
    </div>
  );
}

export default App;
