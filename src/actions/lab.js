import {
  SELECT_MOLECULE_SIDE_MENU,
  TOGGLE_SPECTRUM,
  DISPLAY_MOLECULE,
  SET_IS_PAUSED,
  UPDATE_LINE_POINTS,
  RESET_ALL_LINES,
  SET_MOLECULE_AREA_STATUS,
  CLEAR_MOLECULE_AREA,
  RESET_ALL_MOLECULE_AREAS,
  TOGGLE_SHOW_ELECTRIC_FIELD_VECTOR,
  TOGGLE_SHOW_ATOMS_CHARGES,
  TOGGLE_SHOW_RE_EMISSION,
  TOGGLE_MOLECULE_OSCILLATION,
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

const setMoleculeAreaStatus = (payload) => (dispatch) =>
  dispatch({
    type: SET_MOLECULE_AREA_STATUS,
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

const toggleShowElectricFieldVector = (payload) => (dispatch) =>
  dispatch({ type: TOGGLE_SHOW_ELECTRIC_FIELD_VECTOR, payload });

const toggleShowAtomsCharges = (payload) => (dispatch) =>
  dispatch({ type: TOGGLE_SHOW_ATOMS_CHARGES, payload });

const toggleShowReEmission = (payload) => (dispatch) =>
  dispatch({ type: TOGGLE_SHOW_RE_EMISSION, payload });

const toggleMoleculeOscillation = (payload) => (dispatch) =>
  dispatch({ type: TOGGLE_MOLECULE_OSCILLATION, payload });

export {
  selectMoleculeInSideMenu,
  toggleSpectrum,
  displayMolecule,
  setMoleculeAreaStatus,
  clearMoleculeArea,
  setIsPaused,
  updateLinePoints,
  resetAllLines,
  resetAllMoleculeAreas,
  toggleShowElectricFieldVector,
  toggleShowAtomsCharges,
  toggleShowReEmission,
  toggleMoleculeOscillation,
};
