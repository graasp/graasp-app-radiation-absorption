import React from 'react';
import PropTypes from 'prop-types';
import CanvasAtom from './CanvasAtom';
import { HYDROGEN } from '../../../../../config/constants';

const CanvasHydrogen = ({ x, y, charge, atomColor }) => {
  return (
    <CanvasAtom
      atomColor={atomColor}
      atomSize={HYDROGEN.size}
      chargeSymbolColor={HYDROGEN.chargeSymbolColor}
      x={x}
      y={y}
      charge={charge}
    />
  );
};

CanvasHydrogen.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  charge: PropTypes.string,
  atomColor: PropTypes.string.isRequired,
};

CanvasHydrogen.defaultProps = {
  charge: '',
};

export default CanvasHydrogen;
