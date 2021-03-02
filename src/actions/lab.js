import {
  SELECT_MOLECULE_SIDE_MENU,
  DISPLAY_MOLECULE,
  ACTIVATE_MOLECULE_AREA,
  DEACTIVATE_MOLECULE_AREA,
  PREPARE_MOLECULE_AREA_FOR_DELETION,
  REMOVE_MOLECULE_AREA_DELETION,
  CLEAR_MOLECULE_AREA,
} from '../types';

const selectMoleculeInSideMenu = (molecule) => (dispatch) =>
  dispatch({
    type: SELECT_MOLECULE_SIDE_MENU,
    payload: molecule,
  });

const activateMoleculeArea = (payload) => (dispatch) =>
  dispatch({ type: ACTIVATE_MOLECULE_AREA, payload });

const deactivateMoleculeArea = (payload) => (dispatch) =>
  dispatch({ type: DEACTIVATE_MOLECULE_AREA, payload });

const prepareMoleculeAreaForDeletion = (payload) => (dispatch) =>
  dispatch({ type: PREPARE_MOLECULE_AREA_FOR_DELETION, payload });

const removeMoleculeAreaDeletion = (payload) => (dispatch) =>
  dispatch({ type: REMOVE_MOLECULE_AREA_DELETION, payload });

const displayMolecule = (payload) => (dispatch) =>
  dispatch({
    type: DISPLAY_MOLECULE,
    payload,
  });

const clearMoleculeArea = (payload) => (dispatch) =>
  dispatch({
    type: CLEAR_MOLECULE_AREA,
    payload,
  });

export {
  selectMoleculeInSideMenu,
  activateMoleculeArea,
  deactivateMoleculeArea,
  prepareMoleculeAreaForDeletion,
  removeMoleculeAreaDeletion,
  displayMolecule,
  clearMoleculeArea,
};
