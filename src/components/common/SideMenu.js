import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Divider, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {
  toggleShowElectricFieldVectors,
  toggleShowAtomsCharges,
  toggleShowReEmission,
  toggleSideMenu,
} from '../../actions';
import {
  DRAWER_WIDTH,
  DEFAULT_THEME_DIRECTION,
  INTERVALS_TO_REACH_MOLECULE_CENTER,
  SPECTRUMS,
} from '../../config/constants';
import GreenhouseGases from '../lab/GreenhouseGases';
import NonGreenhouseGases from '../lab/NonGreenhouseGases';
import SpectrumToggle from './SpectrumToggle';
import AnimationControls from './AnimationControls';
import CustomSwitch from './CustomSwitch';

const styles = (theme) => ({
  drawerPaper: {
    width: DRAWER_WIDTH,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  contentWrapper: {
    margin: theme.spacing(1, 2, 2),
  },
  sideMenuDivider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
});

class SideMenu extends React.Component {
  static propTypes = {
    classes: PropTypes.shape({
      drawerHeader: PropTypes.string.isRequired,
      drawerPaper: PropTypes.string.isRequired,
      contentWrapper: PropTypes.string.isRequired,
      sideMenuDivider: PropTypes.string.isRequired,
    }).isRequired,
    theme: PropTypes.shape({
      direction: PropTypes.string.isRequired,
    }).isRequired,
    t: PropTypes.func.isRequired,
    showSideMenu: PropTypes.bool.isRequired,
    dispatchToggleSideMenu: PropTypes.func.isRequired,
    showElectricFieldVectors: PropTypes.bool.isRequired,
    showAtomsCharges: PropTypes.bool.isRequired,
    showReEmission: PropTypes.bool.isRequired,
    dispatchToggleShowElectricFieldVectors: PropTypes.func.isRequired,
    dispatchToggleShowAtomsCharges: PropTypes.func.isRequired,
    dispatchToggleShowReEmission: PropTypes.func.isRequired,
    intervalCount: PropTypes.number.isRequired,
    spectrum: PropTypes.string.isRequired,
  };

  handleToggleSideMenu = (open) => () => {
    const { dispatchToggleSideMenu } = this.props;
    dispatchToggleSideMenu(open);
  };

  renderDrawerHeader = () => {
    const { classes, theme, t } = this.props;
    return (
      <>
        <div className={classes.drawerHeader}>
          <IconButton onClick={this.handleToggleSideMenu(false)}>
            {theme.direction === DEFAULT_THEME_DIRECTION ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
          <Typography variant="h5">{t('Observe')}</Typography>
        </div>
        <Divider />
      </>
    );
  };

  render() {
    const {
      classes,
      showSideMenu,
      showElectricFieldVectors,
      showAtomsCharges,
      showReEmission,
      dispatchToggleShowElectricFieldVectors,
      dispatchToggleShowAtomsCharges,
      dispatchToggleShowReEmission,
      t,
      intervalCount,
      spectrum,
    } = this.props;

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
          {this.renderDrawerHeader()}
          <div className={classes.contentWrapper}>
            <AnimationControls />
            <SpectrumToggle />
            <Divider className={classes.sideMenuDivider} />
            <GreenhouseGases />
            <Divider className={classes.sideMenuDivider} />
            <NonGreenhouseGases />
            <Divider className={classes.sideMenuDivider} />
            <CustomSwitch
              switchLabel={t('Electric field vectors')}
              switchStatus={showElectricFieldVectors}
              switchDispatch={dispatchToggleShowElectricFieldVectors}
              disabled={
                intervalCount < INTERVALS_TO_REACH_MOLECULE_CENTER ||
                spectrum === SPECTRUMS.VISIBLE_LIGHT
              }
            />
            <CustomSwitch
              switchLabel={t('Sign of charges')}
              switchStatus={showAtomsCharges}
              switchDispatch={dispatchToggleShowAtomsCharges}
              disabled={false}
            />
            <CustomSwitch
              switchLabel={t('Re-emission')}
              switchStatus={showReEmission}
              switchDispatch={dispatchToggleShowReEmission}
            />
          </div>
        </Drawer>
      </>
    );
  }
}

const mapStateToProps = ({ layout, lab }) => ({
  showSideMenu: layout.showSideMenu,
  showElectricFieldVectors: lab.showElectricFieldVectors,
  showAtomsCharges: lab.showAtomsCharges,
  showReEmission: lab.showReEmission,
  intervalCount: lab.intervalCount,
  spectrum: lab.spectrum,
});

const mapDispatchToProps = {
  dispatchToggleSideMenu: toggleSideMenu,
  dispatchToggleShowElectricFieldVectors: toggleShowElectricFieldVectors,
  dispatchToggleShowAtomsCharges: toggleShowAtomsCharges,
  dispatchToggleShowReEmission: toggleShowReEmission,
};

const ConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideMenu);

const StyledComponent = withStyles(styles, { withTheme: true })(
  ConnectedComponent,
);

export default withTranslation()(StyledComponent);
