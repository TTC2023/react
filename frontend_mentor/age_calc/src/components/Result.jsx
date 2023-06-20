import React from 'react'
import styles from './Result.module.css'

const Result = ({ageDay, ageMonth, ageYear}) => {
  return (
    <div className={styles.result}>
      <h1><span style={{color: 'purple'}}>{ageYear}</span> Years</h1>
      <h1><span style={{color: 'purple'}}>{ageMonth}</span> Months</h1>
      <h1><span style={{color: 'purple'}}>{ageDay}</span>Days</h1>
    </div>
  )
}

export default Result