import React from 'react';
import { useTranslation } from 'react-i18next';
import MoleculeFormula from './MoleculeFormula';

const MethaneFormula = () => {
  const { t } = useTranslation();
  return (
    <MoleculeFormula
      formula={
        // eslint-disable-next-line react/jsx-wrap-multilines
        <>
          {t('(CH')}
          <sub>4</sub>
          {t(')')}
        </>
      }
    />
  );
};

export default MethaneFormula;
