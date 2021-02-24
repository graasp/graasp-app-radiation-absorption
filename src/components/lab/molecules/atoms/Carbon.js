import React from 'react';
import PropTypes from 'prop-types';
import Atom from './Atom';
import {
  CARBON_ATOM_COLOR,
  CARBON_ATOM_SIZE,
} from '../../../../config/constants';

const Carbon = ({ customPositioningStyles }) => {
  return (
    <Atom
      atomColor={CARBON_ATOM_COLOR}
      atomSize={CARBON_ATOM_SIZE}
      customPositioningStyles={customPositioningStyles}
    />
  );
};

Carbon.propTypes = {
  customPositioningStyles: PropTypes.shape(),
};

Carbon.defaultProps = {
  customPositioningStyles: {},
};

export default Carbon;
