import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import GasesContainer from './GasesContainer';
import SideMenuArgonMolecule from './side-menu/molecules/SideMenuArgonMolecule';
import SideMenuDinitrogen from './side-menu/molecules/SideMenuDinitrogen';
import SideMenuDioxygen from './side-menu/molecules/SideMenuDioxygen';
import SideMenuMoleculeAndLabelContainer from './side-menu/molecules/SideMenuMoleculeAndLabelContainer';
import {
  DINITROGEN_MOLECULE_ID,
  DIOXYGEN_MOLECULE_ID,
  ARGON_MOLECULE_ID,
} from '../../config/constants';

const NonGreenhouseGases = () => {
  const { t } = useTranslation();
  const selectedMoleculeInSideMenu = useSelector(
    ({ lab }) => lab.selectedMoleculeInSideMenu,
  );

  return (
    <GasesContainer gasContainerLabel={t('Non-greenhouse Gases')}>
      <SideMenuMoleculeAndLabelContainer
        molecule={<SideMenuDinitrogen />}
        moleculeLabel={t('Dinitrogen')}
        isSelected={selectedMoleculeInSideMenu === DINITROGEN_MOLECULE_ID}
      />
      <SideMenuMoleculeAndLabelContainer
        molecule={<SideMenuDioxygen />}
        moleculeLabel={t('Dioxygen')}
        isSelected={selectedMoleculeInSideMenu === DIOXYGEN_MOLECULE_ID}
      />
      <SideMenuMoleculeAndLabelContainer
        molecule={<SideMenuArgonMolecule />}
        moleculeLabel={t('Argon')}
        isSelected={selectedMoleculeInSideMenu === ARGON_MOLECULE_ID}
      />
    </GasesContainer>
  );
};

export default NonGreenhouseGases;
