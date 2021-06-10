import React from 'react';
import { useTranslation } from 'react-i18next';
import MoleculeFormula from './MoleculeFormula';

const CarbonDioxideFormula = () => {
  const { t } = useTranslation();
  const formula = (
    <>
      {t('(CO')}
      <sub>2</sub>
      {t(')')}
    </>
  );

  return <MoleculeFormula formula={formula} />;
};

export default CarbonDioxideFormula;
