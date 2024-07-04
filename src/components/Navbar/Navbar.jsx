import React,{useState} from 'react'
import styles from "./Navbar.module.css"
import {getImageUrl} from "../../utils.js";

export const Navbar = () => { 
    const [menuOpen, setMenuOpen] = useState(false);
    return <nav className={styles.navbar}>
        <a className={styles.title} href="/">Portfolio</a>
        <div className={styles.menu}>
            <img className={styles.menuBtn} src={menuOpen? getImageUrl("menu_btn.png"): getImageUrl("menu_btn.png")} alt="btn" onClick={()=>setMenuOpen(!menuOpen)}/>
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={()=>setMenuOpen(false)}>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
  </nav>
}
