import React from 'react'
import styles from './Form.module.css'

const Form = (props) => {

  const handleName = (e) => {
    props.setName(e.target.value)
  }

  const handleNumber = (e) => {
    let value = e.target.value.replace(/\s/g, '');  // Remove any existing spaces
    if (value.length > 16) {
      value = value.slice(0, 16); // Limit the length to 16 digits
    }

    // Insert a space after every 4 digits
    value = value.replace(/(\d{4})/g, '$1 ').trim();

    props.setNumber(value);
  }

  const handleMonth = (e) => {
    let value = e.target.value
    if (value < 10) {
      value = '0' + e.target.value
    }
    props.setMonth(value)
  }

  const handleYear = (e) => {
    props.setYear(e.target.value)
  }

  const handleCvc = (e) => {
    let value = e.target.value
    if (value.length > 3) {
      return e.target.value
    }
    props.setCvc(e.target.value)
  }


  return (
    <div className={styles.form}>
      <div className={styles.container}>
        <form action="" className={styles.formStyle} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.inputRow}>
            <label>CARDHOLDER NAME</label>
            <input type="text" placeholder='e.g Jane Appleseed' required onChange={handleName} />
          </div>
          <div className={styles.inputRow}>
            <label>CARDHOLDER NUMBER</label>
            <input type="text" placeholder='e.g 0000 0000 0000 0000' pattern="^\d{4} \d{4} \d{4} \d{4}$" required onChange={handleNumber} />
          </div>
          <div className={styles.inputRow}>
            <div className={styles.exp}>
              <label>EXP. DATE (MM/YY)</label>
              <label>CVC</label>
              <div>
                <input className={styles.date} type="number" min="1" max="12" placeholder='MM' pattern="^\d{2}$" required onChange={handleMonth} />
                <input className={styles.date} type="number" min="23" max="30" placeholder='YY' pattern="^\d{2}$" required onChange={handleYear} />
                <input className={styles.cvc} type="number" placeholder='e.g 123' pattern="^\d{3}$" required onChange={handleCvc} />
              </div>
            </div>
          </div>
          <div className={styles.inputRow}>
            <input className={styles.button} type='submit' value='Confirm' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form