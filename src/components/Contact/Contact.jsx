import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Contact.module.css'
export const Contact = () => {
  return <section className={styles.container} id='contact'>
    <div className={styles.description}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
    </div>
    <div className={styles.socialBox}>
        <ul className={styles.socials}>
        <li className={styles.socialItem}>
                <img src={getImageUrl("mail.png")} alt="mail" />
                <a href="mailto:akhilap0307@gmail.com">akhilap0307@gmail.com</a>
            </li>
            <li className={styles.socialItem}>
                <img src={getImageUrl("github.png")} alt="github" />
                <a href="https://github.com/akhilaae">akhilaae</a>
            </li>
            <li className={styles.socialItem}>
                <img src={getImageUrl("linked.png")} alt="linkedin" />
                <a href="https://www.linkedin.com/in/akhila-padmanabhan-335521222/">Akhila Padmanabhan</a>
            </li>
        </ul>
    </div>
  </section>
}
