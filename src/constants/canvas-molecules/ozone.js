import {
  REFERENCE_POINT,
  ATOMS_VERTICAL_DISTANCE,
  OXYGEN_SIZE,
} from './common';

const Y_OFFSET = 2 * OXYGEN_SIZE + ATOMS_VERTICAL_DISTANCE;
const ANGLE = 117;
const X_OFFSET = Y_OFFSET / Math.tan((ANGLE / 2) * (Math.PI / 180));
const TOP_BOTTOM_AMPLITUDE = -REFERENCE_POINT * (2 / 5);
const AMPLITUDE_FACTOR = -2;
const MIDDLE_ATOM_AMPLITUDE = TOP_BOTTOM_AMPLITUDE * AMPLITUDE_FACTOR;

// eslint-disable-next-line import/prefer-default-export
export const CANVAS_OZONE = {
  TOP_OXYGEN: {
    x: { offset: -X_OFFSET, oscillates: true, amplitude: TOP_BOTTOM_AMPLITUDE },
    y: { offset: -Y_OFFSET, oscillates: false, amplitude: 0 },
  },
  MIDDLE_OXYGEN: {
    x: { offset: 0, oscillates: true, amplitude: MIDDLE_ATOM_AMPLITUDE },
    y: { offset: 0, oscillates: false, amplitude: 0 },
  },
  BOTTOM_OXYGEN: {
    x: { offset: -X_OFFSET, oscillates: true, amplitude: TOP_BOTTOM_AMPLITUDE },
    y: { offset: Y_OFFSET, oscillates: false, amplitude: 0 },
  },
};
