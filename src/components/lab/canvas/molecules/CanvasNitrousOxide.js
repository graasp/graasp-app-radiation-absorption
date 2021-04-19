import React from 'react';
import { useSelector } from 'react-redux';
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
  SPECTRUMS,
  INTERVALS_TO_REACH_MOLECULE_CENTER,
  INFRARED_RADIATION_PERIOD,
  Y_SHIFT_PER_INTERVAL,
  CANVAS_NITROUS_OXIDE_OSCILLATION_AMPLITUDES,
} from '../../../../config/constants';

const CanvasNitrousOxide = ({ x, y }) => {
  const intervalCount = useSelector(({ lab }) => lab.intervalCount);
  const spectrum = useSelector(({ lab }) => lab.spectrum);

  // variables for determining center points of atoms in this molecule
  // we know that after INTERVALS_TO_REACH_MOLECULE_CENTER, the radiation lines have reached the center of the molecule
  // at this point, if the spectrum is INFRARED, the molecule should begin oscillating
  // hence, after INTERVALS_TO_REACH_MOLECULE_CENTER, the x position of the molecule is moved every interval
  const oxygenAtomRadius = CANVAS_ATOM_DIMENSIONS[OXYGEN.size];
  const nitrogenAtomRadius = CANVAS_ATOM_DIMENSIONS[NITROGEN.size];
  const topNitrogenAtomCenterPoint = {
    x:
      intervalCount > INTERVALS_TO_REACH_MOLECULE_CENTER &&
      spectrum === SPECTRUMS.INFRARED
        ? x +
          CANVAS_NITROUS_OXIDE_OSCILLATION_AMPLITUDES.TOP_NITROGEN_ATOM *
            Math.sin(
              intervalCount * Y_SHIFT_PER_INTERVAL * INFRARED_RADIATION_PERIOD,
            )
        : x,
    y:
      y -
      nitrogenAtomRadius -
      CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS -
      nitrogenAtomRadius,
  };
  const middleNitrogenAtomCenterPoint = {
    x:
      intervalCount > INTERVALS_TO_REACH_MOLECULE_CENTER &&
      spectrum === SPECTRUMS.INFRARED
        ? x +
          CANVAS_NITROUS_OXIDE_OSCILLATION_AMPLITUDES.MIDDLE_NITROGEN_ATOM *
            Math.sin(
              intervalCount * Y_SHIFT_PER_INTERVAL * INFRARED_RADIATION_PERIOD,
            )
        : x,
    y,
  };
  const bottomOxygenAtomCenterPoint = {
    x:
      intervalCount > INTERVALS_TO_REACH_MOLECULE_CENTER &&
      spectrum === SPECTRUMS.INFRARED
        ? x +
          CANVAS_NITROUS_OXIDE_OSCILLATION_AMPLITUDES.BOTTOM_OXYGEN_ATOM *
            Math.sin(
              intervalCount * Y_SHIFT_PER_INTERVAL * INFRARED_RADIATION_PERIOD,
            )
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
};

export default CanvasNitrousOxide;
