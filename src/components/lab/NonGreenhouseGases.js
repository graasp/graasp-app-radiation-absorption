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
import DinitrogenFormula from './canvas/formulas/DinitrogenFormula';
import DioxygenFormula from './canvas/formulas/DioxygenFormula';

const NonGreenhouseGases = () => {
  const { t } = useTranslation();
  const selectedMoleculeInSideMenu = useSelector(
    ({ lab }) => lab.selectedMoleculeInSideMenu,
  );
  const highlightAllSideMenuMolecules = useSelector(
    ({ lab }) => lab.highlightAllSideMenuMolecules,
  );

  return (
    <GasesContainer gasContainerLabel={t('Non-Greenhouse Gases')}>
      <SideMenuMoleculeAndLabelContainer
        molecule={<SideMenuDinitrogen />}
        moleculeLabel={t('Dinitrogen')}
        moleculeFormula={<DinitrogenFormula />}
        isSelected={
          selectedMoleculeInSideMenu === DINITROGEN_MOLECULE_ID ||
          highlightAllSideMenuMolecules
        }
      />
      <SideMenuMoleculeAndLabelContainer
        molecule={<SideMenuDioxygen />}
        moleculeLabel={t('Dioxygen')}
        moleculeFormula={<DioxygenFormula />}
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
