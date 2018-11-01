import React from 'react';
import PropTypes from 'prop-types';
import styles from './TextSection.module.css';

const TextHeader = ({
  children,
  fontSize,
  fontWeight,
  color,
}) => {
  const sectionHeader = { fontSize, fontWeight, color };
  return (
    <h2 className={styles.sectionHeader} style={sectionHeader}>{children}</h2>
  );
};

TextHeader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.number,
  color: PropTypes.string,
};

export default TextHeader;
