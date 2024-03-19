import React from 'react';
import PropTypes from 'prop-types';
import CanvasAtom from './CanvasAtom';
import { ARGON } from '../../../../../constants/canvas-molecules/common';

const CanvasArgon = ({ coordinates }) => {
  const { x, y } = coordinates;
  return (
    <CanvasAtom
      color={ARGON.color}
      size={ARGON.size}
      chargeColor={ARGON.chargeColor}
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
