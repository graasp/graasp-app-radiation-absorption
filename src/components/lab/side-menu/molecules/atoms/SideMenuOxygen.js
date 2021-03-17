import React from 'react';
import PropTypes from 'prop-types';
import SideMenuAtom from './SideMenuAtom';
import { OXYGEN } from '../../../../../config/constants';

const SideMenuOxygen = ({ customPositioningStyles, charge }) => {
  return (
    <SideMenuAtom
      atomColor={OXYGEN.atomColor}
      atomSize={OXYGEN.size}
      chargeSymbolColor={OXYGEN.chargeSymbolColor}
      customPositioningStyles={customPositioningStyles}
      charge={charge}
    />
  );
};

SideMenuOxygen.propTypes = {
  customPositioningStyles: PropTypes.shape(),
  charge: PropTypes.string,
};

SideMenuOxygen.defaultProps = {
  customPositioningStyles: {},
  charge: '',
};

export default SideMenuOxygen;
