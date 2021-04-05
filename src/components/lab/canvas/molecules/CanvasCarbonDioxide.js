import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Group } from 'react-konva';
import _ from 'lodash';
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
  CANVAS_CARBON_DIOXIDE_OSCILLATION_AMPLITUDE,
  INITIAL_LINE_POINTS,
} from '../../../../config/constants';

const CanvasCarbonDioxide = ({ x, shouldOscillate }) => {
  const spectrum = useSelector(({ lab }) => lab.spectrum);
  const emittedLines = useSelector(({ lab }) => lab.emittedLines);

  // constants to determine initial center points of atoms in this molecule when component mounts
  // the 'initial center points' are also used in the useEffect hook below, to reset an oscillating molecule
  const oxygenAtomRadius = CANVAS_ATOM_DIMENSIONS[OXYGEN.size];
  const carbonAtomRadius = CANVAS_ATOM_DIMENSIONS[CARBON.size];
  const topOxygenAtomInitialCenterPoint = {
    x,
    y:
      CANVAS_MOLECULE_AREA_Y_POSITION -
      carbonAtomRadius -
      CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS -
      oxygenAtomRadius,
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
      CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS +
      oxygenAtomRadius,
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

  // this handles two cases:
  // case (A): (1) initially there are four molecules on canvas, (2) this molecule was oscillating, (3) another molecule is deleted from the canvas
  // case (B): (1) initially there are four molecules on canvas, (2) this molecule was oscillating, (3) another molecule is replaced directly on the canvas
  // in such cases, we want to reset this molecule to its original position
  // this approach is a bit hacky - in two ways:
  // (1) we are comparing the top atom's current x point to its initial x point to determine if the molecule has been oscillating
  // (2) we rely on the fact that when a molecule is cleared or replaced by another molecule, lines are reset (hence the emittedLines.every(...) condition below)
  // ideally, when a molecule is cleared from/replaced on the canvas, we would dispatch something like RESET_ALL_MOLECULE_POSITIONS
  // but this would require maintaining every atom's center point in Redux store, which adds complexity
  useEffect(() => {
    if (
      topOxygenAtomCenterPoint.x !== topOxygenAtomInitialCenterPoint.x &&
      emittedLines.every((line) => _.isEqual(line.points, INITIAL_LINE_POINTS))
    ) {
      setTopOxygenAtomCenterPoint(topOxygenAtomInitialCenterPoint);
      setCarbonAtomCenterPoint(carbonAtomInitialCenterPoint);
      setBottomOxygenAtomCenterPoint(bottomOxygenAtomInitialCenterPoint);
    }
  }, [emittedLines]);

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
        amplitude={CANVAS_CARBON_DIOXIDE_OSCILLATION_AMPLITUDE}
        initialCenterPoint={topOxygenAtomInitialCenterPoint}
        setCenterPoint={setTopOxygenAtomCenterPoint}
      />
      <CanvasCarbon
        x={carbonAtomCenterPoint.x}
        y={carbonAtomCenterPoint.y}
        charge={POSITIVE_CHARGE}
        shouldOscillate={shouldOscillate}
        amplitude={-CANVAS_CARBON_DIOXIDE_OSCILLATION_AMPLITUDE}
        initialCenterPoint={carbonAtomInitialCenterPoint}
        setCenterPoint={setCarbonAtomCenterPoint}
      />
      <CanvasOxygen
        x={bottomOxygenAtomCenterPoint.x}
        y={bottomOxygenAtomCenterPoint.y}
        charge={NEGATIVE_CHARGE}
        shouldOscillate={shouldOscillate}
        amplitude={CANVAS_CARBON_DIOXIDE_OSCILLATION_AMPLITUDE}
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
