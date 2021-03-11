import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  SIDE_MENU_ATOM_DIMENSIONS,
  SIDE_MENU_NEGATIVE_CHARGE_SYMBOL,
  POSITIVE_CHARGE,
  SIDE_MENU_POSITIVE_CHARGE_SYMBOL,
  SIDE_MENU_SMALL_ATOM_CHARGE_FONT_SIZE,
  SIDE_MENU_STANDARD_CHARGE_FONT_SIZE,
} from '../../../../../config/constants';

const useStyles = makeStyles(() => ({
  atom: {
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const SideMenuAtom = ({
  atomColor,
  atomSize,
  customPositioningStyles,
  charge,
  chargeSymbolColor,
}) => {
  const classes = useStyles();
  const showAtomsCharges = useSelector(({ lab }) => lab.showAtomsCharges);

  const atomWidthAndHeight = SIDE_MENU_ATOM_DIMENSIONS[atomSize];

  // constants for displaying and styling charge text (a + or -)
  const chargeSymbol =
    charge === POSITIVE_CHARGE
      ? SIDE_MENU_POSITIVE_CHARGE_SYMBOL
      : SIDE_MENU_NEGATIVE_CHARGE_SYMBOL;
  const chargeFontSize =
    atomSize === 'small'
      ? SIDE_MENU_SMALL_ATOM_CHARGE_FONT_SIZE
      : SIDE_MENU_STANDARD_CHARGE_FONT_SIZE;

  return (
    <div
      className={classes.atom}
      style={{
        backgroundColor: atomColor,
        width: atomWidthAndHeight,
        height: atomWidthAndHeight,
        ...customPositioningStyles,
      }}
    >
      {showAtomsCharges && charge && (
        <div style={{ fontSize: chargeFontSize, color: chargeSymbolColor }}>
          {chargeSymbol}
        </div>
      )}
    </div>
  );
};

SideMenuAtom.propTypes = {
  atomColor: PropTypes.string.isRequired,
  atomSize: PropTypes.string.isRequired,
  chargeSymbolColor: PropTypes.string.isRequired,
  customPositioningStyles: PropTypes.shape(),
  charge: PropTypes.string,
};

SideMenuAtom.defaultProps = {
  customPositioningStyles: {},
  charge: '',
};

export default SideMenuAtom;
