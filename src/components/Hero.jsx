import React from 'react';
import Header from '../components/common/Header';
import Button from '../components/common/Button';
import logo from '../assets/logo-white.png';
import styles from './Hero.module.css';

const Hero = () => (
  <div className={styles.hero}>
    <section className={styles.heroContainer}>
      <div className={styles.heroNav}>
        <a className={styles.heroLink} href="#">Home</a>
        <a className={styles.heroLink} href="#">Schedule</a>
        <a className={styles.heroLogo} href="#">
          <img src={logo} alt="logo" />
        </a>
        <a className={styles.heroLink} href="#">Sponsors</a>
        <a className={styles.heroLink} href="#">FAQ</a>
      </div>
      <div className={styles.heroContent}>
        <div className={styles.heroTheme}>
          <Header fontSize="5rem" color="white">Small Town</Header>
          <Header fontSize="6rem" color="white">Big Ideas</Header>
        </div>
        <div className={styles.heroButtonContainer}>
          <Button className={styles.heroButton} color="#FFF">Join our mailing list</Button>
        </div>
      </div>
    </section>
  </div>
);

export default Hero;

