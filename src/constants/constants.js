import { REFERENCE_POINT } from './canvas-molecules/common';

/* ------DEFAULT APP CONSTANTS------ */
export const DRAWER_WIDTH = 430;
export const DEFAULT_THEME_DIRECTION = 'rtl';
export const FORM_CONTROL_MIN_WIDTH = 120;
export const LOGO_SIZE = '48px';
export const DEFAULT_HEADER_VISIBLE = false;
export const MAXIMUM_Z_INDEX = 999999;
export const BACKGROUND_COLOR = 'lightgrey';

export const SIDE_MENU_ATOM_DIMENSIONS = { small: 15, medium: 27.5, large: 40 };

export const SIDE_MENU_POSITIVE_CHARGE_SYMBOL = '＋';
export const SIDE_MENU_NEGATIVE_CHARGE_SYMBOL = '—';
export const CANVAS_ATOM_CHARGE_STROKE_WIDTH = 1;
export const CANVAS_ATOM_CHARGE_LENGTH = REFERENCE_POINT / 3;
export const SIDE_MENU_SMALL_ATOM_CHARGE_FONT_SIZE = 10;
export const SIDE_MENU_STANDARD_CHARGE_FONT_SIZE = 12;

export const CANVAS_NUMBER_OF_MOLECULES = 4;
export const MOLECULE_AREA_DEFAULT_RADIUS = 0.11;
export const MOLECULE_AREA_DEFAULT_DASH = [];
export const CANVAS_BOND_COLOR = 'black';
export const DOUBLE_BOND_X_OFFSET = 3;
export const TRIPLE_BOND_X_OFFSET = 5;
export const MOLECULE_AREA_STROKE = 'darkgrey';
export const MOLECULE_AREA_EMPTY_FILL = 'white';
export const MOLECULE_AREA_ACTIVE_FILL = '#E8E8E8';
export const MOLECULE_AREA_AWAITING_DELETE_FILL = '#F0F0F0';
export const MOLECULE_AREA_STROKE_WIDTH = 1;
export const MOLECULE_AREA_ACTIVE_DASH = [10, 10];
export const MOLECULE_AREA_AWAITING_DELETE_DASH = [10, 10];
export const CLEAR_BUTTON_FILL = 'FireBrick';
export const CLEAR_BUTTON_RADIUS = 0.0135;
export const CLEAR_BUTTON_LINE_FILL = 'white';
export const CLEAR_BUTTON_LINE_STROKE_WIDTH = 2;
export const CLEAR_BUTTON_LINE_LENGTH = 4;
export const ACTIVE_MOLECULE_AREA_PLUS_LENGTH = 0.0135;
export const ACTIVE_MOLECULE_AREA_PLUS_STROKE = 'grey';
export const ACTIVE_MOLECULE_AREA_PLUS_STROKE_WIDTH = 1;
export const MOLECULE_AREA_STATE = {
  EMPTY: 'empty',
  ACTIVE: 'active',
  FULL: 'full',
  AWAITING_DELETE: 'awaiting-delete',
};

export const INFRARED_RADIATION_COLOR = 'red';
export const VISIBLE_LIGHT_COLOR = 'yellow';
export const RADIATION_LINE_STROKE_WIDTH = 1.5;
export const RE_EMISSION_LINE_STROKE_COLOR = '#ff6666';
export const RE_EMISSION_LINE_STROKE_WIDTH = 1.5;
export const RE_EMISSION_LINE_DASH = [10, 5];

// Y_INCREMENT_PER_POINT => e.g. generate an x point at y=0, y=π/8, y=π/8 * 2, y=π/8 * 3, ...
export const Y_INCREMENT_PER_POINT = Math.PI / 8;
// Y_SHIFT_PER_INTERVAL => every timer interval, shift the sine curve upwards by this much
export const Y_SHIFT_PER_INTERVAL = Math.PI;
export const RADIATION_LINE_CURVE_AMPLITUDE = REFERENCE_POINT * 1.5;
export const RE_EMISSION_LINE_CURVE_AMPLITUDE = REFERENCE_POINT * 1.25;
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

export const ARROW_POINTER_LENGTH = REFERENCE_POINT * 0.15;
export const ARROW_POINTER_WIDTH = REFERENCE_POINT * 0.3;
export const ARROW_STROKE_WIDTH = REFERENCE_POINT * 0.45;
export const LARGE_ARROW_LENGTH = REFERENCE_POINT;
export const SMALL_ARROW_LENGTH = REFERENCE_POINT / 1.5;
export const SMALL_ARROW_Y_RELATIVE_TO_LARGE_ARROW = 20 * Math.PI;
export const ARROW_STROKE_COLOR = 'darkblue';
