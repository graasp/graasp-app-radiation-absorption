import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Group } from 'react-konva';
import CanvasCarbon from './atoms/CanvasCarbon';
import CanvasOxygen from './atoms/CanvasOxygen';
import CanvasBondContainer from './CanvasBondContainer';
import {
  CANVAS_ATOM_DIMENSIONS,
  OXYGEN,
  CARBON,
  CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS,
  NEGATIVE_CHARGE,
  POSITIVE_CHARGE,
  SPECTRUMS,
  INTERVALS_TO_REACH_MOLECULE_CENTER,
  INFRARED_RADIATION_PERIOD,
  Y_SHIFT_PER_INTERVAL,
  CANVAS_CARBON_DIOXIDE_OSCILLATION_AMPLITUDES,
} from '../../../../config/constants';

const CanvasCarbonDioxide = ({ x, y }) => {
  const intervalCount = useSelector(({ lab }) => lab.intervalCount);
  const spectrum = useSelector(({ lab }) => lab.spectrum);

  // variables for determining center points of atoms in this molecule
  // we know that after INTERVALS_TO_REACH_MOLECULE_CENTER, the radiation lines have reached the center of the molecule
  // at this point, if the spectrum is INFRARED, the molecule should begin oscillating
  // hence, after INTERVALS_TO_REACH_MOLECULE_CENTER, the x position of the molecule is moved every interval
  const oxygenAtomRadius = CANVAS_ATOM_DIMENSIONS[OXYGEN.size];
  const carbonAtomRadius = CANVAS_ATOM_DIMENSIONS[CARBON.size];
  const topOxygenAtomCenterPoint = {
    x:
      intervalCount > INTERVALS_TO_REACH_MOLECULE_CENTER &&
      spectrum === SPECTRUMS.INFRARED
        ? x +
          CANVAS_CARBON_DIOXIDE_OSCILLATION_AMPLITUDES.TOP_OXYGEN_ATOM *
            Math.sin(
              intervalCount * Y_SHIFT_PER_INTERVAL * INFRARED_RADIATION_PERIOD,
            )
        : x,
    y:
      y -
      carbonAtomRadius -
      CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS -
      oxygenAtomRadius,
  };
  const carbonAtomCenterPoint = {
    x:
      intervalCount > INTERVALS_TO_REACH_MOLECULE_CENTER &&
      spectrum === SPECTRUMS.INFRARED
        ? x +
          CANVAS_CARBON_DIOXIDE_OSCILLATION_AMPLITUDES.CARBON_ATOM *
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
          CANVAS_CARBON_DIOXIDE_OSCILLATION_AMPLITUDES.BOTTOM_OXYGEN_ATOM *
            Math.sin(
              intervalCount * Y_SHIFT_PER_INTERVAL * INFRARED_RADIATION_PERIOD,
            )
        : x,
    y:
      y +
      carbonAtomRadius +
      CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS +
      oxygenAtomRadius,
  };

  return (
    <Group>
      {/* CanvasBondContainers need to be at the top here so that they fall behind atoms in the canvas */}
      <CanvasBondContainer
        from={{
          x: topOxygenAtomCenterPoint.x,
          y: topOxygenAtomCenterPoint.y,
        }}
        to={{
          x: carbonAtomCenterPoint.x,
          y: carbonAtomCenterPoint.y,
        }}
        numberOfBonds={2}
      />
      <CanvasBondContainer
        from={{
          x: carbonAtomCenterPoint.x,
          y: carbonAtomCenterPoint.y,
        }}
        to={{
          x: bottomOxygenAtomCenterPoint.x,
          y: bottomOxygenAtomCenterPoint.y,
        }}
        numberOfBonds={2}
      />
      <CanvasOxygen
        x={topOxygenAtomCenterPoint.x}
        y={topOxygenAtomCenterPoint.y}
        charge={NEGATIVE_CHARGE}
      />
      <CanvasCarbon
        x={carbonAtomCenterPoint.x}
        y={carbonAtomCenterPoint.y}
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

CanvasCarbonDioxide.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default CanvasCarbonDioxide;
