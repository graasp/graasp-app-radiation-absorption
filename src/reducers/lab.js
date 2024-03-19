import {
  SELECT_MOLECULE,
  DISPLAY_MOLECULE,
  TOGGLE_SPECTRUM,
  SET_IS_PAUSED,
  SET_MOLECULE_AREA,
  CLEAR_MOLECULE_AREA,
  RESET_ALL_MOLECULE_AREAS,
  TOGGLE_SHOW_ELECTRIC_FIELD_VECTOR,
  TOGGLE_SHOW_CHARGES,
  TOGGLE_SHOW_RE_EMISSION,
  TOGGLE_HIGHLIGHT_ALL,
  RESET_ALL_SETTINGS,
  INCREMENT_INTERVAL_COUNT,
  DECREMENT_INTERVAL_COUNT,
  RESET_INTERVAL_COUNT,
  BEGIN_RE_EMISSION_INTERVAL_COUNT,
} from '../types';
import { MOLECULE_AREA_STATE } from '../constants/constants';
import { SPECTRUMS } from '../constants/strings';

const { EMPTY, FULL } = MOLECULE_AREA_STATE;

const INITIAL_STATE = {
  isPaused: true,
  intervalCount: 0,
  selectedMolecule: null,
  spectrum: SPECTRUMS.INFRARED,
  showElectricFieldVectors: false,
  showCharges: false,
  showReEmission: false,
  highlightAllMolecules: false,
  beginReEmissionIntervalCount: 0,
  moleculesOnCanvas: [
    { molecule: '', moleculeAreaStatus: EMPTY },
    { molecule: '', moleculeAreaStatus: EMPTY },
    { molecule: '', moleculeAreaStatus: EMPTY },
    { molecule: '', moleculeAreaStatus: EMPTY },
  ],
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SET_IS_PAUSED:
      return { ...state, isPaused: payload };
    case SELECT_MOLECULE:
      return { ...state, selectedMolecule: payload };
    case TOGGLE_SPECTRUM:
      return { ...state, spectrum: payload };
    case TOGGLE_SHOW_ELECTRIC_FIELD_VECTOR:
      return { ...state, showElectricFieldVectors: payload };
    case TOGGLE_SHOW_CHARGES:
      return { ...state, showCharges: payload };
    case TOGGLE_SHOW_RE_EMISSION:
      return { ...state, showReEmission: payload };
    case TOGGLE_HIGHLIGHT_ALL:
      return { ...state, highlightAllMolecules: payload };
    case SET_MOLECULE_AREA:
      return {
        ...state,
        moleculesOnCanvas: [
          ...state.moleculesOnCanvas.slice(0, payload.index),
          {
            ...state.moleculesOnCanvas[payload.index],
            moleculeAreaStatus: payload.status,
          },
          ...state.moleculesOnCanvas.slice(payload.index + 1),
        ],
      };
    case DISPLAY_MOLECULE:
      return {
        ...state,
        moleculesOnCanvas: [
          ...state.moleculesOnCanvas.slice(0, payload.index),
          {
            ...state.moleculesOnCanvas[payload.index],
            molecule: payload.moleculeId,
            moleculeAreaStatus: FULL,
          },
          ...state.moleculesOnCanvas.slice(payload.index + 1),
        ],
      };
    case CLEAR_MOLECULE_AREA:
      return {
        ...state,
        moleculesOnCanvas: [
          ...state.moleculesOnCanvas.slice(0, payload.index),
          {
            ...state.moleculesOnCanvas[payload.index],
            molecule: '',
            moleculeAreaStatus: EMPTY,
          },
          ...state.moleculesOnCanvas.slice(payload.index + 1),
        ],
      };

    case RESET_ALL_MOLECULE_AREAS:
      return {
        ...state,
        moleculesOnCanvas: [
          { molecule: '', moleculeAreaStatus: EMPTY },
          { molecule: '', moleculeAreaStatus: EMPTY },
          { molecule: '', moleculeAreaStatus: EMPTY },
          { molecule: '', moleculeAreaStatus: EMPTY },
        ],
      };
    case INCREMENT_INTERVAL_COUNT:
      return { ...state, intervalCount: state.intervalCount + 1 };
    case DECREMENT_INTERVAL_COUNT:
      return { ...state, intervalCount: state.intervalCount - 1 };
    case RESET_INTERVAL_COUNT:
      return { ...state, intervalCount: 0 };
    case BEGIN_RE_EMISSION_INTERVAL_COUNT: {
      return { ...state, beginReEmissionIntervalCount: payload };
    }
    case RESET_ALL_SETTINGS:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};
