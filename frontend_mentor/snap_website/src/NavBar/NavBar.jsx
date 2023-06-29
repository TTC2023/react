import React from 'react'
import styles from './NavBar.module.css'
import logo from '../assets/logo.svg'
import { useState } from 'react'
import arrowUp from '../assets/icon-arrow-up.svg'
import arrowDown from '../assets/icon-arrow-down.svg'
import todo from '../assets/icon-todo.svg'
import calendar from '../assets/icon-calendar.svg'
import reminders from '../assets/icon-reminders.svg'
import planning from '../assets/icon-planning.svg'

const NavBar = () => {

  const [features, setfeatures] = useState(true)
  const [companies, setCompanies] = useState(true)

  const toggleArrow = (num) => {
    console.log(`toggleArrow called with argument: ${num}`);
    if (num === 1) {
      setfeatures(!features)
    }
    if (num === 2) {
      setCompanies(!companies)
    }
  }

  return (
    <div className={styles.navBar}>
      <div className={styles.links}>
        <img className={styles.logo} src={logo} alt="logo" />
        <div className={styles.features}>
          <a href="/">Features</a>
          <img className={styles.arrow} onClick={() => toggleArrow(1)} src={features ? arrowUp : arrowDown} alt="features" />
          {!features ?
            <div className={styles.featureList}>
              <div className={styles.tasks}>
                <img src={todo} alt="todo" />
                <p>Todo List</p>
              </div >
              <div className={styles.tasks}>
                <img src={calendar} alt="calendar" />
                <p>Calendar</p>
              </div >
              <div className={styles.tasks}>
                <img src={reminders} alt="reminders" />
                <p>Reminders</p>
              </div >
              <div className={styles.tasks}>
                <img src={planning} alt="planning" />
                <p>Planning</p>
              </div >
            </div> : null
          }
        </div>
        <div className={styles.companies}>
          <a href="/">Company</a>
          <img className={styles.arrow} onClick={() => toggleArrow(2)} src={companies ? arrowUp : arrowDown} alt="companies" />
          {!companies ? 
          <div className={styles.companyList}>
            <p>History</p>
            <p>Our Team</p>
            <p>Blog</p>
          </div> : null}
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