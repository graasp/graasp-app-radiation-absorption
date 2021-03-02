export const DRAWER_WIDTH = 430;
export const DEFAULT_THEME_DIRECTION = 'rtl';
export const FORM_CONTROL_MIN_WIDTH = 120;
export const LOGO_SIZE = '48px';
export const DEFAULT_HEADER_VISIBLE = true;
export const MAXIMUM_Z_INDEX = 999999;

export const BACKGROUND_COLOR = 'lightgrey';

// constants for styling atoms
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
export const ATOM_DIMENSIONS = { small: 20, medium: 35, large: 50 };

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
export const MAX_MOLECULES_IN_SIDEMENU_ROW = 3;

// constants for styling canvas atoms
// note that in the canvas these sizes refer to radii (whereas in the side menu they are div heights/widths)
export const CANVAS_ATOM_DIMENSIONS = { small: 15, medium: 25, large: 40 };

// canvas molecule area constants
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

// canvas molecule area clear button constants (the circle and the X within it)
export const CANVAS_MOLECULE_AREA_CLEAR_BUTTON_FILL = 'FireBrick';
export const CANVAS_MOLECULE_AREA_CLEAR_BUTTON_RADIUS = 10;
export const CANVAS_MOLECULE_AREA_CLEAR_BUTTON_LINE_FILL = 'white';
export const CANVAS_MOLECULE_AREA_CLEAR_BUTTON_LINE_STROKE_WIDTH = 2;
export const CANVAS_MOLECULE_AREA_CLEAR_BUTTON_LINE_LENGTH = 4;

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

export const CANVAS_MOLECULE_AREA_EMPTY = 'empty';
export const CANVAS_MOLECULE_AREA_ACTIVE = 'active';
export const CANVAS_MOLECULE_AREA_FULL = 'full';
export const CANVAS_MOLECULE_AREA_AWAITING_DELETE = 'awaiting-delete';

export const INFRARED_SPECTRUM = 'infrared';
export const VISIBLE_LIGHT_SPECTRUM = 'visible-light';
