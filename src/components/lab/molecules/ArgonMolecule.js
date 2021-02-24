import React from 'react';
import MoleculeContainer from './MoleculeContainer';
import Argon from './atoms/Argon';
import { ARGON_MOLECULE_ID } from '../../../config/constants';

const ArgonMolecule = () => {
  return (
    <MoleculeContainer moleculeId={ARGON_MOLECULE_ID}>
      <Argon />
    </MoleculeContainer>
  );
};

export default ArgonMolecule;
