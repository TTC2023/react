import React, { useState, useEffect } from 'react';
import './App.css';
import FirstVehicle from './components/FirstVehicle/FirstVehicle';
import SecondVehicle from './components/SecondVehicle/SecondVehicle';
import SideBar from './components/NavBar/SideBar';

function App() {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    console.log(menu);
  }, [menu]);

  return (
    <div className='App'>
      {menu && <SideBar setMenu={setMenu} />}
      <FirstVehicle setMenu={setMenu} />
      <SecondVehicle />
    </div>
  );
}

export default App;

