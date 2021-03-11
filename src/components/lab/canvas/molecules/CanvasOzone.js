import React from 'react';
import PropTypes from 'prop-types';
import { Group } from 'react-konva';
import CanvasOxygen from './atoms/CanvasOxygen';
import {
  CANVAS_ATOM_DIMENSIONS,
  OXYGEN,
  CANVAS_MOLECULE_AREA_Y_POSITION,
  CANVAS_OZONE_ANGLED_ATOMS_X_ADJUSTMENT_FACTOR,
  CANVAS_OZONE_ANGLED_ATOMS_Y_ADJUSTMENT_FACTOR,
  NEGATIVE_CHARGE,
  POSITIVE_CHARGE,
} from '../../../../config/constants';

const CanvasOzone = ({ x }) => {
  const oxygenAtomRadius = CANVAS_ATOM_DIMENSIONS[OXYGEN.size];

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
        charge={NEGATIVE_CHARGE}
      />
      <CanvasOxygen
        x={x - CANVAS_OZONE_ANGLED_ATOMS_X_ADJUSTMENT_FACTOR / 2}
        y={CANVAS_MOLECULE_AREA_Y_POSITION}
        charge={POSITIVE_CHARGE}
      />
      <CanvasOxygen
        x={x + 0.5 * CANVAS_OZONE_ANGLED_ATOMS_X_ADJUSTMENT_FACTOR}
        y={
          CANVAS_MOLECULE_AREA_Y_POSITION +
          oxygenAtomRadius +
          oxygenAtomRadius -
          CANVAS_OZONE_ANGLED_ATOMS_Y_ADJUSTMENT_FACTOR
        }
        charge={NEGATIVE_CHARGE}
      />
    </Group>
  );
};

CanvasOzone.propTypes = {
  x: PropTypes.number.isRequired,
};

export default CanvasOzone;
