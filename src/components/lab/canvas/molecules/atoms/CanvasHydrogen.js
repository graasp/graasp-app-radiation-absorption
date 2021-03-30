import React from 'react';
import PropTypes from 'prop-types';
import CanvasAtom from './CanvasAtom';
import { HYDROGEN } from '../../../../../config/constants';

const CanvasHydrogen = ({
  x,
  y,
  charge,
  shouldOscillate,
  oscillationConstant,
  // eslint-disable-next-line react/prop-types
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
      oscillationConstant={oscillationConstant}
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
  oscillationConstant: PropTypes.number,
  setCenterPoint: PropTypes.func.isRequired,
};

CanvasHydrogen.defaultProps = {
  charge: '',
  oscillationConstant: 0,
};

export default CanvasHydrogen;
