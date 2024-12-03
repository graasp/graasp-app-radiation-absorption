import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Group } from 'react-konva';
import CanvasNitrogen from './atoms/CanvasNitrogen';
import CanvasOxygen from './atoms/CanvasOxygen';
import CanvasBondContainer from './CanvasBondContainer';
import { NEGATIVE, POSITIVE } from '../../../../constants/strings';
import { determineCoordinates } from '../../../../utils/utils';
import { CANVAS_NITROUS_OXIDE } from '../../../../constants/canvas-molecules';

const CanvasNitrousOxide = ({
  moleculeCenter,
  shouldOscillate,
  oscillationFactor,
}) => {
  const { height } = useSelector(({ layout }) => layout.lab.stageDimensions);
  const { TOP_NITROGEN, MIDDLE_NITROGEN, BOTTOM_OXYGEN } = CANVAS_NITROUS_OXIDE;

  const topNitrogen = determineCoordinates(
    moleculeCenter,
    TOP_NITROGEN,
    height,
    shouldOscillate,
    oscillationFactor,
  );
  const middleNitrogen = determineCoordinates(
    moleculeCenter,
    MIDDLE_NITROGEN,
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
        from={topNitrogen}
        to={middleNitrogen}
        numberOfBonds={2}
      />
      <CanvasBondContainer
        from={middleNitrogen}
        to={bottomOxygen}
        numberOfBonds={2}
      />
      <CanvasNitrogen coordinates={topNitrogen} charge={NEGATIVE} />
      <CanvasNitrogen coordinates={middleNitrogen} charge={POSITIVE} />
      <CanvasOxygen coordinates={bottomOxygen} charge={NEGATIVE} />
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
