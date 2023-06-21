import React from 'react'
import styles from './Form.module.css'

const Form = (props) => {

  const handleName =(e)=>{
    props.setName(e.target.value)
  }

  const handleNumber =(e)=>{
    props.setNumber(e.target.value)
  }

  return (
    <div className={styles.form}>
      <div className={styles.container}>
      <form action="" className={styles.formStyle} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.inputRow}>
            <label>CARDHOLDER NAME</label>
            <input type="text" placeholder='e.g Jane Appleseed' onChange={handleName}/>
          </div>
          <div className={styles.inputRow}>
            {/* not working, cannot type in input */}
            <label>CARDHOLDER NUMBER</label>
            <input type="text" placeholder='e.g 0000 0000 0000 0000' onChange={handleNumber} />
          </div>
          <div className={styles.inputRow}>
            <div className={styles.exp}>
              <label>EXP. DATE (MM/YY)</label>
              <label>CVC</label>
              <div>
                <input className={styles.date} type="number" min="1" max="12" placeholder='MM' />
                <input className={styles.date} type="number" min="23" max="30" placeholder='YY' />
                <input className={styles.cvc} type="text" placeholder='e.g 123' />
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