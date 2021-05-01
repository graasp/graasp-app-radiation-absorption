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
  const topNitrogenAtomCenterPoint = {
    x: shouldOscillate
      ? x + TOP_NITROGEN_AMPLITUDE * sinusoidalOscillationPoint
      : x,
    y:
      y -
      nitrogenAtomRadius -
      CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS -
      nitrogenAtomRadius,
  };
  const middleNitrogenAtomCenterPoint = {
    x: shouldOscillate
      ? x + MIDDLE_NITROGEN_AMPLITUDE * sinusoidalOscillationPoint
      : x,
    y,
  };
  const bottomOxygenAtomCenterPoint = {
    x: shouldOscillate
      ? x + BOTTOM_OXYGEN_AMPLITUDE * sinusoidalOscillationPoint
      : x,
    y:
      y +
      nitrogenAtomRadius +
      CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS +
      oxygenAtomRadius,
  };

  return (
    <Group>
      {/* CanvasBondContainers need to be at the top here so that they fall behind atoms in the canvas */}
      <CanvasBondContainer
        from={topNitrogenAtomCenterPoint}
        to={middleNitrogenAtomCenterPoint}
        numberOfBonds={2}
      />
      <CanvasBondContainer
        from={middleNitrogenAtomCenterPoint}
        to={bottomOxygenAtomCenterPoint}
        numberOfBonds={2}
      />
      <CanvasNitrogen
        x={topNitrogenAtomCenterPoint.x}
        y={topNitrogenAtomCenterPoint.y}
        charge={NEGATIVE_CHARGE}
      />
      <CanvasNitrogen
        x={middleNitrogenAtomCenterPoint.x}
        y={middleNitrogenAtomCenterPoint.y}
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

CanvasNitrousOxide.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  shouldOscillate: PropTypes.bool.isRequired,
  sinusoidalOscillationPoint: PropTypes.number.isRequired,
};

export default CanvasNitrousOxide;
