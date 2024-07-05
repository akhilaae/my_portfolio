import React from 'react'
import { getImageUrl } from '../../utils.js'
import styles from './Hero.module.css'
export const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi! I am Akhila</h1>
        <p className={styles.description}>Passionate about Technology and Web-Development with a strong enthusiasm for creating engaging user experiences. Unwavering commitment to continuous skill enhancement and learning.</p>
        <a className={styles.contactBtn} href="mailto:akhilap0307@gmail.com">Contact me</a>
    </div>
    <img className={styles.heroImg}src={getImageUrl("profile.png")} alt="profile" />
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
  </section>
}
