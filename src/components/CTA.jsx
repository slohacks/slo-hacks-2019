import React from 'react';
import Button from '../components/common/Button';
import Footer from '../components/common/Footer';
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
    <section className={styles.footerContainer}>
      <div className={styles.footerWrapper}>
        <Footer />
      </div>
    </section>
  </div>
);

export default CTA;

