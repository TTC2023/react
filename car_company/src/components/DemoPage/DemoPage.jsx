import React from 'react';
import black_car from '../../assets/black_car.jpg';
import white_car from '../../assets/white_car.jpg';
import './DemoPage.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const DemoPage = () => {
  const [year, setYear] = useState('2022')
  const [price, setPrice] = useState('$50,000-55,000');
  const [color, setColor] = useState('black');
  const [mileage, setMileage] = useState('36');
  const [selected, setSelected] = useState(2);
  const [photo, setPhoto] = useState(black_car);
  const handleSelected = (model) => {
    setSelected(model);
    if (selected === 1) {
      setPhoto(black_car);
      setColor('black');
      setPrice('$50,000-55,000');
      setMileage('36')
      setYear('2022')
      console.log('white');
    }
    if (selected === 2) {
      setPhoto(white_car);
      setColor('white');
      setPrice('$80,000-85,000');
      setMileage('56')
      setYear('2023')
      console.log('black');
    }
  };

  return (
    <div className='demo_page'>
      <div className='side_buttons'>
        <button
          style={{ color: color, backgroundColor: 'darkgray', margin: '10px', borderRadius: '5px' }}
          className={selected === 1 ? 'model_1' : 'none'}
          onClick={() => handleSelected(1)}
        >
          Model 1
        </button>
        <button
          style={{ color: color, backgroundColor: 'darkgray', margin: '10px', borderRadius: '5px' }}
          className={selected === 2 ? 'model_2' : 'none'}
          onClick={() => handleSelected(2)}
        >
          Model 2
        </button>
      </div>
      <div className='demo_content'>
        <Link to='/' style={{ color: 'black' }} className='back_btn'>
          {' '}
          back to home
        </Link>
        <img src={photo} alt='car_photo' className='car' />
      </div>
      <div className='table-responsive'>
        <table className='table table-striped table-hover table-bordered table-horizontal custom-table'>
          <thead>
            <tr>
              <th>Price</th>
              <th>Mileage</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{price}</td>
              <td>{mileage}</td>
              <td>{year}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DemoPage;
