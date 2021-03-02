import React from 'react';
import SideMenuMoleculeContainer from './SideMenuMoleculeContainer';
import SideMenuCarbon from './atoms/SideMenuCarbon';
import SideMenuOxygen from './atoms/SideMenuOxygen';
import { CARBON_DIOXIDE_MOLECULE_ID } from '../../../../config/constants';

const SideMenuCarbonDioxide = () => {
  return (
    <SideMenuMoleculeContainer moleculeId={CARBON_DIOXIDE_MOLECULE_ID}>
      <SideMenuOxygen />
      <SideMenuCarbon />
      <SideMenuOxygen />
    </SideMenuMoleculeContainer>
  );
};

export default SideMenuCarbonDioxide;
