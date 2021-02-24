import { SELECT_MOLECULE } from '../types';

const selectMolecule = (molecule) => (dispatch) =>
  dispatch({
    type: SELECT_MOLECULE,
    payload: molecule,
  });

// eslint-disable-next-line import/prefer-default-export
export { selectMolecule };
