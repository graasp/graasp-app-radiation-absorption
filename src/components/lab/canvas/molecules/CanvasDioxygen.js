import React from 'react';
import PropTypes from 'prop-types';
import { Group } from 'react-konva';
import CanvasOxygen from './atoms/CanvasOxygen';
import CanvasBondContainer from './CanvasBondContainer';
import { CANVAS_DIOXYGEN } from '../../../../config/constants';
import { determineCoordinates } from '../../../../utils/utils';

const CanvasDioxygen = ({ moleculeCenter }) => {
  const { TOP_OXYGEN, BOTTOM_OXYGEN } = CANVAS_DIOXYGEN;
  const topOxygen = determineCoordinates(moleculeCenter, TOP_OXYGEN);
  const bottomOxygen = determineCoordinates(moleculeCenter, BOTTOM_OXYGEN);

  return (
    <Group>
      {/* molecule bonds */}
      {/* note that these CanvasBondContainer components need to be at the top here so that they fall behind atoms on the canvas */}
      <CanvasBondContainer
        from={topOxygen}
        to={bottomOxygen}
        numberOfBonds={2}
      />
      {/* molecule atoms */}
      <CanvasOxygen coordinates={topOxygen} />
      <CanvasOxygen coordinates={bottomOxygen} />
    </Group>
  );
};

CanvasDioxygen.propTypes = {
  moleculeCenter: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
};

export default CanvasDioxygen;
