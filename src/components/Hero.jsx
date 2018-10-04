import React from 'react';
import Navigation from '../components/common/Navigation';
import NavigationItem from '../components/common/NavigationItem';
import Button from '../components/common/Button';
import logo from '../assets/logo-white.png';
import theme from '../assets/theme.png';
import styles from './Hero.module.css';

const Hero = () => (
  <div className={styles.hero}>
    <section className={styles.heroContainer}>
      <div className={styles.heroNav}>
        <Navigation>
          <NavigationItem url="#" linkText="Home" />
          <NavigationItem url="#" linkText="About" />
          <img className={styles.logo} src={logo} alt="logo" />
          <NavigationItem url="#" linkText="FAQ" />
          <NavigationItem url="#" linkText="Sponsor" />
        </Navigation>
      </div>
      <div className={styles.heroContent}>
        <div className={styles.heroTheme}>
          <img src={theme} alt="theme" />
        </div>
        <div className={styles.heroButtonContainer}>
          <Button className={styles.heroButton} color="#FFF">Join our mailing list</Button>
        </div>
      </div>
    </section>
  </div>
);

export default Hero;

