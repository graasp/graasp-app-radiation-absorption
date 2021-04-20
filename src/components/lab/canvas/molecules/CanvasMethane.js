import React from 'react';
import PropTypes from 'prop-types';
import { Group } from 'react-konva';
import CanvasCarbon from './atoms/CanvasCarbon';
import CanvasHydrogen from './atoms/CanvasHydrogen';
import {
  CANVAS_ATOM_DIMENSIONS,
  HYDROGEN,
  CARBON,
  CANVAS_METHANE_FIRST_ATOM_X_ADJUSTMENT_FACTOR,
  CANVAS_METHANE_FIRST_ATOM_Y_ADJUSTMENT_FACTOR,
  CANVAS_METHANE_SECOND_ATOM_X_ADJUSTMENT_FACTOR,
  CANVAS_METHANE_SECOND_ATOM_Y_ADJUSTMENT_FACTOR,
  CANVAS_METHANE_THIRD_ATOM_X_ADJUSTMENT_FACTOR,
  CANVAS_METHANE_THIRD_ATOM_Y_ADJUSTMENT_FACTOR,
  CANVAS_METHANE_FOURTH_ATOM_X_ADJUSTMENT_FACTOR,
  CANVAS_METHANE_FOURTH_ATOM_Y_ADJUSTMENT_FACTOR,
  NEGATIVE_CHARGE,
  POSITIVE_CHARGE,
} from '../../../../config/constants';

const CanvasMethane = ({ x, y }) => {
  // constants to determine initial center points of atoms in this molecule when component mounts
  // the 'initial center points' are also used in the useEffect hook below, to reset an oscillating molecule
  const hydrogenAtomRadius = CANVAS_ATOM_DIMENSIONS[HYDROGEN.size];
  const carbonAtomRadius = CANVAS_ATOM_DIMENSIONS[CARBON.size];
  const carbonAtomInitialCenterPoint = {
    x,
    y,
  };
  const topLeftHydrogenAtomInitialCenterPoint = {
    x: x - CANVAS_METHANE_FIRST_ATOM_X_ADJUSTMENT_FACTOR,
    y:
      y -
      carbonAtomRadius -
      hydrogenAtomRadius +
      CANVAS_METHANE_FIRST_ATOM_Y_ADJUSTMENT_FACTOR,
  };
  const topRightHydrogenAtomInitialCenterPoint = {
    x: x + CANVAS_METHANE_SECOND_ATOM_X_ADJUSTMENT_FACTOR,
    y:
      y -
      carbonAtomRadius -
      hydrogenAtomRadius +
      CANVAS_METHANE_SECOND_ATOM_Y_ADJUSTMENT_FACTOR,
  };
  const bottomRightHydrogenAtomInitialCenterPoint = {
    x: x + CANVAS_METHANE_THIRD_ATOM_X_ADJUSTMENT_FACTOR,
    y:
      y +
      carbonAtomRadius +
      hydrogenAtomRadius -
      CANVAS_METHANE_THIRD_ATOM_Y_ADJUSTMENT_FACTOR,
  };
  const bottomLeftHydrogenAtomInitialCenterPoint = {
    x: x - CANVAS_METHANE_FOURTH_ATOM_X_ADJUSTMENT_FACTOR,
    y:
      y +
      carbonAtomRadius +
      hydrogenAtomRadius -
      CANVAS_METHANE_FOURTH_ATOM_Y_ADJUSTMENT_FACTOR,
  };

  return (
    <Group>
      <CanvasCarbon
        x={carbonAtomInitialCenterPoint.x}
        y={carbonAtomInitialCenterPoint.y}
        charge={NEGATIVE_CHARGE}
      />
      <CanvasHydrogen
        x={topLeftHydrogenAtomInitialCenterPoint.x}
        y={topLeftHydrogenAtomInitialCenterPoint.y}
        charge={POSITIVE_CHARGE}
      />
      <CanvasHydrogen
        x={topRightHydrogenAtomInitialCenterPoint.x}
        y={topRightHydrogenAtomInitialCenterPoint.y}
        charge={POSITIVE_CHARGE}
      />
      <CanvasHydrogen
        x={bottomRightHydrogenAtomInitialCenterPoint.x}
        y={bottomRightHydrogenAtomInitialCenterPoint.y}
        charge={POSITIVE_CHARGE}
      />
      <CanvasHydrogen
        x={bottomLeftHydrogenAtomInitialCenterPoint.x}
        y={bottomLeftHydrogenAtomInitialCenterPoint.y}
        charge={POSITIVE_CHARGE}
      />
    </Group>
  );
};

CanvasMethane.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default CanvasMethane;
