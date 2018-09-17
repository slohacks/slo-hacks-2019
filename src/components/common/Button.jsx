import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({
  children,
  color,
  fontSize,
  borderRadius,
}) => {
  const border = `3px solid ${color}`;
  const buttonStyling = {
    color,
    border,
    fontSize,
    borderRadius,
  };
  return (
    <div style={buttonStyling} className={styles.button}>
      <span>{children}</span>
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  color: PropTypes.string,
  fontSize: PropTypes.string,
  borderRadius: PropTypes.string,
};

export default Button;
