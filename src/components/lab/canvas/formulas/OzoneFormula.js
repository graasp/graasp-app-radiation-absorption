import React from 'react';
import { useTranslation } from 'react-i18next';
import MoleculeFormula from './MoleculeFormula';

const OzoneFormula = () => {
  const { t } = useTranslation();
  return (
    <MoleculeFormula
      formula={
        // eslint-disable-next-line react/jsx-wrap-multilines
        <>
          {t('(O')}
          <sub>3</sub>
          {t(')')}
        </>
      }
    />
  );
};

export default OzoneFormula;
