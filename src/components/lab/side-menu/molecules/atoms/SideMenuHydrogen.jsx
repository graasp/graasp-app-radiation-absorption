import React from 'react';
import PropTypes from 'prop-types';
import SideMenuAtom from './SideMenuAtom';
import { HYDROGEN } from '../../../../../constants/canvas-molecules/common';

const SideMenuHydrogen = ({ customStyles, charge, color }) => {
  return (
    <SideMenuAtom
      color={color}
      size={HYDROGEN.size}
      chargeColor={HYDROGEN.chargeColor}
      customStyles={customStyles}
      charge={charge}
    />
  );
};

SideMenuHydrogen.propTypes = {
  customStyles: PropTypes.shape(),
  charge: PropTypes.string,
  color: PropTypes.string.isRequired,
};

SideMenuHydrogen.defaultProps = {
  customStyles: {},
  charge: '',
};

export default SideMenuHydrogen;
