import React from 'react';
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

        <div className={styles.friday}>
          <section className={styles.scheduleSection}>
            <h2 className={styles.dayHeader}>Friday</h2>
            {renderEvents(1)}
          </section>
        </div>

        <div className={styles.saturday}>
          <section className={styles.scheduleSection}>
            <h2 className={styles.dayHeader}>Saturday</h2>
            {renderEvents(0)}
          </section>
        </div>

        <div className={styles.sunday}>
          <section className={styles.scheduleSection}>
            <h2 className={styles.dayHeader}>Sunday</h2>
            {renderEvents(1)}
          </section>
        </div>

      </div>
    </div>
  );
};

export default Schedule;
