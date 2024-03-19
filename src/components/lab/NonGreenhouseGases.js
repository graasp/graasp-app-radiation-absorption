import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import GasesContainer from './GasesContainer';
import SideMenuArgonMolecule from './side-menu/molecules/SideMenuArgonMolecule';
import SideMenuDinitrogen from './side-menu/molecules/SideMenuDinitrogen';
import SideMenuDioxygen from './side-menu/molecules/SideMenuDioxygen';
import SideMenuMoleculeAndLabelContainer from './side-menu/molecules/SideMenuMoleculeAndLabelContainer';
import { DINITROGEN_ID, DIOXYGEN_ID, ARGON_ID } from '../../constants/strings';
import DinitrogenFormula from './canvas/formulas/DinitrogenFormula';
import DioxygenFormula from './canvas/formulas/DioxygenFormula';

const NonGreenhouseGases = () => {
  const { t } = useTranslation();
  const { selectedMolecule, highlightAllMolecules } = useSelector(
    ({ lab }) => lab,
  );

  return (
    <GasesContainer gasContainerLabel={t('Non-Greenhouse Gases')}>
      <SideMenuMoleculeAndLabelContainer
        molecule={<SideMenuDinitrogen />}
        moleculeLabel={t('Dinitrogen')}
        moleculeFormula={<DinitrogenFormula />}
        isSelected={selectedMolecule === DINITROGEN_ID || highlightAllMolecules}
      />
      <SideMenuMoleculeAndLabelContainer
        molecule={<SideMenuDioxygen />}
        moleculeLabel={t('Dioxygen')}
        moleculeFormula={<DioxygenFormula />}
        isSelected={selectedMolecule === DIOXYGEN_ID || highlightAllMolecules}
      />
      <SideMenuMoleculeAndLabelContainer
        molecule={<SideMenuArgonMolecule />}
        moleculeLabel={t('Argon')}
        isSelected={selectedMolecule === ARGON_ID || highlightAllMolecules}
      />
    </GasesContainer>
  );
};

export default NonGreenhouseGases;
