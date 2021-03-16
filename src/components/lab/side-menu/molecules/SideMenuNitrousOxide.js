import React from 'react';
import SideMenuMoleculeContainer from './SideMenuMoleculeContainer';
import SideMenuNitrogen from './atoms/SideMenuNitrogen';
import SideMenuOxygen from './atoms/SideMenuOxygen';
import SideMenuBondContainer from '../SideMenuBondContainer';
import {
  NEGATIVE_CHARGE,
  NITROUS_OXIDE_MOLECULE_ID,
  POSITIVE_CHARGE,
} from '../../../../config/constants';

const SideMenuNitrousOxide = () => {
  return (
    <SideMenuMoleculeContainer moleculeId={NITROUS_OXIDE_MOLECULE_ID}>
      <SideMenuNitrogen charge={NEGATIVE_CHARGE} />
      <SideMenuBondContainer numberOfBonds={2} />
      <SideMenuNitrogen charge={POSITIVE_CHARGE} />
      <SideMenuBondContainer numberOfBonds={2} />
      <SideMenuOxygen charge={NEGATIVE_CHARGE} />
    </SideMenuMoleculeContainer>
  );
};

export default SideMenuNitrousOxide;
