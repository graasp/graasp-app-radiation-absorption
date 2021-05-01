import React from 'react';
import SideMenuMoleculeContainer from './SideMenuMoleculeContainer';
import SideMenuOxygen from './atoms/SideMenuOxygen';
import SideMenuHydrogen from './atoms/SideMenuHydrogen';
import SideMenuBondContainer from '../SideMenuBondContainer';
import {
  HYDROGEN,
  NEGATIVE_CHARGE,
  POSITIVE_CHARGE,
  WATER_MOLECULE_ID,
} from '../../../../config/constants';

const SideMenuWater = () => {
  return (
    <SideMenuMoleculeContainer moleculeId={WATER_MOLECULE_ID}>
      <SideMenuHydrogen
        charge={POSITIVE_CHARGE}
        customPositioningStyles={{ marginRight: '-4px' }}
        atomColor={HYDROGEN.atomColor.STANDARD}
      />
      <SideMenuBondContainer numberOfBonds={1} rotation={30} />
      <SideMenuOxygen charge={NEGATIVE_CHARGE} />
      <SideMenuBondContainer numberOfBonds={1} rotation={-30} />
      <SideMenuHydrogen
        charge={POSITIVE_CHARGE}
        customPositioningStyles={{ marginLeft: '-4px' }}
        atomColor={HYDROGEN.atomColor.STANDARD}
      />
    </SideMenuMoleculeContainer>
  );
};

export default SideMenuWater;
