import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

const Header = ({ children, headerText, color, fontSize }) => {
  const headerStyling = { color, fontSize };
  return (
    <h1 style={headerStyling} className={styles.header}>{headerText}</h1>
  );
};

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  headerText: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired
}

export default Header;
