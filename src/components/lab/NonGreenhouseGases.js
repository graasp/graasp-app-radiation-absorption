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
  GREENHOUSE_GASES,
} from '../../config/constants';

const NonGreenhouseGases = () => {
  const { t } = useTranslation();
  const selectedMoleculeInSideMenu = useSelector(
    ({ lab }) => lab.selectedMoleculeInSideMenu,
  );
  const highlightAllSideMenuMolecules = useSelector(
    ({ lab }) => lab.highlightAllSideMenuMolecules,
  );
  const moleculesOnCanvas = useSelector(({ lab }) => lab.moleculesOnCanvas);
  const canvasIncomplete = moleculesOnCanvas.some(
    ({ molecule }) => molecule === '',
  );

  return (
    <GasesContainer
      gasContainerLabel={t('Non-greenhouse Gases')}
      showFillAllButton={
        selectedMoleculeInSideMenu &&
        !GREENHOUSE_GASES.includes(selectedMoleculeInSideMenu) &&
        canvasIncomplete
      }
    >
      <SideMenuMoleculeAndLabelContainer
        molecule={<SideMenuDinitrogen />}
        moleculeLabel={t('Dinitrogen')}
        isSelected={
          selectedMoleculeInSideMenu === DINITROGEN_MOLECULE_ID ||
          highlightAllSideMenuMolecules
        }
      />
      <SideMenuMoleculeAndLabelContainer
        molecule={<SideMenuDioxygen />}
        moleculeLabel={t('Dioxygen')}
        isSelected={
          selectedMoleculeInSideMenu === DIOXYGEN_MOLECULE_ID ||
          highlightAllSideMenuMolecules
        }
      />
      <SideMenuMoleculeAndLabelContainer
        molecule={<SideMenuArgonMolecule />}
        moleculeLabel={t('Argon')}
        isSelected={
          selectedMoleculeInSideMenu === ARGON_MOLECULE_ID ||
          highlightAllSideMenuMolecules
        }
      />
    </GasesContainer>
  );
};

export default NonGreenhouseGases;
