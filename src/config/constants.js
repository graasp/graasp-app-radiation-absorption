/* ------DEFAULT APP CONSTANTS------ */
export const DRAWER_WIDTH = 430;
export const DEFAULT_THEME_DIRECTION = 'rtl';
export const FORM_CONTROL_MIN_WIDTH = 120;
export const LOGO_SIZE = '48px';
export const DEFAULT_HEADER_VISIBLE = true;
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
export const CANVAS_METHANE_FIRST_ATOM_X_ADJUSTMENT_FACTOR = 25;
export const CANVAS_METHANE_FIRST_ATOM_Y_ADJUSTMENT_FACTOR = 12;
export const CANVAS_METHANE_SECOND_ATOM_X_ADJUSTMENT_FACTOR = 25;
export const CANVAS_METHANE_SECOND_ATOM_Y_ADJUSTMENT_FACTOR = 20;
export const CANVAS_METHANE_THIRD_ATOM_X_ADJUSTMENT_FACTOR = 25;
export const CANVAS_METHANE_THIRD_ATOM_Y_ADJUSTMENT_FACTOR = 20;
export const CANVAS_METHANE_FOURTH_ATOM_X_ADJUSTMENT_FACTOR = 25;
export const CANVAS_METHANE_FOURTH_ATOM_Y_ADJUSTMENT_FACTOR = 12;

/* ------CONSTANTS FOR CANVAS 'MOLECULE AREAS'------ */
// the 'molecule area' is the circular area in which a molecule is displayed on the canvas
export const CANVAS_NUMBER_OF_MOLECULES = 4;
export const CANVAS_MOLECULE_AREA_DEFAULT_RADIUS = 90;
export const CANVAS_MOLECULE_AREA_DEFAULT_DASH = [];
export const CANVAS_MOLECULE_AREA_Y_POSITION = 150;
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
// other 'text ids'
export const POSITIVE_CHARGE = 'positive';
export const NEGATIVE_CHARGE = 'negative';
export const SPECTRUMS = {
  INFRARED: 'infrared',
  VISIBLE_LIGHT: 'visible-light',
};

/* ------CONSTANTS USED TO DETERMINE WHEN EMITTED LINES GET 'ABSORBED'------ */
// note that *only these greenhouse gases* absorb *infrared* radiation
// the idea is that emitted lines are sliced once a line's y-point passes a molecule's lowpoint defined here
// e.g. for CO2 the lowest point is: where the middle (carbon) atom is centered, + one radius of that carbon atom, + one radius of the bottom oxygen atom
export const CARBON_DIOXIDE_MOLECULE_LOWEST_Y =
  CANVAS_MOLECULE_AREA_Y_POSITION +
  CANVAS_ATOM_DIMENSIONS[CARBON.size] +
  CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS +
  1.9 * CANVAS_ATOM_DIMENSIONS[OXYGEN.size];
export const METHANE_MOLECULE_LOWEST_Y = CANVAS_MOLECULE_AREA_Y_POSITION;
export const NITROUS_OXIDE_MOLECULE_LOWEST_Y =
  CANVAS_MOLECULE_AREA_Y_POSITION +
  CANVAS_ATOM_DIMENSIONS[NITROGEN.size] +
  CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS +
  1.9 * CANVAS_ATOM_DIMENSIONS[OXYGEN.size];
export const OZONE_MOLECULE_LOWEST_Y =
  CANVAS_MOLECULE_AREA_Y_POSITION +
  CANVAS_ATOM_DIMENSIONS[OXYGEN.size] +
  CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS +
  1.9 * CANVAS_ATOM_DIMENSIONS[OXYGEN.size];
export const WATER_MOLECULE_LOWEST_Y =
  CANVAS_MOLECULE_AREA_Y_POSITION +
  CANVAS_ATOM_DIMENSIONS[OXYGEN.size] +
  CANVAS_MOLECULES_DISTANCE_BETWEEN_VERTICAL_ATOMS +
  1.8 * CANVAS_ATOM_DIMENSIONS[HYDROGEN.size];

/* ------CONSTANTS TO STYLE RADIATION LINES------ */
export const EMITTED_LINE_STROKE_COLOR = 'black';
export const EMITTED_LINE_STROKE_WIDTH = 1.5;
export const EMITTED_LINE_TENSION = 0.3;
export const EMITTED_LINE_INTERVAL_TIME = 50;
export const EMITTED_LINE_AMPLITUDE = 20;
export const EMITTED_LINE_STEP = 10;
// this choice of constant comes from app #2 (thermal radiation)
// it is used so that the infrared wavelength in this app is the same as that in app #2
export const INFRARED_OSCILLATION_CONSTANT_INCREMENT = 289 / 1500;
export const VISIBLE_LIGHT_OSCILLATION_CONSTANT_INCREMENT = 1400 / 1500;
// constants for initializing line state
export const INITIAL_LINE_POINTS = [0, 0];
export const INITIAL_OSCILLATION_CONSTANT = 0;

/* ------CONSTANTS FOR MOLECULE OSCILLATION------ */
export const CANVAS_OZONE_OSCILLATION_AMPLITUDE = 20;
export const CANVAS_CARBON_DIOXIDE_OSCILLATION_AMPLITUDE = 30;
export const CANVAS_WATER_OSCILLATION_AMPLITUDE = 20;
export const CANVAS_NITROUS_OXIDE_OSCILLATION_AMPLITUDE = 30;
