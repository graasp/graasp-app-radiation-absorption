import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Group } from 'react-konva';
import CanvasOxygen from './atoms/CanvasOxygen';
import {
  CANVAS_ATOM_DIMENSIONS,
  OXYGEN,
  CANVAS_OZONE_ANGLED_ATOMS_X_ADJUSTMENT_FACTOR,
  CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS,
  NEGATIVE_CHARGE,
  POSITIVE_CHARGE,
  SPECTRUMS,
  INTERVALS_TO_REACH_MOLECULE_CENTER,
  INFRARED_RADIATION_PERIOD,
  Y_SHIFT_PER_INTERVAL,
  CANVAS_OZONE_OSCILLATION_AMPLITUDES,
} from '../../../../config/constants';
import CanvasBondContainer from './CanvasBondContainer';

const CanvasOzone = ({ x, y }) => {
  const intervalCount = useSelector(({ lab }) => lab.intervalCount);
  const spectrum = useSelector(({ lab }) => lab.spectrum);

  // variables for determining center points of atoms in this molecule
  // we know that after INTERVALS_TO_REACH_MOLECULE_CENTER, the radiation lines have reached the center of the molecule
  // at this point, if the spectrum is INFRARED, the molecule should begin oscillating
  // hence, after INTERVALS_TO_REACH_MOLECULE_CENTER, the x position of the molecule is moved every interval
  const oxygenAtomRadius = CANVAS_ATOM_DIMENSIONS[OXYGEN.size];
  const topOxygenAtomCenterPoint = {
    x:
      intervalCount > INTERVALS_TO_REACH_MOLECULE_CENTER &&
      spectrum === SPECTRUMS.INFRARED
        ? x +
          CANVAS_OZONE_ANGLED_ATOMS_X_ADJUSTMENT_FACTOR +
          CANVAS_OZONE_OSCILLATION_AMPLITUDES.TOP_OXYGEN_ATOM *
            Math.sin(
              intervalCount * Y_SHIFT_PER_INTERVAL * INFRARED_RADIATION_PERIOD,
            )
        : x + CANVAS_OZONE_ANGLED_ATOMS_X_ADJUSTMENT_FACTOR,
    y:
      y -
      oxygenAtomRadius -
      CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS -
      oxygenAtomRadius,
  };
  const middleOxygenAtomCenterPoint = {
    x:
      intervalCount > INTERVALS_TO_REACH_MOLECULE_CENTER &&
      spectrum === SPECTRUMS.INFRARED
        ? x +
          CANVAS_OZONE_OSCILLATION_AMPLITUDES.MIDDLE_OXYGEN_ATOM *
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
          CANVAS_OZONE_ANGLED_ATOMS_X_ADJUSTMENT_FACTOR +
          CANVAS_OZONE_OSCILLATION_AMPLITUDES.BOTTOM_OXYGEN_ATOM *
            Math.sin(
              intervalCount * Y_SHIFT_PER_INTERVAL * INFRARED_RADIATION_PERIOD,
            )
        : x + CANVAS_OZONE_ANGLED_ATOMS_X_ADJUSTMENT_FACTOR,
    y:
      y +
      oxygenAtomRadius +
      CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS +
      oxygenAtomRadius,
  };

  return (
    <Group>
      {/* CanvasBondContainers need to be at the top here so that they fall behind atoms in the canvas */}
      <CanvasBondContainer
        from={topOxygenAtomCenterPoint}
        to={middleOxygenAtomCenterPoint}
        numberOfBonds={1}
      />
      <CanvasBondContainer
        from={middleOxygenAtomCenterPoint}
        to={bottomOxygenAtomCenterPoint}
        numberOfBonds={2}
      />
      <CanvasOxygen
        x={topOxygenAtomCenterPoint.x}
        y={topOxygenAtomCenterPoint.y}
        charge={NEGATIVE_CHARGE}
      />
      <CanvasOxygen
        x={middleOxygenAtomCenterPoint.x}
        y={middleOxygenAtomCenterPoint.y}
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

CanvasOzone.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default CanvasOzone;
