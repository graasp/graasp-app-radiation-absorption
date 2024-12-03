import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Group } from 'react-konva';
import CanvasNitrogen from './atoms/CanvasNitrogen';
import CanvasBondContainer from './CanvasBondContainer';
import { determineCoordinates } from '../../../../utils/utils';
import { CANVAS_DINITROGEN } from '../../../../constants/canvas-molecules';

const CanvasDinitrogen = ({ moleculeCenter: center }) => {
  const { height } = useSelector(({ layout }) => layout.lab.stageDimensions);
  const { TOP_NITROGEN, BOTTOM_NITROGEN } = CANVAS_DINITROGEN;
  const topNitrogen = determineCoordinates(center, TOP_NITROGEN, height);
  const bottomNitrogen = determineCoordinates(center, BOTTOM_NITROGEN, height);

  return (
    <Group>
      <CanvasBondContainer
        from={topNitrogen}
        to={bottomNitrogen}
        numberOfBonds={3}
      />
      <CanvasNitrogen coordinates={topNitrogen} />
      <CanvasNitrogen coordinates={bottomNitrogen} />
    </Group>
  );
};

CanvasDinitrogen.propTypes = {
  moleculeCenter: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
};

export default CanvasDinitrogen;
