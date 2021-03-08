import {
  SELECT_MOLECULE_SIDE_MENU,
  TOGGLE_SPECTRUM,
  DISPLAY_MOLECULE,
  SET_IS_PAUSED,
  UPDATE_LINE_POINTS,
  RESET_ALL_LINES,
  CHANGE_MOLECULE_AREA_STATUS,
  CLEAR_MOLECULE_AREA,
  RESET_ALL_MOLECULE_AREAS,
  TOGGLE_SHOW_ATOMS_CHARGES,
} from '../types';

const selectMoleculeInSideMenu = (molecule) => (dispatch) =>
  dispatch({
    type: SELECT_MOLECULE_SIDE_MENU,
    payload: molecule,
  });

const toggleSpectrum = (payload) => (dispatch) =>
  dispatch({
    type: TOGGLE_SPECTRUM,
    payload,
  });

const displayMolecule = (payload) => (dispatch) =>
  dispatch({
    type: DISPLAY_MOLECULE,
    payload,
  });

const changeMoleculeAreaStatus = (payload) => (dispatch) =>
  dispatch({
    type: CHANGE_MOLECULE_AREA_STATUS,
    payload,
  });

const clearMoleculeArea = (payload) => (dispatch) =>
  dispatch({
    type: CLEAR_MOLECULE_AREA,
    payload,
  });

const setIsPaused = (payload) => (dispatch) =>
  dispatch({
    type: SET_IS_PAUSED,
    payload,
  });

const updateLinePoints = (payload) => (dispatch) =>
  dispatch({
    type: UPDATE_LINE_POINTS,
    payload,
  });

const resetAllLines = (payload) => (dispatch) =>
  dispatch({
    type: RESET_ALL_LINES,
    payload,
  });

const resetAllMoleculeAreas = () => (dispatch) =>
  dispatch({ type: RESET_ALL_MOLECULE_AREAS });

const toggleShowAtomsCharges = (payload) => (dispatch) =>
  dispatch({ type: TOGGLE_SHOW_ATOMS_CHARGES, payload });

export {
  selectMoleculeInSideMenu,
  toggleSpectrum,
  displayMolecule,
  changeMoleculeAreaStatus,
  clearMoleculeArea,
  setIsPaused,
  updateLinePoints,
  resetAllLines,
  resetAllMoleculeAreas,
  toggleShowAtomsCharges,
};
