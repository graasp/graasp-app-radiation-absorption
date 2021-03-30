import React from 'react';
import PropTypes from 'prop-types';
import CanvasAtom from './CanvasAtom';
import { OXYGEN } from '../../../../../config/constants';

const CanvasOxygen = ({
  x,
  y,
  charge,
  shouldOscillate,
  oscillationConstant,
  initialCenterPoint,
  setCenterPoint,
}) => {
  return (
    <CanvasAtom
      atomColor={OXYGEN.atomColor}
      atomSize={OXYGEN.size}
      chargeSymbolColor={OXYGEN.chargeSymbolColor}
      x={x}
      y={y}
      charge={charge}
      shouldOscillate={shouldOscillate}
      oscillationConstant={oscillationConstant}
      initialCenterPoint={initialCenterPoint}
      setCenterPoint={setCenterPoint}
    />
  );
};

CanvasOxygen.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  charge: PropTypes.string,
  shouldOscillate: PropTypes.bool.isRequired,
  oscillationConstant: PropTypes.number,
  initialCenterPoint: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
  setCenterPoint: PropTypes.func.isRequired,
};

CanvasOxygen.defaultProps = {
  charge: '',
  oscillationConstant: 0,
};

export default CanvasOxygen;
