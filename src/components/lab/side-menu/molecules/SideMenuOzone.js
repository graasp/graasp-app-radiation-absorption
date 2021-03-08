import React from 'react';
import SideMenuMoleculeContainer from './SideMenuMoleculeContainer';
import SideMenuOxygen from './atoms/SideMenuOxygen';
import {
  NEGATIVE_CHARGE,
  OZONE_MOLECULE_ID,
  POSITIVE_CHARGE,
} from '../../../../config/constants';

const SideMenuOzone = () => {
  return (
    <SideMenuMoleculeContainer moleculeId={OZONE_MOLECULE_ID}>
      <SideMenuOxygen
        customPositioningStyles={{ marginTop: 10 }}
        charge={NEGATIVE_CHARGE}
      />
      <SideMenuOxygen charge={POSITIVE_CHARGE} />
      <SideMenuOxygen
        customPositioningStyles={{ marginTop: 10 }}
        charge={NEGATIVE_CHARGE}
      />
    </SideMenuMoleculeContainer>
  );
};

export default SideMenuOzone;
