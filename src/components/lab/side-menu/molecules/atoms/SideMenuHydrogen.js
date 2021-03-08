import React from 'react';
import PropTypes from 'prop-types';
import SideMenuAtom from './SideMenuAtom';
import {
  HYDROGEN_ATOM_COLOR,
  HYDROGEN_ATOM_SIZE,
} from '../../../../../config/constants';

const SideMenuHydrogen = ({ customPositioningStyles, charge }) => {
  return (
    <SideMenuAtom
      atomColor={HYDROGEN_ATOM_COLOR}
      atomSize={HYDROGEN_ATOM_SIZE}
      customPositioningStyles={customPositioningStyles}
      charge={charge}
    />
  );
};

SideMenuHydrogen.propTypes = {
  customPositioningStyles: PropTypes.shape(),
  charge: PropTypes.string,
};

SideMenuHydrogen.defaultProps = {
  customPositioningStyles: {},
  charge: '',
};

export default SideMenuHydrogen;
