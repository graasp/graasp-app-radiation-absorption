import React from 'react';
import PropTypes from 'prop-types';
import CanvasAtom from './CanvasAtom';
import { NITROGEN } from '../../../../../config/constants';

const CanvasNitrogen = ({
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
      atomColor={NITROGEN.atomColor}
      atomSize={NITROGEN.size}
      chargeSymbolColor={NITROGEN.chargeSymbolColor}
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

CanvasNitrogen.propTypes = {
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

CanvasNitrogen.defaultProps = {
  charge: '',
  oscillationConstant: 0,
};

export default CanvasNitrogen;
