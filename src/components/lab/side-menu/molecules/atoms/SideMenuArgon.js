import React from 'react';
import PropTypes from 'prop-types';
import SideMenuAtom from './SideMenuAtom';
import {
  ARGON_ATOM_COLOR,
  ARGON_ATOM_SIZE,
} from '../../../../../config/constants';

const SideMenuArgon = ({ customPositioningStyles }) => {
  return (
    <SideMenuAtom
      atomColor={ARGON_ATOM_COLOR}
      atomSize={ARGON_ATOM_SIZE}
      customPositioningStyles={customPositioningStyles}
    />
  );
};

SideMenuArgon.propTypes = {
  customPositioningStyles: PropTypes.shape(),
};

SideMenuArgon.defaultProps = {
  customPositioningStyles: {},
};

export default SideMenuArgon;
