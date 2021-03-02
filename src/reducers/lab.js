import {
  SELECT_MOLECULE_SIDE_MENU,
  ACTIVATE_MOLECULE_AREA,
  DEACTIVATE_MOLECULE_AREA,
  PREPARE_MOLECULE_AREA_FOR_DELETION,
  DISPLAY_MOLECULE,
  REMOVE_MOLECULE_AREA_DELETION,
  CLEAR_MOLECULE_AREA,
} from '../types';
import {
  CANVAS_MOLECULE_AREA_ACTIVE,
  CANVAS_MOLECULE_AREA_AWAITING_DELETE,
  CANVAS_MOLECULE_AREA_EMPTY,
  CANVAS_MOLECULE_AREA_FULL,
} from '../config/constants';

const INITIAL_STATE = {
  selectedMoleculeInSideMenu: '',
  moleculesOnCanvas: [
    { molecule: '', moleculeAreaStatus: CANVAS_MOLECULE_AREA_EMPTY },
    { molecule: '', moleculeAreaStatus: CANVAS_MOLECULE_AREA_EMPTY },
    { molecule: '', moleculeAreaStatus: CANVAS_MOLECULE_AREA_EMPTY },
    { molecule: '', moleculeAreaStatus: CANVAS_MOLECULE_AREA_EMPTY },
  ],
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SELECT_MOLECULE_SIDE_MENU:
      return {
        ...state,
        selectedMoleculeInSideMenu: payload,
      };
    case ACTIVATE_MOLECULE_AREA:
      return {
        ...state,
        moleculesOnCanvas: [
          ...state.moleculesOnCanvas.slice(0, payload.areaId),
          {
            ...state.moleculesOnCanvas[payload.areaId],
            moleculeAreaStatus: CANVAS_MOLECULE_AREA_ACTIVE,
          },
          ...state.moleculesOnCanvas.slice(payload.areaId + 1),
        ],
      };
    case DEACTIVATE_MOLECULE_AREA:
      return {
        ...state,
        moleculesOnCanvas: [
          ...state.moleculesOnCanvas.slice(0, payload.areaId),
          {
            ...state.moleculesOnCanvas[payload.areaId],
            moleculeAreaStatus: CANVAS_MOLECULE_AREA_EMPTY,
          },
          ...state.moleculesOnCanvas.slice(payload.areaId + 1),
        ],
      };
    case PREPARE_MOLECULE_AREA_FOR_DELETION:
      return {
        ...state,
        moleculesOnCanvas: [
          ...state.moleculesOnCanvas.slice(0, payload.areaId),
          {
            ...state.moleculesOnCanvas[payload.areaId],
            moleculeAreaStatus: CANVAS_MOLECULE_AREA_AWAITING_DELETE,
          },
          ...state.moleculesOnCanvas.slice(payload.areaId + 1),
        ],
      };
    case REMOVE_MOLECULE_AREA_DELETION:
      return {
        ...state,
        moleculesOnCanvas: [
          ...state.moleculesOnCanvas.slice(0, payload.areaId),
          {
            ...state.moleculesOnCanvas[payload.areaId],
            moleculeAreaStatus: CANVAS_MOLECULE_AREA_FULL,
          },
          ...state.moleculesOnCanvas.slice(payload.areaId + 1),
        ],
      };
    case DISPLAY_MOLECULE:
      return {
        ...state,
        moleculesOnCanvas: [
          ...state.moleculesOnCanvas.slice(0, payload.areaId),
          {
            ...state.moleculesOnCanvas[payload.areaId],
            molecule: payload.moleculeId,
            moleculeAreaStatus: CANVAS_MOLECULE_AREA_FULL,
          },
          ...state.moleculesOnCanvas.slice(payload.areaId + 1),
        ],
      };
    case CLEAR_MOLECULE_AREA:
      return {
        ...state,
        moleculesOnCanvas: [
          ...state.moleculesOnCanvas.slice(0, payload.areaId),
          {
            ...state.moleculesOnCanvas[payload.areaId],
            molecule: payload.moleculeId,
            moleculeAreaStatus: CANVAS_MOLECULE_AREA_EMPTY,
          },
          ...state.moleculesOnCanvas.slice(payload.areaId + 1),
        ],
      };
    default:
      return state;
  }
};
