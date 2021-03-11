import React from 'react';
import PropTypes from 'prop-types';
import { Group, Line } from 'react-konva';
import {
  ACTIVE_MOLECULE_AREA_PLUS_LENGTH,
  ACTIVE_MOLECULE_AREA_PLUS_STROKE,
  ACTIVE_MOLECULE_AREA_PLUS_STROKE_WIDTH,
} from '../../../config/constants';

const ActiveMoleculeAreaPlus = ({ x, y }) => {
  // note: a '+' sign is 4 lines going up, right, down, and left from the center point of the +
  // using konva lines (versus a konva text node) results in accurate centering
  return (
    <Group>
      <Line
        x={x}
        y={y}
        stroke={ACTIVE_MOLECULE_AREA_PLUS_STROKE}
        points={[0, 0, ACTIVE_MOLECULE_AREA_PLUS_LENGTH, 0]}
        strokeWidth={ACTIVE_MOLECULE_AREA_PLUS_STROKE_WIDTH}
      />
      <Line
        x={x}
        y={y}
        stroke={ACTIVE_MOLECULE_AREA_PLUS_STROKE}
        points={[0, 0, -ACTIVE_MOLECULE_AREA_PLUS_LENGTH, 0]}
        strokeWidth={ACTIVE_MOLECULE_AREA_PLUS_STROKE_WIDTH}
      />
      <Line
        x={x}
        y={y}
        stroke={ACTIVE_MOLECULE_AREA_PLUS_STROKE}
        points={[0, 0, 0, ACTIVE_MOLECULE_AREA_PLUS_LENGTH]}
        strokeWidth={ACTIVE_MOLECULE_AREA_PLUS_STROKE_WIDTH}
      />
      <Line
        x={x}
        y={y}
        stroke={ACTIVE_MOLECULE_AREA_PLUS_STROKE}
        points={[0, 0, 0, -ACTIVE_MOLECULE_AREA_PLUS_LENGTH]}
        strokeWidth={ACTIVE_MOLECULE_AREA_PLUS_STROKE_WIDTH}
      />
    </Group>
  );
};

ActiveMoleculeAreaPlus.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default ActiveMoleculeAreaPlus;
