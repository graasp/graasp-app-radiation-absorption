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
  const carbonAtomCenterPoint = {
    x: shouldOscillate
      ? x + oscillationDirection * CARBON_AMPLITUDE * sinusoidalOscillationPoint
      : x,
    y,
  };
  const topLeftHydrogenAtomCenterPoint = {
    x: shouldOscillate
      ? x -
        CANVAS_METHANE_TOP_LEFT_HYDROGEN_ATOM_X_ADJUSTMENT_FACTOR +
        oscillationDirection *
          TOP_LEFT_HYDROGEN_AMPLITUDE *
          sinusoidalOscillationPoint
      : x - CANVAS_METHANE_TOP_LEFT_HYDROGEN_ATOM_X_ADJUSTMENT_FACTOR,
    y: y - carbonAtomRadius - hydrogenAtomRadius,
  };
  const topRightHydrogenAtomCenterPoint = {
    x: shouldOscillate
      ? x +
        CANVAS_METHANE_TOP_RIGHT_HYDROGEN_ATOM_X_ADJUSTMENT_FACTOR +
        oscillationDirection *
          TOP_RIGHT_HYDROGEN_AMPLITUDE.X *
          sinusoidalOscillationPoint
      : x + CANVAS_METHANE_TOP_RIGHT_HYDROGEN_ATOM_X_ADJUSTMENT_FACTOR,
    y: shouldOscillate
      ? y -
        carbonAtomRadius -
        0.25 * hydrogenAtomRadius +
        oscillationDirection *
          TOP_RIGHT_HYDROGEN_AMPLITUDE.Y *
          sinusoidalOscillationPoint
      : y - carbonAtomRadius - 0.25 * hydrogenAtomRadius,
  };
  const bottomRightHydrogenAtomCenterPoint = {
    x: shouldOscillate
      ? x +
        CANVAS_METHANE_BOTTOM_RIGHT_HYDROGEN_ATOM_X_ADJUSTMENT_FACTOR +
        oscillationDirection *
          BOTTOM_RIGHT_HYDROGEN_AMPLITUDE.X *
          sinusoidalOscillationPoint
      : x + CANVAS_METHANE_BOTTOM_RIGHT_HYDROGEN_ATOM_X_ADJUSTMENT_FACTOR,
    y: shouldOscillate
      ? y +
        carbonAtomRadius +
        0.25 * hydrogenAtomRadius +
        oscillationDirection *
          BOTTOM_RIGHT_HYDROGEN_AMPLITUDE.Y *
          sinusoidalOscillationPoint
      : y + carbonAtomRadius + 0.25 * hydrogenAtomRadius,
  };
  const bottomLeftHydrogenAtomCenterPoint = {
    x: shouldOscillate
      ? x -
        CANVAS_METHANE_BOTTOM_LEFT_HYDROGEN_ATOM_X_ADJUSTMENT_FACTOR +
        oscillationDirection *
          BOTTOM_LEFT_HYDROGEN_AMPLITUDE *
          sinusoidalOscillationPoint
      : x - CANVAS_METHANE_BOTTOM_LEFT_HYDROGEN_ATOM_X_ADJUSTMENT_FACTOR,
    y: y + carbonAtomRadius + hydrogenAtomRadius,
  };

  return (
    <Group>
      {/* CanvasBondContainers need to be at the top here so that they fall behind atoms in the canvas */}
      <CanvasBondContainer
        from={topLeftHydrogenAtomCenterPoint}
        to={carbonAtomCenterPoint}
        numberOfBonds={1}
      />
      <CanvasBondContainer
        from={topRightHydrogenAtomCenterPoint}
        to={carbonAtomCenterPoint}
        numberOfBonds={1}
      />
      <CanvasBondContainer
        from={bottomRightHydrogenAtomCenterPoint}
        to={carbonAtomCenterPoint}
        numberOfBonds={1}
      />
      <CanvasBondContainer
        from={bottomLeftHydrogenAtomCenterPoint}
        to={carbonAtomCenterPoint}
        numberOfBonds={1}
      />
      <CanvasCarbon
        x={carbonAtomCenterPoint.x}
        y={carbonAtomCenterPoint.y}
        charge={NEGATIVE_CHARGE}
      />
      <CanvasHydrogen
        x={topLeftHydrogenAtomCenterPoint.x}
        y={topLeftHydrogenAtomCenterPoint.y}
        charge={POSITIVE_CHARGE}
        atomColor={HYDROGEN.atomColor.STANDARD}
      />
      <CanvasHydrogen
        x={topRightHydrogenAtomCenterPoint.x}
        y={topRightHydrogenAtomCenterPoint.y}
        charge={POSITIVE_CHARGE}
        atomColor={HYDROGEN.atomColor.DARKER}
      />
      <CanvasHydrogen
        x={bottomRightHydrogenAtomCenterPoint.x}
        y={bottomRightHydrogenAtomCenterPoint.y}
        charge={POSITIVE_CHARGE}
        atomColor={HYDROGEN.atomColor.LIGHTER}
      />
      <CanvasHydrogen
        x={bottomLeftHydrogenAtomCenterPoint.x}
        y={bottomLeftHydrogenAtomCenterPoint.y}
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
