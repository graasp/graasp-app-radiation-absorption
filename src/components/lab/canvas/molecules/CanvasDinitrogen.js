import React from 'react';
import PropTypes from 'prop-types';
import { Group } from 'react-konva';
import CanvasNitrogen from './atoms/CanvasNitrogen';
import CanvasBondContainer from './CanvasBondContainer';
import {
  CANVAS_ATOM_DIMENSIONS,
  NITROGEN,
  CANVAS_MOLECULE_AREA_Y_POSITION,
  CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS,
} from '../../../../config/constants';

const CanvasDinitrogen = ({ x }) => {
  const nitrogenAtomRadius = CANVAS_ATOM_DIMENSIONS[NITROGEN.size];

  const moleculeCenterPoints = {
    topNitrogenAtomCenterPoint: {
      x,
      y:
        CANVAS_MOLECULE_AREA_Y_POSITION -
        nitrogenAtomRadius -
        CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS,
    },
    bottomNitrogenAtomCenterPoint: {
      x,
      y: CANVAS_MOLECULE_AREA_Y_POSITION + nitrogenAtomRadius,
    },
  };

  const {
    topNitrogenAtomCenterPoint,
    bottomNitrogenAtomCenterPoint,
  } = moleculeCenterPoints;

  return (
    <Group>
      {/* CanvasBondContainers need to be at the top here so that they fall behind atoms in the canvas */}
      <CanvasBondContainer
        from={topNitrogenAtomCenterPoint}
        to={bottomNitrogenAtomCenterPoint}
        numberOfBonds={3}
      />
      <CanvasNitrogen
        x={topNitrogenAtomCenterPoint.x}
        y={topNitrogenAtomCenterPoint.y}
      />
      <CanvasNitrogen
        x={bottomNitrogenAtomCenterPoint.x}
        y={bottomNitrogenAtomCenterPoint.y}
      />
    </Group>
  );
};

CanvasDinitrogen.propTypes = {
  x: PropTypes.number.isRequired,
};

export default CanvasDinitrogen;
