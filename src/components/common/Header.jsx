import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

const Header = ({ children, color, fontSize }) => {
  const headerStyling = { color, fontSize };
  return (
    <h1 style={headerStyling} className={styles.header}>{children}</h1>
  );
};

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  color: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired
}

export default Header;
