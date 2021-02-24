import React from 'react';
import PropTypes from 'prop-types';
import Atom from './Atom';
import {
  HYDROGEN_ATOM_COLOR,
  HYDROGEN_ATOM_SIZE,
} from '../../../../config/constants';

const Hydrogen = ({ customPositioningStyles }) => {
  return (
    <Atom
      atomColor={HYDROGEN_ATOM_COLOR}
      atomSize={HYDROGEN_ATOM_SIZE}
      customPositioningStyles={customPositioningStyles}
    />
  );
};

Hydrogen.propTypes = {
  customPositioningStyles: PropTypes.shape(),
};

Hydrogen.defaultProps = {
  customPositioningStyles: {},
};

export default Hydrogen;
