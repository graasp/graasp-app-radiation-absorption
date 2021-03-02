import React from 'react';
import PropTypes from 'prop-types';
import CanvasAtom from './CanvasAtom';
import {
  CARBON_ATOM_COLOR,
  CARBON_ATOM_SIZE,
} from '../../../../../config/constants';

const CanvasCarbon = ({ x, y }) => {
  return (
    <CanvasAtom
      atomColor={CARBON_ATOM_COLOR}
      atomSize={CARBON_ATOM_SIZE}
      x={x}
      y={y}
    />
  );
};

CanvasCarbon.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default CanvasCarbon;
