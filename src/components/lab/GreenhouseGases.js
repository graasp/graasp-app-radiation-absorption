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
  WATER_ID,
  CARBON_DIOXIDE_ID,
  OZONE_ID,
  NITROUS_OXIDE_ID,
  METHANE_ID,
} from '../../constants/strings';
import CarbonDioxideFormula from './canvas/formulas/CarbonDioxideFormula';
import WaterFormula from './canvas/formulas/WaterFormula';
import OzoneFormula from './canvas/formulas/OzoneFormula';
import NitrousOxideFormula from './canvas/formulas/NitrousOxideFormula';
import MethaneFormula from './canvas/formulas/MethaneFormula';

const GreenhouseGases = () => {
  const { t } = useTranslation();
  const { selectedMolecule, highlightAllMolecules } = useSelector(
    ({ lab }) => lab,
  );

  return (
    <GasesContainer gasContainerLabel={t('Greenhouse Gases')}>
      <SideMenuMoleculeAndLabelContainer
        molecule={<SideMenuWater />}
        moleculeLabel={t('Water')}
        moleculeFormula={<WaterFormula />}
        isSelected={selectedMolecule === WATER_ID || highlightAllMolecules}
      />
      <SideMenuMoleculeAndLabelContainer
        molecule={<SideMenuCarbonDioxide />}
        moleculeLabel={t('Carbon Dioxide')}
        moleculeFormula={<CarbonDioxideFormula />}
        isSelected={
          selectedMolecule === CARBON_DIOXIDE_ID || highlightAllMolecules
        }
      />
      <SideMenuMoleculeAndLabelContainer
        molecule={<SideMenuOzone />}
        moleculeLabel={t('Ozone')}
        moleculeFormula={<OzoneFormula />}
        isSelected={selectedMolecule === OZONE_ID || highlightAllMolecules}
      />
      <SideMenuMoleculeAndLabelContainer
        molecule={<SideMenuNitrousOxide />}
        moleculeLabel={t('Nitrous Oxide')}
        moleculeFormula={<NitrousOxideFormula />}
        isSelected={
          selectedMolecule === NITROUS_OXIDE_ID || highlightAllMolecules
        }
      />
      <SideMenuMoleculeAndLabelContainer
        molecule={<SideMenuMethane />}
        moleculeLabel={t('Methane')}
        moleculeFormula={<MethaneFormula />}
        isSelected={selectedMolecule === METHANE_ID || highlightAllMolecules}
      />
    </GasesContainer>
  );
};

export default GreenhouseGases;
