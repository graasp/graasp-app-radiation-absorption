import React from 'react';
import PropTypes from 'prop-types';
import { Group } from 'react-konva';
import CanvasOxygen from './atoms/CanvasOxygen';
import {
  NEGATIVE_CHARGE,
  POSITIVE_CHARGE,
  CANVAS_OZONE,
} from '../../../../config/constants';
import CanvasBondContainer from './CanvasBondContainer';
import { determineCoordinates } from '../../../../utils/utils';

const CanvasOzone = ({
  moleculeCenter,
  shouldOscillate,
  oscillationFactor,
}) => {
  const { TOP_OXYGEN, MIDDLE_OXYGEN, BOTTOM_OXYGEN } = CANVAS_OZONE;

  const topOxygen = determineCoordinates(
    moleculeCenter,
    TOP_OXYGEN,
    shouldOscillate,
    oscillationFactor,
  );
  const middleOxygen = determineCoordinates(
    moleculeCenter,
    MIDDLE_OXYGEN,
    shouldOscillate,
    oscillationFactor,
  );
  const bottomOxygen = determineCoordinates(
    moleculeCenter,
    BOTTOM_OXYGEN,
    shouldOscillate,
    oscillationFactor,
  );

  return (
    <Group>
      {/* molecule bonds */}
      {/* note that these CanvasBondContainer components need to be at the top here so that they fall behind atoms on the canvas */}
      <CanvasBondContainer
        from={topOxygen}
        to={middleOxygen}
        numberOfBonds={2}
      />
      <CanvasBondContainer
        from={middleOxygen}
        to={bottomOxygen}
        numberOfBonds={1}
      />
      {/* molecule atoms */}
      <CanvasOxygen coordinates={topOxygen} charge={NEGATIVE_CHARGE} />
      <CanvasOxygen coordinates={middleOxygen} charge={POSITIVE_CHARGE} />
      <CanvasOxygen coordinates={bottomOxygen} charge={NEGATIVE_CHARGE} />
    </Group>
  );
};

CanvasOzone.propTypes = {
  moleculeCenter: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
  shouldOscillate: PropTypes.bool.isRequired,
  oscillationFactor: PropTypes.number.isRequired,
};

export default CanvasOzone;
