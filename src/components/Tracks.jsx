import React from 'react';

import TextHeader from '../components/common/TextHeader';
import TextSection from '../components/common/TextSection';
import styles from './Tracks.module.css';
import game from '../assets/game.png';
import machine from '../assets/machine.png';
import hardware from '../assets/hardware.png';

const Tracks = () => (
  <div className={styles.tracks}>
    <h1 className={styles.trackHeader}>Technical Tracks</h1>
    <div className={styles.track}>
      <div className={styles.trackContainer}>
        <div className={styles.trackImageContainer}>
          <img className={styles.image} src={game} alt={game} />
        </div>
        <TextHeader fontSize="2rem" color="white">Game</TextHeader>
        <TextHeader fontSize="2rem" color="white">Design</TextHeader>
        <TextSection color="white">
          A hackathon is an event, typically lasting several days,
          in which a large number of people meet to engage in
          collaborative computer programming.
        </TextSection>
      </div>

      <div className={styles.trackContainer}>
        <div className={styles.trackImageContainer}>
          <img className={styles.image} src={machine} alt={machine} />
        </div>
        <TextHeader fontSize="2rem" color="white">AI + Machine</TextHeader>
        <TextHeader fontSize="2rem" color="white">Learning</TextHeader>
        <TextSection color="white">
          A hackathon is an event, typically lasting several days,
          in which a large number of people meet to engage in
          collaborative computer programming.
        </TextSection>
      </div>

      <div className={styles.trackContainer}>
        <div className={styles.trackImageContainer}>
          <img className={styles.image} src={hardware} alt={hardware} />
        </div>
        <TextHeader fontSize="2rem" color="white">IoT +</TextHeader>
        <TextHeader fontSize="2rem" color="white">Hardware</TextHeader>
        <TextSection color="white">
          A hackathon is an event, typically lasting several days,
          in which a large number of people meet to engage in
          collaborative computer programming.
        </TextSection>
      </div>
    </div>
  </div>
);

export default Tracks;
