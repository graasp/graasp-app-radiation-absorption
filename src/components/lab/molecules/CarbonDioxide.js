import React from 'react';
import MoleculeContainer from './MoleculeContainer';
import Carbon from './atoms/Carbon';
import Oxygen from './atoms/Oxygen';
import { CARBON_DIOXIDE_MOLECULE_ID } from '../../../config/constants';

const CarbonDioxide = () => {
  return (
    <MoleculeContainer moleculeId={CARBON_DIOXIDE_MOLECULE_ID}>
      <Oxygen />
      <Carbon />
      <Oxygen />
    </MoleculeContainer>
  );
};

export default CarbonDioxide;
