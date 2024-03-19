import React from 'react';
import SideMenuMoleculeContainer from './SideMenuMoleculeContainer';
import SideMenuOxygen from './atoms/SideMenuOxygen';
import SideMenuHydrogen from './atoms/SideMenuHydrogen';
import SideMenuBondContainer from '../SideMenuBondContainer';
import { NEGATIVE, POSITIVE, WATER_ID } from '../../../../constants/strings';
import { HYDROGEN } from '../../../../constants/canvas-molecules/common';

const SideMenuWater = () => {
  return (
    <SideMenuMoleculeContainer moleculeId={WATER_ID}>
      <SideMenuHydrogen
        charge={POSITIVE}
        customStyles={{ marginRight: '-4px' }}
        color={HYDROGEN.color.STANDARD}
      />
      <SideMenuBondContainer numberOfBonds={1} rotation={30} />
      <SideMenuOxygen charge={NEGATIVE} />
      <SideMenuBondContainer numberOfBonds={1} rotation={-30} />
      <SideMenuHydrogen
        charge={POSITIVE}
        customStyles={{ marginLeft: '-4px' }}
        color={HYDROGEN.color.STANDARD}
      />
    </SideMenuMoleculeContainer>
  );
};

export default SideMenuWater;
