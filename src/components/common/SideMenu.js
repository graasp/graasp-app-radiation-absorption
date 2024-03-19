import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Divider, makeStyles } from '@material-ui/core';
import {
  toggleShowElectricFieldVectors,
  toggleShowCharges,
} from '../../actions';
import { DRAWER_WIDTH } from '../../constants/constants';
import GreenhouseGases from '../lab/GreenhouseGases';
import NonGreenhouseGases from '../lab/NonGreenhouseGases';
import SpectrumToggle from './SpectrumToggle';
import AnimationControls from './AnimationControls';
import CustomSwitch from './CustomSwitch';
import ReEmissionSwitch from './ReEmissionSwitch';
import {
  TOGGLED_CHARGE_SIGNS_OFF,
  TOGGLED_CHARGE_SIGNS_ON,
  TOGGLED_ELECTRIC_FIELD_VECTORS_OFF,
  TOGGLED_ELECTRIC_FIELD_VECTORS_ON,
} from '../../config/verbs';
import { SPECTRUMS } from '../../constants/strings';

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: DRAWER_WIDTH,
  },
  contentWrapper: {
    margin: theme.spacing(1.5, 2),
  },
  sideMenuDivider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

const SideMenu = () => {
  const { t } = useTranslation();
  const { showSideMenu } = useSelector(({ layout }) => layout);
  const { showElectricFieldVectors, showCharges, spectrum } = useSelector(
    ({ lab }) => lab,
  );
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Drawer
        variant="persistent"
        anchor="right"
        open={showSideMenu}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.contentWrapper}>
          {/* div for 'Guided Tour' purposes (see tour-steps.js) */}
          <div className="animation-controls">
            <AnimationControls />
          </div>
          <SpectrumToggle />
          <Divider className={classes.sideMenuDivider} />
          <div className="side-menu-molecules">
            <GreenhouseGases />
            <Divider className={classes.sideMenuDivider} />
            <NonGreenhouseGases />
          </div>
          <Divider className={classes.sideMenuDivider} />
          <CustomSwitch
            switchLabel={t('Electric field vectors')}
            switchStatus={showElectricFieldVectors}
            switchAction={toggleShowElectricFieldVectors}
            disabled={spectrum === SPECTRUMS.VISIBLE_LIGHT}
            toggleOffAction={TOGGLED_ELECTRIC_FIELD_VECTORS_OFF}
            toggleOnAction={TOGGLED_ELECTRIC_FIELD_VECTORS_ON}
          />
          <CustomSwitch
            switchLabel={t('Sign of charges')}
            switchStatus={showCharges}
            switchAction={toggleShowCharges}
            disabled={false}
            toggleOffAction={TOGGLED_CHARGE_SIGNS_OFF}
            toggleOnAction={TOGGLED_CHARGE_SIGNS_ON}
          />
          <ReEmissionSwitch />
        </div>
      </Drawer>
    </>
  );
};

export default SideMenu;
