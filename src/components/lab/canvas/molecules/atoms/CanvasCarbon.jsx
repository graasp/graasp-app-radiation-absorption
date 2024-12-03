import React from 'react';
import PropTypes from 'prop-types';
import CanvasAtom from './CanvasAtom';
import { CARBON } from '../../../../../constants/canvas-molecules/common';

const CanvasCarbon = ({ coordinates, charge }) => {
  const { x, y } = coordinates;
  return (
    <CanvasAtom
      color={CARBON.color}
      size={CARBON.size}
      chargeColor={CARBON.chargeColor}
      x={x}
      y={y}
      charge={charge}
    />
  );
};

CanvasCarbon.propTypes = {
  coordinates: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
  charge: PropTypes.string,
};

CanvasCarbon.defaultProps = {
  charge: '',
};

export default CanvasCarbon;
