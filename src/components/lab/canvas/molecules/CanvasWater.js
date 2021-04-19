import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Group } from 'react-konva';
import CanvasOxygen from './atoms/CanvasOxygen';
import CanvasHydrogen from './atoms/CanvasHydrogen';
import {
  CANVAS_ATOM_DIMENSIONS,
  OXYGEN,
  HYDROGEN,
  CANVAS_WATER_ANGLED_ATOMS_X_ADJUSTMENT_FACTOR,
  CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS,
  POSITIVE_CHARGE,
  NEGATIVE_CHARGE,
  SPECTRUMS,
  INTERVALS_TO_REACH_MOLECULE_CENTER,
  INFRARED_RADIATION_PERIOD,
  Y_SHIFT_PER_INTERVAL,
  CANVAS_WATER_OSCILLATION_AMPLITUDES,
} from '../../../../config/constants';
import CanvasBondContainer from './CanvasBondContainer';

const CanvasWater = ({ x, y }) => {
  const intervalCount = useSelector(({ lab }) => lab.intervalCount);
  const spectrum = useSelector(({ lab }) => lab.spectrum);

  // variables for determining center points of atoms in this molecule
  // we know that after INTERVALS_TO_REACH_MOLECULE_CENTER, the radiation lines have reached the center of the molecule
  // at this point, if the spectrum is INFRARED, the molecule should begin oscillating
  // hence, after INTERVALS_TO_REACH_MOLECULE_CENTER, the x position of the molecule is moved every interval
  const oxygenAtomRadius = CANVAS_ATOM_DIMENSIONS[OXYGEN.size];
  const hydrogenAtomRadius = CANVAS_ATOM_DIMENSIONS[HYDROGEN.size];
  const topHydrogenAtomCenterPoint = {
    x:
      intervalCount > INTERVALS_TO_REACH_MOLECULE_CENTER &&
      spectrum === SPECTRUMS.INFRARED
        ? x +
          CANVAS_WATER_ANGLED_ATOMS_X_ADJUSTMENT_FACTOR +
          CANVAS_WATER_OSCILLATION_AMPLITUDES.TOP_HYDROGEN_ATOM *
            Math.sin(
              intervalCount * Y_SHIFT_PER_INTERVAL * INFRARED_RADIATION_PERIOD,
            )
        : x + CANVAS_WATER_ANGLED_ATOMS_X_ADJUSTMENT_FACTOR,
    y:
      y -
      oxygenAtomRadius -
      CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS -
      hydrogenAtomRadius,
  };
  const oxygenAtomCenterPoint = {
    x:
      intervalCount > INTERVALS_TO_REACH_MOLECULE_CENTER &&
      spectrum === SPECTRUMS.INFRARED
        ? x +
          CANVAS_WATER_OSCILLATION_AMPLITUDES.OXYGEN_ATOM *
            Math.sin(
              intervalCount * Y_SHIFT_PER_INTERVAL * INFRARED_RADIATION_PERIOD,
            )
        : x,
    y,
  };
  const bottomHydrogenAtomCenterPoint = {
    x:
      intervalCount > INTERVALS_TO_REACH_MOLECULE_CENTER &&
      spectrum === SPECTRUMS.INFRARED
        ? x +
          CANVAS_WATER_ANGLED_ATOMS_X_ADJUSTMENT_FACTOR +
          CANVAS_WATER_OSCILLATION_AMPLITUDES.BOTTOM_HYDROGEN_ATOM *
            Math.sin(
              intervalCount * Y_SHIFT_PER_INTERVAL * INFRARED_RADIATION_PERIOD,
            )
        : x + CANVAS_WATER_ANGLED_ATOMS_X_ADJUSTMENT_FACTOR,
    y:
      y +
      oxygenAtomRadius +
      CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS +
      hydrogenAtomRadius,
  };

  return (
    <Group>
      {/* CanvasBondContainers need to be at the top here so that they fall behind atoms in the canvas */}
      <CanvasBondContainer
        from={topHydrogenAtomCenterPoint}
        to={oxygenAtomCenterPoint}
        numberOfBonds={1}
      />
      <CanvasBondContainer
        from={oxygenAtomCenterPoint}
        to={bottomHydrogenAtomCenterPoint}
        numberOfBonds={1}
      />
      <CanvasHydrogen
        x={topHydrogenAtomCenterPoint.x}
        y={topHydrogenAtomCenterPoint.y}
        charge={POSITIVE_CHARGE}
      />
      <CanvasOxygen
        x={oxygenAtomCenterPoint.x}
        y={oxygenAtomCenterPoint.y}
        charge={NEGATIVE_CHARGE}
      />
      <CanvasHydrogen
        x={bottomHydrogenAtomCenterPoint.x}
        y={bottomHydrogenAtomCenterPoint.y}
        charge={POSITIVE_CHARGE}
      />
    </Group>
  );
};

CanvasWater.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default CanvasWater;
