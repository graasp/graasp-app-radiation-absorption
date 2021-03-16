import React from 'react';
import PropTypes from 'prop-types';
import { Group } from 'react-konva';
import CanvasOxygen from './atoms/CanvasOxygen';
import CanvasBondContainer from './CanvasBondContainer';
import {
  CANVAS_ATOM_DIMENSIONS,
  OXYGEN,
  CANVAS_MOLECULE_AREA_Y_POSITION,
  CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS,
} from '../../../../config/constants';

const CanvasDioxygen = ({ x }) => {
  const oxygenAtomRadius = CANVAS_ATOM_DIMENSIONS[OXYGEN.size];

  const moleculeCenterPoints = {
    topOxygenAtomCenterPoint: {
      x,
      y:
        CANVAS_MOLECULE_AREA_Y_POSITION -
        oxygenAtomRadius -
        CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS,
    },
    bottomOxygenAtomCenterPoint: {
      x,
      y: CANVAS_MOLECULE_AREA_Y_POSITION + oxygenAtomRadius,
    },
  };

  const {
    topOxygenAtomCenterPoint,
    bottomOxygenAtomCenterPoint,
  } = moleculeCenterPoints;

  return (
    <Group>
      {/* CanvasBondContainers need to be at the top here so that they fall behind atoms in the canvas */}
      <CanvasBondContainer
        from={topOxygenAtomCenterPoint}
        to={bottomOxygenAtomCenterPoint}
        numberOfBonds={2}
      />
      <CanvasOxygen
        x={topOxygenAtomCenterPoint.x}
        y={topOxygenAtomCenterPoint.y}
      />
      <CanvasOxygen
        x={bottomOxygenAtomCenterPoint.x}
        y={bottomOxygenAtomCenterPoint.y}
      />
    </Group>
  );
};

CanvasDioxygen.propTypes = {
  x: PropTypes.number.isRequired,
};

export default CanvasDioxygen;
