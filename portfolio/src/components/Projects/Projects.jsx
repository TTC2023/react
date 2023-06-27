import React from 'react'
import styles from './Projects.module.css'
import { GoLinkExternal } from "react-icons/go"
import { AiFillGithub } from "react-icons/ai";




const Experience = () => {
  return (
    <div className={styles.experiencePage}>
        <div className={styles.container}>
          <div className={styles.card}>
              <h2 className={styles.content}>Car Company</h2>
              <p>I designed and implemented an interactive car sales website.</p>
              <div className={styles.icons}>
                <div><AiFillGithub size={20}/></div>
                <a href="https://github.com/TTC2023/react/tree/master/car_company" className={styles.link}><GoLinkExternal size={20}/></a>
              </div>
          </div>
          <div className={styles.card}>
          <h2 className={styles.content}>Calculator</h2>
              <p>I crafted a fully functioning calculator with an intuitive user interface. </p>
              <div className={styles.icons}>
                <div><AiFillGithub size={20}/></div>
                <a href="https://github.com/TTC2023/react/tree/master/calculator" className={styles.link}><GoLinkExternal size={20}/></a>
              </div>
          </div>
          <div className={styles.card}>
            <h2 className={styles.content}>Music API</h2>
            <p>I developed a music search application using a third-party API. </p>
              <div className={styles.icons}>
                <div><AiFillGithub size={20}/></div>
                <a href="https://github.com/TTC2023/react/tree/master/music_player" className={styles.link}><GoLinkExternal size={20}/></a>
              </div>
          </div>
          <div className={styles.card}>
            <h2 className={styles.content}>Age Calculator</h2>
            <p>I developed a an age calculator that calculates the age of whatever date you input. </p>
              <div className={styles.icons}>
                <div><AiFillGithub size={20}/></div>
                <a href="https://github.com/TTC2023/react/tree/master/frontend_mentor/age_calc" className={styles.link}><GoLinkExternal size={20}/></a>
              </div>
          </div>
          <div className={styles.card}>
            <h2 className={styles.content}>Credit Card Website</h2>
            <p>I developed a credit card form that validates the inputs. </p>
              <div className={styles.icons}>
                <div><AiFillGithub size={20}/></div>
                <a href="https://github.com/TTC2023/react/tree/master/credit_card" className={styles.link}><GoLinkExternal size={20}/></a>
              </div>
          </div>
          <div className={styles.card}>
            <h2 className={styles.content}>Quotes API</h2>
            <p>I developed a quotes generator using a third party API. </p>
              <div className={styles.icons}>
                <div><AiFillGithub size={20}/></div>
                <a href="https://github.com/TTC2023/react/tree/master/quotes_api" className={styles.link}><GoLinkExternal size={20}/></a>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Experience