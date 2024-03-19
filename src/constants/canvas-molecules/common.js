export const CARBON = {
  color: 'black',
  size: 'medium',
  chargeColor: 'white',
};
export const OXYGEN = {
  color: 'indianred',
  size: 'medium',
  chargeColor: 'black',
};
export const HYDROGEN = {
  color: { DARKER: '#484848', STANDARD: 'gray', LIGHTER: '#A0A0A0' },
  size: 'small',
  chargeColor: 'black',
};
export const NITROGEN = {
  color: 'cornflowerblue',
  size: 'medium',
  chargeColor: 'black',
};
export const ARGON = {
  color: 'goldenrod',
  size: 'large',
  chargeColor: 'black',
};

export const CANVAS_ATOM_DIMENSIONS = {
  small: 0.015,
  medium: 0.0255,
  large: 0.04,
};

export const CARBON_SIZE = CANVAS_ATOM_DIMENSIONS[CARBON.size];
export const OXYGEN_SIZE = CANVAS_ATOM_DIMENSIONS[OXYGEN.size];
export const HYDROGEN_SIZE = CANVAS_ATOM_DIMENSIONS[HYDROGEN.size];
export const NITROGEN_SIZE = CANVAS_ATOM_DIMENSIONS[NITROGEN.size];

export const { small: REFERENCE_POINT } = CANVAS_ATOM_DIMENSIONS;

export const ATOMS_VERTICAL_DISTANCE = REFERENCE_POINT / 3;
