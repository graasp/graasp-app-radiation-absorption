import React from 'react';
import PropTypes from 'prop-types';
import { Group } from 'react-konva';
import CanvasNitrogen from './atoms/CanvasNitrogen';
import CanvasOxygen from './atoms/CanvasOxygen';
import {
  CANVAS_ATOM_DIMENSIONS,
  OXYGEN_ATOM_SIZE,
  NITROGEN_ATOM_SIZE,
  CANVAS_MOLECULE_AREA_Y_POSITION,
  NEGATIVE_CHARGE,
  POSITIVE_CHARGE,
} from '../../../../config/constants';

const CanvasNitrousOxide = ({ x }) => {
  const oxygenAtomRadius = CANVAS_ATOM_DIMENSIONS[OXYGEN_ATOM_SIZE];
  const nitrogenAtomRadius = CANVAS_ATOM_DIMENSIONS[NITROGEN_ATOM_SIZE];

  return (
    <Group>
      <CanvasNitrogen
        x={x}
        y={
          CANVAS_MOLECULE_AREA_Y_POSITION -
          nitrogenAtomRadius -
          nitrogenAtomRadius
        }
        charge={NEGATIVE_CHARGE}
      />
      <CanvasNitrogen
        x={x}
        y={CANVAS_MOLECULE_AREA_Y_POSITION}
        charge={POSITIVE_CHARGE}
      />
      <CanvasOxygen
        x={x}
        y={
          CANVAS_MOLECULE_AREA_Y_POSITION +
          nitrogenAtomRadius +
          oxygenAtomRadius
        }
        charge={NEGATIVE_CHARGE}
      />
    </Group>
  );
};

CanvasNitrousOxide.propTypes = {
  x: PropTypes.number.isRequired,
};

export default CanvasNitrousOxide;
