import React from 'react';
import PropTypes from 'prop-types';
import { Group } from 'react-konva';
import CanvasCarbon from './atoms/CanvasCarbon';
import CanvasOxygen from './atoms/CanvasOxygen';
import CanvasBondContainer from './CanvasBondContainer';
import {
  NEGATIVE_CHARGE,
  POSITIVE_CHARGE,
  CANVAS_CARBON_DIOXIDE,
} from '../../../../config/constants';
import { determineCoordinates } from '../../../../utils/utils';

const CanvasCarbonDioxide = ({
  moleculeCenter,
  shouldOscillate,
  oscillationFactor,
}) => {
  const { TOP_OXYGEN, CARBON, BOTTOM_OXYGEN } = CANVAS_CARBON_DIOXIDE;

  const topOxygen = determineCoordinates(
    moleculeCenter,
    TOP_OXYGEN,
    shouldOscillate,
    oscillationFactor,
  );
  const carbon = determineCoordinates(
    moleculeCenter,
    CARBON,
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
      <CanvasBondContainer from={topOxygen} to={carbon} numberOfBonds={2} />
      <CanvasBondContainer from={carbon} to={bottomOxygen} numberOfBonds={2} />
      {/* molecule atoms */}
      <CanvasOxygen coordinates={topOxygen} charge={NEGATIVE_CHARGE} />
      <CanvasCarbon coordinates={carbon} charge={POSITIVE_CHARGE} />
      <CanvasOxygen coordinates={bottomOxygen} charge={NEGATIVE_CHARGE} />
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
