import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Group, Circle } from 'react-konva';
import { POSITIVE, NEGATIVE } from '../../../../../constants/strings';
import CanvasAtomNegativeCharge from './charges/CanvasAtomNegativeCharge';
import CanvasAtomPositiveCharge from './charges/CanvasAtomPositiveCharge';
import { CANVAS_ATOM_DIMENSIONS } from '../../../../../constants/canvas-molecules/common';

const CanvasAtom = ({ color, size, x, y, charge, chargeColor }) => {
  const { showCharges } = useSelector(({ lab }) => lab);
  const { height } = useSelector(({ layout }) => layout.lab.stageDimensions);
  const atomRadius = CANVAS_ATOM_DIMENSIONS[size] * height;

  let chargeToDisplay = null;
  if (charge === POSITIVE) {
    chargeToDisplay = (
      <CanvasAtomPositiveCharge x={x} y={y} color={chargeColor} />
    );
  } else if (charge === NEGATIVE) {
    chargeToDisplay = (
      <CanvasAtomNegativeCharge x={x} y={y} color={chargeColor} />
    );
  }

  return (
    <Group>
      <Circle radius={atomRadius} fill={color} x={x} y={y} />
      {showCharges && chargeToDisplay}
    </Group>
  );
};

CanvasAtom.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  chargeColor: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  charge: PropTypes.string,
};

CanvasAtom.defaultProps = {
  charge: '',
};

export default CanvasAtom;
