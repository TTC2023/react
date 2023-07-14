import React, { useState } from 'react'
import styles from './Projects.module.css'
import e_commerce from '../../assets/e-commerce.png'
import snap from '../../assets/snap.png'
import comments from '../../assets/comments.png'
import newsletter from '../../assets/newsletter.png'
import quotes from '../../assets/quotes.png'
import calculator from '../../assets/calculator.png'
import next from '../../assets/icon-next.svg'
import previous from '../../assets/icon-previous.svg'

const Experience = () => {

  const [selected, setSelected] = useState(0)
  const image = [e_commerce, calculator, snap, comments, newsletter, quotes]
  const header = ["E-Commerce Website", "Functioning Calculator", "Landing Webpage", "Comment Wall", "NewsLetter", "Quotes API"]
  const paragraph = [
    "I developed a full-functioning product page for an e-commerce website.",
    "I developed a fully functioning mathematical calculator.",
    "I developed a well-designed SEO-friendly landing page",
    "I developed a twitter-like social media discussion board.",
    "I developed a newsletter from a pre-made wireframe.",
    "I developed a random inspirational quotes page using a third-party API"
  ]
  const link = ['https://frontend-mentor-1-six.vercel.app/','','https://react-6qip.vercel.app/', 'https://react-kcu6.vercel.app/', '','']

  const handleNext = () => {
    if(selected < 5){
      let newSelected = selected + 1
      setSelected(newSelected)
    }
  }

  const handlePrevious = () => {
    if(selected > 0){
      let newSelected = selected - 1
      setSelected(newSelected)
    }
  }

  return (
    <div className={styles.experiencePage}>
      <div className={styles.container}>
        <div className={styles.project}>
          <img className={styles.mainImg} src={image[selected]} alt='mainImg'></img>
          <div className={styles.description}>
            <h2>{header[selected]}</h2>
            <p>{paragraph[selected]}</p>
            <a href={link[selected]} target="_blank" rel="noopener noreferrer">See live website</a>
            <div className={styles.arrows}>
              <img onClick={()=>handlePrevious()} src={previous} alt="previous" />
              <img onClick={()=>handleNext()} src={next} alt="next" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience