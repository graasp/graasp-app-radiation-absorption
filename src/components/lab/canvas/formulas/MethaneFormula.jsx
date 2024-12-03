import React from 'react';
import { useTranslation } from 'react-i18next';
import MoleculeFormula from './MoleculeFormula';

const MethaneFormula = () => {
  const { t } = useTranslation();
  const formula = (
    <>
      {t('(CH')}
      <sub>4</sub>
      {t(')')}
    </>
  );

  return <MoleculeFormula formula={formula} />;
};

export default MethaneFormula;
