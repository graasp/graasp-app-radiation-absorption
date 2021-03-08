import React from 'react';
import PropTypes from 'prop-types';
import CanvasAtom from './CanvasAtom';
import {
  OXYGEN_ATOM_COLOR,
  OXYGEN_ATOM_SIZE,
} from '../../../../../config/constants';

const CanvasOxygen = ({ x, y, charge }) => {
  return (
    <CanvasAtom
      atomColor={OXYGEN_ATOM_COLOR}
      atomSize={OXYGEN_ATOM_SIZE}
      x={x}
      y={y}
      charge={charge}
    />
  );
};

CanvasOxygen.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  charge: PropTypes.string,
};

CanvasOxygen.defaultProps = {
  charge: '',
};

export default CanvasOxygen;
