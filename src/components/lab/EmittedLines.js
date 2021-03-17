import React from 'react';
import PropTypes from 'prop-types';
import EmittedLine from './EmittedLine';

const EmittedLines = ({ xPoints }) => {
  return xPoints.map((xPoint, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <EmittedLine x={xPoint} key={index} lineIndex={index} />
  ));
};

EmittedLines.propTypes = {
  xPoints: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default EmittedLines;
