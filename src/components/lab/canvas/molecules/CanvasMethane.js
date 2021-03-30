import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Group } from 'react-konva';
import CanvasCarbon from './atoms/CanvasCarbon';
import CanvasHydrogen from './atoms/CanvasHydrogen';
import {
  CANVAS_ATOM_DIMENSIONS,
  HYDROGEN,
  CARBON,
  CANVAS_MOLECULE_AREA_Y_POSITION,
  CANVAS_METHANE_FIRST_ATOM_X_ADJUSTMENT_FACTOR,
  CANVAS_METHANE_FIRST_ATOM_Y_ADJUSTMENT_FACTOR,
  CANVAS_METHANE_SECOND_ATOM_X_ADJUSTMENT_FACTOR,
  CANVAS_METHANE_SECOND_ATOM_Y_ADJUSTMENT_FACTOR,
  CANVAS_METHANE_THIRD_ATOM_X_ADJUSTMENT_FACTOR,
  CANVAS_METHANE_THIRD_ATOM_Y_ADJUSTMENT_FACTOR,
  CANVAS_METHANE_FOURTH_ATOM_X_ADJUSTMENT_FACTOR,
  CANVAS_METHANE_FOURTH_ATOM_Y_ADJUSTMENT_FACTOR,
  NEGATIVE_CHARGE,
  POSITIVE_CHARGE,
} from '../../../../config/constants';

const CanvasMethane = ({ x }) => {
  // constants to determine initial center points of atoms in this molecule when component mounts
  // the 'initial center points' are also used in the useEffect hook below, to reset an oscillating molecule
  const hydrogenAtomRadius = CANVAS_ATOM_DIMENSIONS[HYDROGEN.size];
  const carbonAtomRadius = CANVAS_ATOM_DIMENSIONS[CARBON.size];
  const carbonAtomInitialCenterPoint = {
    x,
    y: CANVAS_MOLECULE_AREA_Y_POSITION,
  };
  const topLeftHydrogenAtomInitialCenterPoint = {
    x: x - CANVAS_METHANE_FIRST_ATOM_X_ADJUSTMENT_FACTOR,
    y:
      CANVAS_MOLECULE_AREA_Y_POSITION -
      carbonAtomRadius -
      hydrogenAtomRadius +
      CANVAS_METHANE_FIRST_ATOM_Y_ADJUSTMENT_FACTOR,
  };
  const topRightHydrogenAtomInitialCenterPoint = {
    x: x + CANVAS_METHANE_SECOND_ATOM_X_ADJUSTMENT_FACTOR,
    y:
      CANVAS_MOLECULE_AREA_Y_POSITION -
      carbonAtomRadius -
      hydrogenAtomRadius +
      CANVAS_METHANE_SECOND_ATOM_Y_ADJUSTMENT_FACTOR,
  };
  const bottomRightHydrogenAtomInitialCenterPoint = {
    x: x + CANVAS_METHANE_THIRD_ATOM_X_ADJUSTMENT_FACTOR,
    y:
      CANVAS_MOLECULE_AREA_Y_POSITION +
      carbonAtomRadius +
      hydrogenAtomRadius -
      CANVAS_METHANE_THIRD_ATOM_Y_ADJUSTMENT_FACTOR,
  };
  const bottomLeftHydrogenAtomInitialCenterPoint = {
    x: x - CANVAS_METHANE_FOURTH_ATOM_X_ADJUSTMENT_FACTOR,
    y:
      CANVAS_MOLECULE_AREA_Y_POSITION +
      carbonAtomRadius +
      hydrogenAtomRadius -
      CANVAS_METHANE_FOURTH_ATOM_Y_ADJUSTMENT_FACTOR,
  };

  // initialize state with initial center point constants above
  const [carbonAtomCenterPoint, setCarbonAtomCenterPoint] = useState(
    carbonAtomInitialCenterPoint,
  );
  const [
    topLeftHydrogenAtomCenterPoint,
    setTopLeftHydrogenAtomCenterPoint,
  ] = useState(topLeftHydrogenAtomInitialCenterPoint);
  const [
    topRightHydrogenAtomCenterPoint,
    setTopRightHydrogenAtomCenterPoint,
  ] = useState(topRightHydrogenAtomInitialCenterPoint);
  const [
    bottomRightHydrogenAtomCenterPoint,
    setBottomRightHydrogenAtomCenterPoint,
  ] = useState(bottomRightHydrogenAtomInitialCenterPoint);
  const [
    bottomLeftHydrogenAtomCenterPoint,
    setBottomLeftHydrogenAtomCenterPoint,
  ] = useState(bottomLeftHydrogenAtomInitialCenterPoint);

  return (
    <Group>
      <CanvasCarbon
        x={carbonAtomCenterPoint.x}
        y={carbonAtomCenterPoint.y}
        charge={NEGATIVE_CHARGE}
        initialCenterPoint={carbonAtomInitialCenterPoint}
        setCenterPoint={setCarbonAtomCenterPoint}
      />
      <CanvasHydrogen
        x={topLeftHydrogenAtomCenterPoint.x}
        y={topLeftHydrogenAtomCenterPoint.y}
        charge={POSITIVE_CHARGE}
        initialCenterPoint={topLeftHydrogenAtomInitialCenterPoint}
        setCenterPoint={setTopLeftHydrogenAtomCenterPoint}
      />
      <CanvasHydrogen
        x={topRightHydrogenAtomCenterPoint.x}
        y={topRightHydrogenAtomCenterPoint.y}
        charge={POSITIVE_CHARGE}
        initialCenterPoint={topRightHydrogenAtomInitialCenterPoint}
        setCenterPoint={setTopRightHydrogenAtomCenterPoint}
      />
      <CanvasHydrogen
        x={bottomRightHydrogenAtomCenterPoint.x}
        y={bottomRightHydrogenAtomCenterPoint.y}
        charge={POSITIVE_CHARGE}
        initialCenterPoint={bottomRightHydrogenAtomInitialCenterPoint}
        setCenterPoint={setBottomRightHydrogenAtomCenterPoint}
      />
      <CanvasHydrogen
        x={bottomLeftHydrogenAtomCenterPoint.x}
        y={bottomLeftHydrogenAtomCenterPoint.y}
        charge={POSITIVE_CHARGE}
        initialCenterPoint={bottomLeftHydrogenAtomInitialCenterPoint}
        setCenterPoint={setBottomLeftHydrogenAtomCenterPoint}
      />
    </Group>
  );
};

CanvasMethane.propTypes = {
  x: PropTypes.number.isRequired,
};

export default CanvasMethane;
