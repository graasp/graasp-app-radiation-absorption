import React from 'react';
import SideMenuMoleculeContainer from './SideMenuMoleculeContainer';
import SideMenuNitrogen from './atoms/SideMenuNitrogen';
import SideMenuOxygen from './atoms/SideMenuOxygen';
import SideMenuBondContainer from '../SideMenuBondContainer';
import {
  NEGATIVE,
  NITROUS_OXIDE_ID,
  POSITIVE,
} from '../../../../constants/strings';

const SideMenuNitrousOxide = () => {
  return (
    <SideMenuMoleculeContainer moleculeId={NITROUS_OXIDE_ID}>
      <SideMenuNitrogen charge={NEGATIVE} />
      <SideMenuBondContainer numberOfBonds={2} />
      <SideMenuNitrogen charge={POSITIVE} />
      <SideMenuBondContainer numberOfBonds={2} />
      <SideMenuOxygen charge={NEGATIVE} />
    </SideMenuMoleculeContainer>
  );
};

export default SideMenuNitrousOxide;
