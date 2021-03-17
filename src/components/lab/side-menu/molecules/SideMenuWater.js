import React from 'react';
import SideMenuMoleculeContainer from './SideMenuMoleculeContainer';
import SideMenuOxygen from './atoms/SideMenuOxygen';
import SideMenuHydrogen from './atoms/SideMenuHydrogen';
import {
  NEGATIVE_CHARGE,
  POSITIVE_CHARGE,
  WATER_MOLECULE_ID,
} from '../../../../config/constants';

const SideMenuWater = () => {
  return (
    <SideMenuMoleculeContainer moleculeId={WATER_MOLECULE_ID}>
      <SideMenuHydrogen charge={POSITIVE_CHARGE} />
      <SideMenuOxygen charge={NEGATIVE_CHARGE} />
      <SideMenuHydrogen charge={POSITIVE_CHARGE} />
    </SideMenuMoleculeContainer>
  );
};

export default SideMenuWater;
