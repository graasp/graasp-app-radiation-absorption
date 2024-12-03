import {
  MOLECULE_AREA_ACTIVE_DASH,
  MOLECULE_AREA_ACTIVE_FILL,
  MOLECULE_AREA_AWAITING_DELETE_DASH,
  MOLECULE_AREA_AWAITING_DELETE_FILL,
  MOLECULE_AREA_DEFAULT_DASH,
  MOLECULE_AREA_DEFAULT_RADIUS,
  MOLECULE_AREA_EMPTY_FILL,
  MOLECULE_AREA_STATE,
} from '../constants/constants';

export const styleMoleculeArea = (moleculeStatus) => {
  const { ACTIVE, EMPTY, AWAITING_DELETE, FULL } = MOLECULE_AREA_STATE;

  let radius = MOLECULE_AREA_DEFAULT_RADIUS;
  let fill = '';
  let dash = MOLECULE_AREA_DEFAULT_DASH;

  switch (moleculeStatus) {
    case EMPTY:
      fill = MOLECULE_AREA_EMPTY_FILL;
      break;
    case ACTIVE:
      fill = MOLECULE_AREA_ACTIVE_FILL;
      dash = MOLECULE_AREA_ACTIVE_DASH;
      break;
    case AWAITING_DELETE:
      fill = MOLECULE_AREA_AWAITING_DELETE_FILL;
      dash = MOLECULE_AREA_AWAITING_DELETE_DASH;
      break;
    case FULL:
      radius = 0;
      break;
    default:
      fill = MOLECULE_AREA_EMPTY_FILL;
      break;
  }

  return { radius, fill, dash };
};
