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

  // top oxygen atom
  const topOxygenAtomCenterX = x;
  const topOxygenAtomCenterY =
    y - oxygenAtomRadius - CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS;

  // bottom oxygen atom
  const bottomOxygenAtomCenterX = x;
  const bottomOxygenAtomCenterY = y + oxygenAtomRadius;

  return (
    <Group>
      {/* molecule bonds */}
      {/* note that these CanvasBondContainer components need to be at the top here so that they fall behind atoms on the canvas */}
      <CanvasBondContainer
        from={{ x: topOxygenAtomCenterX, y: topOxygenAtomCenterY }}
        to={{ x: bottomOxygenAtomCenterX, y: bottomOxygenAtomCenterY }}
        numberOfBonds={2}
      />
      {/* molecule atoms */}
      <CanvasOxygen x={topOxygenAtomCenterX} y={topOxygenAtomCenterY} />
      <CanvasOxygen x={bottomOxygenAtomCenterX} y={bottomOxygenAtomCenterY} />
    </Group>
  );
};

CanvasDioxygen.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default CanvasDioxygen;
