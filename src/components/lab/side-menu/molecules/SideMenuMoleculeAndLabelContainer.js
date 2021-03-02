import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  unselectedMolecule: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: theme.spacing(1),
    border: '0.5px dashed white',
  },
  selectedMolecule: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: theme.spacing(1),
    borderRadius: '5%',
    border: '0.5px dashed darkgrey',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
  typography: {
    marginTop: '0.25em',
    textAlign: 'center',
  },
}));

const SideMenuMoleculeAndLabelContainer = ({
  molecule,
  moleculeLabel,
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
      <div>
        <Typography variant="body2" className={classes.typography}>
          {moleculeLabel}
        </Typography>
      </div>
    </div>
  );
};

SideMenuMoleculeAndLabelContainer.propTypes = {
  molecule: PropTypes.element.isRequired,
  moleculeLabel: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

export default SideMenuMoleculeAndLabelContainer;
