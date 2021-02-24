import React from 'react';
import MoleculeContainer from './MoleculeContainer';
import Oxygen from './atoms/Oxygen';
import { OZONE_MOLECULE_ID } from '../../../config/constants';

const Ozone = () => {
  return (
    <MoleculeContainer moleculeId={OZONE_MOLECULE_ID}>
      <Oxygen customPositioningStyles={{ marginTop: 10 }} />
      <Oxygen />
      <Oxygen customPositioningStyles={{ marginTop: 10 }} />
    </MoleculeContainer>
  );
};

export default Ozone;
