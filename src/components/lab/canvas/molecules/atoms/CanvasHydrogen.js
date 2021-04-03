import React from 'react';
import PropTypes from 'prop-types';
import CanvasAtom from './CanvasAtom';
import { HYDROGEN } from '../../../../../config/constants';

const CanvasHydrogen = ({
  x,
  y,
  charge,
  shouldOscillate,
  amplitude,
  initialCenterPoint,
  setCenterPoint,
}) => {
  return (
    <CanvasAtom
      atomColor={HYDROGEN.atomColor}
      atomSize={HYDROGEN.size}
      chargeSymbolColor={HYDROGEN.chargeSymbolColor}
      x={x}
      y={y}
      charge={charge}
      shouldOscillate={shouldOscillate}
      amplitude={amplitude}
      initialCenterPoint={initialCenterPoint}
      setCenterPoint={setCenterPoint}
    />
  );
};

CanvasHydrogen.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  charge: PropTypes.string,
  shouldOscillate: PropTypes.bool.isRequired,
  amplitude: PropTypes.number,
  initialCenterPoint: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
  setCenterPoint: PropTypes.func.isRequired,
};

CanvasHydrogen.defaultProps = {
  charge: '',
  amplitude: 0,
};

export default CanvasHydrogen;
