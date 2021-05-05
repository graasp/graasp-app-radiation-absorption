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

const CanvasCarbonDioxide = ({
  x,
  y,
  shouldOscillate,
  sinusoidalOscillationPoint,
  oscillationDirection,
}) => {
  // destructure the oscillation amplitudes of atoms in this molecule
  const {
    TOP_OXYGEN_AMPLITUDE,
    CARBON_AMPLITUDE,
    BOTTOM_OXYGEN_AMPLITUDE,
  } = CANVAS_CARBON_DIOXIDE_OSCILLATION_AMPLITUDES;

  // variables for determining center points of atoms in this molecule
  const oxygenAtomRadius = CANVAS_ATOM_DIMENSIONS[OXYGEN.size];
  const carbonAtomRadius = CANVAS_ATOM_DIMENSIONS[CARBON.size];
  const oscillationFactor = oscillationDirection * sinusoidalOscillationPoint;

  // top oxygen atom
  const topOxygenAtomCenterX = shouldOscillate
    ? x + oscillationFactor * TOP_OXYGEN_AMPLITUDE
    : x;
  const topOxygenAtomCenterY =
    y -
    carbonAtomRadius -
    CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS -
    oxygenAtomRadius;

  // carbon atom
  const carbonAtomCenterX = shouldOscillate
    ? x + oscillationFactor * CARBON_AMPLITUDE
    : x;
  const carbonAtomCenterY = y;

  // bottom oxygen atom
  const bottomOxygenAtomCenterX = shouldOscillate
    ? x + oscillationFactor * BOTTOM_OXYGEN_AMPLITUDE
    : x;
  const bottomOxygenAtomCenterY =
    y +
    carbonAtomRadius +
    CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS +
    oxygenAtomRadius;

  return (
    <Group>
      {/* molecule bonds */}
      {/* note that these CanvasBondContainer components need to be at the top here so that they fall behind atoms on the canvas */}
      <CanvasBondContainer
        from={{
          x: topOxygenAtomCenterX,
          y: topOxygenAtomCenterY,
        }}
        to={{
          x: carbonAtomCenterX,
          y: carbonAtomCenterY,
        }}
        numberOfBonds={2}
      />
      <CanvasBondContainer
        from={{
          x: carbonAtomCenterX,
          y: carbonAtomCenterY,
        }}
        to={{
          x: bottomOxygenAtomCenterX,
          y: bottomOxygenAtomCenterY,
        }}
        numberOfBonds={2}
      />
      {/* molecule atoms */}
      <CanvasOxygen
        x={topOxygenAtomCenterX}
        y={topOxygenAtomCenterY}
        charge={NEGATIVE_CHARGE}
      />
      <CanvasCarbon
        x={carbonAtomCenterX}
        y={carbonAtomCenterY}
        charge={POSITIVE_CHARGE}
      />
      <CanvasOxygen
        x={bottomOxygenAtomCenterX}
        y={bottomOxygenAtomCenterY}
        charge={NEGATIVE_CHARGE}
      />
    </Group>
  );
};

CanvasCarbonDioxide.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  shouldOscillate: PropTypes.bool.isRequired,
  sinusoidalOscillationPoint: PropTypes.number.isRequired,
  oscillationDirection: PropTypes.number.isRequired,
};

export default CanvasCarbonDioxide;
