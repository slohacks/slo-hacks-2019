import React from 'react';
import Header from '../components/common/Header';
import TextSection from '../components/common/TextSection';
import styles from './About.module.css';

const About = () => (
  <div className={styles.about}>
    <section className={styles.aboutContainer}>
      <div className={styles.aboutContent}>
        <Header fontSize="3rem" color="#FFF">Turning dreams into reality.</Header>
        <TextSection fontSize="1.3rem" color="#FFF">
          SLO Hacks 2019 is a hackathon event hosted at Cal Poly, San Luis
          Obispo. Over a period of 36 hours, you will meet new people, learn new
          skills, and turn your ideas into a reality!
        </TextSection>
      </div>
    </section>
  </div>
);

export default About;

