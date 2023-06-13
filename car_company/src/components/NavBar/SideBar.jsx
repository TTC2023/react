import React from 'react';
import './SideBar.css';

const SideBar = ({ setMenu }) => {
    const cancelMenu = () => {
        setMenu(false);
    };

    return (
        <div className='sideBar'>
            <button onClick={cancelMenu} className='close'>&times;</button>
        </div>
    );
};

export default SideBar;




