import React from 'react';
import PropTypes from 'prop-types';
import SideMenuAtom from './SideMenuAtom';
import { ARGON } from '../../../../../constants/canvas-molecules/common';

const SideMenuArgon = ({ customStyles }) => {
  return (
    <SideMenuAtom
      color={ARGON.color}
      size={ARGON.size}
      chargeColor={ARGON.chargeColor}
      customStyles={customStyles}
    />
  );
};

SideMenuArgon.propTypes = {
  customStyles: PropTypes.shape(),
};

SideMenuArgon.defaultProps = {
  customStyles: {},
};

export default SideMenuArgon;
