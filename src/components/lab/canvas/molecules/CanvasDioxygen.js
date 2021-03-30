import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Group } from 'react-konva';
import CanvasOxygen from './atoms/CanvasOxygen';
import CanvasBondContainer from './CanvasBondContainer';
import {
  CANVAS_ATOM_DIMENSIONS,
  OXYGEN,
  CANVAS_MOLECULE_AREA_Y_POSITION,
  CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS,
} from '../../../../config/constants';

const CanvasDioxygen = ({ x, shouldOscillate }) => {
  const oxygenAtomRadius = CANVAS_ATOM_DIMENSIONS[OXYGEN.size];
  const topOxygenAtomInitialCenterPoint = {
    x,
    y:
      CANVAS_MOLECULE_AREA_Y_POSITION -
      oxygenAtomRadius -
      CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS,
  };
  const bottomOxygenAtomInitialCenterPoint = {
    x,
    y: CANVAS_MOLECULE_AREA_Y_POSITION + oxygenAtomRadius,
  };

  const [topOxygenAtomCenterPoint, setTopOxygenAtomCenterPoint] = useState(
    topOxygenAtomInitialCenterPoint,
  );
  const [
    bottomOxygenAtomCenterPoint,
    setBottomOxygenAtomCenterPoint,
  ] = useState(bottomOxygenAtomInitialCenterPoint);

  return (
    <Group>
      {/* CanvasBondContainers need to be at the top here so that they fall behind atoms in the canvas */}
      <CanvasBondContainer
        from={topOxygenAtomCenterPoint}
        to={bottomOxygenAtomCenterPoint}
        numberOfBonds={2}
      />
      <CanvasOxygen
        x={topOxygenAtomCenterPoint.x}
        y={topOxygenAtomCenterPoint.y}
        shouldOscillate={shouldOscillate}
        initialCenterPoint={topOxygenAtomInitialCenterPoint}
        setCenterPoint={setTopOxygenAtomCenterPoint}
      />
      <CanvasOxygen
        x={bottomOxygenAtomCenterPoint.x}
        y={bottomOxygenAtomCenterPoint.y}
        shouldOscillate={shouldOscillate}
        initialCenterPoint={bottomOxygenAtomInitialCenterPoint}
        setCenterPoint={setBottomOxygenAtomCenterPoint}
      />
    </Group>
  );
};

CanvasDioxygen.propTypes = {
  x: PropTypes.number.isRequired,
  shouldOscillate: PropTypes.bool.isRequired,
};

export default CanvasDioxygen;
