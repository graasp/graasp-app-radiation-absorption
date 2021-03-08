import React from 'react';
import SideMenuMoleculeContainer from './SideMenuMoleculeContainer';
import SideMenuCarbon from './atoms/SideMenuCarbon';
import SideMenuOxygen from './atoms/SideMenuOxygen';
import {
  CARBON_DIOXIDE_MOLECULE_ID,
  NEGATIVE_CHARGE,
  POSITIVE_CHARGE,
} from '../../../../config/constants';

const SideMenuCarbonDioxide = () => {
  return (
    <SideMenuMoleculeContainer moleculeId={CARBON_DIOXIDE_MOLECULE_ID}>
      <SideMenuOxygen charge={NEGATIVE_CHARGE} />
      <SideMenuCarbon charge={POSITIVE_CHARGE} />
      <SideMenuOxygen charge={NEGATIVE_CHARGE} />
    </SideMenuMoleculeContainer>
  );
};

export default SideMenuCarbonDioxide;
