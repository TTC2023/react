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
              <p className={styles.fadeIn}>During my time as an Analyst at Ocwen Loan Servicing from 2015 to 2016, I collaborated closely with our India-based teams, handling significant financial responsibilities. I played a crucial role in managing $126M in wire transfers, accommodating an impressive $1B monthly loan volume. This required dealing with over 2,500 transactions monthly between bank-to-bank custodial accounts, demonstrating my expertise in complex financial processes and my ability to handle substantial volumes of transactions. In addition to these tasks, I provided crucial financial insights to our senior leadership. I routinely delivered projections and cash flow reports, assisting in strategic decision-making and future planning. I was also responsible for performing various ad hoc analyses, supplying additional information to support informed business choices. Overall, my role at Ocwen Loan Servicing required me to leverage my financial acumen, attention to detail, and ability to work in a fast-paced, multinational setting. I honed my skills in financial management, cross-cultural collaboration, and analytical thinking, contributing substantially to the company's operations.</p>
            </>
          )}
          {activeBubble === 'CE' && (
            <>
              <h1 className={styles.fadeIn}>Corporate Essentials</h1>
              <h2 className={styles.fadeIn}>Service Technician | 2016-2019</h2>
              <p className={styles.fadeIn}>As a Service Technician from 2016 to 2019, I was entrusted with a multitude of responsibilities revolving around the upkeep of industrial coffee equipment. In this role, I showcased my mechanical aptitude, performing preventive maintenance and scheduled repairs as needed. I also dealt with unanticipated issues, providing break-fix services to ensure minimal downtime and disruption of the services offered to our corporate clients.
              My primary goal was to maintain the high standards of the company, and I consistently met and often exceeded all service goals set. The position required an eye for detail, efficiency, and accuracy in delivering service solutions. Thus, I provided timely recommendations that precisely addressed the needs of the clients. The success I achieved in this role resulted from my unwavering commitment to customer satisfaction, diligent work, and ability to thrive in a dynamic environment. 
              Throughout this tenure, I sharpened my problem-solving skills and broadened my technical knowledge. I also honed my ability to quickly adapt to changes and unforeseen issues, making sure that our clients received uninterrupted and top-tier services, reinforcing our company's standing as a reliable provider of breakroom solutions.</p>
            </>
          )}
          {activeBubble === 'BB' && (
            <>
              <h1 className={styles.fadeIn}>Brother Beans Coffee</h1>
              <h2 className={styles.fadeIn}>Managing Partner | 2019-2023</h2>
              <p className={styles.fadeIn}>During my time as an Analyst at Ocwen Loan Servicing from 2015 to 2016, I collaborated closely with our India-based teams, handling significant financial responsibilities. I played a crucial role in managing $126M in wire transfers, accommodating an impressive $1B monthly loan volume. This required dealing with over 2,500 transactions monthly between bank-to-bank custodial accounts, demonstrating my expertise in complex financial processes and my ability to handle substantial volumes of transactions. In addition to these tasks, I provided crucial financial insights to our senior leadership. I routinely delivered projections and cash flow reports, assisting in strategic decision-making and future planning. I was also responsible for performing various ad hoc analyses, supplying additional information to support informed business choices. Overall, my role at Ocwen Loan Servicing required me to leverage my financial acumen, attention to detail, and ability to work in a fast-paced, multinational setting. I honed my skills in financial management, cross-cultural collaboration, and analytical thinking, contributing substantially to the company's operations.</p>
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