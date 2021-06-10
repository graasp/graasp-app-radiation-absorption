import React from 'react';
import { useTranslation } from 'react-i18next';
import MoleculeFormula from './MoleculeFormula';

const OzoneFormula = () => {
  const { t } = useTranslation();
  const formula = (
    <>
      {t('(O')}
      <sub>3</sub>
      {t(')')}
    </>
  );

  return <MoleculeFormula formula={formula} />;
};

export default OzoneFormula;
