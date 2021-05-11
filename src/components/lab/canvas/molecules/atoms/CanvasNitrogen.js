import React from 'react';
import PropTypes from 'prop-types';
import CanvasAtom from './CanvasAtom';
import { NITROGEN } from '../../../../../config/constants';

const CanvasNitrogen = ({ coordinates, charge }) => {
  const { x, y } = coordinates;
  return (
    <CanvasAtom
      atomColor={NITROGEN.atomColor}
      atomSize={NITROGEN.size}
      chargeSymbolColor={NITROGEN.chargeSymbolColor}
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
