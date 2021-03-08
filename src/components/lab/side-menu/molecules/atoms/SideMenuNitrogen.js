import React from 'react';
import PropTypes from 'prop-types';
import SideMenuAtom from './SideMenuAtom';
import {
  NITROGEN_ATOM_COLOR,
  NITROGEN_ATOM_SIZE,
} from '../../../../../config/constants';

const SideMenuNitrogen = ({ customPositioningStyles, charge }) => {
  return (
    <SideMenuAtom
      atomColor={NITROGEN_ATOM_COLOR}
      atomSize={NITROGEN_ATOM_SIZE}
      customPositioningStyles={customPositioningStyles}
      charge={charge}
    />
  );
};

SideMenuNitrogen.propTypes = {
  customPositioningStyles: PropTypes.shape(),
  charge: PropTypes.string,
};

SideMenuNitrogen.defaultProps = {
  customPositioningStyles: {},
  charge: '',
};

export default SideMenuNitrogen;
