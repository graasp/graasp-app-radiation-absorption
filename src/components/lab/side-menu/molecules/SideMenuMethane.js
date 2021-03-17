import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SideMenuMoleculeContainer from './SideMenuMoleculeContainer';
import SideMenuCarbon from './atoms/SideMenuCarbon';
import SideMenuHydrogen from './atoms/SideMenuHydrogen';
import {
  METHANE_MOLECULE_ID,
  NEGATIVE_CHARGE,
  POSITIVE_CHARGE,
} from '../../../../config/constants';

const useStyles = makeStyles(() => ({
  leftHydrogenAtoms: { marginRight: -8.5, zIndex: 1 },
  rightHydrogenAtoms: { marginTop: 2.5, marginLeft: -7.5, zIndex: 1 },
}));

const SideMenuMethane = () => {
  const classes = useStyles();
  return (
    <SideMenuMoleculeContainer moleculeId={METHANE_MOLECULE_ID}>
      <div className={classes.leftHydrogenAtoms}>
        <SideMenuHydrogen
          customPositioningStyles={{ marginBottom: 12.5 }}
          charge={POSITIVE_CHARGE}
        />
        <SideMenuHydrogen charge={POSITIVE_CHARGE} />
      </div>
      <SideMenuCarbon
        customPositioningStyles={{ marginTop: 8 }}
        charge={NEGATIVE_CHARGE}
      />
      <div className={classes.rightHydrogenAtoms}>
        <SideMenuHydrogen
          customPositioningStyles={{ marginBottom: 3 }}
          charge={POSITIVE_CHARGE}
        />
        <SideMenuHydrogen charge={POSITIVE_CHARGE} />
      </div>
    </SideMenuMoleculeContainer>
  );
};

export default SideMenuMethane;
