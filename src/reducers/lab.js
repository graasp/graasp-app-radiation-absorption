import { SELECT_MOLECULE } from '../types';

const INITIAL_STATE = {
  selectedMolecule: '',
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SELECT_MOLECULE:
      return {
        ...state,
        selectedMolecule: payload,
      };
    default:
      return state;
  }
};
