import React from 'react';
import MoleculeContainer from './MoleculeContainer';
import Oxygen from './atoms/Oxygen';
import { DIOXYGEN_MOLECULE_ID } from '../../../config/constants';

const Dioxygen = () => {
  return (
    <MoleculeContainer moleculeId={DIOXYGEN_MOLECULE_ID}>
      <Oxygen />
      <Oxygen />
    </MoleculeContainer>
  );
};

export default Dioxygen;
