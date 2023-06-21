import './App.css';
import CreditCards from './components/CreditCards';
import Form from './components/Form';
import {useState} from 'react'

function App() {

  const [name, setName] = useState('JANE APPLESEED')
  const [number, setNumber] = useState("0000 0000 0000 0000")
  const [exp, setExp] = useState('00/00')
  const [cvc, setCvc] = useState('000')

  return (
    <div className="App">
      <CreditCards name={name} number={number} exp={exp} cvc={cvc}/>
      <Form setName={setName} setNumber={setNumber} setExp={setExp} setCvc={setCvc}/>
    </div>
  );
}

export default App;
