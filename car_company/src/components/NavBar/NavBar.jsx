import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className='fixed-top'>
            <p className="top-nav">New models blah and zah now in Stock!</p>
            <div className="bottom-nav">
                <img src="logo.png" alt="logo" className="img-fluid" />
                <button className="top-button">Menu</button>
            </div>
        </div>
    );
};

export default NavBar;


