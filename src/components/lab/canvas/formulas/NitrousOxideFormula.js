import React from 'react';
import { useTranslation } from 'react-i18next';
import MoleculeFormula from './MoleculeFormula';

const NitrousOxideFormula = () => {
  const { t } = useTranslation();
  const formula = (
    <>
      {t('(N')}
      <sub>2</sub>
      {t('O)')}
    </>
  );

  return <MoleculeFormula formula={formula} />;
};

export default NitrousOxideFormula;
