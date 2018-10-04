import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Tracks from '../components/Tracks';
import History from '../components/History';
import Baker from '../components/Baker';
import Schedule from '../components/Schedule';
import FAQ from '../components/FAQ';
import Sponsor from '../components/Sponsor';
import CTA from '../components/CTA';
import Footer from '../components/common/Footer';
import styles from './index.module.css';

const IndexPage = () => (
  <div className={styles.layout}>
    <Hero />
    <About />
    <Tracks />
    <History />
    <Baker />
    <Schedule />
    <FAQ />
    <Sponsor />
    <CTA />
    <Footer />
  </div>
);
export default IndexPage;
