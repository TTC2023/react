import React from 'react'
import styles from './Projects.module.css'
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { BsFillBriefcaseFill } from "react-icons/bs";



const Experience = () => {
  return (
    <div className={styles.experiencePage}>
        <div className={styles.container}>
          <div className={styles.edu}>
            <div className={styles.icon}><BsFillBriefcaseFill size={40}/></div>
            <div className={styles.card}>
              <h2 className={styles.text}>High Point University</h2>
              <h3 className={styles.text}>Degree: Business Administration</h3>
              <h3 className={styles.text}>Minor: Economics</h3>
              <h3 className={styles.text}>2011-2015</h3>
            </div>
            <div className={styles.card}>
              <h2 className={styles.text}>Coding Dojo Bootcamp</h2>
              <h3 className={styles.text}>Degree: Web Development</h3>
              <br />
              <h3 className={styles.text}>2022-2023</h3>
            </div>
          </div>
          <div className={styles.work}>
            <div className={styles.workCard}>
              <h2 className={styles.text}>Managing Partner</h2>
              <h3 className={styles.text}>Brother Beans LLC</h3>
              <p className={styles.text}>Managed e-commerce operations, optimized SEO, and spearheaded strategic diversification of revenue streams at Brother Beans Coffee.
</p>
            </div>
            <div className={styles.workCard}>
              <h2 className={styles.text}>Service Technician</h2>
              <h3 className={styles.text}>Corporate Essentials</h3>
              <p className={styles.text}>Managed sales plans, nurtured customer relationships, and resolved equipment issues, fueling revenue growth at Corporate Essentials.</p>
            </div>
            <div className={styles.workCard}>
              <h2 className={styles.text}>Analyst</h2>
              <h3 className={styles.text}>Ocwen Loan Servicing</h3>
              <p className={styles.text}>Managed distressed loans, negotiated settlements, executed wire transfers, and utilized Excel for data analysis at Ocwen Loan Servicing.</p>
            </div>
          </div>
        </div>
        <button className={styles.arrow}><BsFillArrowUpCircleFill /></button>
    </div>
  )
}

export default Experience