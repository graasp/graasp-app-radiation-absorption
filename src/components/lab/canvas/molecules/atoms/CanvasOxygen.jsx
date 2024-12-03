import React from 'react';
import PropTypes from 'prop-types';
import CanvasAtom from './CanvasAtom';
import { OXYGEN } from '../../../../../constants/canvas-molecules/common';

const CanvasOxygen = ({ coordinates, charge }) => {
  const { x, y } = coordinates;
  return (
    <CanvasAtom
      color={OXYGEN.color}
      size={OXYGEN.size}
      chargeColor={OXYGEN.chargeColor}
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
