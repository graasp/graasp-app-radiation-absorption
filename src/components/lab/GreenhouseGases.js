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
import CarbonDioxideFormula from './canvas/formulas/CarbonDioxideFormula';
import WaterFormula from './canvas/formulas/WaterFormula';
import OzoneFormula from './canvas/formulas/OzoneFormula';
import NitrousOxideFormula from './canvas/formulas/NitrousOxideFormula';
import MethaneFormula from './canvas/formulas/MethaneFormula';

const GreenhouseGases = () => {
  const { t } = useTranslation();
  const selectedMoleculeInSideMenu = useSelector(
    ({ lab }) => lab.selectedMoleculeInSideMenu,
  );
  const highlightAllSideMenuMolecules = useSelector(
    ({ lab }) => lab.highlightAllSideMenuMolecules,
  );

  return (
    <GasesContainer gasContainerLabel={t('Greenhouse Gases')}>
      <SideMenuMoleculeAndLabelContainer
        molecule={<SideMenuWater />}
        moleculeLabel={t('Water')}
        moleculeFormula={<WaterFormula />}
        isSelected={
          selectedMoleculeInSideMenu === WATER_MOLECULE_ID ||
          highlightAllSideMenuMolecules
        }
      />
      <SideMenuMoleculeAndLabelContainer
        molecule={<SideMenuCarbonDioxide />}
        moleculeLabel={t('Carbon Dioxide')}
        moleculeFormula={<CarbonDioxideFormula />}
        isSelected={
          selectedMoleculeInSideMenu === CARBON_DIOXIDE_MOLECULE_ID ||
          highlightAllSideMenuMolecules
        }
      />
      <SideMenuMoleculeAndLabelContainer
        molecule={<SideMenuOzone />}
        moleculeLabel={t('Ozone')}
        moleculeFormula={<OzoneFormula />}
        isSelected={
          selectedMoleculeInSideMenu === OZONE_MOLECULE_ID ||
          highlightAllSideMenuMolecules
        }
      />
      <SideMenuMoleculeAndLabelContainer
        molecule={<SideMenuNitrousOxide />}
        moleculeLabel={t('Nitrous Oxide')}
        moleculeFormula={<NitrousOxideFormula />}
        isSelected={
          selectedMoleculeInSideMenu === NITROUS_OXIDE_MOLECULE_ID ||
          highlightAllSideMenuMolecules
        }
      />
      <SideMenuMoleculeAndLabelContainer
        molecule={<SideMenuMethane />}
        moleculeLabel={t('Methane')}
        moleculeFormula={<MethaneFormula />}
        isSelected={
          selectedMoleculeInSideMenu === METHANE_MOLECULE_ID ||
          highlightAllSideMenuMolecules
        }
      />
    </GasesContainer>
  );
};

export default GreenhouseGases;
