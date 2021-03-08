import React from 'react';
import PropTypes from 'prop-types';
import { Group, Line } from 'react-konva';
import {
  CANVAS_ATOM_CHARGE_LENGTH,
  CANVAS_ATOM_CHARGE_STROKE_WIDTH,
} from '../../../../../../config/constants';

const CanvasAtomNegativeCharge = ({ x, y, color }) => {
  // note: a '-' sign is 2 lines going left and right from the center point of the -
  // using konva lines (versus a konva text node) results in accurate centering
  return (
    <Group>
      <Line
        x={x}
        y={y}
        stroke={color}
        points={[0, 0, CANVAS_ATOM_CHARGE_LENGTH, 0]}
        strokeWidth={CANVAS_ATOM_CHARGE_STROKE_WIDTH}
      />
      <Line
        x={x}
        y={y}
        stroke={color}
        points={[0, 0, -CANVAS_ATOM_CHARGE_LENGTH, 0]}
        strokeWidth={CANVAS_ATOM_CHARGE_STROKE_WIDTH}
      />
    </Group>
  );
};

CanvasAtomNegativeCharge.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default CanvasAtomNegativeCharge;
