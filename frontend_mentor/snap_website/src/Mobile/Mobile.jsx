import React from 'react';
import styles from './Mobile.module.css';
import logo from '../assets/logo.svg';
import close from '../assets/icon-close-menu.svg'
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import worker from '../assets/image-hero-mobile.png'
import audiophile from '../assets/client-audiophile.svg';
import databiz from '../assets/client-databiz.svg';
import maker from '../assets/client-maker.svg';
import meet from '../assets/client-meet.svg';


const Mobile = () => {
    const [menu, setMenu] = useState(true)

    const toggleMenu = () => {
        setMenu(!menu)
    }

    return (
        <div>
            <div className={styles.nav}>
                <img src={logo} alt='logo'></img>
                {menu ?
                    <GiHamburgerMenu size={30} onClick={toggleMenu} className={styles.menu} />
                    :
                    <div className={styles.sideBar}>
                        <img className={styles.menu} onClick={toggleMenu} src={close} alt='close'></img>
                        <div className={styles.links}>
                            <p>History</p>
                            <p>Our Team</p>
                            <p>Blog</p>
                        </div>
                    </div>}
            </div>
            <div>
                <img className={styles.worker} src={worker} alt="worker" />
            </div>
            <div className={styles.content}>
                <h1>Make remote work</h1>
                <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                <button>Learn more</button>
            </div>
            <div className={styles.companies}>
                <img src={databiz} alt="databiz" />
                <img src={audiophile} alt="audiophile" />
                <img src={meet} alt="meet" />
                <img src={maker} alt="maker" />
            </div>
        </div>
    )
}

export default Mobile;

