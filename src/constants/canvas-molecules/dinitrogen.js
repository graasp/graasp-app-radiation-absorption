import { ATOMS_VERTICAL_DISTANCE, NITROGEN_SIZE } from './common';

const Y_OFFSET = NITROGEN_SIZE + ATOMS_VERTICAL_DISTANCE;

export const CANVAS_DINITROGEN = {
  TOP_NITROGEN: {
    x: { offset: 0, oscillates: false, amplitude: 0 },
    y: { offset: -Y_OFFSET, oscillates: false, amplitude: 0 },
  },
  BOTTOM_NITROGEN: {
    x: { offset: 0, oscillates: false, amplitude: 0 },
    y: { offset: Y_OFFSET, oscillates: false, amplitude: 0 },
  },
};
