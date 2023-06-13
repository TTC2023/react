import React from 'react';
import './SideBar.css';

const SideBar = ({ setMenu }) => {
    const closeMenu = () => {
        setMenu(false);
    };

    return (
        <div className='sideBar'>
            <button onClick={closeMenu} className='close'>&times;</button>
            <ul className='menuLinks'>
                <a href='/'>Model A</a>
                <a href='/'>Model B</a>
                <a href='/'>Model 5</a>
                <a href='/'>Model 6</a>
                <a href='/'>Model C</a>
                <a href='/'>Model D</a>
                <a href='/'>Model Y</a>
                <a href='/'>Model E</a>
                <a href='/'>Model F</a>
                <a href='/'>Model G</a>
                <a href='/'>Model H</a>
                <a href='/'>Model I</a>
                <a href='/'>Model J</a>
                <a href='/'>Model K</a>
                <a href='/'>Model L</a>
                <a href='/'>Model M</a>
                <a href='/'>Model N</a>
                <a href='/'>Model O</a>
            </ul>
        </div>
    );
};

export default SideBar;




