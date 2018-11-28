import React from 'react';
import godaddy from '../assets/logos/godaddy.svg';
import balsamiq from '../assets/logos/balsamiq.svg';
import gcp from '../assets/logos/gcp.svg';
import micro from '../assets/logos/microvu.svg';
import viasat from '../assets/logos/viasat.png';
import sketch from '../assets/logos/sketch.svg';
import td from '../assets/logos/tech.png';
import wolfram from '../assets/logos/wolfram.svg';
import styles from './SponsorLogos.module.css';

const SponsorLogos = () => (
  <div className={styles.sponsorLogos}>
    <img className={styles.silver} src={godaddy} alt="godaddy" />
    <img className={styles.silver} src={gcp} alt="gcp" />
    <img className={styles.silver} src={balsamiq} alt="balsamiq" />
    <img className={styles.silver} src={micro} alt="micro" />
    <img className={styles.silver} src={viasat} alt="viasat" />
    <img className={styles.silver} src={sketch} alt="sketch" />
    <img className={styles.silver} src={td} alt="techdomain" />
    <img className={styles.silver} src={wolfram} alt="wolfram" />
  </div>
);

export default SponsorLogos;

