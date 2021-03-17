import React from 'react';
import PropTypes from 'prop-types';
import SideMenuAtom from './SideMenuAtom';
import { CARBON } from '../../../../../config/constants';

const SideMenuCarbon = ({ customPositioningStyles, charge }) => {
  return (
    <SideMenuAtom
      atomColor={CARBON.atomColor}
      atomSize={CARBON.size}
      chargeSymbolColor={CARBON.chargeSymbolColor}
      customPositioningStyles={customPositioningStyles}
      charge={charge}
    />
  );
};

SideMenuCarbon.propTypes = {
  customPositioningStyles: PropTypes.shape(),
  charge: PropTypes.string,
};

SideMenuCarbon.defaultProps = {
  customPositioningStyles: {},
  charge: '',
};

export default SideMenuCarbon;
