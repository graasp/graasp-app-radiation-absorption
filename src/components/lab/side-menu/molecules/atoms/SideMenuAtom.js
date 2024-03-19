import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  SIDE_MENU_ATOM_DIMENSIONS,
  SIDE_MENU_NEGATIVE_CHARGE_SYMBOL,
  SIDE_MENU_POSITIVE_CHARGE_SYMBOL,
  SIDE_MENU_SMALL_ATOM_CHARGE_FONT_SIZE,
  SIDE_MENU_STANDARD_CHARGE_FONT_SIZE,
} from '../../../../../constants/constants';
import { POSITIVE } from '../../../../../constants/strings';

const useStyles = makeStyles(() => ({
  atom: {
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const SideMenuAtom = ({ color, size, customStyles, charge, chargeColor }) => {
  const classes = useStyles();
  const { showCharges } = useSelector(({ lab }) => lab);

  const atomWidthAndHeight = SIDE_MENU_ATOM_DIMENSIONS[size];

  // constants for displaying and styling charge text (a + or -)
  const chargeSymbol =
    charge === POSITIVE
      ? SIDE_MENU_POSITIVE_CHARGE_SYMBOL
      : SIDE_MENU_NEGATIVE_CHARGE_SYMBOL;
  const chargeFontSize =
    size === 'small'
      ? SIDE_MENU_SMALL_ATOM_CHARGE_FONT_SIZE
      : SIDE_MENU_STANDARD_CHARGE_FONT_SIZE;

  return (
    <div
      className={classes.atom}
      style={{
        backgroundColor: color,
        width: atomWidthAndHeight,
        height: atomWidthAndHeight,
        ...customStyles,
      }}
    >
      {showCharges && charge && (
        <div style={{ fontSize: chargeFontSize, color: chargeColor }}>
          {chargeSymbol}
        </div>
      )}
    </div>
  );
};

SideMenuAtom.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  chargeColor: PropTypes.string.isRequired,
  customStyles: PropTypes.shape(),
  charge: PropTypes.string,
};

SideMenuAtom.defaultProps = {
  customStyles: {},
  charge: '',
};

export default SideMenuAtom;
