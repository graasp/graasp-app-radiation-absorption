import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MoleculeContainer from './MoleculeContainer';
import Carbon from './atoms/Carbon';
import Hydrogen from './atoms/Hydrogen';
import { METHANE_MOLECULE_ID } from '../../../config/constants';

const useStyles = makeStyles(() => ({
  leftHydrogenAtoms: { marginRight: -8.5, zIndex: 1 },
  rightHydrogenAtoms: { marginTop: 2.5, marginLeft: -7.5, zIndex: 1 },
}));

const Methane = () => {
  const classes = useStyles();
  return (
    <MoleculeContainer moleculeId={METHANE_MOLECULE_ID}>
      <div className={classes.leftHydrogenAtoms}>
        <Hydrogen customPositioningStyles={{ marginBottom: 12.5 }} />
        <Hydrogen />
      </div>
      <Carbon customPositioningStyles={{ marginTop: 8 }} />
      <div className={classes.rightHydrogenAtoms}>
        <Hydrogen customPositioningStyles={{ marginBottom: 3 }} />
        <Hydrogen />
      </div>
    </MoleculeContainer>
  );
};

export default Methane;
