import React from 'react';
import PropTypes from 'prop-types';
import CanvasAtom from './CanvasAtom';
import { CARBON } from '../../../../../config/constants';

const CanvasCarbon = ({ x, y, charge }) => {
  return (
    <CanvasAtom
      atomColor={CARBON.atomColor}
      atomSize={CARBON.size}
      chargeSymbolColor={CARBON.chargeSymbolColor}
      x={x}
      y={y}
      charge={charge}
    />
  );
};

CanvasCarbon.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  charge: PropTypes.string,
};

CanvasCarbon.defaultProps = {
  charge: '',
};

export default CanvasCarbon;
