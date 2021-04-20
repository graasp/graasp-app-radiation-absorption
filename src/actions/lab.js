import {
  SELECT_MOLECULE_SIDE_MENU,
  TOGGLE_SPECTRUM,
  DISPLAY_MOLECULE,
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
  RESET_INTERVAL_COUNT,
  DECREMENT_INTERVAL_COUNT,
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

const resetAllMoleculeAreas = () => (dispatch) =>
  dispatch({ type: RESET_ALL_MOLECULE_AREAS });

const toggleShowElectricFieldVectors = (payload) => (dispatch) =>
  dispatch({ type: TOGGLE_SHOW_ELECTRIC_FIELD_VECTOR, payload });

const toggleShowAtomsCharges = (payload) => (dispatch) =>
  dispatch({ type: TOGGLE_SHOW_ATOMS_CHARGES, payload });

const toggleShowReEmission = (payload) => (dispatch) =>
  dispatch({ type: TOGGLE_SHOW_RE_EMISSION, payload });

const toggleHighlightAllSideMenuMolecules = (payload) => (dispatch) =>
  dispatch({ type: HIGHLIGHT_ALL_SIDE_MENU_MOLECULES, payload });

const incrementIntervalCount = () => (dispatch) =>
  dispatch({ type: INCREMENT_INTERVAL_COUNT });

const decrementIntervalCount = () => (dispatch) =>
  dispatch({ type: DECREMENT_INTERVAL_COUNT });

const resetIntervalCount = () => (dispatch) =>
  dispatch({ type: RESET_INTERVAL_COUNT });

const resetAllSettings = () => (dispatch) =>
  dispatch({ type: RESET_ALL_SETTINGS });

export {
  selectMoleculeInSideMenu,
  toggleSpectrum,
  displayMolecule,
  setMoleculeAreaStatus,
  clearMoleculeArea,
  setIsPaused,
  resetAllMoleculeAreas,
  toggleShowElectricFieldVectors,
  toggleShowAtomsCharges,
  toggleShowReEmission,
  toggleHighlightAllSideMenuMolecules,
  incrementIntervalCount,
  decrementIntervalCount,
  resetIntervalCount,
  resetAllSettings,
};
