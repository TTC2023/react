import car_driving from '../../assets/car_driving.mp4';
import './FirstVehicle.css'
import { useState,useEffect } from 'react';
import SideBar from '../NavBar/SideBar';

const FirstVehicle = () => {

  const [menu, setMenu] = useState(false);

  useEffect(() => {
    console.log(menu);
  }, [menu]);

  const showMenu = () => {
    setMenu(true);
    console.log(menu);
  }

  return (
    <div className='background-video'>
      <video autoPlay loop muted>
        <source src={car_driving} type='video/mp4' />
      </video>
      <div className="content">
        <img src="logo.png" alt="logo" className="img-fluid" />
        <button className="top-button" onClick={showMenu}>Menu</button>
        <h1>Experience Tesba</h1>
        <p>Schedule a demo today</p>
        <button className="btn btn-outline-light btn-transparent">Demo</button>
      </div>
      <div>
        {menu ? <SideBar/> : <></>}
      </div>
    </div>
  );
};

export default FirstVehicle;
