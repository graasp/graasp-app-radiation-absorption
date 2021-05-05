import React from 'react';
import PropTypes from 'prop-types';
import { Group } from 'react-konva';
import CanvasCarbon from './atoms/CanvasCarbon';
import CanvasHydrogen from './atoms/CanvasHydrogen';
import {
  CANVAS_ATOM_DIMENSIONS,
  HYDROGEN,
  CARBON,
  CANVAS_METHANE_TOP_LEFT_HYDROGEN_ATOM_X_ADJUSTMENT_FACTOR,
  CANVAS_METHANE_TOP_RIGHT_HYDROGEN_ATOM_X_ADJUSTMENT_FACTOR,
  CANVAS_METHANE_BOTTOM_RIGHT_HYDROGEN_ATOM_X_ADJUSTMENT_FACTOR,
  CANVAS_METHANE_BOTTOM_LEFT_HYDROGEN_ATOM_X_ADJUSTMENT_FACTOR,
  NEGATIVE_CHARGE,
  POSITIVE_CHARGE,
  CANVAS_METHANE_OSCILLATION_AMPLITUDES,
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

  // variables for determining center points of atoms in this molecule
  const hydrogenAtomRadius = CANVAS_ATOM_DIMENSIONS[HYDROGEN.size];
  const carbonAtomRadius = CANVAS_ATOM_DIMENSIONS[CARBON.size];
  const oneQuarterHydrogenAtomRadius = 0.25 * hydrogenAtomRadius;
  const oscillationFactor = oscillationDirection * sinusoidalOscillationPoint;

  // carbon atom
  const carbonAtomCenterX = shouldOscillate
    ? x + oscillationFactor * CARBON_AMPLITUDE
    : x;
  const carbonAtomCenterY = y;

  // top left hydrogen atom
  const topLeftHydrogenAtomInitialCenterX =
    x - CANVAS_METHANE_TOP_LEFT_HYDROGEN_ATOM_X_ADJUSTMENT_FACTOR;
  const topLeftHydrogenAtomCenterX = shouldOscillate
    ? topLeftHydrogenAtomInitialCenterX +
      oscillationFactor * TOP_LEFT_HYDROGEN_AMPLITUDE
    : topLeftHydrogenAtomInitialCenterX;
  const topLeftHydrogenAtomCenterY = y - carbonAtomRadius - hydrogenAtomRadius;

  // top right hydrogen atom
  const topRightHydrogenAtomInitialCenterX =
    x + CANVAS_METHANE_TOP_RIGHT_HYDROGEN_ATOM_X_ADJUSTMENT_FACTOR;
  const topRightHydrogenAtomInitialCenterY =
    y - carbonAtomRadius - oneQuarterHydrogenAtomRadius;
  const topRightHydrogenAtomCenterX = shouldOscillate
    ? topRightHydrogenAtomInitialCenterX +
      oscillationFactor * TOP_RIGHT_HYDROGEN_AMPLITUDE.X
    : topRightHydrogenAtomInitialCenterX;
  const topRightHydrogenAtomCenterY = shouldOscillate
    ? topRightHydrogenAtomInitialCenterY +
      oscillationFactor * TOP_RIGHT_HYDROGEN_AMPLITUDE.Y
    : topRightHydrogenAtomInitialCenterY;

  // bottom right hydrogen atom
  const bottomRightHydrogenAtomInitialCenterX =
    x + CANVAS_METHANE_BOTTOM_RIGHT_HYDROGEN_ATOM_X_ADJUSTMENT_FACTOR;
  const bottomHydrogenAtomInitialCenterY =
    y + carbonAtomRadius + oneQuarterHydrogenAtomRadius;
  const bottomRightHydrogenAtomCenterX = shouldOscillate
    ? bottomRightHydrogenAtomInitialCenterX +
      oscillationFactor * BOTTOM_RIGHT_HYDROGEN_AMPLITUDE.X
    : bottomRightHydrogenAtomInitialCenterX;
  const bottomRightHydrogenAtomCenterY = shouldOscillate
    ? bottomHydrogenAtomInitialCenterY +
      oscillationFactor * BOTTOM_RIGHT_HYDROGEN_AMPLITUDE.Y
    : bottomHydrogenAtomInitialCenterY;

  // bottom left hydrogen atom
  const bottomLeftHydrogenAtomInitialCenterX =
    x - CANVAS_METHANE_BOTTOM_LEFT_HYDROGEN_ATOM_X_ADJUSTMENT_FACTOR;
  const bottomLeftHydrogenAtomCenterX = shouldOscillate
    ? bottomLeftHydrogenAtomInitialCenterX +
      oscillationFactor * BOTTOM_LEFT_HYDROGEN_AMPLITUDE
    : bottomLeftHydrogenAtomInitialCenterX;
  const bottomLeftHydrogenAtomCenterY =
    y + carbonAtomRadius + hydrogenAtomRadius;

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
        atomColor={HYDROGEN.atomColor.STANDARD}
      />
      <CanvasHydrogen
        x={topRightHydrogenAtomCenterX}
        y={topRightHydrogenAtomCenterY}
        charge={POSITIVE_CHARGE}
        atomColor={HYDROGEN.atomColor.DARKER}
      />
      <CanvasHydrogen
        x={bottomRightHydrogenAtomCenterX}
        y={bottomRightHydrogenAtomCenterY}
        charge={POSITIVE_CHARGE}
        atomColor={HYDROGEN.atomColor.LIGHTER}
      />
      <CanvasHydrogen
        x={bottomLeftHydrogenAtomCenterX}
        y={bottomLeftHydrogenAtomCenterY}
        charge={POSITIVE_CHARGE}
        atomColor={HYDROGEN.atomColor.STANDARD}
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
