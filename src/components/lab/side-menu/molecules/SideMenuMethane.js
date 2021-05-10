import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SideMenuMoleculeContainer from './SideMenuMoleculeContainer';
import SideMenuCarbon from './atoms/SideMenuCarbon';
import SideMenuHydrogen from './atoms/SideMenuHydrogen';
import {
  HYDROGEN,
  METHANE_MOLECULE_ID,
  NEGATIVE_CHARGE,
  POSITIVE_CHARGE,
} from '../../../../config/constants';
import SideMenuBondContainer from '../SideMenuBondContainer';

const useStyles = makeStyles(() => ({
  leftHydrogenAtoms: { marginTop: 5, marginRight: -4 },
  bondContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  bonds: {
    display: 'flex',
    flexDirection: 'column',
  },
  leftBondSeparator: { height: '10px' },
  rightBondSeparator: { height: '8px' },
  rightHydrogenAtoms: { zIndex: 1, marginLeft: -3.5 },
}));

const SideMenuMethane = () => {
  const classes = useStyles();
  return (
    <SideMenuMoleculeContainer moleculeId={METHANE_MOLECULE_ID}>
      <div className={classes.leftHydrogenAtoms}>
        <SideMenuHydrogen
          customPositioningStyles={{
            marginBottom: '5px',
          }}
          charge={POSITIVE_CHARGE}
          atomColor={HYDROGEN.atomColor.DARKER}
        />
        <SideMenuHydrogen
          // customPositioningStyles={{ marginLeft: '-3px' }}
          charge={POSITIVE_CHARGE}
          atomColor={HYDROGEN.atomColor.LIGHTER}
        />
      </div>
      <div className={classes.bondContainer}>
        <div className={classes.bonds}>
          <SideMenuBondContainer numberOfBonds={1} rotation={40} />
          <div className={classes.leftBondSeparator} />
          <SideMenuBondContainer numberOfBonds={1} rotation={140} />
        </div>
      </div>
      <SideMenuCarbon
        customPositioningStyles={{ marginTop: '8px' }}
        charge={NEGATIVE_CHARGE}
      />
      <div className={classes.bondContainer}>
        <div className={classes.bonds}>
          <SideMenuBondContainer numberOfBonds={1} rotation={-40} />
          <div className={classes.rightBondSeparator} />
          <SideMenuBondContainer numberOfBonds={1} rotation={-140} />
        </div>
      </div>
      <div className={classes.rightHydrogenAtoms}>
        <SideMenuHydrogen
          customPositioningStyles={{ marginBottom: '12px', marginLeft: '-2px' }}
          charge={POSITIVE_CHARGE}
          atomColor={HYDROGEN.atomColor.STANDARD}
        />
        <SideMenuHydrogen
          customPositioningStyles={{ marginLeft: '-2px' }}
          charge={POSITIVE_CHARGE}
          atomColor={HYDROGEN.atomColor.STANDARD}
        />
      </div>
    </SideMenuMoleculeContainer>
  );
};

export default SideMenuMethane;
