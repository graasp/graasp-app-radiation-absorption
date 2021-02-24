import React from 'react';
import MoleculeContainer from './MoleculeContainer';
import Nitrogen from './atoms/Nitrogen';
import Oxygen from './atoms/Oxygen';
import { NITROUS_OXIDE_MOLECULE_ID } from '../../../config/constants';

const NitrousOxide = () => {
  return (
    <MoleculeContainer moleculeId={NITROUS_OXIDE_MOLECULE_ID}>
      <Nitrogen />
      <Nitrogen />
      <Oxygen />
    </MoleculeContainer>
  );
};

export default NitrousOxide;
