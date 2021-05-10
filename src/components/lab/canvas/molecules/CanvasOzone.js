import React from 'react';
import PropTypes from 'prop-types';
import { Group } from 'react-konva';
import CanvasOxygen from './atoms/CanvasOxygen';
import {
  NEGATIVE_CHARGE,
  POSITIVE_CHARGE,
  CANVAS_OZONE_OSCILLATION_AMPLITUDES,
  CANVAS_OZONE_X_OFFSET_FOR_OXYGEN,
  CANVAS_OZONE_Y_OFFSET_FOR_OXYGEN,
} from '../../../../config/constants';
import CanvasBondContainer from './CanvasBondContainer';

const CanvasOzone = ({
  x,
  y,
  shouldOscillate,
  sinusoidalOscillationPoint,
  oscillationDirection,
}) => {
  // destructure the oscillation amplitudes of atoms in this molecule
  const {
    TOP_OXYGEN_AMPLITUDE,
    MIDDLE_OXYGEN_AMPLITUDE,
    BOTTOM_OXYGEN_AMPLITUDE,
  } = CANVAS_OZONE_OSCILLATION_AMPLITUDES;

  const oscillationFactor = oscillationDirection * sinusoidalOscillationPoint;

  // variables for determining center points of atoms in this molecule
  // top oxygen atom
  const topOxygenAtomInitialCenterX = x - CANVAS_OZONE_X_OFFSET_FOR_OXYGEN;
  const topOxygenAtomCenterX = shouldOscillate
    ? topOxygenAtomInitialCenterX + oscillationFactor * TOP_OXYGEN_AMPLITUDE
    : topOxygenAtomInitialCenterX;
  const topOxygenAtomCenterY = y - CANVAS_OZONE_Y_OFFSET_FOR_OXYGEN;

  // middle oxygen atom
  const middleOxygenAtomCenterX = shouldOscillate
    ? x + oscillationFactor * MIDDLE_OXYGEN_AMPLITUDE
    : x;
  const middleOxygenAtomCenterY = y;

  // bottom oxygen atom
  const bottomOxygenAtomInitialCenterX = x - CANVAS_OZONE_X_OFFSET_FOR_OXYGEN;
  const bottomOxygenAtomCenterX = shouldOscillate
    ? bottomOxygenAtomInitialCenterX +
      oscillationFactor * BOTTOM_OXYGEN_AMPLITUDE
    : bottomOxygenAtomInitialCenterX;
  const bottomOxygenAtomCenterY = y + CANVAS_OZONE_Y_OFFSET_FOR_OXYGEN;

  return (
    <Group>
      {/* molecule bonds */}
      {/* note that these CanvasBondContainer components need to be at the top here so that they fall behind atoms on the canvas */}
      <CanvasBondContainer
        from={{ x: topOxygenAtomCenterX, y: topOxygenAtomCenterY }}
        to={{ x: middleOxygenAtomCenterX, y: middleOxygenAtomCenterY }}
        numberOfBonds={2}
      />
      <CanvasBondContainer
        from={{ x: middleOxygenAtomCenterX, y: middleOxygenAtomCenterY }}
        to={{ x: bottomOxygenAtomCenterX, y: bottomOxygenAtomCenterY }}
        numberOfBonds={1}
      />
      {/* molecule atoms */}
      <CanvasOxygen
        x={topOxygenAtomCenterX}
        y={topOxygenAtomCenterY}
        charge={NEGATIVE_CHARGE}
      />
      <CanvasOxygen
        x={middleOxygenAtomCenterX}
        y={middleOxygenAtomCenterY}
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

CanvasOzone.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  shouldOscillate: PropTypes.bool.isRequired,
  sinusoidalOscillationPoint: PropTypes.number.isRequired,
  oscillationDirection: PropTypes.number.isRequired,
};

export default CanvasOzone;
