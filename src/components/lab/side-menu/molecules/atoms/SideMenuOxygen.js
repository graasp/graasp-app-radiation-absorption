import React from 'react';
import PropTypes from 'prop-types';
import SideMenuAtom from './SideMenuAtom';
import {
  OXYGEN_ATOM_COLOR,
  OXYGEN_ATOM_SIZE,
} from '../../../../../config/constants';

const SideMenuOxygen = ({ customPositioningStyles, charge }) => {
  return (
    <SideMenuAtom
      atomColor={OXYGEN_ATOM_COLOR}
      atomSize={OXYGEN_ATOM_SIZE}
      customPositioningStyles={customPositioningStyles}
      charge={charge}
    />
  );
};

SideMenuOxygen.propTypes = {
  customPositioningStyles: PropTypes.shape(),
  charge: PropTypes.string,
};

SideMenuOxygen.defaultProps = {
  customPositioningStyles: {},
  charge: '',
};

export default SideMenuOxygen;
