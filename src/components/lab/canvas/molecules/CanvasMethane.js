import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Group } from 'react-konva';
import CanvasCarbon from './atoms/CanvasCarbon';
import CanvasHydrogen from './atoms/CanvasHydrogen';
import { NEGATIVE, POSITIVE } from '../../../../constants/strings';
import CanvasBondContainer from './CanvasBondContainer';
import { determineCoordinates } from '../../../../utils/utils';
import { CANVAS_METHANE } from '../../../../constants/canvas-molecules';
import { HYDROGEN } from '../../../../constants/canvas-molecules/common';

const CanvasMethane = ({
  moleculeCenter,
  shouldOscillate,
  oscillationFactor,
}) => {
  const { height } = useSelector(({ layout }) => layout.lab.stageDimensions);
  const {
    CARBON,
    TOP_LEFT_HYDROGEN,
    TOP_RIGHT_HYDROGEN,
    BOTTOM_RIGHT_HYDROGEN,
    BOTTOM_LEFT_HYDROGEN,
  } = CANVAS_METHANE;

  const carbon = determineCoordinates(
    moleculeCenter,
    CARBON,
    height,
    shouldOscillate,
    oscillationFactor,
  );
  const topLeftHydrogen = determineCoordinates(
    moleculeCenter,
    TOP_LEFT_HYDROGEN,
    height,
    shouldOscillate,
    oscillationFactor,
  );
  const topRightHydrogen = determineCoordinates(
    moleculeCenter,
    TOP_RIGHT_HYDROGEN,
    height,
    shouldOscillate,
    oscillationFactor,
  );
  const bottomRightHydrogen = determineCoordinates(
    moleculeCenter,
    BOTTOM_RIGHT_HYDROGEN,
    height,
    shouldOscillate,
    oscillationFactor,
  );
  const bottomLeftHydrogen = determineCoordinates(
    moleculeCenter,
    BOTTOM_LEFT_HYDROGEN,
    height,
    shouldOscillate,
    oscillationFactor,
  );

  return (
    <Group>
      <CanvasBondContainer
        from={topLeftHydrogen}
        to={carbon}
        numberOfBonds={1}
      />
      <CanvasBondContainer
        from={topRightHydrogen}
        to={carbon}
        numberOfBonds={1}
      />
      <CanvasBondContainer
        from={bottomRightHydrogen}
        to={carbon}
        numberOfBonds={1}
      />
      <CanvasBondContainer
        from={bottomLeftHydrogen}
        to={carbon}
        numberOfBonds={1}
      />
      <CanvasCarbon coordinates={carbon} charge={NEGATIVE} />
      <CanvasHydrogen
        coordinates={topLeftHydrogen}
        charge={POSITIVE}
        color={HYDROGEN.color.DARKER}
      />
      <CanvasHydrogen
        coordinates={topRightHydrogen}
        charge={POSITIVE}
        color={HYDROGEN.color.STANDARD}
      />
      <CanvasHydrogen
        coordinates={bottomRightHydrogen}
        charge={POSITIVE}
        color={HYDROGEN.color.STANDARD}
      />
      <CanvasHydrogen
        coordinates={bottomLeftHydrogen}
        charge={POSITIVE}
        color={HYDROGEN.color.LIGHTER}
      />
    </Group>
  );
};

CanvasMethane.propTypes = {
  moleculeCenter: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
  shouldOscillate: PropTypes.bool.isRequired,
  oscillationFactor: PropTypes.number.isRequired,
};

export default CanvasMethane;
