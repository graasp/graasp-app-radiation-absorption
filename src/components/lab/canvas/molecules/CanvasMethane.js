import React from 'react';
import { useSelector } from 'react-redux';
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
  INTERVALS_TO_REACH_MOLECULE_CENTER,
  SPECTRUMS,
  CANVAS_METHANE_OSCILLATION_AMPLITUDES,
  Y_SHIFT_PER_INTERVAL,
  INFRARED_RADIATION_PERIOD,
} from '../../../../config/constants';
import CanvasBondContainer from './CanvasBondContainer';

const CanvasMethane = ({ x, y }) => {
  const intervalCount = useSelector(({ lab }) => lab.intervalCount);
  const spectrum = useSelector(({ lab }) => lab.spectrum);

  // variables for determining center points of atoms in this molecule
  // we know that after INTERVALS_TO_REACH_MOLECULE_CENTER, the radiation lines have reached the center of the molecule
  // at this point, if the spectrum is INFRARED, the molecule should begin oscillating
  const hydrogenAtomRadius = CANVAS_ATOM_DIMENSIONS[HYDROGEN.size];
  const carbonAtomRadius = CANVAS_ATOM_DIMENSIONS[CARBON.size];
  const carbonAtomCenterPoint = {
    x:
      intervalCount > INTERVALS_TO_REACH_MOLECULE_CENTER &&
      spectrum === SPECTRUMS.INFRARED
        ? x +
          CANVAS_METHANE_OSCILLATION_AMPLITUDES.CARBON_ATOM *
            Math.sin(
              intervalCount * Y_SHIFT_PER_INTERVAL * INFRARED_RADIATION_PERIOD,
            )
        : x,
    y,
  };
  const topLeftHydrogenAtomCenterPoint = {
    x:
      intervalCount > INTERVALS_TO_REACH_MOLECULE_CENTER &&
      spectrum === SPECTRUMS.INFRARED
        ? x -
          CANVAS_METHANE_TOP_LEFT_HYDROGEN_ATOM_X_ADJUSTMENT_FACTOR +
          CANVAS_METHANE_OSCILLATION_AMPLITUDES.TOP_LEFT_HYDROGEN_ATOM *
            Math.sin(
              intervalCount * Y_SHIFT_PER_INTERVAL * INFRARED_RADIATION_PERIOD,
            )
        : x - CANVAS_METHANE_TOP_LEFT_HYDROGEN_ATOM_X_ADJUSTMENT_FACTOR,
    y: y - carbonAtomRadius - hydrogenAtomRadius,
  };
  const topRightHydrogenAtomCenterPoint = {
    x: x + CANVAS_METHANE_TOP_RIGHT_HYDROGEN_ATOM_X_ADJUSTMENT_FACTOR,
    y:
      intervalCount > INTERVALS_TO_REACH_MOLECULE_CENTER &&
      spectrum === SPECTRUMS.INFRARED
        ? y -
          carbonAtomRadius -
          0.25 * hydrogenAtomRadius +
          CANVAS_METHANE_OSCILLATION_AMPLITUDES.TOP_RIGHT_HYDROGEN_ATOM *
            Math.sin(
              intervalCount * Y_SHIFT_PER_INTERVAL * INFRARED_RADIATION_PERIOD,
            )
        : y - carbonAtomRadius - 0.25 * hydrogenAtomRadius,
  };
  const bottomRightHydrogenAtomCenterPoint = {
    x: x + CANVAS_METHANE_BOTTOM_RIGHT_HYDROGEN_ATOM_X_ADJUSTMENT_FACTOR,
    y:
      intervalCount > INTERVALS_TO_REACH_MOLECULE_CENTER &&
      spectrum === SPECTRUMS.INFRARED
        ? y +
          carbonAtomRadius +
          0.25 * hydrogenAtomRadius -
          CANVAS_METHANE_OSCILLATION_AMPLITUDES.BOTTOM_RIGHT_HYDROGEN_ATOM *
            Math.sin(
              intervalCount * Y_SHIFT_PER_INTERVAL * INFRARED_RADIATION_PERIOD,
            )
        : y + carbonAtomRadius + 0.25 * hydrogenAtomRadius,
  };
  const bottomLeftHydrogenAtomCenterPoint = {
    x:
      intervalCount > INTERVALS_TO_REACH_MOLECULE_CENTER &&
      spectrum === SPECTRUMS.INFRARED
        ? x -
          CANVAS_METHANE_BOTTOM_LEFT_HYDROGEN_ATOM_X_ADJUSTMENT_FACTOR +
          CANVAS_METHANE_OSCILLATION_AMPLITUDES.BOTTOM_LEFT_HYDROGEN_ATOM *
            Math.sin(
              intervalCount * Y_SHIFT_PER_INTERVAL * INFRARED_RADIATION_PERIOD,
            )
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
      />
      <CanvasHydrogen
        x={topRightHydrogenAtomCenterPoint.x}
        y={topRightHydrogenAtomCenterPoint.y}
        charge={POSITIVE_CHARGE}
      />
      <CanvasHydrogen
        x={bottomRightHydrogenAtomCenterPoint.x}
        y={bottomRightHydrogenAtomCenterPoint.y}
        charge={POSITIVE_CHARGE}
      />
      <CanvasHydrogen
        x={bottomLeftHydrogenAtomCenterPoint.x}
        y={bottomLeftHydrogenAtomCenterPoint.y}
        charge={POSITIVE_CHARGE}
      />
    </Group>
  );
};

CanvasMethane.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default CanvasMethane;
