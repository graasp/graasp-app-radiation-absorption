import React from 'react';
import PropTypes from 'prop-types';
import SideMenuAtom from './SideMenuAtom';
import {
  HYDROGEN_ATOM_COLOR,
  HYDROGEN_ATOM_SIZE,
} from '../../../../../config/constants';

const SideMenuHydrogen = ({ customPositioningStyles }) => {
  return (
    <SideMenuAtom
      atomColor={HYDROGEN_ATOM_COLOR}
      atomSize={HYDROGEN_ATOM_SIZE}
      customPositioningStyles={customPositioningStyles}
    />
  );
};

SideMenuHydrogen.propTypes = {
  customPositioningStyles: PropTypes.shape(),
};

SideMenuHydrogen.defaultProps = {
  customPositioningStyles: {},
};

export default SideMenuHydrogen;
