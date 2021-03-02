import React from 'react';
import PropTypes from 'prop-types';
import { Group } from 'react-konva';
import CanvasCarbon from './atoms/CanvasCarbon';
import CanvasHydrogen from './atoms/CanvasHydrogen';
import {
  CANVAS_ATOM_DIMENSIONS,
  HYDROGEN_ATOM_SIZE,
  CARBON_ATOM_SIZE,
  CANVAS_MOLECULE_AREA_Y_POSITION,
  CANVAS_METHANE_FIRST_ATOM_X_ADJUSTMENT_FACTOR,
  CANVAS_METHANE_FIRST_ATOM_Y_ADJUSTMENT_FACTOR,
  CANVAS_METHANE_SECOND_ATOM_X_ADJUSTMENT_FACTOR,
  CANVAS_METHANE_SECOND_ATOM_Y_ADJUSTMENT_FACTOR,
  CANVAS_METHANE_THIRD_ATOM_X_ADJUSTMENT_FACTOR,
  CANVAS_METHANE_THIRD_ATOM_Y_ADJUSTMENT_FACTOR,
  CANVAS_METHANE_FOURTH_ATOM_X_ADJUSTMENT_FACTOR,
  CANVAS_METHANE_FOURTH_ATOM_Y_ADJUSTMENT_FACTOR,
} from '../../../../config/constants';

const CanvasMethane = ({ x }) => {
  const hydrogenAtomRadius = CANVAS_ATOM_DIMENSIONS[HYDROGEN_ATOM_SIZE];
  const carbonAtomRadius = CANVAS_ATOM_DIMENSIONS[CARBON_ATOM_SIZE];

  return (
    <Group>
      <CanvasCarbon x={x} y={CANVAS_MOLECULE_AREA_Y_POSITION} />
      <CanvasHydrogen
        x={x - CANVAS_METHANE_FIRST_ATOM_X_ADJUSTMENT_FACTOR}
        y={
          CANVAS_MOLECULE_AREA_Y_POSITION -
          carbonAtomRadius -
          hydrogenAtomRadius +
          CANVAS_METHANE_FIRST_ATOM_Y_ADJUSTMENT_FACTOR
        }
      />
      <CanvasHydrogen
        x={x + CANVAS_METHANE_SECOND_ATOM_X_ADJUSTMENT_FACTOR}
        y={
          CANVAS_MOLECULE_AREA_Y_POSITION -
          carbonAtomRadius -
          hydrogenAtomRadius +
          CANVAS_METHANE_SECOND_ATOM_Y_ADJUSTMENT_FACTOR
        }
      />
      <CanvasHydrogen
        x={x + CANVAS_METHANE_THIRD_ATOM_X_ADJUSTMENT_FACTOR}
        y={
          CANVAS_MOLECULE_AREA_Y_POSITION +
          carbonAtomRadius +
          hydrogenAtomRadius -
          CANVAS_METHANE_THIRD_ATOM_Y_ADJUSTMENT_FACTOR
        }
      />
      <CanvasHydrogen
        x={x - CANVAS_METHANE_FOURTH_ATOM_X_ADJUSTMENT_FACTOR}
        y={
          CANVAS_MOLECULE_AREA_Y_POSITION +
          carbonAtomRadius +
          hydrogenAtomRadius -
          CANVAS_METHANE_FOURTH_ATOM_Y_ADJUSTMENT_FACTOR
        }
      />
    </Group>
  );
};

CanvasMethane.propTypes = {
  x: PropTypes.number.isRequired,
};

export default CanvasMethane;
