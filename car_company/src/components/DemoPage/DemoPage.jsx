import React from 'react'
import black_car from '../../assets/black_car.jpg'
import white_car from '../../assets/white_car.jpg'
import './DemoPage.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const DemoPage = () => {
  const [color, setColor] = useState('black')
  const [selected, setSelected] = useState(1)
  const [photo, setPhoto] = useState(white_car)
  const handleSelected = (model) => {
    setSelected(model)
    if (selected === 2) {
      setPhoto(black_car)
      setColor('black')
      console.log(photo)
    }
    if (selected === 1) {
      setPhoto(white_car)
      setColor('white')
      console.log(photo)
    }
  }

  return (
    <div className='demo_page'>
      <div style={{ backgroundColor: color }}>
        <div className='side_buttons'>
          <button style={{ color: color, backgroundColor: 'darkgray' }} className='model_button' onClick={() => handleSelected(1)}>Model 1</button>
          <button style={{ color: color, backgroundColor: 'darkgray' }} className='model_button' onClick={() => handleSelected(2)}>Model 2</button>
        </div>
        <div className='demo_content'>
          <Link to='/' style={{ color: color }} className='back_btn'> back to home</Link>
          <img src={photo} alt="car_photo" className="car" />
        </div>
      </div>
    </div>
  )
}

export default DemoPage