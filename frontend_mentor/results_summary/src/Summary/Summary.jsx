import React from 'react'
import styles from './Summary.module.css'
import memory from '../assets/icon-memory.svg'
import visual from '../assets/icon-visual.svg'
import verbal from '../assets/icon-verbal.svg'
import reaction from '../assets/icon-reaction.svg'


const Summary = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <p>Your Result</p>
            <div className={styles.circle}>
                <h2 className={styles.average}>76</h2>
                <p>of 100</p>
            </div>
            <h3>Great</h3>
            <p className={styles.content}>You scored higher than 65% of the people who have taken these tests.</p>
        </div>
        <div className={styles.right}>
            <h2>Summary</h2>
            <div className={styles.reaction}>
                <img src={reaction} alt='reaction'></img>
                <p>Reaction</p>
                <p><b>80</b>/100</p>
            </div>
            <div className={styles.memory}>
                <img src={memory} alt='memory'></img>
                <p>Memory</p>
                <p><b>92</b>/100</p>
            </div>
            <div className={styles.verbal}>
                <img src={verbal} alt='verbal'></img>
                <p>Verbal</p>
                <p><b>61</b>/100</p>
            </div>
            <div className={styles.visual}>
                <img src={visual} alt='visual'></img>
                <p>Visual</p>
                <p><b>72</b>/100</p>
            </div>
            <button>Continue</button>
        </div>
    </div>
  )
}

export default Summary