import React from 'react';
import PropTypes from 'prop-types';
import CanvasAtom from './CanvasAtom';
import {
  NITROGEN_ATOM_COLOR,
  NITROGEN_ATOM_SIZE,
} from '../../../../../config/constants';

const CanvasNitrogen = ({ x, y }) => {
  return (
    <CanvasAtom
      atomColor={NITROGEN_ATOM_COLOR}
      atomSize={NITROGEN_ATOM_SIZE}
      x={x}
      y={y}
    />
  );
};

CanvasNitrogen.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default CanvasNitrogen;
