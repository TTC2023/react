import React from 'react'
import styles from './Experience.module.css'
import { BsFillArrowUpCircleFill } from 'react-icons/bs';



const Experience = () => {
  return (
    <div className={styles.experiencePage}>
      <h1>Experience</h1>
        <div className={styles.container}>
          <div className={styles.edu}>
            <div className={styles.card}>
              <h2>High Point University</h2>
              <h3>Degree: Business Administration</h3>
              <h3>Minor: Economics</h3>
              <h3>2011-2015</h3>
            </div>
            <div className={styles.card}>
              <h2>Coding Dojo Bootcamp</h2>
              <h3>Degree: Web Development</h3>
              <br />
              <h3>2022-2023</h3>
            </div>
          </div>
          <div className={styles.work}>
            <div className={styles.workCard}>
              <h2>Managing Partner</h2>
              <h3>Brother Beans LLC</h3>
              <p>Managed e-commerce operations, optimized SEO, and spearheaded strategic diversification of revenue streams at Brother Beans Coffee.
</p>
            </div>
            <div className={styles.workCard}>
              <h2>Service Technician</h2>
              <h3>Corporate Essentials</h3>
              <p>Managed sales plans, nurtured customer relationships, and resolved equipment issues, fueling revenue growth at Corporate Essentials.</p>
            </div>
            <div className={styles.workCard}>
              <h2>Analyst</h2>
              <h3>Ocwen Loan Servicing</h3>
              <p>Managed distressed loans, negotiated settlements, executed wire transfers, and utilized Excel for data analysis at Ocwen Loan Servicing.</p>
            </div>
          </div>
        </div>
        <button className={styles.arrow}><BsFillArrowUpCircleFill /></button>
    </div>
  )
}

export default Experience