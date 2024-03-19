import {
  INITIAL_INTERVALS_TO_REACH_MOLECULE_CENTER,
  INITIAL_MOLECULE_CENTER_Y_FROM_BOTTOM_OF_CANVAS,
} from '../constants/constants';
import {
  TOGGLE_SETTINGS,
  TOGGLE_LOADING_SCREEN,
  TOGGLE_SIDE_MENU,
  SET_STAGE_DIMENSIONS,
  SET_MOLECULE_CENTER_Y_FROM_BOTTOM_OF_CANVAS,
  SET_INTERVALS_TO_REACH_MOLECULE_CENTER,
  SET_OSCILLATION_DIRECTION,
} from '../types';

const INITIAL_STATE = {
  settings: {
    open: false,
  },
  lab: { stageDimensions: { width: 0, height: 0 } },
  showLoader: true,
  showSideMenu: true,
  moleculeCenterYFromBottomOfCanvas: INITIAL_MOLECULE_CENTER_Y_FROM_BOTTOM_OF_CANVAS,
  intervalsToReachMoleculeCenter: INITIAL_INTERVALS_TO_REACH_MOLECULE_CENTER,
  oscillationDirection: 1,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case TOGGLE_SETTINGS:
      return {
        ...state,
        settings: {
          ...state.settings,
          open: payload,
        },
      };
    case TOGGLE_LOADING_SCREEN:
      return {
        ...state,
        showLoader: payload,
      };
    case TOGGLE_SIDE_MENU:
      return {
        ...state,
        showSideMenu: payload,
      };
    case SET_STAGE_DIMENSIONS: {
      return { ...state, lab: { ...state.lab, stageDimensions: payload } };
    }
    case SET_MOLECULE_CENTER_Y_FROM_BOTTOM_OF_CANVAS: {
      return { ...state, moleculeCenterYFromBottomOfCanvas: payload };
    }
    case SET_INTERVALS_TO_REACH_MOLECULE_CENTER: {
      return { ...state, intervalsToReachMoleculeCenter: payload };
    }
    case SET_OSCILLATION_DIRECTION: {
      return { ...state, oscillationDirection: payload };
    }
    default:
      return state;
  }
};
