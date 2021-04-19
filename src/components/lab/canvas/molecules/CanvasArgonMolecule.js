import React from 'react';
import PropTypes from 'prop-types';
import CanvasArgon from './atoms/CanvasArgon';

const CanvasArgonMolecule = ({ x, y }) => {
  const argonAtomInitialCenterPoint = {
    x,
    y,
  };

  return (
    <CanvasArgon
      x={argonAtomInitialCenterPoint.x}
      y={argonAtomInitialCenterPoint.y}
    />
  );
};

CanvasArgonMolecule.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default CanvasArgonMolecule;
