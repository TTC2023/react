
import styles from './Form.module.css'

const Form = ({setDay,setMonth,setYear}) => {

  const handleDayChange = (e) => {
    setDay(e.target.value);
  }

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  }

  const handleYearChange = (e) => {
    setYear(e.target.value);
  }

  return (
    <div>
      <form className={styles.form}>
        <div className={styles.inputs}>
          <label htmlFor="">Day</label>
          <input className={styles.box} type='number' min='1' max='31' placeholder='Day' onChange={handleDayChange}></input>
        </div>
        <div className={styles.inputs}>
          <label htmlFor="">Month</label>
          <input className={styles.box} type='number' min='1' max='12' placeholder='Month' onChange={handleMonthChange}></input>
        </div>
        <div className={styles.inputs}>
          <label htmlFor="">Year</label>
          <input className={styles.box} type='number' min='1900' max='2023' placeholder='Year' onChange={handleYearChange}></input>
        </div>
      </form>
    </div>
  )
}

export default Form
