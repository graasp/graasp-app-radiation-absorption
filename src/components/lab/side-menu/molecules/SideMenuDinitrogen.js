import React from 'react';
import SideMenuMoleculeContainer from './SideMenuMoleculeContainer';
import SideMenuNitrogen from './atoms/SideMenuNitrogen';
import SideMenuBondContainer from '../SideMenuBondContainer';
import { DINITROGEN_ID } from '../../../../constants/strings';

const SideMenuDinitrogen = () => {
  return (
    <SideMenuMoleculeContainer moleculeId={DINITROGEN_ID}>
      <SideMenuNitrogen />
      <SideMenuBondContainer numberOfBonds={3} />
      <SideMenuNitrogen />
    </SideMenuMoleculeContainer>
  );
};

export default SideMenuDinitrogen;
