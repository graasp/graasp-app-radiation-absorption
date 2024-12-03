import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Arrow } from 'react-konva';
import {
  ARROW_POINTER_LENGTH,
  ARROW_POINTER_WIDTH,
  ARROW_STROKE_COLOR,
  ARROW_STROKE_WIDTH,
} from '../../../../constants/constants';

const CustomArrow = ({ y, points }) => {
  const { height } = useSelector(({ layout }) => layout.lab.stageDimensions);

  return (
    <Arrow
      y={y}
      points={points}
      pointerLength={ARROW_POINTER_LENGTH * height}
      pointerWidth={ARROW_POINTER_WIDTH * height}
      stroke={ARROW_STROKE_COLOR}
      strokeWidth={ARROW_STROKE_WIDTH * height}
    />
  );
};

CustomArrow.propTypes = {
  y: PropTypes.number.isRequired,
  points: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default CustomArrow;
