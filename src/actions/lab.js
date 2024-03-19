import {
  SELECT_MOLECULE,
  TOGGLE_SPECTRUM,
  DISPLAY_MOLECULE,
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
  RESET_INTERVAL_COUNT,
  DECREMENT_INTERVAL_COUNT,
  BEGIN_RE_EMISSION_INTERVAL_COUNT,
} from '../types';

const selectMolecule = (molecule) => (dispatch) =>
  dispatch({ type: SELECT_MOLECULE, payload: molecule });

const toggleSpectrum = (payload) => (dispatch) =>
  dispatch({ type: TOGGLE_SPECTRUM, payload });

const displayMolecule = (payload) => (dispatch) =>
  dispatch({ type: DISPLAY_MOLECULE, payload });

const setMoleculeArea = (payload) => (dispatch) =>
  dispatch({ type: SET_MOLECULE_AREA, payload });

const clearMoleculeArea = (payload) => (dispatch) =>
  dispatch({ type: CLEAR_MOLECULE_AREA, payload });

const setIsPaused = (payload) => (dispatch) =>
  dispatch({ type: SET_IS_PAUSED, payload });

const resetAllMoleculeAreas = () => (dispatch) =>
  dispatch({ type: RESET_ALL_MOLECULE_AREAS });

const toggleShowElectricFieldVectors = (payload) => (dispatch) =>
  dispatch({ type: TOGGLE_SHOW_ELECTRIC_FIELD_VECTOR, payload });

const toggleShowCharges = (payload) => (dispatch) =>
  dispatch({ type: TOGGLE_SHOW_CHARGES, payload });

const toggleShowReEmission = (payload) => (dispatch) =>
  dispatch({ type: TOGGLE_SHOW_RE_EMISSION, payload });

const toggleHighlightAll = (payload) => (dispatch) =>
  dispatch({ type: TOGGLE_HIGHLIGHT_ALL, payload });

const incrementIntervalCount = () => (dispatch) =>
  dispatch({ type: INCREMENT_INTERVAL_COUNT });

const decrementIntervalCount = () => (dispatch) =>
  dispatch({ type: DECREMENT_INTERVAL_COUNT });

const resetIntervalCount = () => (dispatch) =>
  dispatch({ type: RESET_INTERVAL_COUNT });

const resetAllSettings = () => (dispatch) =>
  dispatch({ type: RESET_ALL_SETTINGS });

const setBeginReEmissionIntervalCount = (payload) => (dispatch) =>
  dispatch({ type: BEGIN_RE_EMISSION_INTERVAL_COUNT, payload });

export {
  selectMolecule,
  toggleSpectrum,
  displayMolecule,
  setMoleculeArea,
  clearMoleculeArea,
  setIsPaused,
  resetAllMoleculeAreas,
  toggleShowElectricFieldVectors,
  toggleShowCharges,
  toggleShowReEmission,
  toggleHighlightAll,
  incrementIntervalCount,
  decrementIntervalCount,
  resetIntervalCount,
  resetAllSettings,
  setBeginReEmissionIntervalCount,
};
