import React from 'react';
import TextSection from '../components/common/TextSection';
import styles from './About.module.css';

const About = () => (
  <div className={styles.about}>
    <section className={styles.aboutContainer}>
      <div className={styles.aboutContent}>
        <h1 className={styles.aboutHeader}>Turning dreams into reality.</h1>
        <TextSection>
          SLO Hacks 2019 is a hackathon event hosted at Cal Poly, San Luis
          Obispo. Over a period of 36 hours, you will meet new people, learn new
          skills, and turn your ideas into a reality!
        </TextSection>
      </div>
    </section>
  </div>
);

export default About;
