import React from 'react';
import Header from '../components/common/Header';
import Button from '../components/common/Button';
import SponsorLogos from '../components/SponsorLogos';
import styles from './Sponsor.module.css';

const Sponsor = () => (
  <div className={styles.sponsor}>
    <Header fontSize="4.5rem" color="#FFF">Sponsors</Header>
    <section className={styles.sponsorContainer}>
      <div className={styles.sponsorContent}>
        <SponsorLogos />
      </div>
      <div className={styles.sponsorButtonWrapper}>
        <Button className={styles.sponsorButton} color="#FFF">Interested in supporting us?</Button>
      </div>
    </section>
  </div>
);

export default Sponsor;

