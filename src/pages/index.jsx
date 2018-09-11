import React from 'react';
import Tracks from '../components/Tracks';
import History from '../components/History';
import Baker from '../components/Baker';
import Schedule from '../components/Schedule';
import styles from './index.module.css';

const IndexPage = () => (
  <div className={styles.layout}>
    <Tracks />
    <History />
    <Baker />
    <Schedule />
  </div>
);
export default IndexPage;
