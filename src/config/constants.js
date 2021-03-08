export const DRAWER_WIDTH = 430;
export const DEFAULT_THEME_DIRECTION = 'rtl';
export const FORM_CONTROL_MIN_WIDTH = 120;
export const LOGO_SIZE = '48px';
export const DEFAULT_HEADER_VISIBLE = true;
export const MAXIMUM_Z_INDEX = 999999;

export const BACKGROUND_COLOR = 'lightgrey';

// constants for styling atoms
// note that the application has separate atom components in the side menu and canvas
// some of these constants (like atom color) are used across both
// where a constant is used in a particular part of the application, its name indicates this
export const CARBON_ATOM_COLOR = 'black';
export const CARBON_ATOM_SIZE = 'medium';
export const OXYGEN_ATOM_COLOR = 'indianred';
export const OXYGEN_ATOM_SIZE = 'medium';
export const HYDROGEN_ATOM_COLOR = 'gray';
export const HYDROGEN_ATOM_SIZE = 'small';
export const NITROGEN_ATOM_COLOR = 'cornflowerblue';
export const NITROGEN_ATOM_SIZE = 'medium';
export const ARGON_ATOM_COLOR = 'goldenrod';
export const ARGON_ATOM_SIZE = 'large';
export const SIDE_MENU_ATOM_DIMENSIONS = { small: 20, medium: 35, large: 50 };
export const POSITIVE_CHARGE = 'positive';
export const NEGATIVE_CHARGE = 'negative';
// note use of full-width-plus and em-dash (required for easier centering within side menu divs)
export const SIDE_MENU_POSITIVE_CHARGE_SYMBOL = '＋';
export const SIDE_MENU_NEGATIVE_CHARGE_SYMBOL = '—';
export const SIDE_MENU_SMALL_ATOM_CHARGE_FONT_SIZE = 10;
export const SIDE_MENU_STANDARD_CHARGE_FONT_SIZE = 12;
export const DARK_ATOM_CHARGE_COLOR = 'white';
export const STANDARD_CHARGE_COLOR = 'black';
// constants used to style canvas + and - charges
export const CANVAS_ATOM_CHARGE_STROKE_WIDTH = 1.5;
export const CANVAS_ATOM_CHARGE_LENGTH = 5;

// molecule ids (used to maintain selected molecule in redux state)
export const ARGON_MOLECULE_ID = 'argon';
export const CARBON_DIOXIDE_MOLECULE_ID = 'carbon-dioxide';
export const DINITROGEN_MOLECULE_ID = 'dinitrogen';
export const DIOXYGEN_MOLECULE_ID = 'dioxygen';
export const METHANE_MOLECULE_ID = 'methane';
export const NITROUS_OXIDE_MOLECULE_ID = 'nitrous-oxide';
export const OZONE_MOLECULE_ID = 'ozone';
export const WATER_MOLECULE_ID = 'water';

// maximum number of molecules to display in a single row in the side menu
export const MAX_MOLECULES_IN_SIDE_MENU_ROW = 3;

// constants for styling canvas atoms
// note that in the canvas these sizes refer to radii (whereas in the side menu they are div heights/widths)
export const CANVAS_ATOM_DIMENSIONS = { small: 15, medium: 25, large: 40 };

// canvas 'molecule area' constants
// the 'molecule area' is the circular area in which a molecule is displayed on the canvas
export const CANVAS_NUMBER_OF_MOLECULES = 4;
export const CANVAS_MOLECULE_AREA_DEFAULT_RADIUS = 90;
export const CANVAS_MOLECULE_AREA_DEFAULT_DASH = [];
export const CANVAS_MOLECULE_AREA_Y_POSITION = 150;
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

// constants used to adjust select atoms within a molecule to achieve required styling
export const CANVAS_OZONE_ANGLED_ATOMS_X_ADJUSTMENT_FACTOR = 20;
export const CANVAS_OZONE_ANGLED_ATOMS_Y_ADJUSTMENT_FACTOR = 5;
export const CANVAS_WATER_ANGLED_ATOMS_X_ADJUSTMENT_FACTOR = 20;
export const CANVAS_WATER_ANGLED_ATOMS_Y_ADJUSTMENT_FACTOR = 6;
export const CANVAS_METHANE_FIRST_ATOM_X_ADJUSTMENT_FACTOR = 25;
export const CANVAS_METHANE_FIRST_ATOM_Y_ADJUSTMENT_FACTOR = 12;
export const CANVAS_METHANE_SECOND_ATOM_X_ADJUSTMENT_FACTOR = 25;
export const CANVAS_METHANE_SECOND_ATOM_Y_ADJUSTMENT_FACTOR = 20;
export const CANVAS_METHANE_THIRD_ATOM_X_ADJUSTMENT_FACTOR = 25;
export const CANVAS_METHANE_THIRD_ATOM_Y_ADJUSTMENT_FACTOR = 20;
export const CANVAS_METHANE_FOURTH_ATOM_X_ADJUSTMENT_FACTOR = 25;
export const CANVAS_METHANE_FOURTH_ATOM_Y_ADJUSTMENT_FACTOR = 12;

// molecule area states (used to maintain state in redux)
export const CANVAS_MOLECULE_AREA_EMPTY = 'empty';
export const CANVAS_MOLECULE_AREA_ACTIVE = 'active';
export const CANVAS_MOLECULE_AREA_FULL = 'full';
export const CANVAS_MOLECULE_AREA_AWAITING_DELETE = 'awaiting-delete';

export const INFRARED_SPECTRUM = 'infrared';
export const VISIBLE_LIGHT_SPECTRUM = 'visible-light';

// constants to style radiation lines
export const EMITTED_LINE_STROKE_COLOR = 'black';
export const EMITTED_LINE_STROKE_WIDTH = 1.5;
export const EMITTED_LINE_TENSION = 0.3;
export const EMITTED_LINE_INTERVAL_TIME = 50;
export const EMITTED_LINE_AMPLITUDE = 15;
export const EMITTED_LINE_STEP = 10;
// this choice of constant comes from app #2 (thermal radiation)
// it is used so that the infrared wavelength in this app is the same as that in app #2
export const INFRARED_OSCILLATION_CONSTANT_INCREMENT = 289 / 1500;
export const VISIBLE_LIGHT_OSCILLATION_CONSTANT_INCREMENT = 1400 / 1500;

// constants for initializing line state
export const INITIAL_LINE_POINTS = [0, 0];
export const INITIAL_OSCILLATION_CONSTANT = 0;
