import React from 'react';
import Column from '../components/common/Column';
import TextSection from '../components/common/TextSection';
import TextHeader from '../components/common/TextHeader';
import styles from './Schedule.module.css';
import events from './data/Schedule.json';

const Schedule = () => {
  function renderEvents(eventSection) {
    const { body } = events;
    return body[eventSection].events.map((event) => { // eslint-disable-line arrow-body-style
      return (
        <div className={styles.event}>
          <TextHeader fontSize="1.25rem" color="black">{event.title}</TextHeader>
          <TextSection fontSize="1.25rem" color="black">{event.location}</TextSection>
        </div>
      );
    });
  }

  return (
    <div className={styles.schedule}>
      <h1 className={styles.scheduleHeader}>Schedule</h1>
      <div className={styles.scheduleWrapper}>
        <section className={styles.scheduleSection}>
          <div className={styles.dayHeader}>
            <TextHeader>Saturday</TextHeader>
          </div>
          <Column>
            {renderEvents(0)}
          </Column>
        </section>

        <section className={styles.scheduleSection}>
          <div className={styles.dayHeader}>
            <TextHeader>Sunday</TextHeader>
          </div>
          <Column>
            {renderEvents(1)}
          </Column>
        </section>
      </div>
    </div>
  );
};

export default Schedule;
