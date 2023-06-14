import React from 'react'
import black_car from '../../assets/black_car.jpg'
import './DemoPage.css'
import {Link} from 'react-router-dom'

const DemoPage = () => {
  return (
    <div>
      <Link to='/' className='back_btn'> back to home</Link>
      <div className='demo_content'>
        <img src={black_car} alt="black_car" className="black_car" />
        
      </div>
    </div>
  )
}

export default DemoPage