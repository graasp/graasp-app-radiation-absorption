import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Group } from 'react-konva';
import CanvasCarbon from './atoms/CanvasCarbon';
import CanvasOxygen from './atoms/CanvasOxygen';
import CanvasBondContainer from './CanvasBondContainer';
import { NEGATIVE, POSITIVE } from '../../../../constants/strings';
import { determineCoordinates } from '../../../../utils/utils';
import { CANVAS_CARBON_DIOXIDE } from '../../../../constants/canvas-molecules';

const CanvasCarbonDioxide = ({
  moleculeCenter,
  shouldOscillate,
  oscillationFactor,
}) => {
  const { height } = useSelector(({ layout }) => layout.lab.stageDimensions);
  const { TOP_OXYGEN, CARBON, BOTTOM_OXYGEN } = CANVAS_CARBON_DIOXIDE;

  const topOxygen = determineCoordinates(
    moleculeCenter,
    TOP_OXYGEN,
    height,
    shouldOscillate,
    oscillationFactor,
  );
  const carbon = determineCoordinates(
    moleculeCenter,
    CARBON,
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
      <CanvasBondContainer from={topOxygen} to={carbon} numberOfBonds={2} />
      <CanvasBondContainer from={carbon} to={bottomOxygen} numberOfBonds={2} />
      <CanvasOxygen coordinates={topOxygen} charge={NEGATIVE} />
      <CanvasCarbon coordinates={carbon} charge={POSITIVE} />
      <CanvasOxygen coordinates={bottomOxygen} charge={NEGATIVE} />
    </Group>
  );
};

CanvasCarbonDioxide.propTypes = {
  moleculeCenter: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
  shouldOscillate: PropTypes.bool.isRequired,
  oscillationFactor: PropTypes.number.isRequired,
};

export default CanvasCarbonDioxide;
