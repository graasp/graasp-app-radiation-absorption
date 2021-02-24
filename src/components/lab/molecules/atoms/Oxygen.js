import React from 'react';
import PropTypes from 'prop-types';
import Atom from './Atom';
import {
  OXYGEN_ATOM_COLOR,
  OXYGEN_ATOM_SIZE,
} from '../../../../config/constants';

const Oxygen = ({ customPositioningStyles }) => {
  return (
    <Atom
      atomColor={OXYGEN_ATOM_COLOR}
      atomSize={OXYGEN_ATOM_SIZE}
      customPositioningStyles={customPositioningStyles}
    />
  );
};

Oxygen.propTypes = {
  customPositioningStyles: PropTypes.shape(),
};

Oxygen.defaultProps = {
  customPositioningStyles: {},
};

export default Oxygen;
