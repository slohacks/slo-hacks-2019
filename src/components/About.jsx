import React from 'react';
import TextSection from '../components/common/TextSection';
import styles from './About.module.css';

const About = () => (
  <div className={styles.about}>
    <section className={styles.aboutContainer}>
      <div className={styles.aboutContent}>
        <h1 className={styles.aboutHeader}>Turning dreams into reality.</h1>
        <TextSection>
          SLO Hacks 2019 is a 500-student, 36-hour hackathon hosted at Cal Poly SLO.
          Over the course of the event, you&#39;ll meet new people, learn and develop your
          skills, and turn your next big idea into a reality!
        </TextSection>
      </div>
    </section>
  </div>
);

export default About;
