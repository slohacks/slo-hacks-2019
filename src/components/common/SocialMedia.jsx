import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';
import SocialMediaIcon from './SocialMediaIcon';

const SocialMedia = () => {
  return (
    <div className={styles.footer__social}>
      <SocialMediaIcon icon="email" url="mailto:team@slohacks.com" />
      <SocialMediaIcon icon="facebook" url="https://facebook.com/slohacks" />
      <SocialMediaIcon icon="twitter" url="https://twitter.com/slohacks" />
      <SocialMediaIcon icon="instagram" url="https://instagram.com/slo_hacks" />
    </div>
  );
};

export default SocialMedia;
