import React from 'react';
import Header from '../components/common/Header';
import Column from '../components/common/Column';
import TextSection from '../components/common/TextSection';
import TextHeader from '../components/common/TextHeader';
import TextGroup from '../components/common/TextGroup';
import styles from './Schedule.module.css';

const Schedule = () => (
  <div className={styles.schedule}>
    <Header fontSize="4.5rem" color="white">Schedule</Header>
    <div className={styles.scheduleWrapper}>
      <div className={styles.scheduleSection}>
        <div className={styles.dayHeader}>
          <TextHeader>Saturday</TextHeader>
        </div>
        <Column>
          <TextGroup>
            <TextHeader>Paper Airplane Activity</TextHeader>
            <TextSection>Ballroom Lobby</TextSection>
          </TextGroup>

          <TextGroup>
            <TextHeader>Late Night Campus Tour</TextHeader>
            <TextSection>Cal Poly</TextSection>
          </TextGroup>

          <TextGroup>
            <TextHeader>Late Night Campus Tour</TextHeader>
            <TextSection>Cal Poly</TextSection>
          </TextGroup>

          <TextGroup>
            <TextHeader>Late Night Campus Tour</TextHeader>
            <TextSection>Cal Poly</TextSection>
          </TextGroup>

          <TextGroup>
            <TextHeader>Late Night Campus Tour</TextHeader>
            <TextSection>Cal Poly</TextSection>
          </TextGroup>

          <TextGroup>
            <TextHeader>Late Night Campus Tour</TextHeader>
            <TextSection>Cal Poly</TextSection>
          </TextGroup>

          <TextGroup>
            <TextHeader>Late Night Campus Tour</TextHeader>
            <TextSection>Cal Poly</TextSection>
          </TextGroup>

          <TextGroup>
            <TextHeader>Late Night Campus Tour</TextHeader>
            <TextSection>Cal Poly</TextSection>
          </TextGroup>

          <TextGroup>
            <TextHeader>Late Night Campus Tour</TextHeader>
            <TextSection>Cal Poly</TextSection>
          </TextGroup>

          <TextGroup>
            <TextHeader>Late Night Campus Tour</TextHeader>
            <TextSection>Cal Poly</TextSection>
          </TextGroup>
        </Column>
      </div>

      <div className={styles.scheduleSection}>
        <div className={styles.dayHeader}>
          <TextHeader>Sunday</TextHeader>
        </div>
        <Column>
          <TextGroup>
            <TextHeader>Cup Stacking Challenge</TextHeader>
            <TextSection>Pacific Ballroom</TextSection>
          </TextGroup>

          <TextGroup>
            <TextHeader>Breakfast</TextHeader>
            <TextSection>Atlantic Ballroom</TextSection>
          </TextGroup>

          <TextGroup>
            <TextHeader>Breakfast</TextHeader>
            <TextSection>Atlantic Ballroom</TextSection>
          </TextGroup>

          <TextGroup>
            <TextHeader>Breakfast</TextHeader>
            <TextSection>Atlantic Ballroom</TextSection>
          </TextGroup>
        </Column>
      </div>
    </div>
  </div>
);

export default Schedule;
