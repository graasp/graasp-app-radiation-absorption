import React from 'react';
import PropTypes from 'prop-types';
import SideMenuAtom from './SideMenuAtom';
import { CARBON } from '../../../../../constants/canvas-molecules/common';

const SideMenuCarbon = ({ customStyles, charge }) => {
  return (
    <SideMenuAtom
      color={CARBON.color}
      size={CARBON.size}
      chargeColor={CARBON.chargeColor}
      customStyles={customStyles}
      charge={charge}
    />
  );
};

SideMenuCarbon.propTypes = {
  customStyles: PropTypes.shape(),
  charge: PropTypes.string,
};

SideMenuCarbon.defaultProps = {
  customStyles: {},
  charge: '',
};

export default SideMenuCarbon;
