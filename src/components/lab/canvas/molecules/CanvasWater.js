import React from 'react';
import PropTypes from 'prop-types';
import { Group } from 'react-konva';
import CanvasOxygen from './atoms/CanvasOxygen';
import CanvasHydrogen from './atoms/CanvasHydrogen';
import {
  CANVAS_ATOM_DIMENSIONS,
  OXYGEN,
  HYDROGEN,
  CANVAS_WATER_ANGLED_ATOMS_X_ADJUSTMENT_FACTOR,
  CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS,
  POSITIVE_CHARGE,
  NEGATIVE_CHARGE,
  CANVAS_WATER_OSCILLATION_AMPLITUDES,
} from '../../../../config/constants';
import CanvasBondContainer from './CanvasBondContainer';

const CanvasWater = ({ x, y, shouldOscillate, sinusoidalOscillationPoint }) => {
  // destructure the oscillation amplitudes of atoms in this molecule
  const {
    TOP_HYDROGEN_AMPLITUDE,
    OXYGEN_AMPLITUDE,
    BOTTOM_HYDROGEN_AMPLITUDE,
  } = CANVAS_WATER_OSCILLATION_AMPLITUDES;

  // variables for determining center points of atoms in this molecule
  const oxygenAtomRadius = CANVAS_ATOM_DIMENSIONS[OXYGEN.size];
  const hydrogenAtomRadius = CANVAS_ATOM_DIMENSIONS[HYDROGEN.size];
  const topHydrogenAtomCenterPoint = {
    x: shouldOscillate
      ? x +
        CANVAS_WATER_ANGLED_ATOMS_X_ADJUSTMENT_FACTOR +
        TOP_HYDROGEN_AMPLITUDE * sinusoidalOscillationPoint
      : x + CANVAS_WATER_ANGLED_ATOMS_X_ADJUSTMENT_FACTOR,
    y:
      y -
      oxygenAtomRadius -
      CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS -
      hydrogenAtomRadius,
  };
  const oxygenAtomCenterPoint = {
    x: shouldOscillate ? x + OXYGEN_AMPLITUDE * sinusoidalOscillationPoint : x,
    y,
  };
  const bottomHydrogenAtomCenterPoint = {
    x: shouldOscillate
      ? x +
        CANVAS_WATER_ANGLED_ATOMS_X_ADJUSTMENT_FACTOR +
        BOTTOM_HYDROGEN_AMPLITUDE * sinusoidalOscillationPoint
      : x + CANVAS_WATER_ANGLED_ATOMS_X_ADJUSTMENT_FACTOR,
    y:
      y +
      oxygenAtomRadius +
      CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS +
      hydrogenAtomRadius,
  };

  return (
    <Group>
      {/* CanvasBondContainers need to be at the top here so that they fall behind atoms in the canvas */}
      <CanvasBondContainer
        from={topHydrogenAtomCenterPoint}
        to={oxygenAtomCenterPoint}
        numberOfBonds={1}
      />
      <CanvasBondContainer
        from={oxygenAtomCenterPoint}
        to={bottomHydrogenAtomCenterPoint}
        numberOfBonds={1}
      />
      <CanvasHydrogen
        x={topHydrogenAtomCenterPoint.x}
        y={topHydrogenAtomCenterPoint.y}
        charge={POSITIVE_CHARGE}
        atomColor={HYDROGEN.atomColor.STANDARD}
      />
      <CanvasOxygen
        x={oxygenAtomCenterPoint.x}
        y={oxygenAtomCenterPoint.y}
        charge={NEGATIVE_CHARGE}
      />
      <CanvasHydrogen
        x={bottomHydrogenAtomCenterPoint.x}
        y={bottomHydrogenAtomCenterPoint.y}
        charge={POSITIVE_CHARGE}
        atomColor={HYDROGEN.atomColor.STANDARD}
      />
    </Group>
  );
};

CanvasWater.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  shouldOscillate: PropTypes.bool.isRequired,
  sinusoidalOscillationPoint: PropTypes.number.isRequired,
};

export default CanvasWater;
