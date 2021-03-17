import React from 'react';
import PropTypes from 'prop-types';
import SideMenuAtom from './SideMenuAtom';
import { ARGON } from '../../../../../config/constants';

const SideMenuArgon = ({ customPositioningStyles }) => {
  return (
    <SideMenuAtom
      atomColor={ARGON.atomColor}
      atomSize={ARGON.size}
      chargeSymbolColor={ARGON.chargeSymbolColor}
      customPositioningStyles={customPositioningStyles}
    />
  );
};

SideMenuArgon.propTypes = {
  customPositioningStyles: PropTypes.shape(),
};

SideMenuArgon.defaultProps = {
  customPositioningStyles: {},
};

export default SideMenuArgon;
