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
  atomColor: 'gray',
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
export const CANVAS_ATOM_DIMENSIONS = { small: 15, medium: 25, large: 40 };
// note use of full-width-plus and em-dash (required for easier centering within side menu divs)
// also note that in the canvas the + and - are not text nodes but Konva lines (so don't have similar constants here)
export const SIDE_MENU_POSITIVE_CHARGE_SYMBOL = '＋';
export const SIDE_MENU_NEGATIVE_CHARGE_SYMBOL = '—';
// constants used to style canvas + and - charges
export const CANVAS_ATOM_CHARGE_STROKE_WIDTH = 1;
export const CANVAS_ATOM_CHARGE_LENGTH = 5;
export const SIDE_MENU_SMALL_ATOM_CHARGE_FONT_SIZE = 10;
export const SIDE_MENU_STANDARD_CHARGE_FONT_SIZE = 12;
// constants used to adjust select atoms within a molecule to achieve required styling
export const CANVAS_OZONE_ANGLED_ATOMS_X_ADJUSTMENT_FACTOR = 20;
export const CANVAS_WATER_ANGLED_ATOMS_X_ADJUSTMENT_FACTOR = 20;
export const CANVAS_METHANE_TOP_LEFT_HYDROGEN_ATOM_X_ADJUSTMENT_FACTOR = 30;
export const CANVAS_METHANE_TOP_RIGHT_HYDROGEN_ATOM_X_ADJUSTMENT_FACTOR = 35;
export const CANVAS_METHANE_BOTTOM_RIGHT_HYDROGEN_ATOM_X_ADJUSTMENT_FACTOR = 35;
export const CANVAS_METHANE_BOTTOM_LEFT_HYDROGEN_ATOM_X_ADJUSTMENT_FACTOR = 30;

/* ------CONSTANTS FOR CANVAS 'MOLECULE AREAS'------ */
// the 'molecule area' is the circular area in which a molecule is displayed on the canvas
export const CANVAS_NUMBER_OF_MOLECULES = 4;
export const CANVAS_MOLECULE_AREA_DEFAULT_RADIUS = 90;
export const CANVAS_MOLECULE_AREA_DEFAULT_DASH = [];
// distance between vertical atoms is created in order for the bonds between atoms to show
export const CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS = 5;
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

/* ------CONSTANTS TO STYLE RADIATION LINES------ */
export const RADIATION_LINE_STROKE_COLOR = 'black';
export const RADIATION_LINE_STROKE_WIDTH = 1.5;
export const RE_EMISSION_LINE_STROKE_COLOR = 'darkgrey';
export const RE_EMISSION_LINE_STROKE_WIDTH = 1.5;

/* ------CONSTANTS FOR MOLECULE OSCILLATION------ */
// these contants are used to determine the oscillation amplitude and direction of atoms in each greenhouse gas
// note that the oscillation amplitude of an atom within a molecule is proportional to its charge-to-mass ratio q/m
// hence, these constants are chosen to satisfy the relative charges/weights of the atoms in a molecule

// middle oxygen atom has charge of 2-, all atoms have the same mass, hence middle atom oscillates with half the amplitude of other atoms
export const CANVAS_OZONE_OSCILLATION_AMPLITUDES = {
  TOP_OXYGEN_ATOM: -30,
  MIDDLE_OXYGEN_ATOM: 15,
  BOTTOM_OXYGEN_ATOM: -30,
};
// carbon atom has charge of 2+ and atomic mass of 12; hence q/m = 1/6
// oxygen atom has charge of 1- and atomic mass of 16; hence q/m = 1/16
// hence oscillation of carbon = (1/6)/(1/16) = 16/6 = 2.7x oscillation of oxygen
export const CANVAS_CARBON_DIOXIDE_OSCILLATION_AMPLITUDES = {
  TOP_OXYGEN_ATOM: -15,
  CARBON_ATOM: 40.5,
  BOTTOM_OXYGEN_ATOM: -15,
};
// oxygen atom has charge of 2- and atomic mass of 16; hence q/m = 1/8
// hydrogen atom has charge of 1- and atomic mass of 8; hence q/m = 1
// hence oscillation of hydrogen = 8x oscillation of oxygen
// for visual purposes, the oscillation of the oxygen atom is doubled (otherwise it will be too small to be visible)
export const CANVAS_WATER_OSCILLATION_AMPLITUDES = {
  TOP_HYDROGEN_ATOM: -20,
  OXYGEN_ATOM: 5,
  BOTTOM_HYDROGEN_ATOM: -20,
};
// nitrogen and oxygen have nearly the same mass (14 and 16)
// for simplicitly, since the central nitrogen has a charge of 2-, we make it oscillate with half the amplitude of the other atoms
export const CANVAS_NITROUS_OXIDE_OSCILLATION_AMPLITUDES = {
  TOP_NITROGEN_ATOM: -30,
  MIDDLE_NITROGEN_ATOM: 15,
  BOTTOM_OXYGEN_ATOM: -30,
};

/* ------CONSTANTS FOR GENERATING SINE CURVES (RADIATION LINES)------ */
// Y_INCREMENT_PER_POINT => e.g. generate an x point at y=0, y=π/8, y=π/8 * 2, y=π/8 * 3, ...
export const Y_INCREMENT_PER_POINT = Math.PI / 8;
// Y_SHIFT_PER_INTERVAL => every timer interval, shift the sine curve upwards by this much
export const Y_SHIFT_PER_INTERVAL = Math.PI;
export const RADIATION_LINE_CURVE_AMPLITUDE = 30;
export const RE_EMISSION_LINE_CURVE_AMPLITUDE = 20;
// note that the 'natural' period of the sine curve is 2π
// hence, with INFRARED_RADIATION_PERIOD = 1 / 64, curve period = 2π / (1 / 64) = 128π
// (indeed, on the canvas, given a Y_SHIFT_PER_INTERVAL of π, one period will complete after 128 intervals, with a distance of 128π from the bottom of the screen)
export const INFRARED_RADIATION_PERIOD = 1 / 64;
export const VISIBLE_LIGHT_PERIOD = 1 / 32;
// 128π => chosen for aesthetic purposes (1 period from bottom of screen)
export const MOLECULE_CENTER_Y_FROM_BOTTOM_OF_CANVAS = 128 * Math.PI;
export const INTERVALS_TO_REACH_MOLECULE_CENTER =
  MOLECULE_CENTER_Y_FROM_BOTTOM_OF_CANVAS / Y_SHIFT_PER_INTERVAL;
export const APPLICATION_INTERVAL = 20;
// note here that INFRARED_RADIATION_CURVE_''INTERVAL'' is used in its mathematical sense of distance (and not its JavaScript sense of time)
// every sine curve period has 4 intervals (0 to peak, peak to 0, 0 to -peak, -peak to 0)
export const INFRARED_RADIATION_CURVE_INTERVAL =
  (2 * Math.PI) / INFRARED_RADIATION_PERIOD / 4;
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
export const SMALL_ARROW_Y_PLACEMENT_RELATIVE_TO_LARGE_ARROW = 40;
export const ARROW_STROKE_COLOR = 'darkblue';
