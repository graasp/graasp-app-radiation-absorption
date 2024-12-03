import React from 'react';
import PropTypes from 'prop-types';
import CanvasArgon from './atoms/CanvasArgon';

const CanvasArgonMolecule = ({ moleculeCenter }) => {
  const { x: argonAtomCenterX, y: argonAtomCenterY } = moleculeCenter;

  return (
    <CanvasArgon coordinates={{ x: argonAtomCenterX, y: argonAtomCenterY }} />
  );
};

CanvasArgonMolecule.propTypes = {
  moleculeCenter: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
};

export default CanvasArgonMolecule;
