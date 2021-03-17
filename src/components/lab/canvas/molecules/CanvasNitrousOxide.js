import React from 'react';
import PropTypes from 'prop-types';
import { Group } from 'react-konva';
import CanvasNitrogen from './atoms/CanvasNitrogen';
import CanvasOxygen from './atoms/CanvasOxygen';
import CanvasBondContainer from './CanvasBondContainer';
import {
  CANVAS_ATOM_DIMENSIONS,
  OXYGEN,
  NITROGEN,
  CANVAS_MOLECULE_AREA_Y_POSITION,
  CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS,
  NEGATIVE_CHARGE,
  POSITIVE_CHARGE,
} from '../../../../config/constants';

const CanvasNitrousOxide = ({ x }) => {
  const oxygenAtomRadius = CANVAS_ATOM_DIMENSIONS[OXYGEN.size];
  const nitrogenAtomRadius = CANVAS_ATOM_DIMENSIONS[NITROGEN.size];

  const moleculeCenterPoints = {
    topNitrogenAtomCenterPoint: {
      x,
      y:
        CANVAS_MOLECULE_AREA_Y_POSITION -
        nitrogenAtomRadius -
        nitrogenAtomRadius -
        CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS,
    },
    middleNitrogenAtomCenterPoint: { x, y: CANVAS_MOLECULE_AREA_Y_POSITION },
    bottomOxygenAtomCenterPoint: {
      x,
      y:
        CANVAS_MOLECULE_AREA_Y_POSITION +
        nitrogenAtomRadius +
        oxygenAtomRadius +
        CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS,
    },
  };

  const {
    topNitrogenAtomCenterPoint,
    middleNitrogenAtomCenterPoint,
    bottomOxygenAtomCenterPoint,
  } = moleculeCenterPoints;

  return (
    <Group>
      {/* CanvasBondContainers need to be at the top here so that they fall behind atoms in the canvas */}
      <CanvasBondContainer
        from={topNitrogenAtomCenterPoint}
        to={middleNitrogenAtomCenterPoint}
        numberOfBonds={2}
      />
      <CanvasBondContainer
        from={middleNitrogenAtomCenterPoint}
        to={bottomOxygenAtomCenterPoint}
        numberOfBonds={2}
      />
      <CanvasNitrogen
        x={topNitrogenAtomCenterPoint.x}
        y={topNitrogenAtomCenterPoint.y}
        charge={NEGATIVE_CHARGE}
      />
      <CanvasNitrogen
        x={middleNitrogenAtomCenterPoint.x}
        y={middleNitrogenAtomCenterPoint.y}
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

CanvasNitrousOxide.propTypes = {
  x: PropTypes.number.isRequired,
};

export default CanvasNitrousOxide;
