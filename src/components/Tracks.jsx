import React from 'react';

import TextHeader from '../components/common/TextHeader';
import TextSection from '../components/common/TextSection';
import styles from './Tracks.module.css';
import game from '../assets/game.png';
import machine from '../assets/machine.png';
import hardware from '../assets/hardware.png';

const Tracks = () => (
  <div id="tracks" className={styles.tracks}>
    <h1 className={styles.trackHeader}>Technical Tracks</h1>
    <div className={styles.track}>
      <div className={styles.trackContainer}>
        <div className={styles.trackImageContainer}>
          <img className={styles.image} src={game} alt={game} />
        </div>
        <TextHeader fontSize="2rem" color="white">Game</TextHeader>
        <TextHeader fontSize="2rem" color="white">Design</TextHeader>
        <TextSection color="white">
          Utilize interactive experiences to teach us something new,
          tell a captivating story, or just have a ton of fun.
        </TextSection>
      </div>

      <div className={styles.trackContainer}>
        <div className={styles.trackImageContainer}>
          <img className={styles.image} src={machine} alt={machine} />
        </div>
        <TextHeader fontSize="2rem" color="white">AI + Machine</TextHeader>
        <TextHeader fontSize="2rem" color="white">Learning</TextHeader>
        <TextSection color="white">
          Train your computer to solve complex problems like cancer detection or homelessness with
          huge open-source datasets and large amounts of information.
        </TextSection>
      </div>

      <div className={styles.trackContainer}>
        <div className={styles.trackImageContainer}>
          <img className={styles.image} src={hardware} alt={hardware} />
        </div>
        <TextHeader fontSize="2rem" color="white">IoT +</TextHeader>
        <TextHeader fontSize="2rem" color="white">Hardware</TextHeader>
        <TextSection color="white">
          Interested in escaping the digital world?
          Explore the intersection of hardware and software
          to create the next piece of physical technology.
        </TextSection>
      </div>
    </div>
  </div>
);

export default Tracks;
