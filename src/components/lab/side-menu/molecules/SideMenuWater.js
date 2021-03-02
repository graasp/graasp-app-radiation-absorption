import React from 'react';
import SideMenuMoleculeContainer from './SideMenuMoleculeContainer';
import SideMenuOxygen from './atoms/SideMenuOxygen';
import SideMenuHydrogen from './atoms/SideMenuHydrogen';
import { WATER_MOLECULE_ID } from '../../../../config/constants';

const SideMenuWater = () => {
  return (
    <SideMenuMoleculeContainer moleculeId={WATER_MOLECULE_ID}>
      <SideMenuHydrogen />
      <SideMenuOxygen />
      <SideMenuHydrogen />
    </SideMenuMoleculeContainer>
  );
};

export default SideMenuWater;
