import React from 'react';
import SideMenuMoleculeContainer from './SideMenuMoleculeContainer';
import SideMenuArgon from './atoms/SideMenuArgon';
import { ARGON_ID } from '../../../../constants/strings';

const SideMenuArgonMolecule = () => {
  return (
    <SideMenuMoleculeContainer moleculeId={ARGON_ID}>
      <SideMenuArgon />
    </SideMenuMoleculeContainer>
  );
};

export default SideMenuArgonMolecule;
