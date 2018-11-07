import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import logo from '../assets/logo-white.png';
import theme from '../assets/theme.png';
import styles from './Hero.module.css';

const Hero = () => (
  <div id="hero" className={styles.hero}>
    <section className={styles.heroContainer}>
      <div className={styles.heroNav}>
        <div className={styles.navLeft}>
          <AnchorLink className={styles.heroLink} href="#hero">Home</AnchorLink>
          <AnchorLink className={styles.heroLink} href="#tracks">Tracks</AnchorLink>
          {/* <AnchorLink className={styles.heroLink} href="#schedule">Schedule</AnchorLink> */}
        </div>
        <div className={styles.heroLogo}>
          <a href="https://www.slohacks.com">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className={styles.navRight}>
          <AnchorLink className={styles.heroLink} href="#faq">FAQ</AnchorLink>
          <AnchorLink className={styles.heroLink} href="#sponsors">Sponsors</AnchorLink>
        </div>
      </div>
      <div className={styles.heroContent}>
        <div className={styles.heroTheme}>
          <img src={theme} alt={theme} />
        </div>
        <div className={styles.heroButtonContainer}>
          <a rel="noopener noreferrer" href="http://eepurl.com/c0M_rj" target="_blank">
            <button className={styles.heroButton}>Join mailing list!</button>
          </a>
        </div>
      </div>
    </section>
    <a className={styles.banner} rel="noopener noreferrer" href="https://mlh.io/seasons/na-2019/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2019-season&utm_content=black" target="_blank">
      <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-black.svg" alt="Major League Hacking 2019 Hackathon Season" />
    </a>
  </div>
);

export default Hero;
