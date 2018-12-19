import React from 'react';
import styles from './Footer.module.css';

class SocialMediaIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let styling = styles.footer__icon;
    if (this.props.url === "https://twitter.com/slohacks") {
      styling = styles.footer__icon + ' ' + styles.footer__twitter;
    }

    return (
      <div className={styles.footer_row}>
        <a rel="noopener" href={this.props.url} target="_blank">
          <img className={styling} src={this.props.icon} />
        </a>
      </div>
    );
  }
}

export default SocialMediaIcon;
