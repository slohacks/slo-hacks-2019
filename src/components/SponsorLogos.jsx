import React from 'react';
import godaddy from '../assets/logos/godaddy.svg';
import balsamiq from '../assets/logos/balsamiq.svg';
import gcp from '../assets/logos/gcp.svg';
import micro from '../assets/logos/microvu.svg';
import viasat from '../assets/logos/viasat.png';
import splunk from '../assets/logos/splunk.png';
import sketch from '../assets/logos/sketch.svg';
import github from '../assets/logos/github.png';
import td from '../assets/logos/tech.png';
import wolfram from '../assets/logos/wolfram.svg';
import mule from '../assets/logos/stickermule.svg';
import hathway from '../assets/logos/hathway.svg';
import calpolycs from '../assets/logos/calpolycs.png';
import cpe from '../assets/logos/cpe.png';
import styles from './SponsorLogos.module.css';

const SponsorLogos = () => (
  <div className={styles.sponsorLogos}>
    <div className={styles.bigSponsors}>
      <img className={styles.bigLogo} src={viasat} alt="viasat" />
      <img className={styles.bigLogo} src={micro} alt="micro" />
      <img className={styles.bigLogo} src={godaddy} alt="godaddy" />
    </div>
    <div className={styles.smallLogos}>
      <img className={styles.silver} src={gcp} alt="GCP" />
      <img className={styles.silver} src={hathway} alt="Hathway" />
      <img className={styles.silver} src={splunk} alt="Splunk" />
      <img className={styles.silver} src={github} alt="Github" />
      <img className={styles.silver} src={balsamiq} alt="Balsamiq" />
      <img className={styles.silver} src={wolfram} alt="Wolfram" />
      <img className={styles.silver} src={sketch} alt="Sketch" />
      <img className={styles.silver} src={td} alt="TechDomain" />
      <img className={styles.silver} src={mule} alt="StickerMule" />
      <img className={styles.silver} src={calpolycs} alt="Cal Poly CS" />
      <img className={styles.silver} src={cpe} alt="Cal Poly CPE" />
    </div>
  </div>
);

export default SponsorLogos;

