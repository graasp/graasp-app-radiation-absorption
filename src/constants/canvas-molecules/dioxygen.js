import { ATOMS_VERTICAL_DISTANCE, OXYGEN_SIZE } from './common';

const Y_OFFSET = OXYGEN_SIZE + ATOMS_VERTICAL_DISTANCE;

// eslint-disable-next-line import/prefer-default-export
export const CANVAS_DIOXYGEN = {
  TOP_OXYGEN: {
    x: { offset: 0, oscillates: false, amplitude: 0 },
    y: { offset: -Y_OFFSET, oscillates: false, amplitude: 0 },
  },
  BOTTOM_OXYGEN: {
    x: { offset: 0, oscillates: false, amplitude: 0 },
    y: { offset: Y_OFFSET, oscillates: false, amplitude: 0 },
  },
};
