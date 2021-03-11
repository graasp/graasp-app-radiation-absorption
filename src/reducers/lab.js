import {
  SELECT_MOLECULE_SIDE_MENU,
  DISPLAY_MOLECULE,
  TOGGLE_SPECTRUM,
  SET_IS_PAUSED,
  UPDATE_LINE_POINTS,
  RESET_ALL_LINES,
  SET_MOLECULE_AREA_STATUS,
  CLEAR_MOLECULE_AREA,
  RESET_ALL_MOLECULE_AREAS,
  TOGGLE_SHOW_ATOMS_CHARGES,
} from '../types';
import {
  CANVAS_MOLECULE_AREA_STATE,
  SPECTRUMS,
  INITIAL_LINE_POINTS,
  INITIAL_OSCILLATION_CONSTANT,
} from '../config/constants';

const INITIAL_STATE = {
  isPaused: true,
  selectedMoleculeInSideMenu: null,
  spectrum: SPECTRUMS.INFRARED,
  showAtomsCharges: false,
  moleculesOnCanvas: [
    { molecule: '', moleculeAreaStatus: CANVAS_MOLECULE_AREA_STATE.EMPTY },
    { molecule: '', moleculeAreaStatus: CANVAS_MOLECULE_AREA_STATE.EMPTY },
    { molecule: '', moleculeAreaStatus: CANVAS_MOLECULE_AREA_STATE.EMPTY },
    { molecule: '', moleculeAreaStatus: CANVAS_MOLECULE_AREA_STATE.EMPTY },
  ],
  emittedLines: [
    {
      points: INITIAL_LINE_POINTS,
      oscillationConstant: INITIAL_OSCILLATION_CONSTANT,
    },
    {
      points: INITIAL_LINE_POINTS,
      oscillationConstant: INITIAL_OSCILLATION_CONSTANT,
    },
    {
      points: INITIAL_LINE_POINTS,
      oscillationConstant: INITIAL_OSCILLATION_CONSTANT,
    },
    {
      points: INITIAL_LINE_POINTS,
      oscillationConstant: INITIAL_OSCILLATION_CONSTANT,
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
    case TOGGLE_SHOW_ATOMS_CHARGES:
      return {
        ...state,
        showAtomsCharges: payload,
      };
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
    case UPDATE_LINE_POINTS:
      return {
        ...state,
        emittedLines: [
          ...state.emittedLines.slice(0, payload.lineIndex),
          {
            points: payload.points,
            oscillationConstant: payload.oscillationConstant,
          },
          ...state.emittedLines.slice(payload.lineIndex + 1),
        ],
      };
    case RESET_ALL_LINES:
      return {
        ...state,
        emittedLines: [
          {
            points: INITIAL_LINE_POINTS,
            oscillationConstant: INITIAL_OSCILLATION_CONSTANT,
          },
          {
            points: INITIAL_LINE_POINTS,
            oscillationConstant: INITIAL_OSCILLATION_CONSTANT,
          },
          {
            points: INITIAL_LINE_POINTS,
            oscillationConstant: INITIAL_OSCILLATION_CONSTANT,
          },
          {
            points: INITIAL_LINE_POINTS,
            oscillationConstant: INITIAL_OSCILLATION_CONSTANT,
          },
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
    default:
      return state;
  }
};
