import React from 'react'
import mobile from '../assets/bg-main-mobile.png'
import styles from './MobileCreditCards.module.css'
import cardBack from '../assets/bg-card-back.png'
import cardFront from '../assets/bg-card-front.png'
import cardLogo from '../assets/card-logo.svg'

const MobileCreditCards = () => {
  return (
    <div className={styles.mobileCC}>
        <img className={styles.bg} src={mobile} alt='bg-image'/>
    </div>
  )
}

export default MobileCreditCards