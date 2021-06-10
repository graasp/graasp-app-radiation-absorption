import React from 'react';
import { useTranslation } from 'react-i18next';
import MoleculeFormula from './MoleculeFormula';

const DioxygenFormula = () => {
  const { t } = useTranslation();
  const formula = (
    <>
      {t('(O')}
      <sub>2</sub>
      {t(')')}
    </>
  );

  return <MoleculeFormula formula={formula} />;
};

export default DioxygenFormula;
