import React from 'react';
import PropTypes from 'prop-types';
import { Group } from 'react-konva';
import CanvasOxygen from './atoms/CanvasOxygen';
import CanvasHydrogen from './atoms/CanvasHydrogen';
import {
  CANVAS_ATOM_DIMENSIONS,
  OXYGEN,
  HYDROGEN,
  CANVAS_MOLECULE_AREA_Y_POSITION,
  CANVAS_WATER_ANGLED_ATOMS_X_ADJUSTMENT_FACTOR,
  CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS,
  POSITIVE_CHARGE,
  NEGATIVE_CHARGE,
} from '../../../../config/constants';
import CanvasBondContainer from './CanvasBondContainer';

const CanvasWater = ({ x }) => {
  const oxygenAtomRadius = CANVAS_ATOM_DIMENSIONS[OXYGEN.size];
  const hydrogenAtomRadius = CANVAS_ATOM_DIMENSIONS[HYDROGEN.size];

  const moleculeCenterPoints = {
    topHydrogenAtomCenterPoint: {
      x: x + CANVAS_WATER_ANGLED_ATOMS_X_ADJUSTMENT_FACTOR * 0.5,
      y:
        CANVAS_MOLECULE_AREA_Y_POSITION -
        oxygenAtomRadius -
        CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS -
        hydrogenAtomRadius,
    },
    oxygenAtomCenterPoint: {
      x: x - CANVAS_WATER_ANGLED_ATOMS_X_ADJUSTMENT_FACTOR * 0.5,
      y: CANVAS_MOLECULE_AREA_Y_POSITION,
    },
    bottomHydrogenAtomCenterPoint: {
      x: x + CANVAS_WATER_ANGLED_ATOMS_X_ADJUSTMENT_FACTOR * 0.5,
      y:
        CANVAS_MOLECULE_AREA_Y_POSITION +
        oxygenAtomRadius +
        hydrogenAtomRadius +
        CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS,
    },
  };

  const {
    topHydrogenAtomCenterPoint,
    oxygenAtomCenterPoint,
    bottomHydrogenAtomCenterPoint,
  } = moleculeCenterPoints;

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
};

export default CanvasWater;
