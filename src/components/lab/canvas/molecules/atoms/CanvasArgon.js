import React from 'react';
import PropTypes from 'prop-types';
import CanvasAtom from './CanvasAtom';
import {
  ARGON_ATOM_COLOR,
  ARGON_ATOM_SIZE,
} from '../../../../../config/constants';

const CanvasArgon = ({ x, y }) => {
  return (
    <CanvasAtom
      atomColor={ARGON_ATOM_COLOR}
      atomSize={ARGON_ATOM_SIZE}
      x={x}
      y={y}
    />
  );
};

CanvasArgon.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default CanvasArgon;
