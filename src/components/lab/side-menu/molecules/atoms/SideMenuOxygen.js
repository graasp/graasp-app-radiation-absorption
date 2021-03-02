import React from 'react';
import PropTypes from 'prop-types';
import SideMenuAtom from './SideMenuAtom';
import {
  OXYGEN_ATOM_COLOR,
  OXYGEN_ATOM_SIZE,
} from '../../../../../config/constants';

const SideMenuOxygen = ({ customPositioningStyles }) => {
  return (
    <SideMenuAtom
      atomColor={OXYGEN_ATOM_COLOR}
      atomSize={OXYGEN_ATOM_SIZE}
      customPositioningStyles={customPositioningStyles}
    />
  );
};

SideMenuOxygen.propTypes = {
  customPositioningStyles: PropTypes.shape(),
};

SideMenuOxygen.defaultProps = {
  customPositioningStyles: {},
};

export default SideMenuOxygen;
