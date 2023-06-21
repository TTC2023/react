import './App.css';
import CreditCards from './components/CreditCards';
import Form from './components/Form';
import {useState} from 'react'

function App() {

  const [number, setNumber] = useState("0000 0000 0000 0000")
  const [name, setName] = useState('JANE APPLESEED')
  const [exp, setExp] = useState('00/00')
  const [cvc, setCvc] = useState('000')

  return (
    <div className="App">
      <CreditCards number={number} name={name} exp={exp} cvc={cvc}/>
      <Form setNumber={setNumber} setName={setName} setExp={setExp} setCvc={setCvc}/>
    </div>
  );
}

export default App;
