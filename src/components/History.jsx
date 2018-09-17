import React from 'react';
import Header from '../components/common/Header';
import Button from '../components/common/Button';
import TextSection from '../components/common/TextSection';
import styles from './History.module.css';

const History = () => (
  <div className={styles.history}>
    <section className={styles.historyContainer}>
      <div className={styles.historyHeader}>
        <Header fontSize="4.5rem" color="#67778e">We Are SLO <br />Hacks.</Header>
        <Button fontSize="1.8rem" color="#67778e" borderRadius="1.25em">Learn More</Button>
      </div>
      <div className={styles.historyText}>
        <TextSection fontSize="1.3rem"color="#67778e">
            Founded in 2017, SLO Hacks is an entirely student-run organization. We
            host multiple hackathon events year-round and we pride ourselves on
            giving students the opportunity to bring ideas to life with collaboration,
            technology, and hacking!
        </TextSection>
      </div>
    </section>
  </div>
);

export default History;
