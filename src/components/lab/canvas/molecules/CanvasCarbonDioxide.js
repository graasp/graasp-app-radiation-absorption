import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Group } from 'react-konva';
import CanvasCarbon from './atoms/CanvasCarbon';
import CanvasOxygen from './atoms/CanvasOxygen';
import CanvasBondContainer from './CanvasBondContainer';
import {
  CANVAS_ATOM_DIMENSIONS,
  OXYGEN,
  CARBON,
  CANVAS_MOLECULE_AREA_Y_POSITION,
  CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS,
  NEGATIVE_CHARGE,
  POSITIVE_CHARGE,
  CANVAS_MOLECULE_AREA_STATE,
} from '../../../../config/constants';

const CanvasCarbonDioxide = ({ x, shouldOscillate }) => {
  const spectrum = useSelector(({ lab }) => lab.spectrum);
  const moleculesOnCanvas = useSelector(({ lab }) => lab.moleculesOnCanvas);

  // constants to determine initial center points of atoms in this molecule when component mounts
  // the 'initial center points' are also used in the useEffect hook below, to reset an oscillating molecule
  const oxygenAtomRadius = CANVAS_ATOM_DIMENSIONS[OXYGEN.size];
  const carbonAtomRadius = CANVAS_ATOM_DIMENSIONS[CARBON.size];
  const topOxygenAtomInitialCenterPoint = {
    x,
    y:
      CANVAS_MOLECULE_AREA_Y_POSITION -
      carbonAtomRadius -
      oxygenAtomRadius -
      CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS,
  };
  const carbonAtomInitialCenterPoint = {
    x,
    y: CANVAS_MOLECULE_AREA_Y_POSITION,
  };
  const bottomOxygenAtomInitialCenterPoint = {
    x,
    y:
      CANVAS_MOLECULE_AREA_Y_POSITION +
      carbonAtomRadius +
      oxygenAtomRadius +
      CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS,
  };

  // initialize state with initial center point constants above
  const [topOxygenAtomCenterPoint, setTopOxygenAtomCenterPoint] = useState(
    topOxygenAtomInitialCenterPoint,
  );
  const [carbonAtomCenterPoint, setCarbonAtomCenterPoint] = useState(
    carbonAtomInitialCenterPoint,
  );
  const [
    bottomOxygenAtomCenterPoint,
    setBottomOxygenAtomCenterPoint,
  ] = useState(bottomOxygenAtomInitialCenterPoint);

  // if the molecule is oscillating, this resets its center points and makes it stationary when the spectrum is toggled
  useEffect(() => {
    if (shouldOscillate) {
      setTopOxygenAtomCenterPoint(topOxygenAtomInitialCenterPoint);
      setCarbonAtomCenterPoint(carbonAtomInitialCenterPoint);
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
      setCarbonAtomCenterPoint(carbonAtomInitialCenterPoint);
      setBottomOxygenAtomCenterPoint(bottomOxygenAtomInitialCenterPoint);
    }
  }, [moleculesOnCanvas]);

  return (
    <Group>
      {/* CanvasBondContainers need to be at the top here so that they fall behind atoms in the canvas */}
      <CanvasBondContainer
        from={topOxygenAtomCenterPoint}
        to={carbonAtomCenterPoint}
        numberOfBonds={2}
      />
      <CanvasBondContainer
        from={carbonAtomCenterPoint}
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
      <CanvasCarbon
        x={carbonAtomCenterPoint.x}
        y={carbonAtomCenterPoint.y}
        charge={POSITIVE_CHARGE}
        shouldOscillate={shouldOscillate}
        oscillationConstant={-0.5}
        initialCenterPoint={carbonAtomInitialCenterPoint}
        setCenterPoint={setCarbonAtomCenterPoint}
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

CanvasCarbonDioxide.propTypes = {
  x: PropTypes.number.isRequired,
  shouldOscillate: PropTypes.bool.isRequired,
};

export default CanvasCarbonDioxide;
