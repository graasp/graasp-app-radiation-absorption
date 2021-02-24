import React from 'react';
import MoleculeContainer from './MoleculeContainer';
import Nitrogen from './atoms/Nitrogen';
import { DINITROGEN_MOLECULE_ID } from '../../../config/constants';

const Dinitrogen = () => {
  return (
    <MoleculeContainer moleculeId={DINITROGEN_MOLECULE_ID}>
      <Nitrogen />
      <Nitrogen />
    </MoleculeContainer>
  );
};

export default Dinitrogen;
