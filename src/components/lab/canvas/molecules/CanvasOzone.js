import React from 'react';
import PropTypes from 'prop-types';
import { Group } from 'react-konva';
import CanvasOxygen from './atoms/CanvasOxygen';
import {
  CANVAS_ATOM_DIMENSIONS,
  OXYGEN,
  CANVAS_OZONE_ANGLED_ATOMS_X_ADJUSTMENT_FACTOR,
  CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS,
  NEGATIVE_CHARGE,
  POSITIVE_CHARGE,
  CANVAS_OZONE_OSCILLATION_AMPLITUDES,
} from '../../../../config/constants';
import CanvasBondContainer from './CanvasBondContainer';

const CanvasOzone = ({ x, y, shouldOscillate, oscillationFormula }) => {
  // destructure the oscillation amplitudes of atoms in this molecule
  const {
    TOP_OXYGEN_AMPLITUDE,
    MIDDLE_OXYGEN_AMPLITUDE,
    BOTTOM_OXYGEN_AMPLITUDE,
  } = CANVAS_OZONE_OSCILLATION_AMPLITUDES;

  // variables for determining center points of atoms in this molecule
  const oxygenAtomRadius = CANVAS_ATOM_DIMENSIONS[OXYGEN.size];
  const topOxygenAtomCenterPoint = {
    x: shouldOscillate
      ? x +
        CANVAS_OZONE_ANGLED_ATOMS_X_ADJUSTMENT_FACTOR +
        TOP_OXYGEN_AMPLITUDE * oscillationFormula
      : x + CANVAS_OZONE_ANGLED_ATOMS_X_ADJUSTMENT_FACTOR,
    y:
      y -
      oxygenAtomRadius -
      CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS -
      oxygenAtomRadius,
  };
  const middleOxygenAtomCenterPoint = {
    x: shouldOscillate ? x + MIDDLE_OXYGEN_AMPLITUDE * oscillationFormula : x,
    y,
  };
  const bottomOxygenAtomCenterPoint = {
    x: shouldOscillate
      ? x +
        CANVAS_OZONE_ANGLED_ATOMS_X_ADJUSTMENT_FACTOR +
        BOTTOM_OXYGEN_AMPLITUDE * oscillationFormula
      : x + CANVAS_OZONE_ANGLED_ATOMS_X_ADJUSTMENT_FACTOR,
    y:
      y +
      oxygenAtomRadius +
      CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS +
      oxygenAtomRadius,
  };

  return (
    <Group>
      {/* CanvasBondContainers need to be at the top here so that they fall behind atoms in the canvas */}
      <CanvasBondContainer
        from={topOxygenAtomCenterPoint}
        to={middleOxygenAtomCenterPoint}
        numberOfBonds={1}
      />
      <CanvasBondContainer
        from={middleOxygenAtomCenterPoint}
        to={bottomOxygenAtomCenterPoint}
        numberOfBonds={2}
      />
      <CanvasOxygen
        x={topOxygenAtomCenterPoint.x}
        y={topOxygenAtomCenterPoint.y}
        charge={NEGATIVE_CHARGE}
      />
      <CanvasOxygen
        x={middleOxygenAtomCenterPoint.x}
        y={middleOxygenAtomCenterPoint.y}
        charge={POSITIVE_CHARGE}
      />
      <CanvasOxygen
        x={bottomOxygenAtomCenterPoint.x}
        y={bottomOxygenAtomCenterPoint.y}
        charge={NEGATIVE_CHARGE}
      />
    </Group>
  );
};

CanvasOzone.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  shouldOscillate: PropTypes.bool.isRequired,
  oscillationFormula: PropTypes.func.isRequired,
};

export default CanvasOzone;
