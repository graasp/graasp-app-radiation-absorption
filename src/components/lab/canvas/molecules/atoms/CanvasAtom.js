import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Group, Circle } from 'react-konva';
import {
  CANVAS_ATOM_DIMENSIONS,
  POSITIVE_CHARGE,
  NEGATIVE_CHARGE,
  DARK_ATOM_CHARGE_COLOR,
  STANDARD_CHARGE_COLOR,
} from '../../../../../config/constants';
import CanvasAtomNegativeCharge from './charges/CanvasAtomNegativeCharge';
import CanvasAtomPositiveCharge from './charges/CanvasAtomPositiveCharge';

const CanvasAtom = ({ atomColor, atomSize, x, y, charge }) => {
  const showAtomsCharges = useSelector(({ lab }) => lab.showAtomsCharges);

  const atomRadius = CANVAS_ATOM_DIMENSIONS[atomSize];

  // constants for styling charge
  const chargeSymbolColor =
    atomColor === 'black' ? DARK_ATOM_CHARGE_COLOR : STANDARD_CHARGE_COLOR;

  // used in return statement below; default is null (no charge displayed)
  let chargeToDisplay = null;
  if (charge === POSITIVE_CHARGE) {
    chargeToDisplay = (
      <CanvasAtomPositiveCharge x={x} y={y} color={chargeSymbolColor} />
    );
  } else if (charge === NEGATIVE_CHARGE) {
    chargeToDisplay = (
      <CanvasAtomNegativeCharge x={x} y={y} color={chargeSymbolColor} />
    );
  }

  return (
    <Group>
      <Circle radius={atomRadius} fill={atomColor} x={x} y={y} />
      {showAtomsCharges && chargeToDisplay}
    </Group>
  );
};

CanvasAtom.propTypes = {
  atomColor: PropTypes.string.isRequired,
  atomSize: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  charge: PropTypes.string,
};

CanvasAtom.defaultProps = {
  charge: '',
};

export default CanvasAtom;
