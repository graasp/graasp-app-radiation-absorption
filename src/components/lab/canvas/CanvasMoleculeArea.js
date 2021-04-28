import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Circle, Group } from 'react-konva';
import {
  CANVAS_MOLECULE_AREA_DEFAULT_RADIUS,
  CANVAS_MOLECULE_AREA_DEFAULT_DASH,
  CANVAS_MOLECULE_AREA_STROKE,
  CANVAS_MOLECULE_AREA_EMPTY_FILL,
  CANVAS_MOLECULE_AREA_STROKE_WIDTH,
  CANVAS_MOLECULE_AREA_ACTIVE_DASH,
  CANVAS_MOLECULE_AREA_STATE,
  CANVAS_MOLECULE_AREA_ACTIVE_FILL,
  CANVAS_MOLECULE_AREA_AWAITING_DELETE_FILL,
  CANVAS_MOLECULE_AREA_AWAITING_DELETE_DASH,
} from '../../../config/constants';
import {
  selectMoleculeInSideMenu,
  displayMolecule,
  setMoleculeAreaStatus,
  setIsPaused,
  toggleHighlightAllSideMenuMolecules,
  resetIntervalCount,
  toggleShowElectricFieldVectors,
  toggleShowReEmission,
} from '../../../actions';
import CanvasMoleculeAreaClearButton from './CanvasMoleculeAreaClearButton';
import ActiveMoleculeAreaPlus from './ActiveMoleculeAreaPlus';

const CanvasMoleculeArea = ({
  x,
  y,
  moleculeStatus,
  containerIndex,
  children,
}) => {
  const selectedMoleculeInSideMenu = useSelector(
    ({ lab }) => lab.selectedMoleculeInSideMenu,
  );
  const moleculesOnCanvas = useSelector(({ lab }) => lab.moleculesOnCanvas);
  const intervalCount = useSelector(({ lab }) => lab.intervalCount);
  const dispatch = useDispatch();

  const onMouseEnter = (event) => {
    const container = event.target.getStage().container();
    container.style.cursor = 'pointer';
  };

  const onMouseLeave = (event) => {
    const container = event.target.getStage().container();
    container.style.cursor = 'default';
  };

  // main function/click handler for this component
  const handleClick = () => {
    const currentMoleculeStatus =
      moleculesOnCanvas[containerIndex].moleculeAreaStatus;

    // helper function used to reset 'active' or 'awaiting delete' molecule areas to their previous states in main logic below
    const resetActiveAndAwaitingDeleteAreas = (molecule, index) => {
      if (molecule.moleculeAreaStatus === CANVAS_MOLECULE_AREA_STATE.ACTIVE) {
        dispatch(
          setMoleculeAreaStatus({
            areaIndex: index,
            newStatus: CANVAS_MOLECULE_AREA_STATE.EMPTY,
          }),
        );
      } else if (
        molecule.moleculeAreaStatus ===
        CANVAS_MOLECULE_AREA_STATE.AWAITING_DELETE
      ) {
        dispatch(
          setMoleculeAreaStatus({
            areaIndex: index,
            newStatus: CANVAS_MOLECULE_AREA_STATE.FULL,
          }),
        );
      }
    };

    // there are two cases to handle clicks of these molecule areas:
    // (1) a molecule has been selected in the side menu,
    // (2) no molecule has been selected in the side menu (hence these molecule areas are being clicked directly)
    if (selectedMoleculeInSideMenu) {
      // if a molecule has been selected in the side menu, then all canvas areas are converted to either:
      // (1) active (if they were empty), (2) awaiting delete (if they were full)
      // in such a case, when the area is clicked, simply update it with the selected molecule
      // then reset all active/awaiting delete areas and de-select the previously selected molecule from the side menu
      dispatch(
        displayMolecule({
          moleculeId: selectedMoleculeInSideMenu,
          areaIndex: containerIndex,
        }),
        moleculesOnCanvas.forEach(resetActiveAndAwaitingDeleteAreas),
      );
      dispatch(selectMoleculeInSideMenu(null));
      // in case a molecule is replaced with another while there are radiation lines/vectors on the canvas -->
      // reset animation interval and toggle off electric field vectors and re-emission
      if (intervalCount > 0) {
        dispatch(resetIntervalCount());
        dispatch(toggleShowElectricFieldVectors(false));
        dispatch(toggleShowReEmission(false));
      }
    }
    // second branch of main logic for this handler (no molecule has been selected in the side menu)
    else if (!selectedMoleculeInSideMenu) {
      // if canvas area is empty, (1) reset any other areas that are active/awaiting delete, (2) make area active,
      // (3) highlight all side menu molecules (indicating that they can be chosen to fill this now active area)
      if (currentMoleculeStatus === CANVAS_MOLECULE_AREA_STATE.EMPTY) {
        moleculesOnCanvas.forEach(resetActiveAndAwaitingDeleteAreas);
        dispatch(toggleHighlightAllSideMenuMolecules(true));
        dispatch(
          setMoleculeAreaStatus({
            areaIndex: containerIndex,
            newStatus: CANVAS_MOLECULE_AREA_STATE.ACTIVE,
          }),
        );
      }
      // if canvas area is active, (1) return the area to empty, (2) remove highlight of all side menu molecules
      // i.e. this is de-selecting an active area molecule area (e.g. an area is made active, then clicked again)
      else if (currentMoleculeStatus === CANVAS_MOLECULE_AREA_STATE.ACTIVE) {
        dispatch(toggleHighlightAllSideMenuMolecules(false));
        dispatch(
          setMoleculeAreaStatus({
            areaIndex: containerIndex,
            newStatus: CANVAS_MOLECULE_AREA_STATE.EMPTY,
          }),
        );
      }
      // if canvas area is full (contains molecule), (1) pause animation, (2) convert area to awaiting delete,
      // (3) highlight all sidemenu molecules (indicating that they can be chosen to replace the molecule in this now awaiting delete area)
      else if (currentMoleculeStatus === CANVAS_MOLECULE_AREA_STATE.FULL) {
        dispatch(setIsPaused(true));
        moleculesOnCanvas.forEach(resetActiveAndAwaitingDeleteAreas);
        dispatch(toggleHighlightAllSideMenuMolecules(true));
        dispatch(
          setMoleculeAreaStatus({
            areaIndex: containerIndex,
            newStatus: CANVAS_MOLECULE_AREA_STATE.AWAITING_DELETE,
          }),
        );
      }
      // if canvas area is awaiting delete, (1) return it to its original ('full') state, (2)) remove highlight of all side menu molecules
      // i.e. this is de-selecting an area which is awaiting delete
      else if (
        currentMoleculeStatus === CANVAS_MOLECULE_AREA_STATE.AWAITING_DELETE
      ) {
        dispatch(toggleHighlightAllSideMenuMolecules(false));
        dispatch(
          setMoleculeAreaStatus({
            areaIndex: containerIndex,
            newStatus: CANVAS_MOLECULE_AREA_STATE.FULL,
          }),
        );
      }
    }
  };

  // this code is for styling the molecule area, depending on its status
  let moleculeAreaRadius;
  let moleculeAreaFill;
  let moleculeAreaDash;
  switch (moleculeStatus) {
    case CANVAS_MOLECULE_AREA_STATE.EMPTY:
      moleculeAreaRadius = CANVAS_MOLECULE_AREA_DEFAULT_RADIUS;
      moleculeAreaFill = CANVAS_MOLECULE_AREA_EMPTY_FILL;
      moleculeAreaDash = CANVAS_MOLECULE_AREA_DEFAULT_DASH;
      break;
    case CANVAS_MOLECULE_AREA_STATE.ACTIVE:
      moleculeAreaRadius = CANVAS_MOLECULE_AREA_DEFAULT_RADIUS;
      moleculeAreaFill = CANVAS_MOLECULE_AREA_ACTIVE_FILL;
      moleculeAreaDash = CANVAS_MOLECULE_AREA_ACTIVE_DASH;
      break;
    case CANVAS_MOLECULE_AREA_STATE.AWAITING_DELETE:
      moleculeAreaRadius = CANVAS_MOLECULE_AREA_DEFAULT_RADIUS;
      moleculeAreaFill = CANVAS_MOLECULE_AREA_AWAITING_DELETE_FILL;
      moleculeAreaDash = CANVAS_MOLECULE_AREA_AWAITING_DELETE_DASH;
      break;
    case CANVAS_MOLECULE_AREA_STATE.FULL:
      moleculeAreaRadius = 0;
      moleculeAreaFill = '';
      moleculeAreaDash = CANVAS_MOLECULE_AREA_DEFAULT_DASH;
      break;
    default:
      moleculeAreaRadius = CANVAS_MOLECULE_AREA_DEFAULT_RADIUS;
      moleculeAreaFill = CANVAS_MOLECULE_AREA_EMPTY_FILL;
      moleculeAreaDash = CANVAS_MOLECULE_AREA_DEFAULT_DASH;
      break;
  }

  return (
    <Group
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={handleClick}
    >
      <Circle
        x={x}
        y={y}
        radius={moleculeAreaRadius}
        fill={moleculeAreaFill}
        stroke={CANVAS_MOLECULE_AREA_STROKE}
        strokeWidth={CANVAS_MOLECULE_AREA_STROKE_WIDTH}
        dash={moleculeAreaDash}
      />
      {moleculeStatus === CANVAS_MOLECULE_AREA_STATE.ACTIVE && (
        <ActiveMoleculeAreaPlus x={x} y={y} />
      )}
      {(moleculeStatus === CANVAS_MOLECULE_AREA_STATE.FULL ||
        moleculeStatus === CANVAS_MOLECULE_AREA_STATE.AWAITING_DELETE) &&
        children}
      {moleculeStatus === CANVAS_MOLECULE_AREA_STATE.AWAITING_DELETE && (
        <CanvasMoleculeAreaClearButton
          x={x}
          y={y}
          containerIndex={containerIndex}
        />
      )}
    </Group>
  );
};

CanvasMoleculeArea.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  moleculeStatus: PropTypes.string.isRequired,
  containerIndex: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
};

CanvasMoleculeArea.defaultProps = {
  children: null,
};

export default CanvasMoleculeArea;
