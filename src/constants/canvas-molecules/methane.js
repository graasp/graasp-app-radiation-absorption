import { CARBON_SIZE, HYDROGEN_SIZE, REFERENCE_POINT } from './common';

const RIGHT_H_Y_OFFSET = CARBON_SIZE + HYDROGEN_SIZE;
const LEFT_H_Y_OFFSET = CARBON_SIZE + HYDROGEN_SIZE / 4;
const ANGLE = 109;
const RIGHT_H_X_OFFSET =
  RIGHT_H_Y_OFFSET / Math.tan((ANGLE / 2) * (Math.PI / 180));
const LEFT_H_X_OFFSET = REFERENCE_POINT * (7 / 3);
const CARBON_AMPLITUDE = -REFERENCE_POINT / 5;
const H_AMPLITUDE_1 = REFERENCE_POINT / 3;
const H_AMPLITUDE_2 = REFERENCE_POINT / 3;

// eslint-disable-next-line import/prefer-default-export
export const CANVAS_METHANE = {
  CARBON: {
    x: { offset: 0, oscillates: true, amplitude: CARBON_AMPLITUDE },
    y: { offset: 0, oscillates: false, amplitude: 0 },
  },
  TOP_LEFT_HYDROGEN: {
    x: { offset: -LEFT_H_X_OFFSET, oscillates: true, amplitude: H_AMPLITUDE_1 },
    y: {
      offset: -LEFT_H_Y_OFFSET,
      oscillates: true,
      amplitude: -H_AMPLITUDE_1,
    },
  },
  TOP_RIGHT_HYDROGEN: {
    x: { offset: RIGHT_H_X_OFFSET, oscillates: true, amplitude: H_AMPLITUDE_2 },
    y: { offset: -RIGHT_H_Y_OFFSET, oscillates: false, amplitude: 0 },
  },
  BOTTOM_RIGHT_HYDROGEN: {
    x: { offset: RIGHT_H_X_OFFSET, oscillates: true, amplitude: H_AMPLITUDE_2 },
    y: { offset: RIGHT_H_Y_OFFSET, oscillates: false, amplitude: 0 },
  },
  BOTTOM_LEFT_HYDROGEN: {
    x: { offset: -LEFT_H_X_OFFSET, oscillates: true, amplitude: H_AMPLITUDE_1 },
    y: { offset: LEFT_H_Y_OFFSET, oscillates: true, amplitude: H_AMPLITUDE_1 },
  },
};
