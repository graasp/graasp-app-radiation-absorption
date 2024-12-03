import React from 'react';
import PropTypes from 'prop-types';
import CanvasAtom from './CanvasAtom';
import { NITROGEN } from '../../../../../constants/canvas-molecules/common';

const CanvasNitrogen = ({ coordinates, charge }) => {
  const { x, y } = coordinates;
  return (
    <CanvasAtom
      color={NITROGEN.color}
      size={NITROGEN.size}
      chargeColor={NITROGEN.chargeColor}
      x={x}
      y={y}
      charge={charge}
    />
  );
};

CanvasNitrogen.propTypes = {
  coordinates: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
  charge: PropTypes.string,
};

CanvasNitrogen.defaultProps = {
  charge: '',
};

export default CanvasNitrogen;
