import React from 'react';
import PropTypes from 'prop-types';
import CanvasArgon from './atoms/CanvasArgon';

const CanvasArgonMolecule = ({ x, y }) => {
  const argonAtomCenterX = x;
  const argonAtomCenterY = y;

  return <CanvasArgon x={argonAtomCenterX} y={argonAtomCenterY} />;
};

CanvasArgonMolecule.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default CanvasArgonMolecule;
