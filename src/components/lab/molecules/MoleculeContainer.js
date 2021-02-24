// these disables necessary to make non-button elements (divs) have an onClick prop
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { selectMolecule } from '../../../actions';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    cursor: 'pointer',
  },
}));

const MoleculeContainer = ({ children, moleculeId }) => {
  const classes = useStyles();
  const selectedMolecule = useSelector(({ lab }) => lab.selectedMolecule);
  const dispatch = useDispatch();

  const handleMoleculeClick = () => {
    if (!selectedMolecule || selectedMolecule !== moleculeId) {
      dispatch(selectMolecule(moleculeId));
    } else {
      dispatch(selectMolecule(''));
    }
  };

  return (
    <div
      className={classes.container}
      onClick={handleMoleculeClick}
      role="button"
    >
      {children}
    </div>
  );
};

MoleculeContainer.propTypes = {
  moleculeId: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default MoleculeContainer;
