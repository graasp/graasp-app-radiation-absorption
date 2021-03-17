import React from 'react';
import SideMenuMoleculeContainer from './SideMenuMoleculeContainer';
import SideMenuArgon from './atoms/SideMenuArgon';
import { ARGON_MOLECULE_ID } from '../../../../config/constants';

const SideMenuArgonMolecule = () => {
  return (
    <SideMenuMoleculeContainer moleculeId={ARGON_MOLECULE_ID}>
      <SideMenuArgon />
    </SideMenuMoleculeContainer>
  );
};

export default SideMenuArgonMolecule;
