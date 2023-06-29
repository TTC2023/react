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
    if (day > 0 && day < 31 && month > 0 && month < 12 && year > 1901 && year < 2023) {
      const birthDate = new Date(year, month - 1, day); // Create Date object using numbers
      getAge(birthDate);
    } else{
      setAgeYear("--")
      setAgeDay("--")
      setAgeMonth("--")
    }
  }, [day, month, year]);

  function getAge(birthDate) {
    const today = new Date();
    let ageY = today.getFullYear() - birthDate.getFullYear();
    let ageM = today.getMonth() - birthDate.getMonth();
    let ageD = today.getDate() - birthDate.getDate();
  
    if (ageM < 0 || (ageM === 0 && ageD < 0)) {
      ageY--;
      ageM += 12;
    }
  
    if (ageD < 0) {
      let lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      ageD += lastMonth.getDate();
      ageM--;
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


