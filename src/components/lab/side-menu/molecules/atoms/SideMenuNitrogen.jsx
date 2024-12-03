import React from 'react';
import PropTypes from 'prop-types';
import SideMenuAtom from './SideMenuAtom';
import { NITROGEN } from '../../../../../constants/canvas-molecules/common';

const SideMenuNitrogen = ({ customStyles, charge }) => {
  return (
    <SideMenuAtom
      color={NITROGEN.color}
      size={NITROGEN.size}
      chargeColor={NITROGEN.chargeColor}
      customStyles={customStyles}
      charge={charge}
    />
  );
};

SideMenuNitrogen.propTypes = {
  customStyles: PropTypes.shape(),
  charge: PropTypes.string,
};

SideMenuNitrogen.defaultProps = {
  customStyles: {},
  charge: '',
};

export default SideMenuNitrogen;
