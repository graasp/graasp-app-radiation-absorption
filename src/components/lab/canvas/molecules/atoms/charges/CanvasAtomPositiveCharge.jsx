import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Group, Line } from 'react-konva';
import {
  CANVAS_ATOM_CHARGE_LENGTH,
  CANVAS_ATOM_CHARGE_STROKE_WIDTH,
} from '../../../../../../constants/constants';

const CanvasAtomPositiveCharge = ({ x, y, color }) => {
  const { height } = useSelector(({ layout }) => layout.lab.stageDimensions);
  const chargeLength = CANVAS_ATOM_CHARGE_LENGTH * height;

  return (
    <Group x={x} y={y}>
      <Line
        stroke={color}
        points={[0, 0, chargeLength, 0]}
        strokeWidth={CANVAS_ATOM_CHARGE_STROKE_WIDTH}
      />
      <Line
        stroke={color}
        points={[0, 0, 0, chargeLength]}
        strokeWidth={CANVAS_ATOM_CHARGE_STROKE_WIDTH}
      />
      <Line
        stroke={color}
        points={[0, 0, -chargeLength, 0]}
        strokeWidth={CANVAS_ATOM_CHARGE_STROKE_WIDTH}
      />
      <Line
        stroke={color}
        points={[0, 0, 0, -chargeLength]}
        strokeWidth={CANVAS_ATOM_CHARGE_STROKE_WIDTH}
      />
    </Group>
  );
};

CanvasAtomPositiveCharge.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default CanvasAtomPositiveCharge;
