import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import GasesContainer from './GasesContainer';
import SideMenuCarbonDioxide from './side-menu/molecules/SideMenuCarbonDioxide';
import SideMenuNitrousOxide from './side-menu/molecules/SideMenuNitrousOxide';
import SideMenuOzone from './side-menu/molecules/SideMenuOzone';
import SideMenuMethane from './side-menu/molecules/SideMenuMethane';
import SideMenuWater from './side-menu/molecules/SideMenuWater';
import SideMenuMoleculeAndLabelContainer from './side-menu/molecules/SideMenuMoleculeAndLabelContainer';
import {
  WATER_MOLECULE_ID,
  CARBON_DIOXIDE_MOLECULE_ID,
  OZONE_MOLECULE_ID,
  NITROUS_OXIDE_MOLECULE_ID,
  METHANE_MOLECULE_ID,
} from '../../config/constants';

const GreenhouseGases = () => {
  const { t } = useTranslation();
  const selectedMoleculeInSideMenu = useSelector(
    ({ lab }) => lab.selectedMoleculeInSideMenu,
  );

  return (
    <GasesContainer gasContainerLabel={t('Greenhouse Gases')}>
      <SideMenuMoleculeAndLabelContainer
        molecule={<SideMenuWater />}
        moleculeLabel={t('Water')}
        isSelected={selectedMoleculeInSideMenu === WATER_MOLECULE_ID}
      />
      <SideMenuMoleculeAndLabelContainer
        molecule={<SideMenuCarbonDioxide />}
        moleculeLabel={t('Carbon Dioxide')}
        isSelected={selectedMoleculeInSideMenu === CARBON_DIOXIDE_MOLECULE_ID}
      />
      <SideMenuMoleculeAndLabelContainer
        molecule={<SideMenuOzone />}
        moleculeLabel={t('Ozone')}
        isSelected={selectedMoleculeInSideMenu === OZONE_MOLECULE_ID}
      />
      <SideMenuMoleculeAndLabelContainer
        molecule={<SideMenuNitrousOxide />}
        moleculeLabel={t('Nitrous Oxide')}
        isSelected={selectedMoleculeInSideMenu === NITROUS_OXIDE_MOLECULE_ID}
      />
      <SideMenuMoleculeAndLabelContainer
        molecule={<SideMenuMethane />}
        moleculeLabel={t('Methane')}
        isSelected={selectedMoleculeInSideMenu === METHANE_MOLECULE_ID}
      />
    </GasesContainer>
  );
};

export default GreenhouseGases;
