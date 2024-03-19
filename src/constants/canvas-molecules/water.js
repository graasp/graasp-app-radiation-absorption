import {
  ATOMS_VERTICAL_DISTANCE,
  REFERENCE_POINT,
  OXYGEN_SIZE,
  HYDROGEN_SIZE,
} from './common';

const Y_OFFSET = OXYGEN_SIZE + ATOMS_VERTICAL_DISTANCE + HYDROGEN_SIZE;
const ANGLE = 104;
const X_OFFSET = -Y_OFFSET / Math.tan((ANGLE / 2) * (Math.PI / 180));
const HYDROGEN_AMPLITUDE = REFERENCE_POINT * (4 / 5);
const AMPLITUDE_FACTOR = -(1 / 8);
const OXYGEN_AMPLITUDE = HYDROGEN_AMPLITUDE * AMPLITUDE_FACTOR;

// eslint-disable-next-line import/prefer-default-export
export const CANVAS_WATER = {
  TOP_HYDROGEN: {
    x: { offset: X_OFFSET, oscillates: true, amplitude: HYDROGEN_AMPLITUDE },
    y: { offset: -Y_OFFSET, oscillates: false, amplitude: 0 },
  },
  OXYGEN: {
    x: { offset: 0, oscillates: true, amplitude: OXYGEN_AMPLITUDE },
    y: { offset: 0, oscillates: false, amplitude: 0 },
  },
  BOTTOM_HYDROGEN: {
    x: { offset: X_OFFSET, oscillates: true, amplitude: HYDROGEN_AMPLITUDE },
    y: { offset: Y_OFFSET, oscillates: false, amplitude: 0 },
  },
};
