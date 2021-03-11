import React from 'react';
import PropTypes from 'prop-types';
import CanvasAtom from './CanvasAtom';
import { ARGON } from '../../../../../config/constants';

const CanvasArgon = ({ x, y }) => {
  return (
    <CanvasAtom
      atomColor={ARGON.atomColor}
      atomSize={ARGON.size}
      chargeSymbolColor={ARGON.chargeSymbolColor}
      x={x}
      y={y}
    />
  );
};

CanvasArgon.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default CanvasArgon;
