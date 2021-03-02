import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { ATOM_DIMENSIONS } from '../../../../../config/constants';

const useStyles = makeStyles(() => ({
  atom: {
    borderRadius: '50%',
  },
}));

const SideMenuAtom = ({ atomColor, atomSize, customPositioningStyles }) => {
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

SideMenuAtom.propTypes = {
  atomColor: PropTypes.string.isRequired,
  atomSize: PropTypes.string.isRequired,
  customPositioningStyles: PropTypes.shape(),
};

SideMenuAtom.defaultProps = {
  customPositioningStyles: {},
};

export default SideMenuAtom;
