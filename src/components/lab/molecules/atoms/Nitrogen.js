import React from 'react';
import PropTypes from 'prop-types';
import Atom from './Atom';
import {
  NITROGEN_ATOM_COLOR,
  NITROGEN_ATOM_SIZE,
} from '../../../../config/constants';

const Nitrogen = ({ customPositioningStyles }) => {
  return (
    <Atom
      atomColor={NITROGEN_ATOM_COLOR}
      atomSize={NITROGEN_ATOM_SIZE}
      customPositioningStyles={customPositioningStyles}
    />
  );
};

Nitrogen.propTypes = {
  customPositioningStyles: PropTypes.shape(),
};

Nitrogen.defaultProps = {
  customPositioningStyles: {},
};

export default Nitrogen;
