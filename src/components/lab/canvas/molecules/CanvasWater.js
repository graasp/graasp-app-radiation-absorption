import React from 'react';
import PropTypes from 'prop-types';
import { Group } from 'react-konva';
import CanvasOxygen from './atoms/CanvasOxygen';
import CanvasHydrogen from './atoms/CanvasHydrogen';
import {
  HYDROGEN,
  POSITIVE_CHARGE,
  NEGATIVE_CHARGE,
  CANVAS_WATER,
} from '../../../../config/constants';
import CanvasBondContainer from './CanvasBondContainer';
import { determineCoordinates } from '../../../../utils/utils';

const CanvasWater = ({
  moleculeCenter,
  shouldOscillate,
  oscillationFactor,
}) => {
  const { TOP_HYDROGEN, OXYGEN, BOTTOM_HYDROGEN } = CANVAS_WATER;

  const topHydrogen = determineCoordinates(
    moleculeCenter,
    TOP_HYDROGEN,
    shouldOscillate,
    oscillationFactor,
  );
  const oxygen = determineCoordinates(
    moleculeCenter,
    OXYGEN,
    shouldOscillate,
    oscillationFactor,
  );
  const bottomHydrogen = determineCoordinates(
    moleculeCenter,
    BOTTOM_HYDROGEN,
    shouldOscillate,
    oscillationFactor,
  );

  return (
    <Group>
      {/* molecule bonds */}
      {/* note that these CanvasBondContainer components need to be at the top here so that they fall behind atoms on the canvas */}
      <CanvasBondContainer from={topHydrogen} to={oxygen} numberOfBonds={1} />
      <CanvasBondContainer
        from={oxygen}
        to={bottomHydrogen}
        numberOfBonds={1}
      />
      {/* molecule atoms */}
      <CanvasHydrogen
        coordinates={topHydrogen}
        charge={POSITIVE_CHARGE}
        atomColor={HYDROGEN.atomColor.STANDARD}
      />
      <CanvasOxygen coordinates={oxygen} charge={NEGATIVE_CHARGE} />
      <CanvasHydrogen
        coordinates={bottomHydrogen}
        charge={POSITIVE_CHARGE}
        atomColor={HYDROGEN.atomColor.STANDARD}
      />
    </Group>
  );
};

CanvasWater.propTypes = {
  moleculeCenter: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
  shouldOscillate: PropTypes.bool.isRequired,
  oscillationFactor: PropTypes.number.isRequired,
};

export default CanvasWater;
