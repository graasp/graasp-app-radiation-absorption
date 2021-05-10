import React from 'react';
import PropTypes from 'prop-types';
import { Group } from 'react-konva';
import CanvasOxygen from './atoms/CanvasOxygen';
import CanvasHydrogen from './atoms/CanvasHydrogen';
import {
  HYDROGEN,
  POSITIVE_CHARGE,
  NEGATIVE_CHARGE,
  CANVAS_WATER_OSCILLATION_AMPLITUDES,
  CANVAS_WATER_X_OFFSET_FOR_HYDROGEN,
  CANVAS_WATER_Y_OFFSET_FOR_HYDROGEN,
} from '../../../../config/constants';
import CanvasBondContainer from './CanvasBondContainer';

const CanvasWater = ({
  x,
  y,
  shouldOscillate,
  sinusoidalOscillationPoint,
  oscillationDirection,
}) => {
  // destructure the oscillation amplitudes of atoms in this molecule
  const {
    TOP_HYDROGEN_AMPLITUDE,
    OXYGEN_AMPLITUDE,
    BOTTOM_HYDROGEN_AMPLITUDE,
  } = CANVAS_WATER_OSCILLATION_AMPLITUDES;

  const oscillationFactor = oscillationDirection * sinusoidalOscillationPoint;

  // variables for determining center points of atoms in this molecule
  // top hydrogen atom
  const topHydrogenAtomInitialCenterX = x - CANVAS_WATER_X_OFFSET_FOR_HYDROGEN;
  const topHydrogenAtomCenterX = shouldOscillate
    ? topHydrogenAtomInitialCenterX + oscillationFactor * TOP_HYDROGEN_AMPLITUDE
    : topHydrogenAtomInitialCenterX;
  const topHydrogenAtomCenterY = y - CANVAS_WATER_Y_OFFSET_FOR_HYDROGEN;

  // oxygen atom
  const oxygenAtomCenterX = shouldOscillate
    ? x + oscillationFactor * OXYGEN_AMPLITUDE
    : x;
  const oxygenAtomCenterY = y;

  // bottom hydrogen atom
  const bottomHydrogenAtomInitialCenterX =
    x - CANVAS_WATER_X_OFFSET_FOR_HYDROGEN;
  const bottomHydrogenAtomCenterX = shouldOscillate
    ? bottomHydrogenAtomInitialCenterX +
      oscillationFactor * BOTTOM_HYDROGEN_AMPLITUDE
    : bottomHydrogenAtomInitialCenterX;
  const bottomHydrogenAtomCenterY = y + CANVAS_WATER_Y_OFFSET_FOR_HYDROGEN;

  return (
    <Group>
      {/* molecule bonds */}
      {/* note that these CanvasBondContainer components need to be at the top here so that they fall behind atoms on the canvas */}
      <CanvasBondContainer
        from={{ x: topHydrogenAtomCenterX, y: topHydrogenAtomCenterY }}
        to={{ x: oxygenAtomCenterX, y: oxygenAtomCenterY }}
        numberOfBonds={1}
      />
      <CanvasBondContainer
        from={{ x: oxygenAtomCenterX, y: oxygenAtomCenterY }}
        to={{ x: bottomHydrogenAtomCenterX, y: bottomHydrogenAtomCenterY }}
        numberOfBonds={1}
      />
      {/* molecule atoms */}
      <CanvasHydrogen
        x={topHydrogenAtomCenterX}
        y={topHydrogenAtomCenterY}
        charge={POSITIVE_CHARGE}
        atomColor={HYDROGEN.atomColor.STANDARD}
      />
      <CanvasOxygen
        x={oxygenAtomCenterX}
        y={oxygenAtomCenterY}
        charge={NEGATIVE_CHARGE}
      />
      <CanvasHydrogen
        x={bottomHydrogenAtomCenterX}
        y={bottomHydrogenAtomCenterY}
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
  oscillationDirection: PropTypes.number.isRequired,
};

export default CanvasWater;
