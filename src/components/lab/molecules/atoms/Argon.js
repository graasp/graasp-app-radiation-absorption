import React from 'react';
import PropTypes from 'prop-types';
import Atom from './Atom';
import {
  ARGON_ATOM_COLOR,
  ARGON_ATOM_SIZE,
} from '../../../../config/constants';

const Argon = ({ customPositioningStyles }) => {
  return (
    <Atom
      atomColor={ARGON_ATOM_COLOR}
      atomSize={ARGON_ATOM_SIZE}
      customPositioningStyles={customPositioningStyles}
    />
  );
};

Argon.propTypes = {
  customPositioningStyles: PropTypes.shape(),
};

Argon.defaultProps = {
  customPositioningStyles: {},
};

export default Argon;
