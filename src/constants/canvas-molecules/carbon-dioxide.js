import {
  ATOMS_VERTICAL_DISTANCE,
  CARBON_SIZE,
  OXYGEN_SIZE,
  REFERENCE_POINT,
} from './common';

const OXYGEN_Y_OFFSET = CARBON_SIZE + ATOMS_VERTICAL_DISTANCE + OXYGEN_SIZE;
const OXYGEN_AMPLITUDE = -REFERENCE_POINT;
const AMPLITUDE_FACTOR = -(16 / 6);
const CARBON_AMPLITUDE = OXYGEN_AMPLITUDE * AMPLITUDE_FACTOR;

// eslint-disable-next-line import/prefer-default-export
export const CANVAS_CARBON_DIOXIDE = {
  TOP_OXYGEN: {
    x: { offset: 0, oscillates: true, amplitude: OXYGEN_AMPLITUDE },
    y: { offset: -OXYGEN_Y_OFFSET, oscillates: false, amplitude: 0 },
  },
  CARBON: {
    x: { offset: 0, oscillates: true, amplitude: CARBON_AMPLITUDE },
    y: { offset: 0, oscillates: false, amplitude: 0 },
  },
  BOTTOM_OXYGEN: {
    x: { offset: 0, oscillates: true, amplitude: OXYGEN_AMPLITUDE },
    y: { offset: OXYGEN_Y_OFFSET, oscillates: false, amplitude: 0 },
  },
};
