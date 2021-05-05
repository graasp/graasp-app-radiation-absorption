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

  // top nitrogen atom
  const topNitrogenAtomCenterX = x;
  const topNitrogenAtomCenterY =
    y - nitrogenAtomRadius - CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS;

  // bottom nitrogen atom
  const bottomNitrogenAtomCenterX = x;
  const bottomNitrogenAtomCenterY = y + nitrogenAtomRadius;

  return (
    <Group>
      {/* molecule bonds */}
      {/* note that these CanvasBondContainer components need to be at the top here so that they fall behind atoms on the canvas */}
      <CanvasBondContainer
        from={{ x: topNitrogenAtomCenterX, y: topNitrogenAtomCenterY }}
        to={{ x: bottomNitrogenAtomCenterX, y: bottomNitrogenAtomCenterY }}
        numberOfBonds={3}
      />
      {/* molecule atoms */}
      <CanvasNitrogen x={topNitrogenAtomCenterX} y={topNitrogenAtomCenterY} />
      <CanvasNitrogen
        x={bottomNitrogenAtomCenterX}
        y={bottomNitrogenAtomCenterY}
      />
    </Group>
  );
};

CanvasDinitrogen.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default CanvasDinitrogen;
