import React from 'react';
import PropTypes from 'prop-types';
import styles from './Column.module.css';

const Column = ({ children }) => (
  <div className={styles.column}>
    {children}
  </div>
);

Column.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Column;
