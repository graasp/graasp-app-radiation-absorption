import React from 'react';
import PropTypes from 'prop-types';
import { Group, Arrow } from 'react-konva';
import {
  ARROW_POINTER_LENGTH,
  ARROW_POINTER_WIDTH,
  ARROW_STROKE_COLOR,
  ARROW_STROKE_WIDTH,
  LARGE_ALLOW_LENGTH,
  SMALL_ARROW_LENGTH,
  SMALL_ARROW_Y_PLACEMENT_RELATIVE_TO_LARGE_ARROW,
} from '../../config/constants';

const ElectricFieldVectorGroup = ({ x, y, direction }) => {
  return (
    <Group draggable>
      <Arrow
        x={x}
        y={y - SMALL_ARROW_Y_PLACEMENT_RELATIVE_TO_LARGE_ARROW}
        points={[0, 0, direction * SMALL_ARROW_LENGTH, 0]}
        pointerLength={ARROW_POINTER_LENGTH}
        pointerWidth={ARROW_POINTER_WIDTH}
        stroke={ARROW_STROKE_COLOR}
        strokeWidth={ARROW_STROKE_WIDTH}
      />
      <Arrow
        x={x}
        y={y}
        points={[0, 0, direction * LARGE_ALLOW_LENGTH, 0]}
        pointerLength={ARROW_POINTER_LENGTH}
        pointerWidth={ARROW_POINTER_WIDTH}
        stroke={ARROW_STROKE_COLOR}
        strokeWidth={ARROW_STROKE_WIDTH}
      />
      <Arrow
        x={x}
        y={y + SMALL_ARROW_Y_PLACEMENT_RELATIVE_TO_LARGE_ARROW}
        points={[0, 0, direction * SMALL_ARROW_LENGTH, 0]}
        pointerLength={ARROW_POINTER_LENGTH}
        pointerWidth={ARROW_POINTER_WIDTH}
        stroke={ARROW_STROKE_COLOR}
        strokeWidth={ARROW_STROKE_WIDTH}
      />
    </Group>
  );
};

ElectricFieldVectorGroup.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  direction: PropTypes.number.isRequired,
};

export default ElectricFieldVectorGroup;
