import React from 'react';
import itrade from '../assets/logos/itrade.svg';
import viasat from '../assets/logos/viasat.png';
import godaddy from '../assets/logos/godaddy.svg';
import micro from '../assets/logos/microvu.svg';
import gcp from '../assets/logos/gcp.svg';
import splunk from '../assets/logos/splunk.png';
import github from '../assets/logos/github.png';
import hathway from '../assets/logos/hathway.svg';
import balsamiq from '../assets/logos/balsamiq.svg';
import linode from '../assets/logos/linode.png';
import flume from '../assets/logos/flume.svg';
import td from '../assets/logos/tech.png';
import wolfram from '../assets/logos/wolfram.svg';
import sketch from '../assets/logos/sketch.svg';
import mule from '../assets/logos/stickermule.png';
import calpolycs from '../assets/logos/calpolycs.png';
import cpe from '../assets/logos/cpe.png';
import styles from './SponsorLogos.module.css';

const SponsorLogos = () => (
  <div className={styles.sponsorLogos}>
    <div className={styles.topSponsors}>
      <img className={`${styles.topLogo} ${styles.itrade}`} src={itrade} alt="itradenetwork" />
    </div>
    <div className={styles.medSponsors}>
      <img className={`${styles.medLogo} ${styles.viasat}`} src={viasat} alt="viasat" />
      <img className={`${styles.medLogo} ${styles.godaddy}`} src={godaddy} alt="godaddy" />
      <img className={`${styles.medLogo} ${styles.micro}`} src={micro} alt="micro" />
    </div>
    <div className={styles.smallLogos}>
      <img className={styles.silver} src={gcp} alt="gcp" />
      <img className={styles.silver} src={splunk} alt="splunk" />
      <img className={styles.silver} src={github} alt="github" />
      <img className={styles.silver} src={hathway} alt="hathway" />
      <img className={styles.silver} src={balsamiq} alt="balsamiq" />
      <img className={styles.silver} src={linode} alt="linode" />
      <img className={styles.silver} src={flume} alt="flume" />
      <img className={styles.silver} src={td} alt="techdomain" />
      <img className={styles.silver} src={wolfram} alt="wolfram" />
      <img className={styles.silver} src={sketch} alt="sketch" />
      <img className={styles.silver} src={mule} alt="stickermule" />
      <img className={styles.silver} src={calpolycs} alt="csc" />
      <img className={styles.silver} src={cpe} alt="cpe" />
    </div>
  </div>
);

export default SponsorLogos;

