import React from 'react'
import { useState } from 'react'
import styles from './Contact.module.css'

const Contact = () => {

  const [thanks, setThanks] = useState(false)

  const handleThanks = () => {
    setThanks(true)
  }

  return (
    <div className={styles.contactPage}>
      {thanks ? 
        <p className={styles.message}>Thank you for your message! I will get back to you as soon as I can!</p> :
        <form action="https://formsubmit.co/corrett10@gmail.com" method="POST">
          <input type="hidden" name="_autoresponse" value="Thank you so much for reaching out! I will make sure to respond as soon as I can!"></input>
          <div className={styles.input}>
            <label htmlFor="name">Name:</label>
            <input type="text" name='name' placeholder='Name' required />
          </div>
          <div className={styles.input}>
            <label htmlFor="email">Email:</label>
            <input type="text" name='email' placeholder='Email Address' required />
          </div>
          <div className={styles.input}>
            <label htmlFor="message">Message:</label>
            <input type="text" name='message' placeholder='Message' required />
          </div>
          <button type='submit' onClick={handleThanks}>Send</button>
        </form>
      }
    </div>
  )
}

export default Contact