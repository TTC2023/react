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
                <a href='/model'>Model A</a>
                <a href='/model'>Model B</a>
                <a href='/model'>Model 5</a>
                <a href='/model'>Model 6</a>
                <a href='/model'>Model C</a>
                <a href='/model'>Model D</a>
                <a href='/model'>Model Y</a>
                <a href='/model'>Model E</a>
                <a href='/model'>Model F</a>
                <a href='/model'>Model G</a>
                <a href='/model'>Model H</a>
                <a href='/model'>Model I</a>
                <a href='/model'>Model J</a>
                <a href='/model'>Model K</a>
                <a href='/model'>Model L</a>
                <a href='/model'>Model M</a>
                <a href='/model'>Model N</a>
                <a href='/model'>Model O</a>
            </ul>
        </div>
    );
};

export default SideBar;




