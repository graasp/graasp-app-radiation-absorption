import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Group } from 'react-konva';
import CanvasOxygen from './atoms/CanvasOxygen';
import { NEGATIVE, POSITIVE } from '../../../../constants/strings';
import CanvasBondContainer from './CanvasBondContainer';
import { determineCoordinates } from '../../../../utils/utils';
import { CANVAS_OZONE } from '../../../../constants/canvas-molecules';

const CanvasOzone = ({
  moleculeCenter,
  shouldOscillate,
  oscillationFactor,
}) => {
  const { height } = useSelector(({ layout }) => layout.lab.stageDimensions);
  const { TOP_OXYGEN, MIDDLE_OXYGEN, BOTTOM_OXYGEN } = CANVAS_OZONE;

  const topOxygen = determineCoordinates(
    moleculeCenter,
    TOP_OXYGEN,
    height,
    shouldOscillate,
    oscillationFactor,
  );
  const middleOxygen = determineCoordinates(
    moleculeCenter,
    MIDDLE_OXYGEN,
    height,
    shouldOscillate,
    oscillationFactor,
  );
  const bottomOxygen = determineCoordinates(
    moleculeCenter,
    BOTTOM_OXYGEN,
    height,
    shouldOscillate,
    oscillationFactor,
  );

  return (
    <Group>
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
      <CanvasOxygen coordinates={topOxygen} charge={NEGATIVE} />
      <CanvasOxygen coordinates={middleOxygen} charge={POSITIVE} />
      <CanvasOxygen coordinates={bottomOxygen} charge={NEGATIVE} />
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
