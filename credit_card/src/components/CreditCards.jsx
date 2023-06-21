import React from 'react'
import styles from './CreditCards.module.css'
import desktop from '../assets/desktop.png'
import cardBack from '../assets/bg-card-back.png'
import cardFront from '../assets/bg-card-front.png'
import cardLogo from '../assets/card-logo.svg'

const CreditCards = (props) => {

  return (
    <div className={styles.credit}>
        <img src={desktop} alt='desktop' className={styles.desktop}/>
        <img src={cardBack} alt='cardBack' className={styles.cardBack}/>
        <img src={cardFront} alt='cardFront' className={styles.cardFront}/>
        <img src={cardLogo} alt='cardLogo' className={styles.cardLogo}/>
        <p className={styles.name}>{props.name}</p>
        <p className={styles.number}>{props.number}</p>
        <p className={styles.exp}>{props.exp}</p>
        <p className={styles.cvc}>{props.cvc}</p>
    </div>
  )
}

export default CreditCards