import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavigationItem.module.css';

const NavigationItem = ({ url, linkText }) => (
  <a className={styles.navitem} href={url}>{linkText}</a>
);

NavigationItem.propTypes = {
  url: PropTypes.string,
  linkText: PropTypes.string,
};

export default NavigationItem;
