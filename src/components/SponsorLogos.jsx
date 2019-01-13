import React from 'react';
import f5 from '../assets/logos/f5-logo.png';
import wdtemp from '../assets/logos/wd-temp.svg';
import itrade from '../assets/logos/itrade.svg';
import viasat from '../assets/logos/viasat.png';
import godaddy from '../assets/logos/godaddy.svg';
import micro from '../assets/logos/microvu.svg';
import platinum from '../assets/logos/platinum.svg';
import gcp from '../assets/logos/gcp.svg';
import splunk from '../assets/logos/splunk.png';
import github from '../assets/logos/github.png';
import hathway from '../assets/logos/hathway.svg';
import balsamiq from '../assets/logos/balsamiq.svg';
import linode from '../assets/logos/linode.png';
import flume from '../assets/logos/flume.svg';
import td from '../assets/logos/tech.png';
import corsair from '../assets/logos/corsair.png';
import wolfram from '../assets/logos/wolfram.svg';
import sketch from '../assets/logos/sketch.svg';
import mule from '../assets/logos/stickermule.png';
import calpolycs from '../assets/logos/calpolycs.png';
import cpe from '../assets/logos/cpe.png';
import styles from './SponsorLogos.module.css';

const SponsorLogos = () => (
  <div className={styles.sponsorLogos}>
    <div className={styles.topSponsors}>
      <a className={`${styles.topLogo} ${styles.f5}`} href="" target="_blank" rel="noopener noreferrer">
        <img className={styles.topLogo} src={f5} alt="F5 Networks" />
      </a>
      <a className={`${styles.topLogo} ${styles.wdtemp}`} href="" target="_blank" rel="noopener noreferrer">
        <img className={styles.topLogo} src={wdtemp} alt="Western Digital" />
      </a>
      <a className={`${styles.topLogo} ${styles.itrade}`} href="" target="_blank" rel="noopener noreferrer">
        <img className={styles.topLogo} src={itrade} alt="itradenetwork" />
      </a>
    </div>
    <div className={styles.medSponsors}>
      <a className={`${styles.medLogo} ${styles.viasat}`} href="https://www.viasat.com/" target="_blank" rel="noopener noreferrer">
        <img className={styles.medLogo} src={viasat} alt="viasat" />
      </a>
      <a className={`${styles.medLogo} ${styles.godaddy}`} href="https://www.godaddy.com/" target="_blank" rel="noopener noreferrer">
        <img className={styles.medLogo} src={godaddy} alt="godaddy" />
      </a>
      <a className={`${styles.medLogo} ${styles.micro}`} href="https://www.microvu.com/" target="_blank" rel="noopener noreferrer">
        <img className={styles.medLogo} src={micro} alt="micro" />
      </a>
      <a className={`${styles.medLogo} ${styles.platinum}`} href="https://www.platinumperformance.com/horses" target="_blank" rel="noopener noreferrer">
        <img className={styles.medLogo} src={platinum} alt="Platinum Performance" />
      </a>
    </div>
    <div className={styles.smallLogos}>
      <a href="https://cloud.google.com/" target="_blank" rel="noopener noreferrer">
        <img className={styles.silver} src={gcp} alt="gcp" />
      </a>
      <a href="https://www.splunk.com/" target="_blank" rel="noopener noreferrer">
        <img className={styles.silver} src={splunk} alt="splunk" />
      </a>
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
        <img className={styles.silver} src={github} alt="github" />
      </a>
      <a href="https://wearehathway.com/" target="_blank" rel="noopener noreferrer">
        <img className={styles.silver} src={hathway} alt="hathway" />
      </a>
      <a href="https://balsamiq.com/" target="_blank" rel="noopener noreferrer">
        <img className={styles.silver} src={balsamiq} alt="balsamiq" />
      </a>
      <a href="https://www.linode.com/" target="_blank" rel="noopener noreferrer">
        <img className={styles.silver} src={linode} alt="linode" />
      </a>
      <a href="https://www.flumetech.com/" target="_blank" rel="noopener noreferrer">
        <img className={styles.silver} src={flume} alt="flume" />
      </a>
      <a href="https://get.tech/" target="_blank" rel="noopener noreferrer">
        <img className={styles.silver} src={td} alt="techdomain" />
      </a>
      <a href="https://www.corsair.com/us/en/" target="_blank" rel="noopener noreferrer">
        <img className={styles.silver} src={corsair} alt="corsair" />
      </a>
      <a href="https://www.wolfram.com/" target="_blank" rel="noopener noreferrer">
        <img className={styles.silver} src={wolfram} alt="wolfram" />
      </a>
      <a href="https://www.sketchapp.com/" target="_blank" rel="noopener noreferrer">
        <img className={styles.silver} src={sketch} alt="sketch" />
      </a>
      <a href="https://www.stickermule.com/" target="_blank" rel="noopener noreferrer">
        <img className={styles.silver} src={mule} alt="stickermule" />
      </a>
      <a href="https://csc.calpoly.edu/" target="_blank" rel="noopener noreferrer">
        <img className={styles.silver} src={calpolycs} alt="csc" />
      </a>
      <a href="https://cpe.calpoly.edu/" target="_blank" rel="noopener noreferrer">
        <img className={styles.silver} src={cpe} alt="cpe" />
      </a>
    </div>
  </div>
);

export default SponsorLogos;
