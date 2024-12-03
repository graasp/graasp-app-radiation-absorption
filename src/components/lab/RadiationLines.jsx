import React from 'react';
import PropTypes from 'prop-types';
import RadiationLine from './RadiationLine';

const RadiationLines = ({ xPoints }) => {
  return xPoints.map((xPoint, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <RadiationLine x={xPoint} key={index} lineIndex={index} />
  ));
};

RadiationLines.propTypes = {
  xPoints: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default RadiationLines;
