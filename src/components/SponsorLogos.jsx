import React from 'react';
import godaddy from '../assets/logos/godaddy.svg';
import balsamiq from '../assets/logos/balsamiq.svg';
import gcp from '../assets/logos/gcp.svg';
import styles from './SponsorLogos.module.css';

const SponsorLogos = () => (
  <div className={styles.sponsorLogos}>
    <img className={styles.silver} src={godaddy} alt="godaddy" />
    <img className={styles.silver} src={gcp} alt="gcp" />
    <img className={styles.silver} src={balsamiq} alt="balsamiq" />
  </div>
);

export default SponsorLogos;

