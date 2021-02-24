import React from 'react';
import MoleculeContainer from './MoleculeContainer';
import Oxygen from './atoms/Oxygen';
import Hydrogen from './atoms/Hydrogen';
import { WATER_MOLECULE_ID } from '../../../config/constants';

const Water = () => {
  return (
    <MoleculeContainer moleculeId={WATER_MOLECULE_ID}>
      <Hydrogen />
      <Oxygen />
      <Hydrogen />
    </MoleculeContainer>
  );
};

export default Water;
