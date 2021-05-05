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
  // y positions of the three arrows in an electric field vector group
  const topArrowY = y - SMALL_ARROW_Y_PLACEMENT_RELATIVE_TO_LARGE_ARROW;
  const middleArrowY = y;
  const bottomArrowY = y + SMALL_ARROW_Y_PLACEMENT_RELATIVE_TO_LARGE_ARROW;
  // only show an arrow if its y position is greater than the absorption point
  // i.e. once the arrow is above the absorption point, don't show it
  // (noting that on the canvas the higher the y the lower on the screen a shape is)
  const showTopArrow = topArrowY >= absorptionPoint;
  const showMiddleArrow = middleArrowY >= absorptionPoint;
  const showBottomArrow = bottomArrowY >= absorptionPoint;

  return (
    <Group>
      {showTopArrow && (
        <Arrow
          x={x}
          y={topArrowY}
          points={[0, 0, direction * SMALL_ARROW_LENGTH, 0]}
          pointerLength={ARROW_POINTER_LENGTH}
          pointerWidth={ARROW_POINTER_WIDTH}
          stroke={ARROW_STROKE_COLOR}
          strokeWidth={ARROW_STROKE_WIDTH}
        />
      )}
      {showMiddleArrow && (
        <Arrow
          x={x}
          y={middleArrowY}
          points={[0, 0, direction * LARGE_ARROW_LENGTH, 0]}
          pointerLength={ARROW_POINTER_LENGTH}
          pointerWidth={ARROW_POINTER_WIDTH}
          stroke={ARROW_STROKE_COLOR}
          strokeWidth={ARROW_STROKE_WIDTH}
        />
      )}
      {showBottomArrow && (
        <Arrow
          x={x}
          y={bottomArrowY}
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
