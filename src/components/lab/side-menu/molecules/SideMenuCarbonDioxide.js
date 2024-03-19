import React from 'react';
import SideMenuMoleculeContainer from './SideMenuMoleculeContainer';
import SideMenuCarbon from './atoms/SideMenuCarbon';
import SideMenuOxygen from './atoms/SideMenuOxygen';
import SideMenuBondContainer from '../SideMenuBondContainer';
import {
  CARBON_DIOXIDE_ID,
  NEGATIVE,
  POSITIVE,
} from '../../../../constants/strings';

const SideMenuCarbonDioxide = () => {
  return (
    <SideMenuMoleculeContainer moleculeId={CARBON_DIOXIDE_ID}>
      <SideMenuOxygen charge={NEGATIVE} />
      <SideMenuBondContainer numberOfBonds={2} />
      <SideMenuCarbon charge={POSITIVE} />
      <SideMenuBondContainer numberOfBonds={2} />
      <SideMenuOxygen charge={NEGATIVE} />
    </SideMenuMoleculeContainer>
  );
};

export default SideMenuCarbonDioxide;
