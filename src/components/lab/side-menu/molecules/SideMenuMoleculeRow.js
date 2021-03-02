import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { MAX_MOLECULES_IN_SIDEMENU_ROW } from '../../../../config/constants';

const useStyles = makeStyles((theme) => ({
  moleculeRow: {
    display: 'flex',
    marginTop: theme.spacing(2),
  },
}));

const SideMenuMoleculeRow = ({ children }) => {
  const classes = useStyles();

  // flexbox style used to distribute molecules in a row
  const justifyContent =
    children.length === MAX_MOLECULES_IN_SIDEMENU_ROW
      ? 'space-between'
      : 'space-around';

  return (
    <div className={classes.moleculeRow} style={{ justifyContent }}>
      {children}
    </div>
  );
};

SideMenuMoleculeRow.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default SideMenuMoleculeRow;
