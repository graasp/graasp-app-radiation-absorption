import React from 'react';
import PropTypes from 'prop-types';
import CanvasAtom from './CanvasAtom';
import { ARGON } from '../../../../../config/constants';

const CanvasArgon = ({
  x,
  y,
  shouldOscillate,
  amplitude,
  initialCenterPoint,
  setCenterPoint,
}) => {
  return (
    <CanvasAtom
      atomColor={ARGON.atomColor}
      atomSize={ARGON.size}
      chargeSymbolColor={ARGON.chargeSymbolColor}
      x={x}
      y={y}
      shouldOscillate={shouldOscillate}
      amplitude={amplitude}
      initialCenterPoint={initialCenterPoint}
      setCenterPoint={setCenterPoint}
    />
  );
};

CanvasArgon.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  shouldOscillate: PropTypes.bool.isRequired,
  amplitude: PropTypes.number,
  initialCenterPoint: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
  setCenterPoint: PropTypes.func.isRequired,
};

CanvasArgon.defaultProps = {
  amplitude: 0,
};

export default CanvasArgon;
