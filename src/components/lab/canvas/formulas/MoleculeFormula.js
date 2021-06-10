import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  typography: {
    marginLeft: 3,
  },
}));

const MoleculeFormula = ({ formula }) => {
  const classes = useStyles();
  return (
    <Typography variant="body2" className={classes.typography}>
      {formula}
    </Typography>
  );
};

MoleculeFormula.propTypes = {
  formula: PropTypes.element.isRequired,
};

export default MoleculeFormula;
