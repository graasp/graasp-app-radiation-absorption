import React from 'react';
import PropTypes from 'prop-types';
import { Circle } from 'react-konva';
import { CANVAS_ATOM_DIMENSIONS } from '../../../../../config/constants';

const CanvasAtom = ({ atomColor, atomSize, x, y }) => {
  const atomRadius = CANVAS_ATOM_DIMENSIONS[atomSize];
  return <Circle radius={atomRadius} fill={atomColor} x={x} y={y} />;
};

CanvasAtom.propTypes = {
  atomColor: PropTypes.string.isRequired,
  atomSize: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default CanvasAtom;
