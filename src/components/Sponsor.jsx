import React from 'react';
import SponsorLogos from '../components/SponsorLogos';
import styles from './Sponsor.module.css';
import sponsorTransition from '../assets/sponsorBkgd.png';
import packet from '../assets/slo-hacks-sponsorship-packet.pdf';

const Sponsor = () => (
  <div className={styles.sponsor}>
    <section className={styles.sponsorContainer}>
      <h1 id="sponsors" className={styles.sponsorHeader}>Sponsors</h1>
      <div className={styles.sponsorContent}>
        <SponsorLogos />
      </div>
      <div className={styles.sponsorButtonWrapper}>
        <a rel="noopener noreferrer" href={packet} target="_blank">
          <button className={styles.sponsorButton} color="#FFF">Support us</button>
        </a>
      </div>
    </section>
    <img className={styles.sponsorTransition_image} src={sponsorTransition} alt="sponsorTransition" />
  </div>
);

export default Sponsor;

