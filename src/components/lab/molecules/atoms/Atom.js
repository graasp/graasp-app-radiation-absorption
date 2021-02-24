import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { ATOM_DIMENSIONS } from '../../../../config/constants';

const useStyles = makeStyles(() => ({
  atom: {
    borderRadius: '50%',
  },
}));

const Atom = ({ atomColor, atomSize, customPositioningStyles }) => {
  const classes = useStyles();

  const atomWidthAndHeight = ATOM_DIMENSIONS[atomSize];

  return (
    <div
      className={classes.atom}
      style={{
        backgroundColor: atomColor,
        width: atomWidthAndHeight,
        height: atomWidthAndHeight,
        ...customPositioningStyles,
      }}
    />
  );
};

Atom.propTypes = {
  atomColor: PropTypes.string.isRequired,
  atomSize: PropTypes.string.isRequired,
  customPositioningStyles: PropTypes.shape(),
};

Atom.defaultProps = {
  customPositioningStyles: {},
};

export default Atom;
