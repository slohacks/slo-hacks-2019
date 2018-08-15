import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ children, buttonText, color, fontSize }) => {
  const border = "3px solid" + color;
  const buttonStyling = { color, border, fontSize };
  return (
    <div style={buttonStyling} className={styles.button}>
      <span>{buttonText}</span>
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
	buttonText: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired
};

export default Button;
