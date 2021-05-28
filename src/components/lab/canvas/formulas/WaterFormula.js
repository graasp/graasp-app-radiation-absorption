import React from 'react';
import { useTranslation } from 'react-i18next';
import MoleculeFormula from './MoleculeFormula';

const WaterFormula = () => {
  const { t } = useTranslation();
  return (
    <MoleculeFormula
      formula={
        // eslint-disable-next-line react/jsx-wrap-multilines
        <>
          {t('(H')}
          <sub>2</sub>
          {t('O)')}
        </>
      }
    />
  );
};

export default WaterFormula;
