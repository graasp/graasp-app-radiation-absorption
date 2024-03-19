import React from 'react';
import SideMenuMoleculeContainer from './SideMenuMoleculeContainer';
import SideMenuOxygen from './atoms/SideMenuOxygen';
import SideMenuBondContainer from '../SideMenuBondContainer';
import { NEGATIVE, OZONE_ID, POSITIVE } from '../../../../constants/strings';

const SideMenuOzone = () => {
  return (
    <SideMenuMoleculeContainer moleculeId={OZONE_ID}>
      <SideMenuOxygen customStyles={{ marginTop: '10px' }} charge={NEGATIVE} />
      <SideMenuBondContainer numberOfBonds={2} rotation={-20} />
      <SideMenuOxygen charge={POSITIVE} />
      <SideMenuBondContainer numberOfBonds={1} rotation={20} />
      <SideMenuOxygen customStyles={{ marginTop: '10px' }} charge={NEGATIVE} />
    </SideMenuMoleculeContainer>
  );
};

export default SideMenuOzone;
