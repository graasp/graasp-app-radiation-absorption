import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-konva';
import {
  ACTIVE_MOLECULE_AREA_PLUS_STROKE,
  ACTIVE_MOLECULE_AREA_PLUS_STROKE_WIDTH,
} from '../../../../constants/constants';

const PlusSignLine = ({ points }) => (
  <Line
    stroke={ACTIVE_MOLECULE_AREA_PLUS_STROKE}
    strokeWidth={ACTIVE_MOLECULE_AREA_PLUS_STROKE_WIDTH}
    points={points}
  />
);

PlusSignLine.propTypes = {
  points: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default PlusSignLine;
