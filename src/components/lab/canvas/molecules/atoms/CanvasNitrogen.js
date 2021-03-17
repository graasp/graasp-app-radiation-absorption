import React from 'react';
import PropTypes from 'prop-types';
import CanvasAtom from './CanvasAtom';
import { NITROGEN } from '../../../../../config/constants';

const CanvasNitrogen = ({ x, y, charge }) => {
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
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  charge: PropTypes.string,
};

CanvasNitrogen.defaultProps = {
  charge: '',
};

export default CanvasNitrogen;
