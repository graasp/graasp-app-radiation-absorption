import React from 'react';
import PropTypes from 'prop-types';
import { Group } from 'react-konva';
import CanvasNitrogen from './atoms/CanvasNitrogen';
import CanvasOxygen from './atoms/CanvasOxygen';
import CanvasBondContainer from './CanvasBondContainer';
import {
  NEGATIVE_CHARGE,
  POSITIVE_CHARGE,
  CANVAS_NITROUS_OXIDE,
} from '../../../../config/constants';
import { determineCoordinates } from '../../../../utils/utils';

const CanvasNitrousOxide = ({
  moleculeCenter,
  shouldOscillate,
  oscillationFactor,
}) => {
  const { TOP_NITROGEN, MIDDLE_NITROGEN, BOTTOM_OXYGEN } = CANVAS_NITROUS_OXIDE;

  const topNitrogen = determineCoordinates(
    moleculeCenter,
    TOP_NITROGEN,
    shouldOscillate,
    oscillationFactor,
  );
  const middleNitrogen = determineCoordinates(
    moleculeCenter,
    MIDDLE_NITROGEN,
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
        from={topNitrogen}
        to={middleNitrogen}
        numberOfBonds={2}
      />
      <CanvasBondContainer
        from={middleNitrogen}
        to={bottomOxygen}
        numberOfBonds={2}
      />
      {/* molecule atoms */}
      <CanvasNitrogen coordinates={topNitrogen} charge={NEGATIVE_CHARGE} />
      <CanvasNitrogen coordinates={middleNitrogen} charge={POSITIVE_CHARGE} />
      <CanvasOxygen coordinates={bottomOxygen} charge={NEGATIVE_CHARGE} />
    </Group>
  );
};

CanvasNitrousOxide.propTypes = {
  moleculeCenter: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
  shouldOscillate: PropTypes.bool.isRequired,
  oscillationFactor: PropTypes.number.isRequired,
};

export default CanvasNitrousOxide;
