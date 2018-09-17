import React from 'react';
import Tracks from '../components/Tracks';
import History from '../components/History';
import Baker from '../components/Baker';
import Schedule from '../components/Schedule';
import FAQ from '../components/FAQ';
import styles from './index.module.css';

const IndexPage = () => (
  <div className={styles.layout}>
    <Tracks />
    <History />
    <Baker />
    <Schedule />
    <FAQ />
  </div>
);
export default IndexPage;
