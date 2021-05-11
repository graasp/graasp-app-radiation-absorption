import React from 'react';
import PropTypes from 'prop-types';
import CanvasAtom from './CanvasAtom';
import { ARGON } from '../../../../../config/constants';

const CanvasArgon = ({ coordinates }) => {
  const { x, y } = coordinates;
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
  coordinates: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
};

export default CanvasArgon;
