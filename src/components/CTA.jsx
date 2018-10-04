import React from 'react';
import Button from '../components/common/Button';
import styles from './CTA.module.css';

const CTA = () => (
  <div className={styles.cta}>
    <section className={styles.ctaContainer}>
      <div className={styles.ctaContent}>
        <h1 className={styles.ctaHeader}>Interested? Sign up now for updates!</h1>
        <div className={styles.ctaButtonWrapper}>
          <Button className={styles.ctaButton} color="#FFF">Subscribe</Button>
        </div>
      </div>
    </section>
  </div>
);

export default CTA;

