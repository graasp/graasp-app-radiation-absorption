import React from 'react';
import PropTypes from 'prop-types';
import SideMenuAtom from './SideMenuAtom';
import {
  CARBON_ATOM_COLOR,
  CARBON_ATOM_SIZE,
} from '../../../../../config/constants';

const SideMenuCarbon = ({ customPositioningStyles, charge }) => {
  return (
    <SideMenuAtom
      atomColor={CARBON_ATOM_COLOR}
      atomSize={CARBON_ATOM_SIZE}
      customPositioningStyles={customPositioningStyles}
      charge={charge}
    />
  );
};

SideMenuCarbon.propTypes = {
  customPositioningStyles: PropTypes.shape(),
  charge: PropTypes.string,
};

SideMenuCarbon.defaultProps = {
  customPositioningStyles: {},
  charge: '',
};

export default SideMenuCarbon;
