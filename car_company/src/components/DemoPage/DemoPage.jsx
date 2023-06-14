import React, { useState } from 'react';
import black_car from '../../assets/black_car.jpg';
import white_car from '../../assets/white_car.jpg';
import './DemoPage.css';
import { Link } from 'react-router-dom';

const DemoPage = () => {
  const [carInfo, setCarInfo] = useState({
    year: '2022',
    price: '$50,000-55,000',
    color: 'black',
    mileage: '36',
    selected: 2,
    photo: black_car
  });

  const handleSelected = (model) => {
    if (model === 2) {
      setCarInfo({
        ...carInfo,
        year: '2022',
        price: '$50,000-55,000',
        mileage: '36',
        selected: 2,
        photo: black_car
      });
    }
    if (model === 1) {
      setCarInfo({
        ...carInfo,
        year: '2023',
        price: '$80,000-85,000',
        mileage: '40',
        selected: 1,
        photo: white_car
      });
    }
  };

  return (
    <div className='demo_page'>
      <div className='side_buttons'>
        <button
          style={{ backgroundColor: 'darkgray', margin: '10px', borderRadius: '5px' }}
          className={carInfo.selected === 1 ? 'model_1' : 'none'}
          onClick={() => handleSelected(1)}
        >
          Model 1
        </button>
        <button
          style={{ backgroundColor: 'darkgray', margin: '10px', borderRadius: '5px' }}
          className={carInfo.selected === 2 ? 'model_2' : 'none'}
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
        <img src={carInfo.photo} alt='car_photo' className='car' />
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
              <td>{carInfo.price}</td>
              <td>{carInfo.mileage}</td>
              <td>{carInfo.year}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DemoPage;
