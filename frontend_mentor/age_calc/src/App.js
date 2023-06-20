import './App.css';
import arrow from './assets/arrow.svg'
import Form from './components/Form'
import Result from './components/Result'
import {useEffect, useState} from 'react'

function App() {
  const [day, setDay] = useState("")
  const [month, setMonth] = useState("")
  const [year, setYear] =useState("")
  const [ageYear, setAgeYear] =useState("--")
  const [ageMonth, setAgeMonth] =useState("--")
  const [ageDay, setAgeDay] =useState("--")

  useEffect(() => {
    if (day && month && year) {
      const birthDate = new Date(`${year}-${month}-${day}`);
      getAge(birthDate);
    }
  }, [day, month, year]);

  function getAge(birthDate) {
    const today = new Date();
    let ageY = today.getFullYear() - birthDate.getFullYear();
    let ageM = today.getMonth() - birthDate.getMonth();
    let ageD = today.getDate() - birthDate.getDate();

    if (ageM < 0 || (ageM === 0 && ageD < 0)) {
      ageY--;
      ageM = 12 + ageM;
    }

    if (ageD < 0) {
      ageM--;
      ageD = 31 + ageD;
    }

    setAgeYear(ageY);
    setAgeMonth(ageM);
    setAgeDay(ageD);
  }

  return (
    <div className="App">
      <div className='container'>
        <Form setDay={setDay} setMonth={setMonth} setYear={setYear}/>
      <div className='middle'>
        <hr className='line'/>
        <img className='arrow' src={arrow} alt='arrow'/>
      </div>
      <Result ageDay={ageDay} ageMonth={ageMonth} ageYear={ageYear}/>
    </div>
  </div>
  );
}

export default App;
