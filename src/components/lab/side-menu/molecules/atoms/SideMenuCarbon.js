import React from 'react';
import PropTypes from 'prop-types';
import SideMenuAtom from './SideMenuAtom';
import {
  CARBON_ATOM_COLOR,
  CARBON_ATOM_SIZE,
} from '../../../../../config/constants';

const SideMenuCarbon = ({ customPositioningStyles }) => {
  return (
    <SideMenuAtom
      atomColor={CARBON_ATOM_COLOR}
      atomSize={CARBON_ATOM_SIZE}
      customPositioningStyles={customPositioningStyles}
    />
  );
};

SideMenuCarbon.propTypes = {
  customPositioningStyles: PropTypes.shape(),
};

SideMenuCarbon.defaultProps = {
  customPositioningStyles: {},
};

export default SideMenuCarbon;
