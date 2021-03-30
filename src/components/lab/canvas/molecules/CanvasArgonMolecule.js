import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CanvasArgon from './atoms/CanvasArgon';
import { CANVAS_MOLECULE_AREA_Y_POSITION } from '../../../../config/constants';

const CanvasArgonMolecule = ({ x, shouldOscillate }) => {
  const argonAtomInitialCenterPoint = {
    x,
    y: CANVAS_MOLECULE_AREA_Y_POSITION,
  };

  const [argonAtomCenterPoint, setArgonAtomCenterPoint] = useState(
    argonAtomInitialCenterPoint,
  );

  return (
    <CanvasArgon
      x={argonAtomCenterPoint.x}
      y={argonAtomCenterPoint.y}
      shouldOscillate={shouldOscillate}
      initialCenterPoint={argonAtomInitialCenterPoint}
      setCenterPoint={setArgonAtomCenterPoint}
    />
  );
};

CanvasArgonMolecule.propTypes = {
  x: PropTypes.number.isRequired,
  shouldOscillate: PropTypes.bool.isRequired,
};

export default CanvasArgonMolecule;
