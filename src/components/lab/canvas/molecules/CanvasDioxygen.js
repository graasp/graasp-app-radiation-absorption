import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Group } from 'react-konva';
import CanvasOxygen from './atoms/CanvasOxygen';
import CanvasBondContainer from './CanvasBondContainer';
import { determineCoordinates } from '../../../../utils/utils';
import { CANVAS_DIOXYGEN } from '../../../../constants/canvas-molecules';

const CanvasDioxygen = ({ moleculeCenter: center }) => {
  const { height } = useSelector(({ layout }) => layout.lab.stageDimensions);
  const { TOP_OXYGEN, BOTTOM_OXYGEN } = CANVAS_DIOXYGEN;
  const topOxygen = determineCoordinates(center, TOP_OXYGEN, height);
  const bottomOxygen = determineCoordinates(center, BOTTOM_OXYGEN, height);

  return (
    <Group>
      <CanvasBondContainer
        from={topOxygen}
        to={bottomOxygen}
        numberOfBonds={2}
      />
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
