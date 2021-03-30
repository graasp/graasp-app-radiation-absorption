import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
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
  CANVAS_MOLECULE_AREA_STATE,
} from '../../../../config/constants';

const CanvasNitrousOxide = ({ x, shouldOscillate }) => {
  const spectrum = useSelector(({ lab }) => lab.spectrum);
  const moleculesOnCanvas = useSelector(({ lab }) => lab.moleculesOnCanvas);

  // constants to determine initial center points of atoms in this molecule when component mounts
  // the 'initial center points' are also used in the useEffect hook below, to reset an oscillating molecule
  const oxygenAtomRadius = CANVAS_ATOM_DIMENSIONS[OXYGEN.size];
  const nitrogenAtomRadius = CANVAS_ATOM_DIMENSIONS[NITROGEN.size];
  const topNitrogenAtomInitialCenterPoint = {
    x,
    y:
      CANVAS_MOLECULE_AREA_Y_POSITION -
      nitrogenAtomRadius -
      nitrogenAtomRadius -
      CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS,
  };
  const middleNitrogenAtomInitialCenterPoint = {
    x,
    y: CANVAS_MOLECULE_AREA_Y_POSITION,
  };
  const bottomOxygenAtomInitialCenterPoint = {
    x,
    y:
      CANVAS_MOLECULE_AREA_Y_POSITION +
      nitrogenAtomRadius +
      oxygenAtomRadius +
      CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS,
  };

  // initialize state with initial center point constants above
  const [topNitrogenAtomCenterPoint, setTopNitrogenAtomCenterPoint] = useState(
    topNitrogenAtomInitialCenterPoint,
  );
  const [
    middleNitrogenAtomCenterPoint,
    setMiddleNitrogenAtomCenterPoint,
  ] = useState(middleNitrogenAtomInitialCenterPoint);
  const [
    bottomOxygenAtomCenterPoint,
    setBottomOxygenAtomCenterPoint,
  ] = useState(bottomOxygenAtomInitialCenterPoint);

  // if the molecule is oscillating, this resets its center points and makes it stationary when the spectrum is toggled
  useEffect(() => {
    if (shouldOscillate) {
      setTopNitrogenAtomCenterPoint(topNitrogenAtomInitialCenterPoint);
      setMiddleNitrogenAtomCenterPoint(middleNitrogenAtomInitialCenterPoint);
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
      topNitrogenAtomCenterPoint.x !== topNitrogenAtomInitialCenterPoint.x &&
      moleculesOnCanvas.filter(
        (molecule) =>
          molecule.moleculeAreaStatus === CANVAS_MOLECULE_AREA_STATE.EMPTY,
      ).length === 1
    ) {
      setTopNitrogenAtomCenterPoint(topNitrogenAtomInitialCenterPoint);
      setMiddleNitrogenAtomCenterPoint(middleNitrogenAtomInitialCenterPoint);
      setBottomOxygenAtomCenterPoint(bottomOxygenAtomInitialCenterPoint);
    }
  }, [moleculesOnCanvas]);

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
        shouldOscillate={shouldOscillate}
        oscillationConstant={0.5}
        initialCenterPoint={topNitrogenAtomInitialCenterPoint}
        setCenterPoint={setTopNitrogenAtomCenterPoint}
      />
      <CanvasNitrogen
        x={middleNitrogenAtomCenterPoint.x}
        y={middleNitrogenAtomCenterPoint.y}
        charge={POSITIVE_CHARGE}
        shouldOscillate={shouldOscillate}
        oscillationConstant={-0.5}
        initialCenterPoint={middleNitrogenAtomInitialCenterPoint}
        setCenterPoint={setMiddleNitrogenAtomCenterPoint}
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

CanvasNitrousOxide.propTypes = {
  x: PropTypes.number.isRequired,
  shouldOscillate: PropTypes.bool.isRequired,
};

export default CanvasNitrousOxide;
