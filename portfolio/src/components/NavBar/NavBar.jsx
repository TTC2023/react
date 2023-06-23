import React from 'react'
import { useState } from 'react'
import styles from './NavBar.module.css'
import { FaFortAwesomeAlt } from "react-icons/fa";

const NavBar = ({setSection}) => {

    const [action, setAction] = useState('1')

    const handleButton = (num) => {
        setSection(num === 1 ? 'intro' : num === 2 ? 'experience' : num === 3 ? 'projects' : 'contact');
        setAction(num);
    }

    return (
        <div>
            <div className={styles.fort}><FaFortAwesomeAlt size={40}/></div>
            <div className='top-nav'>
                <button onClick={(e) => handleButton(1)} className={action === 1 ? styles.action : 'home' }>Home</button>
                <p>|</p>
                <button onClick={(e) => handleButton(2)} className={action === 2 ? styles.action : 'experience' }>Experience</button>
                <p>|</p>
                <button onClick={(e) => handleButton(3)} className={action === 3 ? styles.action : 'projects' }>Projects</button>
                <p>|</p>
                <button onClick={(e) => handleButton(4)} className={action === 4 ? styles.action : 'contact' }>Let's Talk!</button>
            </div>
        </div>
    )
}

export default NavBar