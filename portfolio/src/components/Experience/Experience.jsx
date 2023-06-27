import React from 'react'
import styles from './Experience.module.css'
import { useState } from 'react';
import HPU from '../../assets/HPU.png';
import ocwen from '../../assets/ocwen.png';
import ce from '../../assets/ce.jpg';
import bb from '../../assets/bb.png';
import cd from '../../assets/cd.png';

const Projects = () => {
  const [activeBubble, setActiveBubble] = useState('HPU');
  const [fadeIn, setFadeIn] = useState(false);

  const fade = (bubble) => {
    setActiveBubble(bubble)
    setFadeIn(true)
  }

  return (
    <div className={styles.projectsPage}>
      <div className={styles.bubbles}>
        <button onMouseEnter={() => setActiveBubble('HPU')} className={styles.bubble}><img src={HPU} alt="HPU" /></button>
        <button onMouseEnter={() => setActiveBubble('OC')} className={styles.bubble}><img src={ocwen} alt="ocwen" /></button>
        <button onMouseEnter={() => setActiveBubble('CE')} className={styles.bubble}><img src={ce} alt="ce" /></button>
        <button onMouseEnter={() => setActiveBubble('BB')} className={styles.bubble}><img src={bb} alt="bb" /></button>
        <button onMouseEnter={() => setActiveBubble('CD')} className={styles.bubble}><img src={cd} alt="cd" /></button>
      </div>
      <div className={styles.container}>
          {activeBubble === 'HPU' && (
            <>
              <h1 className={styles.fadeIn}>High Point University</h1>
              <h2 className={styles.fadeIn}>Business Administration | 2011-2015</h2>
              <p className={styles.fadeIn}>At High Point University, I completed a Business Administration program and enhanced it with an Economics minor. My education combined practical business management knowledge with an understanding of economic principles. It provided a solid foundation in business strategy, operations, and financial analysis. The combination of business and economics equipped me with an unique perspective to approach and solve complex business challenges in technology-driven environments.</p>
            </>
          )}
          {activeBubble === 'OC' && (
            <>
              <h1 className={styles.fadeIn}>Ocwen Loan Servicing</h1>
              <h2 className={styles.fadeIn}>Cash Management Analyst | 2015-2016</h2>
              <p className={styles.fadeIn}>During my time as an Analyst at Ocwen Loan Servicing (2015-2016), I worked closely with our India teams, handling substantial financial duties. I managed $126M wire transfers, supporting a $1B monthly loan volume, involving 2500+ bank-to-bank transactions monthly. I routinely provided financial reports to senior leadership for strategic planning. My role required financial acumen, attention to detail, and the ability to work in a fast-paced, international setting, which significantly improved my skills and contributed to the company's operations.
</p>
            </>
          )}
          {activeBubble === 'CE' && (
            <>
              <h1 className={styles.fadeIn}>Corporate Essentials</h1>
              <h2 className={styles.fadeIn}>Service Technician | 2016-2019</h2>
              <p className={styles.fadeIn}>As a Service Technician from 2016 to 2019, I performed preventive maintenance and scheduled repairs on industrial coffee equipment, demonstrating my mechanical skills. I also handled unexpected issues, providing break-fix services for minimal downtime for our corporate clients. My focus on maintaining high company standards often led to surpassing service goals. With attention to detail and efficient service delivery, I provided timely recommendations for clients' needs. My success was driven by my commitment to customer satisfaction, diligent work, and adaptability in a fast-paced environment. This role allowed me to enhance my problem-solving skills, technical knowledge, and ability to swiftly manage unforeseen issues, ensuring continuous high-quality services and reinforcing our company's reputation as a dependable breakroom solutions provider.
</p>
            </>
          )}
          {activeBubble === 'BB' && (
            <>
              <h1 className={styles.fadeIn}>Brother Beans Coffee</h1>
              <h2 className={styles.fadeIn}>Managing Partner | 2019-2023</h2>
              <p className={styles.fadeIn}>From 2019 to 2023, as a co-founder and managing partner, I led diverse operations in our Northern NJ business, built a comprehensive e-commerce platform, and used self-taught SEO/SEM strategies to enhance our online visibility. In response to the COVID pandemic, I rapidly diversified our business model, introducing wholesale subscriptions, seasonal cold brew deliveries, and a renewed e-commerce retail focus.</p>
            </>
          )}
          {activeBubble === 'CD' && (
            <>
              <h1 className={styles.fadeIn}>Coding Dojo</h1>
              <h2 className={styles.fadeIn}>Web Development | 2022-2023</h2>
              <p className={styles.fadeIn}>At Coding Dojo, a highly-regarded bootcamp, I immersed myself in full-stack development, gaining a comprehensive understanding of both frontend and backend technologies. The rigorous, fast-paced program focused on mastering languages like Java, Python, and JavaScript, as well as important frameworks like React and Spring Boot. I applied these skills in hands-on projects, from conception to deployment. This intensive experience honed my problem-solving skills, adaptability, and ability to learn new technologies quickly, preparing me for the dynamic world of web development.</p>
            </>
          )}
          </div>
      </div>
  )
}

export default Projects