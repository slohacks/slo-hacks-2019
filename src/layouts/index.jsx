import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import './index.css';
import styles from './index.module.css';

class TemplateWrapper extends React.Component {
  render() {
    return (
      <div>
        <Helmet
          title="SLO Hacks"
          meta={[
            { name: 'description', content: 'SLO Hacks' },
            { name: 'keywords', content: 'san luis obispo, cal poly, hackathon, coding, software, competition' },
            { name: 'theme-color', content: '#FFFFFF' },
          ]}
        />
        <div>
          {this.props.children()}
        </div>
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func, // eslint-disable-line react/require-default-props
};

export default TemplateWrapper;
