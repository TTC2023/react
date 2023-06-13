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
    <div>
      {menu && <SideBar setMenu={setMenu} />}
      <div className={menu ? 'blur' :'App'}>
        <FirstVehicle menu={menu} setMenu={setMenu} />
        <SecondVehicle/>
      </div>
    </div>
  );
}

export default App;

