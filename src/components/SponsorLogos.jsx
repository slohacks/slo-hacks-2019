import React from 'react';
import f5 from '../assets/logos/f5-logo.png';
import wdtemp from '../assets/logos/wd-temp.svg';
import itrade from '../assets/logos/itrade.png';
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
      <a className={styles.topLogo} href="https://www.f5.com/" target="_blank" rel="noopener noreferrer">
        <img src={f5} alt="F5 Networks" />
      </a>
      <a className={styles.topLogo} href="https://www.westerndigital.com/" target="_blank" rel="noopener noreferrer">
        <img src={wdtemp} alt="Western Digital" />
      </a>
      <a className={styles.topLogo} href="https://www.itradenetwork.com/" target="_blank" rel="noopener noreferrer">
        <img src={itrade} alt="iTradeNetwork" />
      </a>
    </div>
    <div className={styles.medSponsors}>
      <a className={styles.medLogo} href="https://www.viasat.com/" target="_blank" rel="noopener noreferrer">
        <img src={viasat} alt="Viasat" />
      </a>
      <a className={styles.medLogo} href="https://www.godaddy.com/" target="_blank" rel="noopener noreferrer">
        <img src={godaddy} alt="GoDaddy" />
      </a>
      <a className={styles.medLogo} href="https://www.microvu.com/" target="_blank" rel="noopener noreferrer">
        <img src={micro} alt="Micro Vu" />
      </a>
      <a className={styles.medLogo} href="https://www.platinumperformance.com/horses" target="_blank" rel="noopener noreferrer">
        <img src={platinum} alt="Platinum Performance" />
      </a>
    </div>
    <div className={styles.smallLogos}>
      <a className={styles.silver} href="https://cloud.google.com/" target="_blank" rel="noopener noreferrer">
        <img src={gcp} alt="Google Cloud Platform" />
      </a>
      <a className={styles.silver} href="https://www.splunk.com/" target="_blank" rel="noopener noreferrer">
        <img src={splunk} alt="Splunk" />
      </a>
      <a className={styles.silver} href="https://github.com/" target="_blank" rel="noopener noreferrer">
        <img src={github} alt="GitHub" />
      </a>
      <a className={styles.silver} href="https://wearehathway.com/" target="_blank" rel="noopener noreferrer">
        <img src={hathway} alt="Hathway" />
      </a>
    </div>
    <div className={styles.smallLogos}>
      <a className={styles.silver} href="https://balsamiq.com/" target="_blank" rel="noopener noreferrer">
        <img src={balsamiq} alt="Balsamiq" />
      </a>
      <a className={styles.silver} href="https://www.linode.com/" target="_blank" rel="noopener noreferrer">
        <img src={linode} alt="Linode" />
      </a>
      <a className={styles.silver} href="https://www.flumetech.com/" target="_blank" rel="noopener noreferrer">
        <img src={flume} alt="Flume" />
      </a>
      <a className={styles.silver} href="https://get.tech/" target="_blank" rel="noopener noreferrer">
        <img src={td} alt=".Tech" />
      </a>
    </div>
    <div className={styles.smallLogos}>
      <a className={styles.silver} href="https://www.corsair.com/us/en/" target="_blank" rel="noopener noreferrer">
        <img src={corsair} alt="Corsair" />
      </a>
      <a className={styles.silver} href="https://www.wolfram.com/" target="_blank" rel="noopener noreferrer">
        <img src={wolfram} alt="Wolfram Language" />
      </a>
      <a className={styles.silver} href="https://www.sketchapp.com/" target="_blank" rel="noopener noreferrer">
        <img src={sketch} alt="Sketch" />
      </a>
      <a className={styles.silver} href="https://www.stickermule.com/" target="_blank" rel="noopener noreferrer">
        <img src={mule} alt="Stickermule" />
      </a>
    </div>
    <div className={`${styles.smallLogos}`}>
      <div className={styles.silver} />
      <a className={styles.silver} href="https://csc.calpoly.edu/" target="_blank" rel="noopener noreferrer">
        <img src={calpolycs} alt="Cal Poly Computer Science" />
      </a>
      <a className={styles.silver} href="https://cpe.calpoly.edu/" target="_blank" rel="noopener noreferrer">
        <img src={cpe} alt="Cal Poly Computer Engineering" />
      </a>
      <div className={styles.silver} />
    </div>
  </div>
);

export default SponsorLogos;
