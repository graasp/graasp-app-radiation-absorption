import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
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
  CANVAS_MOLECULE_AREA_STATE,
} from '../../../../config/constants';
import CanvasBondContainer from './CanvasBondContainer';

const CanvasOzone = ({ x, shouldOscillate }) => {
  const spectrum = useSelector(({ lab }) => lab.spectrum);
  const moleculesOnCanvas = useSelector(({ lab }) => lab.moleculesOnCanvas);

  // constants to determine initial center points of atoms in this molecule when component mounts
  // the 'initial center points' are also used in the useEffect hook below, to reset an oscillating molecule
  const oxygenAtomRadius = CANVAS_ATOM_DIMENSIONS[OXYGEN.size];
  const topOxygenAtomInitialCenterPoint = {
    x: x + CANVAS_OZONE_ANGLED_ATOMS_X_ADJUSTMENT_FACTOR * 0.5,
    y:
      CANVAS_MOLECULE_AREA_Y_POSITION -
      oxygenAtomRadius -
      oxygenAtomRadius -
      CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS,
  };
  const middleOxygenAtomInitialCenterPoint = {
    x: x - CANVAS_OZONE_ANGLED_ATOMS_X_ADJUSTMENT_FACTOR * 0.5,
    y: CANVAS_MOLECULE_AREA_Y_POSITION,
  };
  const bottomOxygenAtomInitialCenterPoint = {
    x: x + CANVAS_OZONE_ANGLED_ATOMS_X_ADJUSTMENT_FACTOR * 0.5,
    y:
      CANVAS_MOLECULE_AREA_Y_POSITION +
      oxygenAtomRadius +
      oxygenAtomRadius +
      CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS,
  };

  // initialize state with initial center point constants above
  const [topOxygenAtomCenterPoint, setTopOxygenAtomCenterPoint] = useState(
    topOxygenAtomInitialCenterPoint,
  );
  const [
    middleOxygenAtomCenterPoint,
    setMiddleOxygenAtomCenterPoint,
  ] = useState(middleOxygenAtomInitialCenterPoint);
  const [
    bottomOxygenAtomCenterPoint,
    setBottomOxygenAtomCenterPoint,
  ] = useState(bottomOxygenAtomInitialCenterPoint);

  // if the molecule is oscillating, this resets its center points and makes it stationary when the spectrum is toggled
  useEffect(() => {
    if (shouldOscillate) {
      setTopOxygenAtomCenterPoint(topOxygenAtomInitialCenterPoint);
      setMiddleOxygenAtomCenterPoint(middleOxygenAtomInitialCenterPoint);
      setBottomOxygenAtomCenterPoint(bottomOxygenAtomInitialCenterPoint);
    }
  }, [spectrum]);

  // this handles the case where: (1) initially there are four molecules on the canvas,
  // (2) this molecule was oscillating, (3) a molecule is cleared from the canvas
  // in such a case, we want to reset this molecule to its original position
  // this is a bit 'hacky' as we are comparing the top atom's current x point to its initial x point to determine if the molecule has been oscillating
  // ideally, when a molecule is cleared from the canvas, we would dispatch something like RESET_ALL_MOLECULE_POSITIONS
  // but this would require maintaining every atom's center point in Redux store, which adds complexity
  useEffect(() => {
    if (
      topOxygenAtomCenterPoint.x !== topOxygenAtomInitialCenterPoint.x &&
      moleculesOnCanvas.filter(
        (molecule) =>
          molecule.moleculeAreaStatus === CANVAS_MOLECULE_AREA_STATE.EMPTY,
      ).length === 1
    ) {
      setTopOxygenAtomCenterPoint(topOxygenAtomInitialCenterPoint);
      setMiddleOxygenAtomCenterPoint(middleOxygenAtomInitialCenterPoint);
      setBottomOxygenAtomCenterPoint(bottomOxygenAtomInitialCenterPoint);
    }
  }, [moleculesOnCanvas]);

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
        shouldOscillate={shouldOscillate}
        oscillationConstant={0.5}
        initialCenterPoint={topOxygenAtomInitialCenterPoint}
        setCenterPoint={setTopOxygenAtomCenterPoint}
      />
      <CanvasOxygen
        x={middleOxygenAtomCenterPoint.x}
        y={middleOxygenAtomCenterPoint.y}
        charge={POSITIVE_CHARGE}
        shouldOscillate={shouldOscillate}
        oscillationConstant={-0.5}
        initialCenterPoint={middleOxygenAtomInitialCenterPoint}
        setCenterPoint={setMiddleOxygenAtomCenterPoint}
      />
      <CanvasOxygen
        x={bottomOxygenAtomCenterPoint.x}
        y={bottomOxygenAtomCenterPoint.y}
        charge={NEGATIVE_CHARGE}
        shouldOscillate={shouldOscillate}
        oscillationConstant={0.5}
        initialCenterPoint={bottomOxygenAtomInitialCenterPoint}
        setCenterPoint={setBottomOxygenAtomCenterPoint}
      />
    </Group>
  );
};

CanvasOzone.propTypes = {
  x: PropTypes.number.isRequired,
  shouldOscillate: PropTypes.bool.isRequired,
};

export default CanvasOzone;
