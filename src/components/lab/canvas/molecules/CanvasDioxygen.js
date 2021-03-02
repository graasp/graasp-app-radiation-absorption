import React from 'react';
import PropTypes from 'prop-types';
import { Group } from 'react-konva';
import CanvasOxygen from './atoms/CanvasOxygen';
import {
  CANVAS_ATOM_DIMENSIONS,
  OXYGEN_ATOM_SIZE,
  CANVAS_MOLECULE_AREA_Y_POSITION,
} from '../../../../config/constants';

const CanvasDioxygen = ({ x }) => {
  const oxygenAtomRadius = CANVAS_ATOM_DIMENSIONS[OXYGEN_ATOM_SIZE];

  return (
    <Group>
      <CanvasOxygen
        x={x}
        y={CANVAS_MOLECULE_AREA_Y_POSITION - oxygenAtomRadius}
      />
      <CanvasOxygen
        x={x}
        y={CANVAS_MOLECULE_AREA_Y_POSITION + oxygenAtomRadius}
      />
    </Group>
  );
};

CanvasDioxygen.propTypes = {
  x: PropTypes.number.isRequired,
};

export default CanvasDioxygen;
