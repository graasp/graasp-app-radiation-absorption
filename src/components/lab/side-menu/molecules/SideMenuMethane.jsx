import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SideMenuMoleculeContainer from './SideMenuMoleculeContainer';
import SideMenuCarbon from './atoms/SideMenuCarbon';
import SideMenuHydrogen from './atoms/SideMenuHydrogen';
import { METHANE_ID, NEGATIVE, POSITIVE } from '../../../../constants/strings';
import SideMenuBondContainer from '../SideMenuBondContainer';
import { HYDROGEN } from '../../../../constants/canvas-molecules/common';

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
    <SideMenuMoleculeContainer moleculeId={METHANE_ID}>
      <div className={classes.leftHydrogenAtoms}>
        <SideMenuHydrogen
          customStyles={{
            marginBottom: '5px',
          }}
          charge={POSITIVE}
          color={HYDROGEN.color.DARKER}
        />
        <SideMenuHydrogen charge={POSITIVE} color={HYDROGEN.color.LIGHTER} />
      </div>
      <div className={classes.bondContainer}>
        <div className={classes.bonds}>
          <SideMenuBondContainer numberOfBonds={1} rotation={40} />
          <div className={classes.leftBondSeparator} />
          <SideMenuBondContainer numberOfBonds={1} rotation={140} />
        </div>
      </div>
      <SideMenuCarbon customStyles={{ marginTop: '8px' }} charge={NEGATIVE} />
      <div className={classes.bondContainer}>
        <div className={classes.bonds}>
          <SideMenuBondContainer numberOfBonds={1} rotation={-40} />
          <div className={classes.rightBondSeparator} />
          <SideMenuBondContainer numberOfBonds={1} rotation={-140} />
        </div>
      </div>
      <div className={classes.rightHydrogenAtoms}>
        <SideMenuHydrogen
          customStyles={{ marginBottom: '12px', marginLeft: '-2px' }}
          charge={POSITIVE}
          color={HYDROGEN.color.STANDARD}
        />
        <SideMenuHydrogen
          customStyles={{ marginLeft: '-2px' }}
          charge={POSITIVE}
          color={HYDROGEN.color.STANDARD}
        />
      </div>
    </SideMenuMoleculeContainer>
  );
};

export default SideMenuMethane;
