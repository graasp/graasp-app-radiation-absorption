import React, { useState } from 'react';
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

const CanvasDinitrogen = ({ x, shouldOscillate }) => {
  const nitrogenAtomRadius = CANVAS_ATOM_DIMENSIONS[NITROGEN.size];
  const topNitrogenAtomInitialCenterPoint = {
    x,
    y:
      CANVAS_MOLECULE_AREA_Y_POSITION -
      nitrogenAtomRadius -
      CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS,
  };
  const bottomNitrogenAtomInitialCenterPoint = {
    x,
    y: CANVAS_MOLECULE_AREA_Y_POSITION + nitrogenAtomRadius,
  };

  const [topNitrogenAtomCenterPoint, setTopNitrogenAtomCenterPoint] = useState(
    topNitrogenAtomInitialCenterPoint,
  );
  const [
    bottomNitrogenAtomCenterPoint,
    setBottomNitrogenAtomCenterPoint,
  ] = useState(bottomNitrogenAtomInitialCenterPoint);

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
        shouldOscillate={shouldOscillate}
        initialCenterPoint={topNitrogenAtomInitialCenterPoint}
        setCenterPoint={setTopNitrogenAtomCenterPoint}
      />
      <CanvasNitrogen
        x={bottomNitrogenAtomCenterPoint.x}
        y={bottomNitrogenAtomCenterPoint.y}
        shouldOscillate={shouldOscillate}
        initialCenterPoint={bottomNitrogenAtomInitialCenterPoint}
        setCenterPoint={setBottomNitrogenAtomCenterPoint}
      />
    </Group>
  );
};

CanvasDinitrogen.propTypes = {
  x: PropTypes.number.isRequired,
  shouldOscillate: PropTypes.bool.isRequired,
};

export default CanvasDinitrogen;
