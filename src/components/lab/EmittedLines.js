import React from 'react';
import PropTypes from 'prop-types';
import EmittedLine from './EmittedLine';

const EmittedLines = ({ xPoints }) => {
  return xPoints.map((xPoint, index) => (
    <EmittedLine x={xPoint} key={xPoint} lineIndex={index} />
  ));
};

EmittedLines.propTypes = {
  xPoints: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default EmittedLines;
