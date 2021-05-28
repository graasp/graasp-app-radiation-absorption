import React from 'react';
import { useTranslation } from 'react-i18next';
import MoleculeFormula from './MoleculeFormula';

const CarbonDioxideFormula = () => {
  const { t } = useTranslation();
  return (
    <MoleculeFormula
      formula={
        // eslint-disable-next-line react/jsx-wrap-multilines
        <>
          {t('(CO')}
          <sub>2</sub>
          {t(')')}
        </>
      }
    />
  );
};

export default CarbonDioxideFormula;
