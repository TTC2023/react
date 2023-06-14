import React, { useState, useEffect } from 'react';
import './App.css';
import HomePage from './components/HomePage/HomePage'
import DemoPage from './components/DemoPage/DemoPage'
import SideBar from './components/NavBar/SideBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    console.log(menu);
  }, [menu]);

  return (
    <BrowserRouter>
      {menu && <SideBar setMenu={setMenu} />}
      <div className={menu ? 'blur' : 'App'}>
        <Routes>
          <Route path="/" element={<HomePage className='vehicle' menu={menu} setMenu={setMenu} />} />
          <Route path="/model" element={<DemoPage className='vehicle' menu={menu} setMenu={setMenu} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


