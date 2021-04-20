import React from 'react';
import PropTypes from 'prop-types';
import { Group } from 'react-konva';
import CanvasNitrogen from './atoms/CanvasNitrogen';
import CanvasBondContainer from './CanvasBondContainer';
import {
  CANVAS_ATOM_DIMENSIONS,
  NITROGEN,
  CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS,
} from '../../../../config/constants';

const CanvasDinitrogen = ({ x, y }) => {
  const nitrogenAtomRadius = CANVAS_ATOM_DIMENSIONS[NITROGEN.size];
  const topNitrogenAtomInitialCenterPoint = {
    x,
    y:
      y - nitrogenAtomRadius - CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS,
  };
  const bottomNitrogenAtomInitialCenterPoint = {
    x,
    y: y + nitrogenAtomRadius,
  };

  return (
    <Group>
      {/* CanvasBondContainers need to be at the top here so that they fall behind atoms in the canvas */}
      <CanvasBondContainer
        from={topNitrogenAtomInitialCenterPoint}
        to={bottomNitrogenAtomInitialCenterPoint}
        numberOfBonds={3}
      />
      <CanvasNitrogen
        x={topNitrogenAtomInitialCenterPoint.x}
        y={topNitrogenAtomInitialCenterPoint.y}
      />
      <CanvasNitrogen
        x={bottomNitrogenAtomInitialCenterPoint.x}
        y={bottomNitrogenAtomInitialCenterPoint.y}
      />
    </Group>
  );
};

CanvasDinitrogen.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default CanvasDinitrogen;
