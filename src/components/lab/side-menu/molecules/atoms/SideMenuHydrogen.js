import React from 'react';
import PropTypes from 'prop-types';
import SideMenuAtom from './SideMenuAtom';
import { HYDROGEN } from '../../../../../config/constants';

const SideMenuHydrogen = ({ customPositioningStyles, charge }) => {
  return (
    <SideMenuAtom
      atomColor={HYDROGEN.atomColor}
      atomSize={HYDROGEN.size}
      chargeSymbolColor={HYDROGEN.chargeSymbolColor}
      customPositioningStyles={customPositioningStyles}
      charge={charge}
    />
  );
};

SideMenuHydrogen.propTypes = {
  customPositioningStyles: PropTypes.shape(),
  charge: PropTypes.string,
};

SideMenuHydrogen.defaultProps = {
  customPositioningStyles: {},
  charge: '',
};

export default SideMenuHydrogen;
