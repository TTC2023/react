import React from 'react'
import styles from './Content.module.css'
import worker from '../assets/image-hero-desktop.png'
import databiz from '../assets/client-databiz.svg'
import audiophile from '../assets/client-audiophile.svg'
import maker from '../assets/client-maker.svg'
import meet from '../assets/client-meet.svg'

const Content = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Make remote work</h1>
        <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
        <button>Learn more</button>
        <div className={styles.companies}>
          <img className={styles.logo} src={databiz} alt="databiz" />
          <img className={styles.logo} src={audiophile} alt='audiophile'></img>
          <img className={styles.logo} src={meet} alt='meet'></img>
          <img className={styles.logo} src={maker} alt='maker'></img>
        </div>
      </div>
      <div className={styles.workerImg}>
        <img src={worker} alt='worker'></img>
      </div>
    </div>
  )
}

export default Content