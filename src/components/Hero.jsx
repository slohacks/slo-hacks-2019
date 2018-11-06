import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Button from '../components/common/Button';
import logo from '../assets/logo-white.png';
import theme from '../assets/theme.png';
import styles from './Hero.module.css';

const Hero = () => (
  <div id="hero" className={styles.hero}>
    <section className={styles.heroContainer}>
      <div className={styles.heroNav}>
        <div className={styles.navLeft}>
          <AnchorLink className={styles.heroLink} href="#hero">Home</AnchorLink>
          <AnchorLink className={styles.heroLink} href="#schedule">Schedule</AnchorLink>
        </div>
        <div className={styles.heroLogo}>
          <a href="https://www.slohacks.com">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className={styles.navRight}>
          <AnchorLink className={styles.heroLink} href="#sponsors">Sponsors</AnchorLink>
          <AnchorLink className={styles.heroLink} href="#faq">FAQ</AnchorLink>
        </div>
      </div>
      <div className={styles.heroContent}>
        <div className={styles.heroTheme}>
          <img src={theme} alt={theme} />
        </div>
        <div className={styles.heroButtonContainer}>
          <a rel="noopener noreferrer" href="http://eepurl.com/c0M_rj" target="_blank">
            <Button className={styles.heroButton} color="#FFF">Join mailing list!</Button>
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default Hero;
