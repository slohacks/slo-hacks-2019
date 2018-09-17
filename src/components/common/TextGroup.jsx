import React from 'react';
import PropTypes from 'prop-types';

const TextGroup = ({ children }) => (
  <div>
    {children}
  </div>
);

TextGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default TextGroup;
