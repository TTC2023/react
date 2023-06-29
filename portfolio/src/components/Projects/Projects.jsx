import React, { useState } from 'react'
import styles from './Projects.module.css'
import { GoLinkExternal } from "react-icons/go"
import { AiFillGithub } from "react-icons/ai";
import car from '../../assets/car_company.png'
import snap from '../../assets/snap.png'
import credit_card from '../../assets/credit_card.png'
import newsletter from '../../assets/newsletter.png'
import quotes from '../../assets/quotes.png'
import calculator from '../../assets/calculator.png'

const Experience = () => {
  // Initialize with an array for each card's background state
  const [background, setBackground] = useState([true, true, true, true, true, true])

  const backgroundToggle = (number) => {
    setBackground((prevBackground) => {
      const newState = [...prevBackground];
      newState[number] = !newState[number];
      return newState;
    });
    console.log(background);
  }

  return (
    <div className={styles.experiencePage}>
      <div className={styles.container}>
        <div className={styles.card}>
          {background[0] ? 
            <img onMouseEnter={() => backgroundToggle(0)} className={styles.cardImg} src={car} alt='car'></img> :
            <div onMouseLeave={() => backgroundToggle(0)}>
              <h2 className={styles.content}>Car Company</h2>
              <p>I designed and implemented an interactive car sales website.</p>
              <div className={styles.icons}>
                <a href="https://react-edo6bzxoh-ttc2023.vercel.app/" target="_blank" rel="noopener noreferrer" className={styles.link}><GoLinkExternal size={20} /></a>
              </div>
            </div>
          }
        </div>
        <div className={styles.card}>
          {background[1] ? 
            <img onMouseEnter={() => backgroundToggle(1)} className={styles.cardImg} src={calculator} alt='calculator'></img> :
            <div onMouseLeave={() => backgroundToggle(1)}>
              <h2 className={styles.content}>Calculator</h2>
              <p>I crafted a fully functioning calculator with an intuitive user interface.</p>
              <div className={styles.icons}>
                <div><AiFillGithub size={20} /></div>
                <a href="https://github.com/TTC2023/react/tree/master/calculator" target="_blank" rel="noopener noreferrer" className={styles.link}><GoLinkExternal size={20} /></a>
              </div>
            </div>
          }
        </div>
        <div className={styles.card}>
          {background[2] ? 
            <img onMouseEnter={() => backgroundToggle(2)} className={styles.cardImg} src={newsletter} alt='news'></img> :
            <div onMouseLeave={() => backgroundToggle(2)}>
              <h2 className={styles.content}>NewsLetter</h2>
              <p>I developed a mock newsletter subscription service.</p>
              <div className={styles.icons}>
                <div><AiFillGithub size={20} /></div>
                <a href="https://github.com/TTC2023/react/tree/master/music_player" target="_blank" rel="noopener noreferrer" className={styles.link}><GoLinkExternal size={20} /></a>
              </div>
            </div>
          }
        </div>
        <div className={styles.card}>
          {background[3] ? 
            <img onMouseEnter={() => backgroundToggle(3)} className={styles.cardImg} src={snap} alt='age'></img> :
            <div onMouseLeave={() => backgroundToggle(3)}>
              <h2 className={styles.content}>Snap Website</h2>
              <p>I developed a frontend website from a wireframe.</p>
              <div className={styles.icons}>
                <a href="https://react-bdba.vercel.app/" target="_blank" rel="noopener noreferrer" className={styles.link}><GoLinkExternal size={20} /></a>
              </div>
            </div>
          }
        </div>
        <div className={styles.card}>
          {background[4] ? 
            <img onMouseEnter={() => backgroundToggle(4)} className={styles.cardImg} src={credit_card} alt='cc'></img> :
            <div >
              <h2 className={styles.content}>Credit Card Website</h2>
              <p onMouseLeave={() => backgroundToggle(4)}>I developed a credit card form that validates the inputs.</p>
              <div className={styles.icons}>
                <a href="https://react-qobb.vercel.app/" target="_blank" rel="noopener noreferrer" className={styles.link}><GoLinkExternal size={20} /></a>
              </div>
            </div>
          }
        </div>
        <div className={styles.card}>
          {background[5] ? 
            <img onMouseEnter={() => backgroundToggle(5)} className={styles.cardImg} src={quotes} alt='quotes'></img> :
            <div onMouseLeave={() => backgroundToggle(5)}>
              <h2 className={styles.content}>Quotes API</h2>
              <p>I developed a quotes generator using a third party API.</p>
              <div className={styles.icons}>
                <div><AiFillGithub size={20} /></div>
                <a href="https://github.com/TTC2023/react/tree/master/quotes_api" target="_blank" rel="noopener noreferrer" className={styles.link}><GoLinkExternal size={20} /></a>
              </div>
            </div>
          }
          </div>
        </div>
    </div>
  )
}

export default Experience