import React from 'react';
import PropTypes from 'prop-types';
import SideMenuAtom from './SideMenuAtom';
import { OXYGEN } from '../../../../../constants/canvas-molecules/common';

const SideMenuOxygen = ({ customStyles, charge }) => {
  return (
    <SideMenuAtom
      color={OXYGEN.color}
      size={OXYGEN.size}
      chargeColor={OXYGEN.chargeColor}
      customStyles={customStyles}
      charge={charge}
    />
  );
};

SideMenuOxygen.propTypes = {
  customStyles: PropTypes.shape(),
  charge: PropTypes.string,
};

SideMenuOxygen.defaultProps = {
  customStyles: {},
  charge: '',
};

export default SideMenuOxygen;
