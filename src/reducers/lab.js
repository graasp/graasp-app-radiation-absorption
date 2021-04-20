import {
  SELECT_MOLECULE_SIDE_MENU,
  DISPLAY_MOLECULE,
  TOGGLE_SPECTRUM,
  SET_IS_PAUSED,
  SET_MOLECULE_AREA_STATUS,
  CLEAR_MOLECULE_AREA,
  RESET_ALL_MOLECULE_AREAS,
  TOGGLE_SHOW_ELECTRIC_FIELD_VECTOR,
  TOGGLE_SHOW_ATOMS_CHARGES,
  TOGGLE_SHOW_RE_EMISSION,
  HIGHLIGHT_ALL_SIDE_MENU_MOLECULES,
  RESET_ALL_SETTINGS,
  INCREMENT_INTERVAL_COUNT,
  DECREMENT_INTERVAL_COUNT,
  RESET_INTERVAL_COUNT,
} from '../types';
import { CANVAS_MOLECULE_AREA_STATE, SPECTRUMS } from '../config/constants';

const INITIAL_STATE = {
  isPaused: true,
  intervalCount: 0,
  selectedMoleculeInSideMenu: null,
  spectrum: SPECTRUMS.INFRARED,
  showElectricFieldVectors: false,
  showAtomsCharges: false,
  showReEmission: false,
  highlightAllSideMenuMolecules: false,
  moleculesOnCanvas: [
    {
      molecule: '',
      moleculeAreaStatus: CANVAS_MOLECULE_AREA_STATE.EMPTY,
    },
    {
      molecule: '',
      moleculeAreaStatus: CANVAS_MOLECULE_AREA_STATE.EMPTY,
    },
    {
      molecule: '',
      moleculeAreaStatus: CANVAS_MOLECULE_AREA_STATE.EMPTY,
    },
    {
      molecule: '',
      moleculeAreaStatus: CANVAS_MOLECULE_AREA_STATE.EMPTY,
    },
  ],
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SET_IS_PAUSED:
      return { ...state, isPaused: payload };
    case SELECT_MOLECULE_SIDE_MENU:
      return {
        ...state,
        selectedMoleculeInSideMenu: payload,
      };
    case TOGGLE_SPECTRUM:
      return {
        ...state,
        spectrum: payload,
      };
    case TOGGLE_SHOW_ELECTRIC_FIELD_VECTOR:
      return {
        ...state,
        showElectricFieldVectors: payload,
      };
    case TOGGLE_SHOW_ATOMS_CHARGES:
      return {
        ...state,
        showAtomsCharges: payload,
      };
    case TOGGLE_SHOW_RE_EMISSION:
      return {
        ...state,
        showReEmission: payload,
      };
    case HIGHLIGHT_ALL_SIDE_MENU_MOLECULES:
      return { ...state, highlightAllSideMenuMolecules: payload };
    case SET_MOLECULE_AREA_STATUS:
      return {
        ...state,
        moleculesOnCanvas: [
          ...state.moleculesOnCanvas.slice(0, payload.areaIndex),
          {
            ...state.moleculesOnCanvas[payload.areaIndex],
            moleculeAreaStatus: payload.newStatus,
          },
          ...state.moleculesOnCanvas.slice(payload.areaIndex + 1),
        ],
      };
    case DISPLAY_MOLECULE:
      return {
        ...state,
        moleculesOnCanvas: [
          ...state.moleculesOnCanvas.slice(0, payload.areaIndex),
          {
            ...state.moleculesOnCanvas[payload.areaIndex],
            molecule: payload.moleculeId,
            moleculeAreaStatus: CANVAS_MOLECULE_AREA_STATE.FULL,
          },
          ...state.moleculesOnCanvas.slice(payload.areaIndex + 1),
        ],
      };
    case CLEAR_MOLECULE_AREA:
      return {
        ...state,
        moleculesOnCanvas: [
          ...state.moleculesOnCanvas.slice(0, payload.areaIndex),
          {
            ...state.moleculesOnCanvas[payload.areaIndex],
            molecule: '',
            moleculeAreaStatus: CANVAS_MOLECULE_AREA_STATE.EMPTY,
          },
          ...state.moleculesOnCanvas.slice(payload.areaIndex + 1),
        ],
      };

    case RESET_ALL_MOLECULE_AREAS:
      return {
        ...state,
        moleculesOnCanvas: [
          {
            molecule: '',
            moleculeAreaStatus: CANVAS_MOLECULE_AREA_STATE.EMPTY,
          },
          {
            molecule: '',
            moleculeAreaStatus: CANVAS_MOLECULE_AREA_STATE.EMPTY,
          },
          {
            molecule: '',
            moleculeAreaStatus: CANVAS_MOLECULE_AREA_STATE.EMPTY,
          },
          {
            molecule: '',
            moleculeAreaStatus: CANVAS_MOLECULE_AREA_STATE.EMPTY,
          },
        ],
      };
    case INCREMENT_INTERVAL_COUNT:
      return { ...state, intervalCount: state.intervalCount + 1 };
    case DECREMENT_INTERVAL_COUNT:
      return { ...state, intervalCount: state.intervalCount - 1 };
    case RESET_INTERVAL_COUNT:
      return {
        ...state,
        intervalCount: 0,
      };
    case RESET_ALL_SETTINGS:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};
