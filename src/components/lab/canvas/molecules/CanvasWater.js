import React from 'react';
import PropTypes from 'prop-types';
import { Group } from 'react-konva';
import CanvasOxygen from './atoms/CanvasOxygen';
import CanvasHydrogen from './atoms/CanvasHydrogen';
import {
  CANVAS_ATOM_DIMENSIONS,
  OXYGEN,
  HYDROGEN,
  CANVAS_MOLECULE_AREA_Y_POSITION,
  CANVAS_WATER_ANGLED_ATOMS_X_ADJUSTMENT_FACTOR,
  CANVAS_WATER_ANGLED_ATOMS_Y_ADJUSTMENT_FACTOR,
  POSITIVE_CHARGE,
  NEGATIVE_CHARGE,
} from '../../../../config/constants';

const CanvasWater = ({ x }) => {
  const oxygenAtomRadius = CANVAS_ATOM_DIMENSIONS[OXYGEN.size];
  const hydrogenAtomRadius = CANVAS_ATOM_DIMENSIONS[HYDROGEN.size];

  return (
    <Group>
      <CanvasHydrogen
        x={x + CANVAS_WATER_ANGLED_ATOMS_X_ADJUSTMENT_FACTOR}
        y={
          CANVAS_MOLECULE_AREA_Y_POSITION -
          oxygenAtomRadius -
          hydrogenAtomRadius +
          CANVAS_WATER_ANGLED_ATOMS_Y_ADJUSTMENT_FACTOR
        }
        charge={POSITIVE_CHARGE}
      />
      <CanvasOxygen
        x={x}
        y={CANVAS_MOLECULE_AREA_Y_POSITION}
        charge={NEGATIVE_CHARGE}
      />
      <CanvasHydrogen
        x={x + CANVAS_WATER_ANGLED_ATOMS_X_ADJUSTMENT_FACTOR}
        y={
          CANVAS_MOLECULE_AREA_Y_POSITION +
          oxygenAtomRadius +
          hydrogenAtomRadius -
          CANVAS_WATER_ANGLED_ATOMS_Y_ADJUSTMENT_FACTOR
        }
        charge={POSITIVE_CHARGE}
      />
    </Group>
  );
};

CanvasWater.propTypes = {
  x: PropTypes.number.isRequired,
};

export default CanvasWater;
