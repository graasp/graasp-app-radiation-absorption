import {
  REFERENCE_POINT,
  ATOMS_VERTICAL_DISTANCE,
  NITROGEN_SIZE,
  OXYGEN_SIZE,
} from './common';

const NITROGEN_Y_OFFSET = 2 * NITROGEN_SIZE + ATOMS_VERTICAL_DISTANCE;
const OXYGEN_Y_OFFSET = NITROGEN_SIZE + ATOMS_VERTICAL_DISTANCE + OXYGEN_SIZE;
const TOP_BOTTOM_AMPLITUDE = -REFERENCE_POINT * (2 / 3);
const AMPLITUDE_FACTOR = -2;
const MIDDLE_ATOM_AMPLITUDE = TOP_BOTTOM_AMPLITUDE * AMPLITUDE_FACTOR;

export const CANVAS_NITROUS_OXIDE = {
  TOP_NITROGEN: {
    x: { offset: 0, oscillates: true, amplitude: TOP_BOTTOM_AMPLITUDE },
    y: { offset: -NITROGEN_Y_OFFSET, oscillates: false, amplitude: 0 },
  },
  MIDDLE_NITROGEN: {
    x: { offset: 0, oscillates: true, amplitude: MIDDLE_ATOM_AMPLITUDE },
    y: { offset: 0, oscillates: false, amplitude: 0 },
  },
  BOTTOM_OXYGEN: {
    x: { offset: 0, oscillates: true, amplitude: TOP_BOTTOM_AMPLITUDE },
    y: { offset: OXYGEN_Y_OFFSET, oscillates: false, amplitude: 0 },
  },
};
