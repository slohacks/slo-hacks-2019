import React from 'react';
import mountain from '../assets/mountain.png';
import styles from './Mountain.module.css';

const Mountain = () => (
  <div className={styles.mountain}>
    <img className={styles.mountain_image} src={mountain} alt="mountain" />
  </div>
);

export default Mountain;

