import React from 'react';
import PropTypes from 'prop-types';
import { Group } from 'react-konva';
import CanvasNitrogen from './atoms/CanvasNitrogen';
import {
  CANVAS_ATOM_DIMENSIONS,
  NITROGEN_ATOM_SIZE,
  CANVAS_MOLECULE_AREA_Y_POSITION,
} from '../../../../config/constants';

const CanvasDinitrogen = ({ x }) => {
  const nitrogenAtomRadius = CANVAS_ATOM_DIMENSIONS[NITROGEN_ATOM_SIZE];

  return (
    <Group>
      <CanvasNitrogen
        x={x}
        y={CANVAS_MOLECULE_AREA_Y_POSITION - nitrogenAtomRadius}
      />
      <CanvasNitrogen
        x={x}
        y={CANVAS_MOLECULE_AREA_Y_POSITION + nitrogenAtomRadius}
      />
    </Group>
  );
};

CanvasDinitrogen.propTypes = {
  x: PropTypes.number.isRequired,
};

export default CanvasDinitrogen;
