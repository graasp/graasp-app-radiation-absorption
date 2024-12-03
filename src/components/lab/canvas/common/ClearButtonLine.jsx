import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-konva';
import {
  CLEAR_BUTTON_LINE_FILL,
  CLEAR_BUTTON_LINE_STROKE_WIDTH,
} from '../../../../constants/constants';

const ClearButtonLine = ({ points }) => {
  return (
    <Line
      stroke={CLEAR_BUTTON_LINE_FILL}
      strokeWidth={CLEAR_BUTTON_LINE_STROKE_WIDTH}
      points={points}
    />
  );
};

ClearButtonLine.propTypes = {
  points: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default ClearButtonLine;
