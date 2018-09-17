import React from 'react';
import baker from '../assets/baker.png';
import styles from './Baker.module.css';

const Baker = () => (
  <div className={styles.baker}>
    <img className={styles.baker_image} src={baker} alt="baker" />
  </div>
);

export default Baker;
