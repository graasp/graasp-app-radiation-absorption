import React from 'react';
import PropTypes from 'prop-types';
import CanvasAtom from './CanvasAtom';
import { CARBON } from '../../../../../config/constants';

const CanvasCarbon = ({
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
      atomColor={CARBON.atomColor}
      atomSize={CARBON.size}
      chargeSymbolColor={CARBON.chargeSymbolColor}
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

CanvasCarbon.propTypes = {
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

CanvasCarbon.defaultProps = {
  charge: '',
  oscillationConstant: 0,
};

export default CanvasCarbon;
