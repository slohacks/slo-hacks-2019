import React from 'react';
import Footer from '../components/common/Footer';
import styles from './CTA.module.css';

const CTA = () => (
  <div className={styles.cta}>
    <section className={styles.ctaContainer}>
      <section className={styles.footerContainer}>
        <div className={styles.footerWrapper}>
          <Footer />
        </div>
      </section>
    </section>
  </div>
);

export default CTA;

