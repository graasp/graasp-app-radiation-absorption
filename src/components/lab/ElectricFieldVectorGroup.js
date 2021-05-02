import React from 'react';
import PropTypes from 'prop-types';
import { Group, Arrow } from 'react-konva';
import {
  ARROW_POINTER_LENGTH,
  ARROW_POINTER_WIDTH,
  ARROW_STROKE_COLOR,
  ARROW_STROKE_WIDTH,
  LARGE_ARROW_LENGTH,
  SMALL_ARROW_LENGTH,
  SMALL_ARROW_Y_PLACEMENT_RELATIVE_TO_LARGE_ARROW,
} from '../../config/constants';

const ElectricFieldVectorGroup = ({ x, y, direction, absorptionPoint }) => {
  return (
    <Group>
      {/* only show the arrow if its y position is greater than the absorption point */}
      {/* i.e. once the arrow is above the absorption point, don't show it */}
      {/* (similar for the two other arrows below) */}
      {y - SMALL_ARROW_Y_PLACEMENT_RELATIVE_TO_LARGE_ARROW >=
        absorptionPoint && (
        <Arrow
          x={x}
          y={y - SMALL_ARROW_Y_PLACEMENT_RELATIVE_TO_LARGE_ARROW}
          points={[0, 0, direction * SMALL_ARROW_LENGTH, 0]}
          pointerLength={ARROW_POINTER_LENGTH}
          pointerWidth={ARROW_POINTER_WIDTH}
          stroke={ARROW_STROKE_COLOR}
          strokeWidth={ARROW_STROKE_WIDTH}
        />
      )}
      {y >= absorptionPoint && (
        <Arrow
          x={x}
          y={y}
          points={[0, 0, direction * LARGE_ARROW_LENGTH, 0]}
          pointerLength={ARROW_POINTER_LENGTH}
          pointerWidth={ARROW_POINTER_WIDTH}
          stroke={ARROW_STROKE_COLOR}
          strokeWidth={ARROW_STROKE_WIDTH}
        />
      )}
      {y + SMALL_ARROW_Y_PLACEMENT_RELATIVE_TO_LARGE_ARROW >=
        absorptionPoint && (
        <Arrow
          x={x}
          y={y + SMALL_ARROW_Y_PLACEMENT_RELATIVE_TO_LARGE_ARROW}
          points={[0, 0, direction * SMALL_ARROW_LENGTH, 0]}
          pointerLength={ARROW_POINTER_LENGTH}
          pointerWidth={ARROW_POINTER_WIDTH}
          stroke={ARROW_STROKE_COLOR}
          strokeWidth={ARROW_STROKE_WIDTH}
        />
      )}
    </Group>
  );
};

ElectricFieldVectorGroup.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  direction: PropTypes.number.isRequired,
  absorptionPoint: PropTypes.number.isRequired,
};

export default ElectricFieldVectorGroup;
