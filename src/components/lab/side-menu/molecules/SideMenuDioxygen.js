import React from 'react';
import SideMenuMoleculeContainer from './SideMenuMoleculeContainer';
import SideMenuOxygen from './atoms/SideMenuOxygen';
import SideMenuBondContainer from '../SideMenuBondContainer';
import { DIOXYGEN_MOLECULE_ID } from '../../../../config/constants';

const SideMenuDioxygen = () => {
  return (
    <SideMenuMoleculeContainer moleculeId={DIOXYGEN_MOLECULE_ID}>
      <SideMenuOxygen />
      <SideMenuBondContainer numberOfBonds={2} />
      <SideMenuOxygen />
    </SideMenuMoleculeContainer>
  );
};

export default SideMenuDioxygen;
