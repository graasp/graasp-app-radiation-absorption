import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Group } from 'react-konva';
import _ from 'lodash';
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
  CANVAS_WATER_OSCILLATION_AMPLITUDE,
  INITIAL_LINE_POINTS,
} from '../../../../config/constants';
import CanvasBondContainer from './CanvasBondContainer';

const CanvasWater = ({ x, shouldOscillate }) => {
  const spectrum = useSelector(({ lab }) => lab.spectrum);
  const emittedLines = useSelector(({ lab }) => lab.emittedLines);

  // constants to determine initial center points of atoms in this molecule when component mounts
  // the 'initial center points' are also used in the useEffect hook below, to reset an oscillating molecule
  const oxygenAtomRadius = CANVAS_ATOM_DIMENSIONS[OXYGEN.size];
  const hydrogenAtomRadius = CANVAS_ATOM_DIMENSIONS[HYDROGEN.size];
  const topHydrogenAtomInitialCenterPoint = {
    x: x + CANVAS_WATER_ANGLED_ATOMS_X_ADJUSTMENT_FACTOR * 0.5,
    y:
      CANVAS_MOLECULE_AREA_Y_POSITION -
      oxygenAtomRadius -
      CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS -
      hydrogenAtomRadius,
  };
  const oxygenAtomInitialCenterPoint = {
    x: x - CANVAS_WATER_ANGLED_ATOMS_X_ADJUSTMENT_FACTOR * 0.5,
    y: CANVAS_MOLECULE_AREA_Y_POSITION,
  };
  const bottomHydrogenAtomInitialCenterPoint = {
    x: x + CANVAS_WATER_ANGLED_ATOMS_X_ADJUSTMENT_FACTOR * 0.5,
    y:
      CANVAS_MOLECULE_AREA_Y_POSITION +
      oxygenAtomRadius +
      CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS +
      hydrogenAtomRadius,
  };

  // initialize state with initial center point constants above
  const [topHydrogenAtomCenterPoint, setTopHydrogenAtomCenterPoint] = useState(
    topHydrogenAtomInitialCenterPoint,
  );
  const [oxygenAtomCenterPoint, setOxygenAtomCenterPoint] = useState(
    oxygenAtomInitialCenterPoint,
  );
  const [
    bottomHydrogenAtomCenterPoint,
    setBottomHydrogenAtomCenterPoint,
  ] = useState(bottomHydrogenAtomInitialCenterPoint);

  // if the molecule is oscillating, this resets its center points and makes it stationary when the spectrum is toggled
  useEffect(() => {
    if (shouldOscillate) {
      setTopHydrogenAtomCenterPoint(topHydrogenAtomInitialCenterPoint);
      setOxygenAtomCenterPoint(oxygenAtomInitialCenterPoint);
      setBottomHydrogenAtomCenterPoint(bottomHydrogenAtomInitialCenterPoint);
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
      topHydrogenAtomCenterPoint.x !== topHydrogenAtomInitialCenterPoint.x &&
      emittedLines.every((line) => _.isEqual(line.points, INITIAL_LINE_POINTS))
    ) {
      setTopHydrogenAtomCenterPoint(topHydrogenAtomInitialCenterPoint);
      setOxygenAtomCenterPoint(oxygenAtomInitialCenterPoint);
      setBottomHydrogenAtomCenterPoint(bottomHydrogenAtomInitialCenterPoint);
    }
  }, [emittedLines]);

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
        shouldOscillate={shouldOscillate}
        amplitude={CANVAS_WATER_OSCILLATION_AMPLITUDE}
        initialCenterPoint={topHydrogenAtomInitialCenterPoint}
        setCenterPoint={setTopHydrogenAtomCenterPoint}
      />
      <CanvasOxygen
        x={oxygenAtomCenterPoint.x}
        y={oxygenAtomCenterPoint.y}
        charge={NEGATIVE_CHARGE}
        shouldOscillate={shouldOscillate}
        amplitude={-CANVAS_WATER_OSCILLATION_AMPLITUDE}
        initialCenterPoint={oxygenAtomInitialCenterPoint}
        setCenterPoint={setOxygenAtomCenterPoint}
      />
      <CanvasHydrogen
        x={bottomHydrogenAtomCenterPoint.x}
        y={bottomHydrogenAtomCenterPoint.y}
        charge={POSITIVE_CHARGE}
        shouldOscillate={shouldOscillate}
        amplitude={CANVAS_WATER_OSCILLATION_AMPLITUDE}
        initialCenterPoint={bottomHydrogenAtomInitialCenterPoint}
        setCenterPoint={setBottomHydrogenAtomCenterPoint}
      />
    </Group>
  );
};

CanvasWater.propTypes = {
  x: PropTypes.number.isRequired,
  shouldOscillate: PropTypes.bool.isRequired,
};

export default CanvasWater;
