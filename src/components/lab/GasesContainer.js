import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { CANVAS_MOLECULE_AREA_STATE } from '../../config/constants';
import {
  displayMolecule,
  selectMoleculeInSideMenu,
  setMoleculeAreaStatus,
} from '../../actions';

const useStyles = makeStyles((theme) => ({
  headingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContentContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  moleculeContainer: {
    // this ensures that molecule names are aligned bottom
    display: 'flex',
  },
  fillAllButton: {
    padding: theme.spacing(0.25),
    fontSize: 10,
    position: 'absolute',
    left: '5%',
  },
}));

const GasesContainer = ({ children, gasContainerLabel, showFillAllButton }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const moleculesOnCanvas = useSelector(({ lab }) => lab.moleculesOnCanvas);
  const selectedMoleculeInSideMenu = useSelector(
    ({ lab }) => lab.selectedMoleculeInSideMenu,
  );

  const onClickFillAll = () => {
    moleculesOnCanvas.forEach((molecule, index) => {
      // if molecule area is active, add the selected molecule in the side menu to that area
      if (molecule.moleculeAreaStatus === CANVAS_MOLECULE_AREA_STATE.ACTIVE) {
        dispatch(
          displayMolecule({
            moleculeId: selectedMoleculeInSideMenu,
            areaIndex: index,
          }),
        );
      }
      // otherwise, the area was already 'full' (contains a molecule), so return it to its 'full' state
      else if (
        molecule.moleculeAreaStatus ===
        CANVAS_MOLECULE_AREA_STATE.AWAITING_DELETE
      ) {
        dispatch(
          setMoleculeAreaStatus({
            areaIndex: index,
            newStatus: CANVAS_MOLECULE_AREA_STATE.FULL,
          }),
        );
      }
    }, dispatch(selectMoleculeInSideMenu(null)));
  };

  return (
    <div>
      <div className={classes.headingContainer}>
        {showFillAllButton && (
          <Button
            variant="outlined"
            color="secondary"
            className={classes.fillAllButton}
            onClick={onClickFillAll}
          >
            {t('Fill all empty')}
          </Button>
        )}
        <Typography variant="subtitle1" align="center">
          {gasContainerLabel}
        </Typography>
      </div>
      <div className={classes.mainContentContainer}>
        {children.map((child, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index} className={classes.moleculeContainer}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

GasesContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
  gasContainerLabel: PropTypes.string.isRequired,
  showFillAllButton: PropTypes.bool.isRequired,
};

export default GasesContainer;
