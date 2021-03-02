import React from 'react';
import SideMenuMoleculeContainer from './SideMenuMoleculeContainer';
import SideMenuNitrogen from './atoms/SideMenuNitrogen';
import { DINITROGEN_MOLECULE_ID } from '../../../../config/constants';

const SideMenuDinitrogen = () => {
  return (
    <SideMenuMoleculeContainer moleculeId={DINITROGEN_MOLECULE_ID}>
      <SideMenuNitrogen />
      <SideMenuNitrogen />
    </SideMenuMoleculeContainer>
  );
};

export default SideMenuDinitrogen;
