import React from 'react';
import SideMenuMoleculeContainer from './SideMenuMoleculeContainer';
import SideMenuOxygen from './atoms/SideMenuOxygen';
import SideMenuBondContainer from '../SideMenuBondContainer';
import { DIOXYGEN_ID } from '../../../../constants/strings';

const SideMenuDioxygen = () => {
  return (
    <SideMenuMoleculeContainer moleculeId={DIOXYGEN_ID}>
      <SideMenuOxygen />
      <SideMenuBondContainer numberOfBonds={2} />
      <SideMenuOxygen />
    </SideMenuMoleculeContainer>
  );
};

export default SideMenuDioxygen;
