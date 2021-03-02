import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SideMenuMoleculeContainer from './SideMenuMoleculeContainer';
import SideMenuCarbon from './atoms/SideMenuCarbon';
import SideMenuHydrogen from './atoms/SideMenuHydrogen';
import { METHANE_MOLECULE_ID } from '../../../../config/constants';

const useStyles = makeStyles(() => ({
  leftHydrogenAtoms: { marginRight: -8.5, zIndex: 1 },
  rightHydrogenAtoms: { marginTop: 2.5, marginLeft: -7.5, zIndex: 1 },
}));

const SideMenuMethane = () => {
  const classes = useStyles();
  return (
    <SideMenuMoleculeContainer moleculeId={METHANE_MOLECULE_ID}>
      <div className={classes.leftHydrogenAtoms}>
        <SideMenuHydrogen customPositioningStyles={{ marginBottom: 12.5 }} />
        <SideMenuHydrogen />
      </div>
      <SideMenuCarbon customPositioningStyles={{ marginTop: 8 }} />
      <div className={classes.rightHydrogenAtoms}>
        <SideMenuHydrogen customPositioningStyles={{ marginBottom: 3 }} />
        <SideMenuHydrogen />
      </div>
    </SideMenuMoleculeContainer>
  );
};

export default SideMenuMethane;
