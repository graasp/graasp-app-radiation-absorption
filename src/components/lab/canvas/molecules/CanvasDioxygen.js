import React from 'react';
import PropTypes from 'prop-types';
import { Group } from 'react-konva';
import CanvasOxygen from './atoms/CanvasOxygen';
import CanvasBondContainer from './CanvasBondContainer';
import {
  CANVAS_ATOM_DIMENSIONS,
  OXYGEN,
  CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS,
} from '../../../../config/constants';

const CanvasDioxygen = ({ x, y }) => {
  const oxygenAtomRadius = CANVAS_ATOM_DIMENSIONS[OXYGEN.size];
  const topOxygenAtomInitialCenterPoint = {
    x,
    y: y - oxygenAtomRadius - CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS,
  };
  const bottomOxygenAtomInitialCenterPoint = {
    x,
    y: y + oxygenAtomRadius,
  };

  return (
    <Group>
      {/* CanvasBondContainers need to be at the top here so that they fall behind atoms in the canvas */}
      <CanvasBondContainer
        from={topOxygenAtomInitialCenterPoint}
        to={bottomOxygenAtomInitialCenterPoint}
        numberOfBonds={2}
      />
      <CanvasOxygen
        x={topOxygenAtomInitialCenterPoint.x}
        y={topOxygenAtomInitialCenterPoint.y}
      />
      <CanvasOxygen
        x={bottomOxygenAtomInitialCenterPoint.x}
        y={bottomOxygenAtomInitialCenterPoint.y}
      />
    </Group>
  );
};

CanvasDioxygen.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default CanvasDioxygen;
