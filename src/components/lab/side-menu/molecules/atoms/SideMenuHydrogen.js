import React from 'react';
import PropTypes from 'prop-types';
import SideMenuAtom from './SideMenuAtom';
import { HYDROGEN } from '../../../../../config/constants';

const SideMenuHydrogen = ({ customPositioningStyles, charge, atomColor }) => {
  return (
    <SideMenuAtom
      atomColor={atomColor}
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
  atomColor: PropTypes.string.isRequired,
};

SideMenuHydrogen.defaultProps = {
  customPositioningStyles: {},
  charge: '',
};

export default SideMenuHydrogen;
