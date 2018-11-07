import React from 'react';
import styles from './History.module.css';

const History = () => (
  <div className={styles.history}>
    <section className={styles.historyContainer}>
      <div className={styles.historyHeader}>
        <h1>We Are SLO Hacks.</h1>
      </div>
      <div className={styles.historyText}>
        <p>
          Founded in 2017, SLO Hacks is an entirely student-run organization. We
          host multiple hackathon events year-round and we pride ourselves on
          giving students the opportunity to bring ideas to life with collaboration,
          technology, and hacking!
        </p>
      </div>
      <div className={styles.historyButtonContainer}>
        <a rel="noopener noreferrer" href="https://slohacks.com/club" target="_blank">
          <button className={styles.historyButton}>Learn More</button>
        </a>
      </div>
    </section>
  </div>
);

export default History;
