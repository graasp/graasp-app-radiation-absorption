import React from 'react';
import { useTranslation } from 'react-i18next';
import MoleculeFormula from './MoleculeFormula';

const DinitrogenFormula = () => {
  const { t } = useTranslation();
  const formula = (
    <>
      {t('(N')}
      <sub>2</sub>
      {t(')')}
    </>
  );

  return <MoleculeFormula formula={formula} />;
};

export default DinitrogenFormula;
