import React from 'react';
import godaddy from '../assets/logos/godaddy.svg';
import balsamiq from '../assets/logos/balsamiq.svg';
import gcp from '../assets/logos/gcp.svg';
import micro from '../assets/logos/microvu.svg';
import viasat from '../assets/logos/viasat.png';
import splunk from '../assets/logos/splunk.png';
import sketch from '../assets/logos/sketch.svg';
import td from '../assets/logos/tech.png';
import wolfram from '../assets/logos/wolfram.svg';
import mule from '../assets/logos/stickermule.svg';
import hathway from '../assets/logos/hathway.svg';
import calpolycs from '../assets/logos/calpolycs.png';
import styles from './SponsorLogos.module.css';

const SponsorLogos = () => (
  <div className={styles.sponsorLogos}>
    <div className={styles.bigSponsors}>
      <img className={styles.bigLogo} src={viasat} alt="viasat" />
      <img className={styles.bigLogo} src={micro} alt="micro" />
      <img className={styles.bigLogo} src={godaddy} alt="godaddy" />
    </div>
    <div className={styles.smallLogos}>
      <img className={styles.silver} src={gcp} alt="gcp" />
      <img className={styles.silver} src={hathway} alt="hathway" />
      <img className={styles.silver} src={splunk} alt="splunk" />
      <img className={styles.silver} src={balsamiq} alt="balsamiq" />
      <img className={styles.silver} src={wolfram} alt="wolfram" />
      <img className={styles.silver} src={sketch} alt="sketch" />
      <img className={styles.silver} src={td} alt="techdomain" />
      <img className={styles.silver} src={mule} alt="stickermule" />
      <img className={styles.silver} src={calpolycs} alt="calpoly" />
    </div>
  </div>
);

export default SponsorLogos;

