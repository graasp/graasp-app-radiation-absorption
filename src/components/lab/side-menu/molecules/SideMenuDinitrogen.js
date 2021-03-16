import React from 'react';
import SideMenuMoleculeContainer from './SideMenuMoleculeContainer';
import SideMenuNitrogen from './atoms/SideMenuNitrogen';
import SideMenuBondContainer from '../SideMenuBondContainer';
import { DINITROGEN_MOLECULE_ID } from '../../../../config/constants';

const SideMenuDinitrogen = () => {
  return (
    <SideMenuMoleculeContainer moleculeId={DINITROGEN_MOLECULE_ID}>
      <SideMenuNitrogen />
      <SideMenuBondContainer numberOfBonds={3} />
      <SideMenuNitrogen />
    </SideMenuMoleculeContainer>
  );
};

export default SideMenuDinitrogen;
