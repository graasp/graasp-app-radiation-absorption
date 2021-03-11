import React from 'react';
import PropTypes from 'prop-types';
import SideMenuAtom from './SideMenuAtom';
import { NITROGEN } from '../../../../../config/constants';

const SideMenuNitrogen = ({ customPositioningStyles, charge }) => {
  return (
    <SideMenuAtom
      atomColor={NITROGEN.atomColor}
      atomSize={NITROGEN.size}
      chargeSymbolColor={NITROGEN.chargeSymbolColor}
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
