import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import GasesContainer from './GasesContainer';
import CarbonDioxide from './molecules/CarbonDioxide';
import NitrousOxide from './molecules/NitrousOxide';
import Ozone from './molecules/Ozone';
import Methane from './molecules/Methane';
import Water from './molecules/Water';
import MoleculeAndLabelContainer from './molecules/MoleculeAndLabelContainer';
import {
  WATER_MOLECULE_ID,
  CARBON_DIOXIDE_MOLECULE_ID,
  OZONE_MOLECULE_ID,
  NITROUS_OXIDE_MOLECULE_ID,
  METHANE_MOLECULE_ID,
} from '../../config/constants';

const GreenhouseGases = () => {
  const { t } = useTranslation();
  const selectedMolecule = useSelector(({ lab }) => lab.selectedMolecule);

  return (
    <GasesContainer gasContainerLabel={t('Greenhouse Gases')}>
      <MoleculeAndLabelContainer
        molecule={<Water />}
        moleculeLabel={t('Water')}
        isSelected={selectedMolecule === WATER_MOLECULE_ID}
      />
      <MoleculeAndLabelContainer
        molecule={<CarbonDioxide />}
        moleculeLabel={t('Carbon Dioxide')}
        isSelected={selectedMolecule === CARBON_DIOXIDE_MOLECULE_ID}
      />
      <MoleculeAndLabelContainer
        molecule={<Ozone />}
        moleculeLabel={t('Ozone')}
        isSelected={selectedMolecule === OZONE_MOLECULE_ID}
      />
      <MoleculeAndLabelContainer
        molecule={<NitrousOxide />}
        moleculeLabel={t('Nitrous Oxide')}
        isSelected={selectedMolecule === NITROUS_OXIDE_MOLECULE_ID}
      />
      <MoleculeAndLabelContainer
        molecule={<Methane />}
        moleculeLabel={t('Methane')}
        isSelected={selectedMolecule === METHANE_MOLECULE_ID}
      />
    </GasesContainer>
  );
};

export default GreenhouseGases;
