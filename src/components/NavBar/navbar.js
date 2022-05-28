import React from 'react';
import styles from './navbar.module.css'
import { Link } from "react-router-dom";

function NavBar(){

    return (
        <header>
            <div className={styles.menu}>
                <img className={styles.imgNavbar} src={require('./PLIS.png')} alt=""/>

                <nav className={styles.navbar}>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                    </ul>
                </nav>
                
            </div>
        </header>
    );
}

export default NavBar;