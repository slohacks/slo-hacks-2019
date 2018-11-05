import React from 'react';
import Button from '../components/common/Button';
import logo from '../assets/logo-white.png';
import styles from './Hero.module.css';

const Hero = () => (
  <div className={styles.hero}>
    <section className={styles.heroContainer}>
      <div className={styles.heroNav}>
        <div className={styles.navLeft}>
          <a className={styles.heroLink} href="#">Home</a>
          <a className={styles.heroLink} href="#">Schedule</a>
        </div>
        <div className={styles.heroLogo}>
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className={styles.navRight}>
          <a className={styles.heroLink} href="#">Sponsors</a>
          <a className={styles.heroLink} href="#">FAQ</a>
        </div>
      </div>
      <div className={styles.heroContent}>
        <div className={styles.heroTheme}>
          <h1>Small Town<br />Big Ideas</h1>
        </div>
        <div className={styles.heroButtonContainer}>
          <Button className={styles.heroButton} color="#FFF">Join our mailing list</Button>
        </div>
      </div>
    </section>
  </div>
);

export default Hero;
