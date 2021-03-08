import React from 'react';
import PropTypes from 'prop-types';
import { Group } from 'react-konva';
import CanvasCarbon from './atoms/CanvasCarbon';
import CanvasOxygen from './atoms/CanvasOxygen';
import {
  CANVAS_ATOM_DIMENSIONS,
  OXYGEN_ATOM_SIZE,
  CARBON_ATOM_SIZE,
  CANVAS_MOLECULE_AREA_Y_POSITION,
  NEGATIVE_CHARGE,
  POSITIVE_CHARGE,
} from '../../../../config/constants';

const CanvasCarbonDioxide = ({ x }) => {
  const oxygenAtomRadius = CANVAS_ATOM_DIMENSIONS[OXYGEN_ATOM_SIZE];
  const carbonAtomRadius = CANVAS_ATOM_DIMENSIONS[CARBON_ATOM_SIZE];

  return (
    <Group>
      <CanvasOxygen
        x={x}
        y={
          CANVAS_MOLECULE_AREA_Y_POSITION - carbonAtomRadius - oxygenAtomRadius
        }
        charge={NEGATIVE_CHARGE}
      />
      <CanvasCarbon
        x={x}
        y={CANVAS_MOLECULE_AREA_Y_POSITION}
        charge={POSITIVE_CHARGE}
      />
      <CanvasOxygen
        x={x}
        y={
          CANVAS_MOLECULE_AREA_Y_POSITION + carbonAtomRadius + oxygenAtomRadius
        }
        charge={NEGATIVE_CHARGE}
      />
    </Group>
  );
};

CanvasCarbonDioxide.propTypes = {
  x: PropTypes.number.isRequired,
};

export default CanvasCarbonDioxide;
