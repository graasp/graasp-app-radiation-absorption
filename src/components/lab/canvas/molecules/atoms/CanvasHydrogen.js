import React from 'react';
import PropTypes from 'prop-types';
import CanvasAtom from './CanvasAtom';
import {
  HYDROGEN_ATOM_COLOR,
  HYDROGEN_ATOM_SIZE,
} from '../../../../../config/constants';

const CanvasHydrogen = ({ x, y, charge }) => {
  return (
    <CanvasAtom
      atomColor={HYDROGEN_ATOM_COLOR}
      atomSize={HYDROGEN_ATOM_SIZE}
      x={x}
      y={y}
      charge={charge}
    />
  );
};

CanvasHydrogen.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  charge: PropTypes.string,
};

CanvasHydrogen.defaultProps = {
  charge: '',
};

export default CanvasHydrogen;
