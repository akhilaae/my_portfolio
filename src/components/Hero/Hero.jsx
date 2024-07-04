import React from 'react'
import { getImageUrl } from '../../utils.js'
import styles from './Hero.module.css'
export const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi! I am Akhila</h1>
        <p className={styles.description}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem hic voluptatum corporis ad ex? Possimus placeat impedit, corporis consectetur</p>
        <a className={styles.contactBtn} href="mailto:akhilap0307@gmail.com">Contact me</a>
    </div>
    <img className={styles.heroImg}src={getImageUrl("profile.png")} alt="profile" />
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
  </section>
}
