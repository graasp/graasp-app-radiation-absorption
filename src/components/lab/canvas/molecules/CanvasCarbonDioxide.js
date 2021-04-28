import React from 'react';
import PropTypes from 'prop-types';
import { Group } from 'react-konva';
import CanvasCarbon from './atoms/CanvasCarbon';
import CanvasOxygen from './atoms/CanvasOxygen';
import CanvasBondContainer from './CanvasBondContainer';
import {
  CANVAS_ATOM_DIMENSIONS,
  OXYGEN,
  CARBON,
  CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS,
  NEGATIVE_CHARGE,
  POSITIVE_CHARGE,
  CANVAS_CARBON_DIOXIDE_OSCILLATION_AMPLITUDES,
} from '../../../../config/constants';

const CanvasCarbonDioxide = ({ x, y, shouldOscillate, oscillationFormula }) => {
  // destructure the oscillation amplitudes of atoms in this molecule
  const {
    TOP_OXYGEN_AMPLITUDE,
    CARBON_AMPLITUDE,
    BOTTOM_OXYGEN_AMPLITUDE,
  } = CANVAS_CARBON_DIOXIDE_OSCILLATION_AMPLITUDES;

  // variables for determining center points of atoms in this molecule
  const oxygenAtomRadius = CANVAS_ATOM_DIMENSIONS[OXYGEN.size];
  const carbonAtomRadius = CANVAS_ATOM_DIMENSIONS[CARBON.size];
  const topOxygenAtomCenterPoint = {
    x: shouldOscillate ? x + TOP_OXYGEN_AMPLITUDE * oscillationFormula : x,
    y:
      y -
      carbonAtomRadius -
      CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS -
      oxygenAtomRadius,
  };
  const carbonAtomCenterPoint = {
    x: shouldOscillate ? x + CARBON_AMPLITUDE * oscillationFormula : x,
    y,
  };
  const bottomOxygenAtomCenterPoint = {
    x: shouldOscillate ? x + BOTTOM_OXYGEN_AMPLITUDE * oscillationFormula : x,
    y:
      y +
      carbonAtomRadius +
      CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS +
      oxygenAtomRadius,
  };

  return (
    <Group>
      {/* CanvasBondContainers need to be at the top here so that they fall behind atoms in the canvas */}
      <CanvasBondContainer
        from={{
          x: topOxygenAtomCenterPoint.x,
          y: topOxygenAtomCenterPoint.y,
        }}
        to={{
          x: carbonAtomCenterPoint.x,
          y: carbonAtomCenterPoint.y,
        }}
        numberOfBonds={2}
      />
      <CanvasBondContainer
        from={{
          x: carbonAtomCenterPoint.x,
          y: carbonAtomCenterPoint.y,
        }}
        to={{
          x: bottomOxygenAtomCenterPoint.x,
          y: bottomOxygenAtomCenterPoint.y,
        }}
        numberOfBonds={2}
      />
      <CanvasOxygen
        x={topOxygenAtomCenterPoint.x}
        y={topOxygenAtomCenterPoint.y}
        charge={NEGATIVE_CHARGE}
      />
      <CanvasCarbon
        x={carbonAtomCenterPoint.x}
        y={carbonAtomCenterPoint.y}
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

CanvasCarbonDioxide.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  shouldOscillate: PropTypes.bool.isRequired,
  oscillationFormula: PropTypes.func.isRequired,
};

export default CanvasCarbonDioxide;
