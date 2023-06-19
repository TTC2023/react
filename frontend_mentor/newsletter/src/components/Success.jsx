import React from 'react'
import styles from './Success.module.css'
import list from '../assets/list.svg'

const Success = ({email}) => {
  return (
    <div className={styles.success}>
        <img className={styles.img} src={list} alt="check"/>
        <div className={styles.content}>
            <h1>Thanks for Subscribing!</h1>
            <p>A confirmation email has been sent to <span style={{ fontWeight: 'bold'}}>{email}</span>. Please open it and click the button inside to confirm your subscription</p>
            <button className={styles.button}>Dismiss message</button>
        </div>
    </div>
  )
}

export default Success