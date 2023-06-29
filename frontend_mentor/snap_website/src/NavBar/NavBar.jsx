import React from 'react'
import styles from './NavBar.module.css'
import logo from '../assets/logo.svg'
import { useState } from 'react'
import arrowUp from '../assets/icon-arrow-up.svg'
import arrowDown from '../assets/icon-arrow-down.svg'

const NavBar = () => {

  const [features, setfeatures] = useState(false)
  const [companies, setCompanies] = useState(false)

  const toggleArrow = (num) => {
    if(num===1){
      setfeatures(!features)
    }
    if(num===2){
      setCompanies(!companies)
    }
  }

  return (
    <div className={styles.navBar}>
      <div className={styles.links}>
        <img className={styles.logo} src={logo} alt="logo" />
        <div>
          <a href="/">Features</a>
          <img onClick={(e)=>toggleArrow(1)} src={features ? arrowUp : arrowDown} alt="features" />
        </div>
        <div>
          <a href="/">Company</a>
          <img onClick={(e)=>toggleArrow(2)} src={companies ? arrowUp : arrowDown} alt="companies" />
        </div>
        <a href="/">Careers</a>
        <a href="/">About</a>
      </div>
      <div className={styles.signIn}>
        <button className={styles.login}>Login</button>
        <button className={styles.register}>Register</button>
      </div>
    </div>
  )
}

export default NavBar