import React from 'react';
import PropTypes from 'prop-types';
import { Group } from 'react-konva';
import CanvasNitrogen from './atoms/CanvasNitrogen';
import CanvasOxygen from './atoms/CanvasOxygen';
import CanvasBondContainer from './CanvasBondContainer';
import {
  CANVAS_ATOM_DIMENSIONS,
  OXYGEN,
  NITROGEN,
  CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS,
  NEGATIVE_CHARGE,
  POSITIVE_CHARGE,
  CANVAS_NITROUS_OXIDE_OSCILLATION_AMPLITUDES,
} from '../../../../config/constants';

const CanvasNitrousOxide = ({
  x,
  y,
  shouldOscillate,
  sinusoidalOscillationPoint,
  oscillationDirection,
}) => {
  // destructure the oscillation amplitudes of atoms in this molecule
  const {
    TOP_NITROGEN_AMPLITUDE,
    MIDDLE_NITROGEN_AMPLITUDE,
    BOTTOM_OXYGEN_AMPLITUDE,
  } = CANVAS_NITROUS_OXIDE_OSCILLATION_AMPLITUDES;

  // variables for determining center points of atoms in this molecule
  const oxygenAtomRadius = CANVAS_ATOM_DIMENSIONS[OXYGEN.size];
  const nitrogenAtomRadius = CANVAS_ATOM_DIMENSIONS[NITROGEN.size];
  const oscillationFactor = oscillationDirection * sinusoidalOscillationPoint;

  // top nitrogen atom
  const topNitrogenAtomCenterX = shouldOscillate
    ? x + oscillationFactor * TOP_NITROGEN_AMPLITUDE
    : x;
  const topNitrogenAtomCenterY =
    y -
    nitrogenAtomRadius -
    CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS -
    nitrogenAtomRadius;

  // middle nitrogen atom
  const middleNitrogenAtomCenterX = shouldOscillate
    ? x + oscillationFactor * MIDDLE_NITROGEN_AMPLITUDE
    : x;
  const middleNitrogenAtomCenterY = y;

  /// bottom oxygen atom
  const bottomOxygenAtomCenterX = shouldOscillate
    ? x + oscillationFactor * BOTTOM_OXYGEN_AMPLITUDE
    : x;
  const bottomOxygenAtomCenterY =
    y +
    nitrogenAtomRadius +
    CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS +
    oxygenAtomRadius;

  return (
    <Group>
      {/* molecule bonds */}
      {/* note that these CanvasBondContainer components need to be at the top here so that they fall behind atoms on the canvas */}
      <CanvasBondContainer
        from={{ x: topNitrogenAtomCenterX, y: topNitrogenAtomCenterY }}
        to={{ x: middleNitrogenAtomCenterX, y: middleNitrogenAtomCenterY }}
        numberOfBonds={2}
      />
      <CanvasBondContainer
        from={{ x: middleNitrogenAtomCenterX, y: middleNitrogenAtomCenterY }}
        to={{ x: bottomOxygenAtomCenterX, y: bottomOxygenAtomCenterY }}
        numberOfBonds={2}
      />
      {/* molecule atoms */}
      <CanvasNitrogen
        x={topNitrogenAtomCenterX}
        y={topNitrogenAtomCenterY}
        charge={NEGATIVE_CHARGE}
      />
      <CanvasNitrogen
        x={middleNitrogenAtomCenterX}
        y={middleNitrogenAtomCenterY}
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

CanvasNitrousOxide.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  shouldOscillate: PropTypes.bool.isRequired,
  sinusoidalOscillationPoint: PropTypes.number.isRequired,
  oscillationDirection: PropTypes.number.isRequired,
};

export default CanvasNitrousOxide;
