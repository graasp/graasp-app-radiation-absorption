import React from 'react';
import PropTypes from 'prop-types';
import { Group } from 'react-konva';
import CanvasNitrogen from './atoms/CanvasNitrogen';
import CanvasBondContainer from './CanvasBondContainer';
import { CANVAS_DINITROGEN } from '../../../../config/constants';
import { determineCoordinates } from '../../../../utils/utils';

const CanvasDinitrogen = ({ moleculeCenter }) => {
  const { TOP_NITROGEN, BOTTOM_NITROGEN } = CANVAS_DINITROGEN;
  const topNitrogen = determineCoordinates(moleculeCenter, TOP_NITROGEN);
  const bottomNitrogen = determineCoordinates(moleculeCenter, BOTTOM_NITROGEN);

  return (
    <Group>
      {/* molecule bonds */}
      {/* note that these CanvasBondContainer components need to be at the top here so that they fall behind atoms on the canvas */}
      <CanvasBondContainer
        from={topNitrogen}
        to={bottomNitrogen}
        numberOfBonds={3}
      />
      {/* molecule atoms */}
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
