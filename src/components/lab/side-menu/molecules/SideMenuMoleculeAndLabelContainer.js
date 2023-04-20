import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  unselectedMolecule: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing(0.25),
    padding: theme.spacing(1),
    border: '0.5px dashed white',
  },
  selectedMolecule: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing(0.25),
    padding: theme.spacing(1),
    borderRadius: '5%',
    border: '0.5px dashed darkgrey',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
  typographyContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '0.25em',
  },
}));

const SideMenuMoleculeAndLabelContainer = ({
  molecule,
  moleculeLabel,
  moleculeFormula,
  isSelected,
}) => {
  const classes = useStyles();

  return (
    <div
      className={
        isSelected ? classes.selectedMolecule : classes.unselectedMolecule
      }
    >
      {molecule}
      <div className={classes.typographyContainer}>
        <div>
          <Typography variant="body2">{moleculeLabel}</Typography>
        </div>
        <div>{moleculeFormula}</div>
      </div>
    </div>
  );
};

SideMenuMoleculeAndLabelContainer.propTypes = {
  molecule: PropTypes.element.isRequired,
  moleculeLabel: PropTypes.string.isRequired,
  moleculeFormula: PropTypes.element,
  isSelected: PropTypes.bool.isRequired,
};

SideMenuMoleculeAndLabelContainer.defaultProps = {
  moleculeFormula: null,
};

export default SideMenuMoleculeAndLabelContainer;
