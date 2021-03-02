import React from 'react';
import SideMenuMoleculeContainer from './SideMenuMoleculeContainer';
import SideMenuNitrogen from './atoms/SideMenuNitrogen';
import SideMenuOxygen from './atoms/SideMenuOxygen';
import { NITROUS_OXIDE_MOLECULE_ID } from '../../../../config/constants';

const SideMenuNitrousOxide = () => {
  return (
    <SideMenuMoleculeContainer moleculeId={NITROUS_OXIDE_MOLECULE_ID}>
      <SideMenuNitrogen />
      <SideMenuNitrogen />
      <SideMenuOxygen />
    </SideMenuMoleculeContainer>
  );
};

export default SideMenuNitrousOxide;
