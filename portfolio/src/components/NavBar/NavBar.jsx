import React from 'react'
import { useState } from 'react'
import styles from './NavBar.module.css'
import { FaFortAwesomeAlt } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { BsFillClipboardDataFill } from "react-icons/bs";
import { BsFillEnvelopeCheckFill } from "react-icons/bs";
import { BsFillHouseFill } from "react-icons/bs";


const NavBar = ({setSection}) => {

    const [action, setAction] = useState('1')

    const handleButton = (num) => {
        setSection(num === 1 ? 'intro' : num === 2 ? 'experience' : num === 3 ? 'projects' : 'contact');
        setAction(num);
    }

    return (
        <div>
            <div className={styles.fort}><FaFortAwesomeAlt size={50}/></div>
            <div className='top-nav'>
                <button onClick={(e) => handleButton(1)} className={action === 1 ? styles.action : 'home' }><BsFillHouseFill size={30}/></button>
                <p>|</p>
                <button onClick={(e) => handleButton(2)} className={action === 2 ? styles.action : 'experience' }><BsFillBriefcaseFill size={30}/></button>
                <p>|</p>
                <button onClick={(e) => handleButton(3)} className={action === 3 ? styles.action : 'projects' }><BsFillClipboardDataFill size={28}/></button>
                <p>|</p>
                <button onClick={(e) => handleButton(4)} className={action === 4 ? styles.action : 'contact' }><BsFillEnvelopeCheckFill size={30}/></button>
            </div>
        </div>
    )
}

export default NavBar