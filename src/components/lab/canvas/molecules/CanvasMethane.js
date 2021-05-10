import React from 'react';
import PropTypes from 'prop-types';
import { Group } from 'react-konva';
import CanvasCarbon from './atoms/CanvasCarbon';
import CanvasHydrogen from './atoms/CanvasHydrogen';
import {
  HYDROGEN,
  NEGATIVE_CHARGE,
  POSITIVE_CHARGE,
  CANVAS_METHANE_OSCILLATION_AMPLITUDES,
  CANVAS_METHANE_Y_OFFSET_FOR_LEFT_HYDROGENS,
  CANVAS_METHANE_Y_OFFSET_FOR_RIGHT_HYDROGENS,
  CANVAS_METHANE_X_OFFSET_FOR_LEFT_HYDROGENS,
  CANVAS_METHANE_X_OFFSET_FOR_RIGHT_HYDROGENS,
} from '../../../../config/constants';
import CanvasBondContainer from './CanvasBondContainer';

const CanvasMethane = ({
  x,
  y,
  shouldOscillate,
  sinusoidalOscillationPoint,
  oscillationDirection,
}) => {
  // destructure the oscillation amplitudes of atoms in this molecule
  const {
    TOP_LEFT_HYDROGEN_AMPLITUDE,
    TOP_RIGHT_HYDROGEN_AMPLITUDE,
    BOTTOM_RIGHT_HYDROGEN_AMPLITUDE,
    BOTTOM_LEFT_HYDROGEN_AMPLITUDE,
    CARBON_AMPLITUDE,
  } = CANVAS_METHANE_OSCILLATION_AMPLITUDES;

  const oscillationFactor = oscillationDirection * sinusoidalOscillationPoint;

  // variables for determining center points of atoms in this molecule
  // carbon atom
  const carbonAtomCenterX = shouldOscillate
    ? x + oscillationFactor * CARBON_AMPLITUDE
    : x;
  const carbonAtomCenterY = y;

  // top left hydrogen atom
  const topLeftHydrogenAtomInitialCenterX =
    x - CANVAS_METHANE_X_OFFSET_FOR_LEFT_HYDROGENS;
  const topLeftHydrogenAtomInitialCenterY =
    y - CANVAS_METHANE_Y_OFFSET_FOR_LEFT_HYDROGENS;
  const topLeftHydrogenAtomCenterX = shouldOscillate
    ? topLeftHydrogenAtomInitialCenterX +
      oscillationFactor * TOP_LEFT_HYDROGEN_AMPLITUDE.X
    : topLeftHydrogenAtomInitialCenterX;
  const topLeftHydrogenAtomCenterY = shouldOscillate
    ? topLeftHydrogenAtomInitialCenterY +
      oscillationFactor * TOP_LEFT_HYDROGEN_AMPLITUDE.Y
    : topLeftHydrogenAtomInitialCenterY;

  // top right hydrogen atom
  const topRightHydrogenAtomInitialCenterX =
    x + CANVAS_METHANE_X_OFFSET_FOR_RIGHT_HYDROGENS;
  const topRightHydrogenAtomCenterX = shouldOscillate
    ? topRightHydrogenAtomInitialCenterX +
      oscillationFactor * TOP_RIGHT_HYDROGEN_AMPLITUDE
    : topRightHydrogenAtomInitialCenterX;
  const topRightHydrogenAtomCenterY =
    y - CANVAS_METHANE_Y_OFFSET_FOR_RIGHT_HYDROGENS;

  // bottom right hydrogen atom
  const bottomRightHydrogenAtomInitialCenterX =
    x + CANVAS_METHANE_X_OFFSET_FOR_RIGHT_HYDROGENS;
  const bottomRightHydrogenAtomCenterX = shouldOscillate
    ? bottomRightHydrogenAtomInitialCenterX +
      oscillationFactor * BOTTOM_RIGHT_HYDROGEN_AMPLITUDE
    : bottomRightHydrogenAtomInitialCenterX;
  const bottomRightHydrogenAtomCenterY =
    y + CANVAS_METHANE_Y_OFFSET_FOR_RIGHT_HYDROGENS;

  // bottom left hydrogen atom
  const bottomLeftHydrogenAtomInitialCenterX =
    x - CANVAS_METHANE_X_OFFSET_FOR_LEFT_HYDROGENS;
  const bottomLeftHydrogenAtomInitialCenterY =
    y + CANVAS_METHANE_Y_OFFSET_FOR_LEFT_HYDROGENS;
  const bottomLeftHydrogenAtomCenterX = shouldOscillate
    ? bottomLeftHydrogenAtomInitialCenterX +
      oscillationFactor * BOTTOM_LEFT_HYDROGEN_AMPLITUDE.X
    : bottomLeftHydrogenAtomInitialCenterX;
  const bottomLeftHydrogenAtomCenterY = shouldOscillate
    ? bottomLeftHydrogenAtomInitialCenterY +
      oscillationFactor * BOTTOM_LEFT_HYDROGEN_AMPLITUDE.Y
    : bottomLeftHydrogenAtomInitialCenterY;

  return (
    <Group>
      {/* molecule bonds */}
      {/* note that these CanvasBondContainer components need to be at the top here so that they fall behind atoms on the canvas */}
      <CanvasBondContainer
        from={{ x: topLeftHydrogenAtomCenterX, y: topLeftHydrogenAtomCenterY }}
        to={{ x: carbonAtomCenterX, y: carbonAtomCenterY }}
        numberOfBonds={1}
      />
      <CanvasBondContainer
        from={{
          x: topRightHydrogenAtomCenterX,
          y: topRightHydrogenAtomCenterY,
        }}
        to={{ x: carbonAtomCenterX, y: carbonAtomCenterY }}
        numberOfBonds={1}
      />
      <CanvasBondContainer
        from={{
          x: bottomRightHydrogenAtomCenterX,
          y: bottomRightHydrogenAtomCenterY,
        }}
        to={{ x: carbonAtomCenterX, y: carbonAtomCenterY }}
        numberOfBonds={1}
      />
      <CanvasBondContainer
        from={{
          x: bottomLeftHydrogenAtomCenterX,
          y: bottomLeftHydrogenAtomCenterY,
        }}
        to={{ x: carbonAtomCenterX, y: carbonAtomCenterY }}
        numberOfBonds={1}
      />
      {/* molecule atoms */}
      <CanvasCarbon
        x={carbonAtomCenterX}
        y={carbonAtomCenterY}
        charge={NEGATIVE_CHARGE}
      />
      <CanvasHydrogen
        x={topLeftHydrogenAtomCenterX}
        y={topLeftHydrogenAtomCenterY}
        charge={POSITIVE_CHARGE}
        atomColor={HYDROGEN.atomColor.DARKER}
      />
      <CanvasHydrogen
        x={topRightHydrogenAtomCenterX}
        y={topRightHydrogenAtomCenterY}
        charge={POSITIVE_CHARGE}
        atomColor={HYDROGEN.atomColor.STANDARD}
      />
      <CanvasHydrogen
        x={bottomRightHydrogenAtomCenterX}
        y={bottomRightHydrogenAtomCenterY}
        charge={POSITIVE_CHARGE}
        atomColor={HYDROGEN.atomColor.STANDARD}
      />
      <CanvasHydrogen
        x={bottomLeftHydrogenAtomCenterX}
        y={bottomLeftHydrogenAtomCenterY}
        charge={POSITIVE_CHARGE}
        atomColor={HYDROGEN.atomColor.LIGHTER}
      />
    </Group>
  );
};

CanvasMethane.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  shouldOscillate: PropTypes.bool.isRequired,
  sinusoidalOscillationPoint: PropTypes.number.isRequired,
  oscillationDirection: PropTypes.number.isRequired,
};

export default CanvasMethane;
