import React from 'react';
import PropTypes from 'prop-types';
import CanvasAtom from './CanvasAtom';
import { HYDROGEN } from '../../../../../config/constants';

const CanvasHydrogen = ({ coordinates, charge, atomColor }) => {
  const { x, y } = coordinates;
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
  coordinates: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
  charge: PropTypes.string,
  atomColor: PropTypes.string.isRequired,
};

CanvasHydrogen.defaultProps = {
  charge: '',
};

export default CanvasHydrogen;
