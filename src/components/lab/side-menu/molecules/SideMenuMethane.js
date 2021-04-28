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
import SideMenuBondContainer from '../SideMenuBondContainer';

const useStyles = makeStyles(() => ({
  leftHydrogenAtoms: { marginRight: -8.5, zIndex: 1 },
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
  rightHydrogenAtoms: { marginTop: 3.5, marginLeft: -8.5, zIndex: 1 },
}));

const SideMenuMethane = () => {
  const classes = useStyles();
  return (
    <SideMenuMoleculeContainer moleculeId={METHANE_MOLECULE_ID}>
      <div className={classes.leftHydrogenAtoms}>
        <SideMenuHydrogen
          customPositioningStyles={{
            marginBottom: '15px',
            marginTop: '-1.5px',
            marginLeft: '-2px',
          }}
          charge={POSITIVE_CHARGE}
        />
        <SideMenuHydrogen
          customPositioningStyles={{ marginLeft: '-2px' }}
          charge={POSITIVE_CHARGE}
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
          customPositioningStyles={{ marginBottom: '5px', marginLeft: '1px' }}
          charge={POSITIVE_CHARGE}
        />
        <SideMenuHydrogen
          customPositioningStyles={{ marginLeft: '1px' }}
          charge={POSITIVE_CHARGE}
        />
      </div>
    </SideMenuMoleculeContainer>
  );
};

export default SideMenuMethane;
