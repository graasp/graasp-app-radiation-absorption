import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Group } from 'react-konva';
import CanvasOxygen from './atoms/CanvasOxygen';
import CanvasHydrogen from './atoms/CanvasHydrogen';
import { POSITIVE, NEGATIVE } from '../../../../constants/strings';
import CanvasBondContainer from './CanvasBondContainer';
import { determineCoordinates } from '../../../../utils/utils';
import { CANVAS_WATER } from '../../../../constants/canvas-molecules';
import { HYDROGEN } from '../../../../constants/canvas-molecules/common';

const CanvasWater = ({
  moleculeCenter,
  shouldOscillate,
  oscillationFactor,
}) => {
  const { height } = useSelector(({ layout }) => layout.lab.stageDimensions);
  const { TOP_HYDROGEN, OXYGEN, BOTTOM_HYDROGEN } = CANVAS_WATER;

  const topHydrogen = determineCoordinates(
    moleculeCenter,
    TOP_HYDROGEN,
    height,
    shouldOscillate,
    oscillationFactor,
  );
  const oxygen = determineCoordinates(
    moleculeCenter,
    OXYGEN,
    height,
    shouldOscillate,
    oscillationFactor,
  );
  const bottomHydrogen = determineCoordinates(
    moleculeCenter,
    BOTTOM_HYDROGEN,
    height,
    shouldOscillate,
    oscillationFactor,
  );

  return (
    <Group>
      <CanvasBondContainer from={topHydrogen} to={oxygen} numberOfBonds={1} />
      <CanvasBondContainer
        from={oxygen}
        to={bottomHydrogen}
        numberOfBonds={1}
      />
      <CanvasHydrogen
        coordinates={topHydrogen}
        charge={POSITIVE}
        color={HYDROGEN.color.STANDARD}
      />
      <CanvasOxygen coordinates={oxygen} charge={NEGATIVE} />
      <CanvasHydrogen
        coordinates={bottomHydrogen}
        charge={POSITIVE}
        color={HYDROGEN.color.STANDARD}
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
