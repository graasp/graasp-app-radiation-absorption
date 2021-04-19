import React from 'react';
import PropTypes from 'prop-types';
import CanvasAtom from './CanvasAtom';
import { OXYGEN } from '../../../../../config/constants';

const CanvasOxygen = ({ x, y, charge }) => {
  return (
    <CanvasAtom
      atomColor={OXYGEN.atomColor}
      atomSize={OXYGEN.size}
      chargeSymbolColor={OXYGEN.chargeSymbolColor}
      x={x}
      y={y}
      charge={charge}
    />
  );
};

CanvasOxygen.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  charge: PropTypes.string,
};

CanvasOxygen.defaultProps = {
  charge: '',
};

export default CanvasOxygen;
