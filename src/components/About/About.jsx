import React from 'react'
import { getImageUrl } from '../../utils.js'
import styles from './About.module.css'
export const About = () => {
  return <section className={styles.container} id='about'>
    <h2 className={styles.title}>ABOUT</h2>
    <div className={styles.content}>
        <img className={styles.aboutImg} src={getImageUrl("about.png")} alt='about'></img>
        <ul className={styles.aboutList}>
            <li className={styles.aboutItem}>
                <img className={styles.aboutItemimg} src={getImageUrl("cursor.png")} alt="cursor" />
                <div className={styles.aboutItemtext}>
                    <h3 className={styles.aboutItemtitle}>Frontend Developer</h3>
                    <p className={styles.aboutItemdescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum alias laboriosam recusandae eaque, delectus</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img className={styles.aboutItemimg} src={getImageUrl("about2.png")} alt="backend" />
                <div className={styles.aboutItemtext}>
                    <h3 className={styles.aboutItemtitle}>Backend Developer</h3>
                    <p className={styles.aboutItemdescription}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem eum quas tempora! Quis ad odio a</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img className={styles.aboutItemimg} src={getImageUrl("about3.png")} alt="uiux" />
                <div className={styles.aboutItemtext}>
                    <h3 className={styles.aboutItemtitle}>Software Developer</h3>
                    <p className={styles.aboutItemdescription}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem eum quas tempora! Quis ad odio a</p>
                </div>
            </li>
        </ul>
    </div>
  </section>
}
