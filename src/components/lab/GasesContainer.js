import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MoleculeRow from './molecules/MoleculeRow';
import { MAX_MOLECULES_IN_SIDEMENU_ROW } from '../../config/constants';

const useStyles = makeStyles(() => ({
  typography: {
    textAlign: 'center',
  },
}));

const GasesContainer = ({ children, gasContainerLabel }) => {
  const classes = useStyles();

  // divide children passed into GasesContainer into groups of MAX_MOLECULES_IN_SIDEMENU_ROW (or smaller)
  // e.g. say MAX_MOLECULES_IN_SIDEMENU_ROW = 3 and children = [<Molecule1>, <Molecule2>, <Molecule3>, <Molecule4>]
  // => then chunkedChildElements = [[<Molecule1>, <Molecule2>, <Molecule3>], [<Molecule4>]]
  // hence insuring that each MoleculeRow gets at most 3 molecules
  const chunkedChildElements = _.chunk(children, MAX_MOLECULES_IN_SIDEMENU_ROW);

  return (
    <div>
      <Typography variant="h6" className={classes.typography}>
        {gasContainerLabel}
      </Typography>
      {chunkedChildElements.map((childrenGroup, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <MoleculeRow key={index}>{childrenGroup}</MoleculeRow>
      ))}
    </div>
  );
};

GasesContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
  gasContainerLabel: PropTypes.string.isRequired,
};

export default GasesContainer;
