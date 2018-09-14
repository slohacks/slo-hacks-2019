import React from 'react';
import styles from './FAQ.module.css';
import Header from './common/Header';
import Column from '../components/common/Column';
import TextSection from '../components/common/TextSection';
import TextHeader from '../components/common/TextHeader';
import questions from './data/FAQ.json';

const FAQ = () => {
  function renderFAQSections(sectionNum) {
    const { body } = questions;
    return body[sectionNum].questions.map((question) => { // eslint-disable-line arrow-body-style
      return (
        <div className={styles.question}>
          <TextHeader fontSize="1.25rem" color="black">{question.title}</TextHeader>
          <TextSection fontSize="1.25rem" color="black">{question.answer}</TextSection>
        </div>
      );
    });
  }

  return (
    <div className={styles.faq}>
      <Header fontSize="4.5rem" color="black">FAQ</Header>
      <div className={styles.faqWrapper}>
        <section className={styles.faqSection}>
          <Column>
            {renderFAQSections(0)}
          </Column>
        </section>

        <section className={styles.faqSection}>
          <Column >
            {renderFAQSections(1)}
          </Column>
        </section>
      </div>
    </div>
  );
};

export default FAQ;
