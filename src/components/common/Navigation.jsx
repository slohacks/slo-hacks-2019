import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navigation.module.css';

const Navigation = ({ children }) => (
  <nav className={styles.navigation}>
    {children}
  </nav>
);

Navigation.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Navigation;
