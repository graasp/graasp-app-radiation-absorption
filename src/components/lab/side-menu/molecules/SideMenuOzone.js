import React from 'react';
import SideMenuMoleculeContainer from './SideMenuMoleculeContainer';
import SideMenuOxygen from './atoms/SideMenuOxygen';
import { OZONE_MOLECULE_ID } from '../../../../config/constants';

const SideMenuOzone = () => {
  return (
    <SideMenuMoleculeContainer moleculeId={OZONE_MOLECULE_ID}>
      <SideMenuOxygen customPositioningStyles={{ marginTop: 10 }} />
      <SideMenuOxygen />
      <SideMenuOxygen customPositioningStyles={{ marginTop: 10 }} />
    </SideMenuMoleculeContainer>
  );
};

export default SideMenuOzone;
