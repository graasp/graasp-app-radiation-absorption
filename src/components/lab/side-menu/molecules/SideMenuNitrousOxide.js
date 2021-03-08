import React from 'react';
import SideMenuMoleculeContainer from './SideMenuMoleculeContainer';
import SideMenuNitrogen from './atoms/SideMenuNitrogen';
import SideMenuOxygen from './atoms/SideMenuOxygen';
import {
  NEGATIVE_CHARGE,
  NITROUS_OXIDE_MOLECULE_ID,
  POSITIVE_CHARGE,
} from '../../../../config/constants';

const SideMenuNitrousOxide = () => {
  return (
    <SideMenuMoleculeContainer moleculeId={NITROUS_OXIDE_MOLECULE_ID}>
      <SideMenuNitrogen charge={NEGATIVE_CHARGE} />
      <SideMenuNitrogen charge={POSITIVE_CHARGE} />
      <SideMenuOxygen charge={NEGATIVE_CHARGE} />
    </SideMenuMoleculeContainer>
  );
};

export default SideMenuNitrousOxide;
