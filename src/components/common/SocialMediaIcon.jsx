import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';

class SocialMediaIcon extends React.Component {
  state = { image: "./static/footer/social_" + this.props.icon + "-01.svg" };
  props = {
    icon: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }

  handleMouseOver = () => {
    const imageUrl = "./static/footer/social_" + this.props.icon + "-02.svg";
    this.setState({ image: imageUrl });
  }

  handleMouseOut = () => {
    const imageUrl = "./static/footer/social_" + this.props.icon + "-01.svg";
    this.setState({ image: imageUrl });
  }

  handleOnClick = () => {
    const imageUrl = "./static/footer/social_" + this.props.icon + "-01.svg";
    this.setState({ image: imageUrl });
  }

  handleTouchStart = () => {
    const imageUrl = "./static/footer/social_" + this.props.icon + "-02.svg";
    this.setState({ image: imageUrl });
  }

  handleTouchEnd = () => {
    const imageUrl = "./static/footer/social_" + this.props.icon + "-01.svg";
    this.setState({ image: imageUrl });
  }

  render() {
    let styling = styles.footer__icon;
    if (this.props.icon === "twitter") {
      styling = styles.footer__icon + ' ' + styles.footer__twitter;
    }

    return (
      <div className={styles.footer_row}>
        <a rel="noopener" href={this.props.url} target="_blank">
          <img className={styling} src={this.state.image} 
            onMouseOver={this.handleMouseOver}
            onMouseOut={this.handleMouseOut}
            onClick={this.handleOnClick}
            onTouchStart={this.handleTouchStart}
            onTouchEnd={this.handleTouchEnd} />
        </a>
      </div>
    );
  }
}

export default SocialMediaIcon;
