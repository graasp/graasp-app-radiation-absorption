import React from 'react';
import PropTypes from 'prop-types';
import { Group } from 'react-konva';
import CanvasOxygen from './atoms/CanvasOxygen';
import {
  CANVAS_ATOM_DIMENSIONS,
  OXYGEN,
  CANVAS_MOLECULE_AREA_Y_POSITION,
  CANVAS_OZONE_ANGLED_ATOMS_X_ADJUSTMENT_FACTOR,
  CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS,
  NEGATIVE_CHARGE,
  POSITIVE_CHARGE,
} from '../../../../config/constants';
import CanvasBondContainer from './CanvasBondContainer';

const CanvasOzone = ({ x }) => {
  const oxygenAtomRadius = CANVAS_ATOM_DIMENSIONS[OXYGEN.size];

  const moleculeCenterPoints = {
    topOxygenAtomCenterPoint: {
      x: x + CANVAS_OZONE_ANGLED_ATOMS_X_ADJUSTMENT_FACTOR * 0.5,
      y:
        CANVAS_MOLECULE_AREA_Y_POSITION -
        oxygenAtomRadius -
        oxygenAtomRadius -
        CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS,
    },
    middleOxygenAtomCenterPoint: {
      x: x - CANVAS_OZONE_ANGLED_ATOMS_X_ADJUSTMENT_FACTOR * 0.5,
      y: CANVAS_MOLECULE_AREA_Y_POSITION,
    },
    bottomOxygenAtomCenterPoint: {
      x: x + CANVAS_OZONE_ANGLED_ATOMS_X_ADJUSTMENT_FACTOR * 0.5,
      y:
        CANVAS_MOLECULE_AREA_Y_POSITION +
        oxygenAtomRadius +
        oxygenAtomRadius +
        CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS,
    },
  };

  const {
    topOxygenAtomCenterPoint,
    middleOxygenAtomCenterPoint,
    bottomOxygenAtomCenterPoint,
  } = moleculeCenterPoints;

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
};

export default CanvasOzone;
