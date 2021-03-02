import React from 'react';
import PropTypes from 'prop-types';
import SideMenuAtom from './SideMenuAtom';
import {
  NITROGEN_ATOM_COLOR,
  NITROGEN_ATOM_SIZE,
} from '../../../../../config/constants';

const SideMenuNitrogen = ({ customPositioningStyles }) => {
  return (
    <SideMenuAtom
      atomColor={NITROGEN_ATOM_COLOR}
      atomSize={NITROGEN_ATOM_SIZE}
      customPositioningStyles={customPositioningStyles}
    />
  );
};

SideMenuNitrogen.propTypes = {
  customPositioningStyles: PropTypes.shape(),
};

SideMenuNitrogen.defaultProps = {
  customPositioningStyles: {},
};

export default SideMenuNitrogen;
