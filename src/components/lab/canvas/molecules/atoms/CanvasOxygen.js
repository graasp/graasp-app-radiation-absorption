import React from 'react';
import PropTypes from 'prop-types';
import CanvasAtom from './CanvasAtom';
import { OXYGEN } from '../../../../../config/constants';

const CanvasOxygen = ({ coordinates, charge }) => {
  const { x, y } = coordinates;
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
  coordinates: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
  charge: PropTypes.string,
};

CanvasOxygen.defaultProps = {
  charge: '',
};

export default CanvasOxygen;
