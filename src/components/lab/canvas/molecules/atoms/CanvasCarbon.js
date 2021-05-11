import React from 'react';
import PropTypes from 'prop-types';
import CanvasAtom from './CanvasAtom';
import { CARBON } from '../../../../../config/constants';

const CanvasCarbon = ({ coordinates, charge }) => {
  const { x, y } = coordinates;
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
