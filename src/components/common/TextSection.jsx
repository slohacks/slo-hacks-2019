import React from 'react';
import PropTypes from 'prop-types';

const TextSection = ({
  children,
  fontWeight,
  fontSize,
  color,
}) => {
  const sectionText = { fontWeight, fontSize, color };
  return (
    <p style={sectionText}>{children}</p>
  );
};

TextSection.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.number,
  color: PropTypes.string,
};

export default TextSection;
