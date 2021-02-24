import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import GasesContainer from './GasesContainer';
import ArgonMolecule from './molecules/ArgonMolecule';
import Dinitrogen from './molecules/Dinitrogen';
import Dioxygen from './molecules/Dioxygen';
import MoleculeAndLabelContainer from './molecules/MoleculeAndLabelContainer';
import {
  DINITROGEN_MOLECULE_ID,
  DIOXYGEN_MOLECULE_ID,
  ARGON_MOLECULE_ID,
} from '../../config/constants';

const NonGreenhouseGases = () => {
  const { t } = useTranslation();
  const selectedMolecule = useSelector(({ lab }) => lab.selectedMolecule);

  return (
    <GasesContainer gasContainerLabel={t('Non-greenhouse Gases')}>
      <MoleculeAndLabelContainer
        molecule={<Dinitrogen />}
        moleculeLabel={t('Dinitrogen')}
        isSelected={selectedMolecule === DINITROGEN_MOLECULE_ID}
      />
      <MoleculeAndLabelContainer
        molecule={<Dioxygen />}
        moleculeLabel={t('Dioxygen')}
        isSelected={selectedMolecule === DIOXYGEN_MOLECULE_ID}
      />
      <MoleculeAndLabelContainer
        molecule={<ArgonMolecule />}
        moleculeLabel={t('Argon')}
        isSelected={selectedMolecule === ARGON_MOLECULE_ID}
      />
    </GasesContainer>
  );
};

export default NonGreenhouseGases;
