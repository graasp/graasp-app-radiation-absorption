import React from 'react';
import SideMenuMoleculeContainer from './SideMenuMoleculeContainer';
import SideMenuOxygen from './atoms/SideMenuOxygen';
import SideMenuBondContainer from '../SideMenuBondContainer';
import {
  NEGATIVE_CHARGE,
  OZONE_MOLECULE_ID,
  POSITIVE_CHARGE,
} from '../../../../config/constants';

const SideMenuOzone = () => {
  return (
    <SideMenuMoleculeContainer moleculeId={OZONE_MOLECULE_ID}>
      <SideMenuOxygen
        customPositioningStyles={{ marginTop: '10px' }}
        charge={NEGATIVE_CHARGE}
      />
      <SideMenuBondContainer numberOfBonds={2} rotation={-20} />
      <SideMenuOxygen charge={POSITIVE_CHARGE} />
      <SideMenuBondContainer numberOfBonds={1} rotation={20} />
      <SideMenuOxygen
        customPositioningStyles={{ marginTop: '10px' }}
        charge={NEGATIVE_CHARGE}
      />
    </SideMenuMoleculeContainer>
  );
};

export default SideMenuOzone;
