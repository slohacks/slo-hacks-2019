import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';
import SocialMedia from './SocialMedia';
import FooterText from './FooterText';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <SocialMedia />
      <div className={styles.footer__text}>
        <p>
          Made with <span className={styles.footer__heart}>&hearts;</span> by the SLO Hacks Team
          <br/><span className={styles.footer__copyright}>&copy; SLO Hacks 2018</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
