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
  SPECTRUMS,
} from '../../config/constants';
import GreenhouseGases from '../lab/GreenhouseGases';
import NonGreenhouseGases from '../lab/NonGreenhouseGases';
import SpectrumToggle from './SpectrumToggle';
import AnimationControls from './AnimationControls';
import CustomSwitch from './CustomSwitch';
import ReEmissionSwitch from './ReEmissionSwitch';
import Tour from './Tour';

const styles = (theme) => ({
  drawerPaper: {
    width: DRAWER_WIDTH,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'space-between',
  },
  drawerLeftContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  contentWrapper: {
    margin: theme.spacing(0.5, 2),
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
      drawerLeftContainer: PropTypes.string.isRequired,
    }).isRequired,
    theme: PropTypes.shape({
      direction: PropTypes.string.isRequired,
    }).isRequired,
    t: PropTypes.func.isRequired,
    showSideMenu: PropTypes.bool.isRequired,
    dispatchToggleSideMenu: PropTypes.func.isRequired,
    showElectricFieldVectors: PropTypes.bool.isRequired,
    showAtomsCharges: PropTypes.bool.isRequired,
    dispatchToggleShowElectricFieldVectors: PropTypes.func.isRequired,
    dispatchToggleShowAtomsCharges: PropTypes.func.isRequired,
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
          <div className={classes.drawerLeftContainer}>
            <IconButton onClick={this.handleToggleSideMenu(false)}>
              {theme.direction === DEFAULT_THEME_DIRECTION ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
            <Typography variant="h5">{t('Observe')}</Typography>
          </div>
          <div>
            <Tour />
          </div>
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
      dispatchToggleShowElectricFieldVectors,
      dispatchToggleShowAtomsCharges,
      t,
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
            {/* div for 'Guided Tour' purposes (see tour-steps.js) */}
            <div className="animation-controls">
              <AnimationControls />
            </div>
            <SpectrumToggle />
            <Divider className={classes.sideMenuDivider} />
            {/* div for 'Guided Tour' purposes (see tour-steps.js) */}
            <div className="side-menu-molecules">
              <GreenhouseGases />
              <Divider className={classes.sideMenuDivider} />
              <NonGreenhouseGases />
            </div>
            <Divider className={classes.sideMenuDivider} />
            <CustomSwitch
              switchLabel={t('Electric field vectors')}
              switchStatus={showElectricFieldVectors}
              switchDispatch={dispatchToggleShowElectricFieldVectors}
              disabled={spectrum === SPECTRUMS.VISIBLE_LIGHT}
            />
            <CustomSwitch
              switchLabel={t('Sign of charges')}
              switchStatus={showAtomsCharges}
              switchDispatch={dispatchToggleShowAtomsCharges}
              disabled={false}
            />
            {/* since ReEmissionSwitch contains significant custom code, separate component was created vs. reusing CustomSwitch */}
            <ReEmissionSwitch />
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
