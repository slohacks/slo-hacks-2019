import React from 'react';
import styles from './Footer.module.css';
import SocialMediaIcon from './SocialMediaIcon';
import email from '../../assets/footer/email1.svg';
import fb from '../../assets/footer/fb1.svg';
import tw from '../../assets/footer/tw1.svg';
import ig from '../../assets/footer/ig1.svg';

const SocialMedia = () => {
  return (
    <div className={styles.footer__social}>
      <SocialMediaIcon icon={email} url="mailto:team@slohacks.com" />
      <SocialMediaIcon icon={fb} url="https://facebook.com/slohacks" />
      <SocialMediaIcon icon={tw} url="https://twitter.com/slohacks" />
      <SocialMediaIcon icon={ig} url="https://instagram.com/slo_hacks" />
    </div>
  );
};

export default SocialMedia;
