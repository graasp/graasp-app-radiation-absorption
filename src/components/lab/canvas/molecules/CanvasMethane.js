import React from 'react';
import PropTypes from 'prop-types';
import { Group } from 'react-konva';
import CanvasCarbon from './atoms/CanvasCarbon';
import CanvasHydrogen from './atoms/CanvasHydrogen';
import {
  HYDROGEN,
  NEGATIVE_CHARGE,
  POSITIVE_CHARGE,
  CANVAS_METHANE,
} from '../../../../config/constants';
import CanvasBondContainer from './CanvasBondContainer';
import { determineCoordinates } from '../../../../utils/utils';

const CanvasMethane = ({
  moleculeCenter,
  shouldOscillate,
  oscillationFactor,
}) => {
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
    shouldOscillate,
    oscillationFactor,
  );
  const topLeftHydrogen = determineCoordinates(
    moleculeCenter,
    TOP_LEFT_HYDROGEN,
    shouldOscillate,
    oscillationFactor,
  );
  const topRightHydrogen = determineCoordinates(
    moleculeCenter,
    TOP_RIGHT_HYDROGEN,
    shouldOscillate,
    oscillationFactor,
  );
  const bottomRightHydrogen = determineCoordinates(
    moleculeCenter,
    BOTTOM_RIGHT_HYDROGEN,
    shouldOscillate,
    oscillationFactor,
  );
  const bottomLeftHydrogen = determineCoordinates(
    moleculeCenter,
    BOTTOM_LEFT_HYDROGEN,
    shouldOscillate,
    oscillationFactor,
  );

  return (
    <Group>
      {/* molecule bonds */}
      {/* note that these CanvasBondContainer components need to be at the top here so that they fall behind atoms on the canvas */}
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
      {/* molecule atoms */}
      <CanvasCarbon coordinates={carbon} charge={NEGATIVE_CHARGE} />
      <CanvasHydrogen
        coordinates={topLeftHydrogen}
        charge={POSITIVE_CHARGE}
        atomColor={HYDROGEN.atomColor.DARKER}
      />
      <CanvasHydrogen
        coordinates={topRightHydrogen}
        charge={POSITIVE_CHARGE}
        atomColor={HYDROGEN.atomColor.STANDARD}
      />
      <CanvasHydrogen
        coordinates={bottomRightHydrogen}
        charge={POSITIVE_CHARGE}
        atomColor={HYDROGEN.atomColor.STANDARD}
      />
      <CanvasHydrogen
        coordinates={bottomLeftHydrogen}
        charge={POSITIVE_CHARGE}
        atomColor={HYDROGEN.atomColor.LIGHTER}
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
