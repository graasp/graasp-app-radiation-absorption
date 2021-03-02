import React from 'react';
import PropTypes from 'prop-types';
import { Group } from 'react-konva';
import CanvasOxygen from './atoms/CanvasOxygen';
import {
  CANVAS_ATOM_DIMENSIONS,
  OXYGEN_ATOM_SIZE,
  CANVAS_MOLECULE_AREA_Y_POSITION,
  CANVAS_OZONE_ANGLED_ATOMS_X_ADJUSTMENT_FACTOR,
  CANVAS_OZONE_ANGLED_ATOMS_Y_ADJUSTMENT_FACTOR,
} from '../../../../config/constants';

const CanvasOzone = ({ x }) => {
  const oxygenAtomRadius = CANVAS_ATOM_DIMENSIONS[OXYGEN_ATOM_SIZE];

  return (
    <Group>
      <CanvasOxygen
        x={x + 0.5 * CANVAS_OZONE_ANGLED_ATOMS_X_ADJUSTMENT_FACTOR}
        y={
          CANVAS_MOLECULE_AREA_Y_POSITION -
          oxygenAtomRadius -
          oxygenAtomRadius +
          CANVAS_OZONE_ANGLED_ATOMS_Y_ADJUSTMENT_FACTOR
        }
      />
      <CanvasOxygen
        x={x - CANVAS_OZONE_ANGLED_ATOMS_X_ADJUSTMENT_FACTOR / 2}
        y={CANVAS_MOLECULE_AREA_Y_POSITION}
      />
      <CanvasOxygen
        x={x + 0.5 * CANVAS_OZONE_ANGLED_ATOMS_X_ADJUSTMENT_FACTOR}
        y={
          CANVAS_MOLECULE_AREA_Y_POSITION +
          oxygenAtomRadius +
          oxygenAtomRadius -
          CANVAS_OZONE_ANGLED_ATOMS_Y_ADJUSTMENT_FACTOR
        }
      />
    </Group>
  );
};

CanvasOzone.propTypes = {
  x: PropTypes.number.isRequired,
};

export default CanvasOzone;
