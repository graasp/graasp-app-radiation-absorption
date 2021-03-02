import React from 'react';
import PropTypes from 'prop-types';
import CanvasArgon from './atoms/CanvasArgon';
import { CANVAS_MOLECULE_AREA_Y_POSITION } from '../../../../config/constants';

const CanvasArgonMolecule = ({ x }) => {
  return <CanvasArgon x={x} y={CANVAS_MOLECULE_AREA_Y_POSITION} />;
};

CanvasArgonMolecule.propTypes = {
  x: PropTypes.number.isRequired,
};

export default CanvasArgonMolecule;
