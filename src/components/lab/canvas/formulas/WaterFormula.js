import React from 'react';
import { useTranslation } from 'react-i18next';
import MoleculeFormula from './MoleculeFormula';

const WaterFormula = () => {
  const { t } = useTranslation();
  const formula = (
    <>
      {t('(H')}
      <sub>2</sub>
      {t('O)')}
    </>
  );

  return <MoleculeFormula formula={formula} />;
};

export default WaterFormula;
