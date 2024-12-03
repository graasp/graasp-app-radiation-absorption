import React from 'react';
import PropTypes from 'prop-types';
import CanvasAtom from './CanvasAtom';
import { HYDROGEN } from '../../../../../constants/canvas-molecules/common';

const CanvasHydrogen = ({ coordinates, charge, color }) => {
  const { x, y } = coordinates;
  return (
    <CanvasAtom
      color={color}
      size={HYDROGEN.size}
      chargeColor={HYDROGEN.chargeColor}
      x={x}
      y={y}
      charge={charge}
    />
  );
};

CanvasHydrogen.propTypes = {
  coordinates: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
  charge: PropTypes.string,
  color: PropTypes.string.isRequired,
};

CanvasHydrogen.defaultProps = {
  charge: '',
};

export default CanvasHydrogen;
