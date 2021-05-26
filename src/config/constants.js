/* ------DEFAULT APP CONSTANTS------ */
export const DRAWER_WIDTH = 430;
export const DEFAULT_THEME_DIRECTION = 'rtl';
export const FORM_CONTROL_MIN_WIDTH = 120;
export const LOGO_SIZE = '48px';
export const DEFAULT_HEADER_VISIBLE = false;
export const MAXIMUM_Z_INDEX = 999999;
export const BACKGROUND_COLOR = 'lightgrey';

/* ------CONSTANTS FOR STYLING ATOMS------ */
// note that the application has separate atom components in the side menu and canvas
// some of these constants (like atom color and charge symbol color) are used across both
// where a constant is used in a particular part of the application, its name indicates this
export const CARBON = {
  atomColor: 'black',
  size: 'medium',
  chargeSymbolColor: 'white',
};
export const OXYGEN = {
  atomColor: 'indianred',
  size: 'medium',
  chargeSymbolColor: 'black',
};
export const HYDROGEN = {
  atomColor: { DARKER: '#484848', STANDARD: 'gray', LIGHTER: '#A0A0A0' },
  size: 'small',
  chargeSymbolColor: 'black',
};
export const NITROGEN = {
  atomColor: 'cornflowerblue',
  size: 'medium',
  chargeSymbolColor: 'black',
};
export const ARGON = {
  atomColor: 'goldenrod',
  size: 'large',
  chargeSymbolColor: 'black',
};
export const SIDE_MENU_ATOM_DIMENSIONS = { small: 20, medium: 35, large: 50 };
// note that in the canvas these sizes refer to circle radii (whereas in the side menu they are div heights/widths)
export const CANVAS_ATOM_DIMENSIONS = { small: 15, medium: 25.5, large: 40 };
// note use of full-width-plus and em-dash (required for easier centering within side menu divs)
// also note that in the canvas the + and - are not text nodes but Konva lines (so don't have similar constants here)
export const SIDE_MENU_POSITIVE_CHARGE_SYMBOL = '＋';
export const SIDE_MENU_NEGATIVE_CHARGE_SYMBOL = '—';
// constants used to style canvas + and - charges
export const CANVAS_ATOM_CHARGE_STROKE_WIDTH = 1;
export const CANVAS_ATOM_CHARGE_LENGTH = 5;
export const SIDE_MENU_SMALL_ATOM_CHARGE_FONT_SIZE = 10;
export const SIDE_MENU_STANDARD_CHARGE_FONT_SIZE = 12;

/* ------CONSTANTS FOR CANVAS MOLECULES (POSITIONING, OSCILLATION, AMPLITUDES)------ */
/* ------(1) Y OFFSETS------ */
// distance between vertical atoms is created in order for the bonds between atoms to show
// (otherwise the two circles would be stacked on top of each other)
const CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS = 5;

const CANVAS_WATER_HYDROGEN_Y_OFFSET =
  CANVAS_ATOM_DIMENSIONS[OXYGEN.size] +
  CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS +
  CANVAS_ATOM_DIMENSIONS[HYDROGEN.size];

const CANVAS_OZONE_OXYGEN_Y_OFFSET =
  CANVAS_ATOM_DIMENSIONS[OXYGEN.size] +
  CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS +
  CANVAS_ATOM_DIMENSIONS[OXYGEN.size];

const CANVAS_CARBON_DIOXIDE_OXYGEN_Y_OFFSET =
  CANVAS_ATOM_DIMENSIONS[CARBON.size] +
  CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS +
  CANVAS_ATOM_DIMENSIONS[OXYGEN.size];

const CANVAS_NITROUS_OXIDE_NITROGEN_Y_OFFSET =
  CANVAS_ATOM_DIMENSIONS[NITROGEN.size] +
  CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS +
  CANVAS_ATOM_DIMENSIONS[NITROGEN.size];

const CANVAS_NITROUS_OXIDE_OXYGEN_Y_OFFSET =
  CANVAS_ATOM_DIMENSIONS[NITROGEN.size] +
  CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS +
  CANVAS_ATOM_DIMENSIONS[OXYGEN.size];

const CANVAS_METHANE_RIGHT_HYDROGENS_Y_OFFSET =
  CANVAS_ATOM_DIMENSIONS[CARBON.size] + CANVAS_ATOM_DIMENSIONS[HYDROGEN.size];

const CANVAS_METHANE_LEFT_HYDROGENS_Y_OFFSET =
  CANVAS_ATOM_DIMENSIONS[CARBON.size] +
  0.25 * CANVAS_ATOM_DIMENSIONS[HYDROGEN.size];

const CANVAS_DINITROGEN_Y_OFFSET =
  CANVAS_ATOM_DIMENSIONS[NITROGEN.size] +
  CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS;

const CANVAS_DIOXYGEN_Y_OFFSET =
  CANVAS_ATOM_DIMENSIONS[OXYGEN.size] +
  CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS;

/* ------(2) X OFFSETS------ */
// (A) angle formed by Hydrogen-Oxygen-Hydrogen in Water should be 104°
// we know the y distance between oxygen atom and hydrogen atoms (CANVAS_WATER_Y_OFFSET)
// hence we choose an 'X_OFFSET' that satisfies the provided angle/y distance
// i.e. such that Math.tan(104°/2)=OPPOSITE_SIDE/ADJACENT_SIDE=Y_DISTANCE/X_OFFSET
const CANVAS_WATER_HYDROGEN_X_OFFSET =
  CANVAS_WATER_HYDROGEN_Y_OFFSET / Math.tan((104 / 2) * (Math.PI / 180));

// (B) angle formed by Oxygen-Oxygen-Oxygen in Ozone should be 117°
// we know the y distance between middle oxygen atom and top/bottom oxygen atoms (CANVAS_OZONE_Y_OFFSET)
// hence we choose an 'X_OFFSET' that   satisfies provided angle/y distance
// i.e. such that Math.tan(117°/2)=OPPOSITE_SIDE/ADJACENT_SIDE=Y_DISTANCE/X_OFFSET
const CANVAS_OZONE_OXYGEN_X_OFFSET =
  CANVAS_OZONE_OXYGEN_Y_OFFSET / Math.tan((117 / 2) * (Math.PI / 180));

// (C) angle formed by Hydrogen-Carbon-Hydrogen on the right side in Methane should be 109°
// we know the y distance between middle carbon atom and top/bottom right hydrogen atoms (CANVAS_METHANE_RIGHT_Y_OFFSET)
// hence we choose an 'X_OFFSET' that satisfies provided angle/y distance
// i.e. such that Math.tan(109°/2)=OPPOSITE_SIDE/ADJACENT_SIDE=Y_DISTANCE/X_OFFSET
const CANVAS_METHANE_RIGHT_HYDROGENS_X_OFFSET =
  CANVAS_METHANE_RIGHT_HYDROGENS_Y_OFFSET /
  Math.tan((109 / 2) * (Math.PI / 180));
// left atoms x offset doesn't have to conform to a particular angle (it is drawn for visual effects, to suggest a 3D molecule)
const CANVAS_METHANE_X_OFFSET_FOR_LEFT_HYDROGENS = 35;

/* ------(3) MOLECULE PROPERTIES------ */
// A note on oscillation amplitudes in below objects:
// these contants are used to determine the oscillation amplitude and direction of atoms in each greenhouse gas
// note that the oscillation amplitude of an atom within a molecule is proportional to its charge-to-mass ratio q/m
// hence, these constants are chosen to satisfy the relative charges/weights of the atoms in a molecule

// WATER
// note on oscillation amplitudes for this molecule:
// oxygen atom has charge of 2- and atomic mass of 16; hence q/m = 1/8
// hydrogen atom has charge of 1- and atomic mass of 8; hence q/m = 1
// hence oscillation of hydrogen = 8x oscillation of oxygen
export const CANVAS_WATER = {
  TOP_HYDROGEN: {
    x: {
      offset: -CANVAS_WATER_HYDROGEN_X_OFFSET,
      oscillates: true,
      amplitude: 12,
    },
    y: {
      offset: -CANVAS_WATER_HYDROGEN_Y_OFFSET,
      oscillates: false,
      amplitude: 0,
    },
  },
  OXYGEN: {
    x: { offset: 0, oscillates: true, amplitude: -1.5 },
    y: { offset: 0, oscillates: false, amplitude: 0 },
  },
  BOTTOM_HYDROGEN: {
    x: {
      offset: -CANVAS_WATER_HYDROGEN_X_OFFSET,
      oscillates: true,
      amplitude: 12,
    },
    y: {
      offset: CANVAS_WATER_HYDROGEN_Y_OFFSET,
      oscillates: false,
      amplitude: 0,
    },
  },
};
// CARBON DIOXIDE
// note on oscillation amplitudes for this molecule:
// carbon atom has charge of 2+ and atomic mass of 12; hence q/m = 1/6
// oxygen atom has charge of 1- and atomic mass of 16; hence q/m = 1/16
// hence oscillation of carbon = (1/6)/(1/16) = 16/6 = 2.7x oscillation of oxygen
export const CANVAS_CARBON_DIOXIDE = {
  TOP_OXYGEN: {
    x: { offset: 0, oscillates: true, amplitude: -15 },
    y: {
      offset: -CANVAS_CARBON_DIOXIDE_OXYGEN_Y_OFFSET,
      oscillates: false,
      amplitude: 0,
    },
  },
  CARBON: {
    x: { offset: 0, oscillates: true, amplitude: 40.5 },
    y: { offset: 0, oscillates: false, amplitude: 0 },
  },
  BOTTOM_OXYGEN: {
    x: { offset: 0, oscillates: true, amplitude: -15 },
    y: {
      offset: CANVAS_CARBON_DIOXIDE_OXYGEN_Y_OFFSET,
      oscillates: false,
      amplitude: 0,
    },
  },
};
// OZONE
// note on oscillation amplitudes for this molecule:
// middle oxygen atom has charge of 2-, all atoms have the same mass, hence middle atom oscillates with twice the amplitude of other atoms
export const CANVAS_OZONE = {
  TOP_OXYGEN: {
    x: {
      offset: -CANVAS_OZONE_OXYGEN_X_OFFSET,
      oscillates: true,
      amplitude: -6,
    },
    y: {
      offset: -CANVAS_OZONE_OXYGEN_Y_OFFSET,
      oscillates: false,
      amplitude: 0,
    },
  },
  MIDDLE_OXYGEN: {
    x: {
      offset: 0,
      oscillates: true,
      amplitude: 12,
    },
    y: {
      offset: 0,
      oscillates: false,
      amplitude: 0,
    },
  },
  BOTTOM_OXYGEN: {
    x: {
      offset: -CANVAS_OZONE_OXYGEN_X_OFFSET,
      oscillates: true,
      amplitude: -6,
    },
    y: {
      offset: CANVAS_OZONE_OXYGEN_Y_OFFSET,
      oscillates: false,
      amplitude: 0,
    },
  },
};
// NITROUS OXIDE
// note on oscillation amplitudes for this molecule:
// nitrogen and oxygen have nearly the same mass (14 and 16)
// for simplicity, since the central nitrogen has a charge of 2-, we make it oscillate with twice the amplitude of the other atoms
export const CANVAS_NITROUS_OXIDE = {
  TOP_NITROGEN: {
    x: { offset: 0, oscillates: true, amplitude: -10 },
    y: {
      offset: -CANVAS_NITROUS_OXIDE_NITROGEN_Y_OFFSET,
      oscillates: false,
      amplitude: 0,
    },
  },
  MIDDLE_NITROGEN: {
    x: { offset: 0, oscillates: true, amplitude: 20 },
    y: { offset: 0, oscillates: false, amplitude: 0 },
  },
  BOTTOM_OXYGEN: {
    x: { offset: 0, oscillates: true, amplitude: -10 },
    y: {
      offset: CANVAS_NITROUS_OXIDE_OXYGEN_Y_OFFSET,
      oscillates: false,
      amplitude: 0,
    },
  },
};
// METHANE
// note on oscillation amplitudes for this molecule:
// oscillation amplitudes were chosen to convey 3d nature of the molecule
// this is also the only molecule with atoms that oscillate along the y-axis
export const CANVAS_METHANE = {
  CARBON: {
    x: { offset: 0, oscillates: true, amplitude: -3.33 },
    y: { offset: 0, oscillates: false, amplitude: 0 },
  },
  TOP_LEFT_HYDROGEN: {
    x: {
      offset: -CANVAS_METHANE_X_OFFSET_FOR_LEFT_HYDROGENS,
      oscillates: true,
      amplitude: 5,
    },
    y: {
      offset: -CANVAS_METHANE_LEFT_HYDROGENS_Y_OFFSET,
      oscillates: true,
      amplitude: -5,
    },
  },
  TOP_RIGHT_HYDROGEN: {
    x: {
      offset: CANVAS_METHANE_RIGHT_HYDROGENS_X_OFFSET,
      oscillates: true,
      amplitude: 10,
    },
    y: {
      offset: -CANVAS_METHANE_RIGHT_HYDROGENS_Y_OFFSET,
      oscillates: false,
      amplitude: 0,
    },
  },
  BOTTOM_RIGHT_HYDROGEN: {
    x: {
      offset: CANVAS_METHANE_RIGHT_HYDROGENS_X_OFFSET,
      oscillates: true,
      amplitude: 10,
    },
    y: {
      offset: CANVAS_METHANE_RIGHT_HYDROGENS_Y_OFFSET,
      oscillates: false,
      amplitude: 0,
    },
  },
  BOTTOM_LEFT_HYDROGEN: {
    x: {
      offset: -CANVAS_METHANE_X_OFFSET_FOR_LEFT_HYDROGENS,
      oscillates: true,
      amplitude: 5,
    },
    y: {
      offset: CANVAS_METHANE_LEFT_HYDROGENS_Y_OFFSET,
      oscillates: true,
      amplitude: 5,
    },
  },
};
// DINITROGEN
export const CANVAS_DINITROGEN = {
  TOP_NITROGEN: {
    x: { offset: 0, oscillates: false, amplitude: 0 },
    y: { offset: -CANVAS_DINITROGEN_Y_OFFSET, oscillates: false, amplitude: 0 },
  },
  BOTTOM_NITROGEN: {
    x: { offset: 0, oscillates: false, amplitude: 0 },
    y: { offset: CANVAS_DINITROGEN_Y_OFFSET, oscillates: false, amplitude: 0 },
  },
};
// DIOXYGEN
export const CANVAS_DIOXYGEN = {
  TOP_OXYGEN: {
    x: { offset: 0, oscillates: false, amplitude: 0 },
    y: { offset: -CANVAS_DIOXYGEN_Y_OFFSET, oscillates: false, amplitude: 0 },
  },
  BOTTOM_OXYGEN: {
    x: { offset: 0, oscillates: false, amplitude: 0 },
    y: { offset: CANVAS_DIOXYGEN_Y_OFFSET, oscillates: false, amplitude: 0 },
  },
};

/* ------CONSTANTS FOR CANVAS 'MOLECULE AREAS'------ */
// the 'molecule area' is the circular area in which a molecule is displayed on the canvas
export const CANVAS_NUMBER_OF_MOLECULES = 4;
export const CANVAS_MOLECULE_AREA_DEFAULT_RADIUS = 92.5;
export const CANVAS_MOLECULE_AREA_DEFAULT_DASH = [];
export const CANVAS_BOND_COLOR = 'black';
export const DOUBLE_BOND_X_OFFSET = 3;
export const TRIPLE_BOND_X_OFFSET = 5;
export const CANVAS_MOLECULE_AREA_STROKE = 'darkgrey';
export const CANVAS_MOLECULE_AREA_EMPTY_FILL = 'white';
export const CANVAS_MOLECULE_AREA_ACTIVE_FILL = '#E8E8E8';
export const CANVAS_MOLECULE_AREA_AWAITING_DELETE_FILL = '#F0F0F0';
export const CANVAS_MOLECULE_AREA_STROKE_WIDTH = 1;
export const CANVAS_MOLECULE_AREA_ACTIVE_DASH = [10, 10];
export const CANVAS_MOLECULE_AREA_AWAITING_DELETE_DASH = [10, 10];
// constants for the delete icon in a canvas molecule area (the circle and the X within)
export const CANVAS_MOLECULE_AREA_CLEAR_BUTTON_FILL = 'FireBrick';
export const CANVAS_MOLECULE_AREA_CLEAR_BUTTON_RADIUS = 10;
export const CANVAS_MOLECULE_AREA_CLEAR_BUTTON_LINE_FILL = 'white';
export const CANVAS_MOLECULE_AREA_CLEAR_BUTTON_LINE_STROKE_WIDTH = 2;
export const CANVAS_MOLECULE_AREA_CLEAR_BUTTON_LINE_LENGTH = 4;
// constants for the + icon in an active molecule area
export const ACTIVE_MOLECULE_AREA_PLUS_LENGTH = 10;
export const ACTIVE_MOLECULE_AREA_PLUS_STROKE = 'grey';
export const ACTIVE_MOLECULE_AREA_PLUS_STROKE_WIDTH = 1;
// molecule area states (used to maintain state in redux)
export const CANVAS_MOLECULE_AREA_STATE = {
  EMPTY: 'empty',
  ACTIVE: 'active',
  FULL: 'full',
  AWAITING_DELETE: 'awaiting-delete',
};

/* ------IDS AND TEXT IDENTIFIES------ */
// molecule ids (used to maintain selected molecule in redux state)
export const ARGON_MOLECULE_ID = 'argon';
export const CARBON_DIOXIDE_MOLECULE_ID = 'carbon-dioxide';
export const DINITROGEN_MOLECULE_ID = 'dinitrogen';
export const DIOXYGEN_MOLECULE_ID = 'dioxygen';
export const METHANE_MOLECULE_ID = 'methane';
export const NITROUS_OXIDE_MOLECULE_ID = 'nitrous-oxide';
export const OZONE_MOLECULE_ID = 'ozone';
export const WATER_MOLECULE_ID = 'water';
export const GREENHOUSE_GASES = [
  CARBON_DIOXIDE_MOLECULE_ID,
  OZONE_MOLECULE_ID,
  WATER_MOLECULE_ID,
  NITROUS_OXIDE_MOLECULE_ID,
  METHANE_MOLECULE_ID,
];
// other 'text ids'
export const POSITIVE_CHARGE = 'positive';
export const NEGATIVE_CHARGE = 'negative';
export const SPECTRUMS = {
  INFRARED: 'infrared',
  VISIBLE_LIGHT: 'visible-light',
};
export const FRENCH_LANGUAGE_STRING = 'fr';

/* ------CONSTANTS TO STYLE RADIATION LINES------ */
export const RADIATION_LINE_STROKE_COLOR = 'black';
export const RADIATION_LINE_STROKE_WIDTH = 1.5;
export const RE_EMISSION_LINE_STROKE_COLOR = 'darkgrey';
export const RE_EMISSION_LINE_STROKE_WIDTH = 1.5;

/* ------CONSTANTS FOR GENERATING SINE CURVES (RADIATION LINES)------ */
// Y_INCREMENT_PER_POINT => e.g. generate an x point at y=0, y=π/8, y=π/8 * 2, y=π/8 * 3, ...
export const Y_INCREMENT_PER_POINT = Math.PI / 8;
// Y_SHIFT_PER_INTERVAL => every timer interval, shift the sine curve upwards by this much
export const Y_SHIFT_PER_INTERVAL = Math.PI;
export const RADIATION_LINE_CURVE_AMPLITUDE = 21.5;
export const RE_EMISSION_LINE_CURVE_AMPLITUDE = 15;
export const INFRARED_RADIATION_PERIOD = 1 / 64;
export const VISIBLE_LIGHT_PERIOD = 1 / 32;
// note that the 'natural' period of the sine curve is 2π
// hence, with INFRARED_RADIATION_PERIOD = 1 / 64, curve period = 2π / (1 / 64) = 128π
// (indeed, on the canvas, given a Y_SHIFT_PER_INTERVAL of π, one period will complete after 128 intervals, with a distance of 128π from the bottom of the screen)
export const INFRARED_RADIATION_CURVE_PERIOD =
  (2 * Math.PI) / INFRARED_RADIATION_PERIOD;
// 128π => chosen for aesthetic purposes (1 period from bottom of screen)
export const INITIAL_MOLECULE_CENTER_Y_FROM_BOTTOM_OF_CANVAS = INFRARED_RADIATION_CURVE_PERIOD;
export const INITIAL_INTERVALS_TO_REACH_MOLECULE_CENTER =
  INITIAL_MOLECULE_CENTER_Y_FROM_BOTTOM_OF_CANVAS / Y_SHIFT_PER_INTERVAL;
export const APPLICATION_INTERVAL = 20;
// note here that INFRARED_RADIATION_CURVE_''INTERVAL'' is used in its mathematical sense of distance (and not its JavaScript sense of time)
// every sine curve period has 4 intervals (0 to peak, peak to 0, 0 to -peak, -peak to 0)
export const INFRARED_RADIATION_CURVE_INTERVAL =
  (2 * Math.PI) / INFRARED_RADIATION_PERIOD / 4;
export const INTERVALS_TO_COMPLETE_INFRARED_RADIATION_PERIOD =
  (2 * Math.PI) / INFRARED_RADIATION_PERIOD / Y_SHIFT_PER_INTERVAL;
// and here the two senses of 'intervals' are combined...
export const INTERVALS_TO_COMPLETE_INFRARED_RADIATION_INTERVAL =
  INFRARED_RADIATION_CURVE_INTERVAL / Y_SHIFT_PER_INTERVAL;

/* ------CONSTANTS FOR ELECTRIC FIELD VECTORS (ARROWS)------ */
export const ARROW_POINTER_LENGTH = 2;
export const ARROW_POINTER_WIDTH = 4;
export const ARROW_STROKE_WIDTH = 6;
// large arrow meets the sine curve at its peak (amplitude), plus a little more taken off (- 2) because it looks nicer
export const LARGE_ARROW_LENGTH =
  RADIATION_LINE_CURVE_AMPLITUDE - ARROW_POINTER_WIDTH - 2;
export const SMALL_ARROW_LENGTH =
  RADIATION_LINE_CURVE_AMPLITUDE - ARROW_POINTER_WIDTH - 10;
export const SMALL_ARROW_Y_PLACEMENT_RELATIVE_TO_LARGE_ARROW = 20 * Math.PI;
export const ARROW_STROKE_COLOR = 'darkblue';
