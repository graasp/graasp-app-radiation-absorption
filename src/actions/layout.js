import {
  TOGGLE_SETTINGS,
  TOGGLE_LOADING_SCREEN,
  TOGGLE_SIDE_MENU,
  SET_STAGE_DIMENSIONS,
  SET_MOLECULE_CENTER_Y_FROM_BOTTOM_OF_CANVAS,
  SET_INTERVALS_TO_REACH_MOLECULE_CENTER,
  SET_OSCILLATION_DIRECTION,
} from '../types';

const toggleSettings = (showSettings) => (dispatch) =>
  dispatch({
    type: TOGGLE_SETTINGS,
    payload: showSettings,
  });

const toggleLoadingScreen = (showLoadingScreen) => (dispatch) =>
  dispatch({
    type: TOGGLE_LOADING_SCREEN,
    payload: showLoadingScreen,
  });

const toggleSideMenu = (showSideMenu) => (dispatch) =>
  dispatch({
    type: TOGGLE_SIDE_MENU,
    payload: showSideMenu,
  });

const setStageDimensions = (payload) => (dispatch) => {
  dispatch({
    type: SET_STAGE_DIMENSIONS,
    payload,
  });
};

const setMoleculeCenterYFromBottomOfCanvas = (payload) => (dispatch) => {
  dispatch({ type: SET_MOLECULE_CENTER_Y_FROM_BOTTOM_OF_CANVAS, payload });
};

const setIntervalsToReachMoleculeCenter = (payload) => (dispatch) => {
  dispatch({ type: SET_INTERVALS_TO_REACH_MOLECULE_CENTER, payload });
};

const setOscillationDirection = (payload) => (dispatch) => {
  dispatch({ type: SET_OSCILLATION_DIRECTION, payload });
};

export {
  toggleSettings,
  toggleLoadingScreen,
  toggleSideMenu,
  setStageDimensions,
  setMoleculeCenterYFromBottomOfCanvas,
  setIntervalsToReachMoleculeCenter,
  setOscillationDirection,
};
