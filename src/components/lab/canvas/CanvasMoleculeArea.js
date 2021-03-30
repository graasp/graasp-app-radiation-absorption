import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Circle, Group } from 'react-konva';
import {
  CANVAS_MOLECULE_AREA_Y_POSITION,
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
  toggleMoleculeOscillation,
} from '../../../actions';
import CanvasMoleculeAreaClearButton from './CanvasMoleculeAreaClearButton';
import ActiveMoleculeAreaPlus from './ActiveMoleculeAreaPlus';

const CanvasMoleculeArea = ({
  x,
  moleculeStatus,
  containerIndex,
  children,
}) => {
  const selectedMoleculeInSideMenu = useSelector(
    ({ lab }) => lab.selectedMoleculeInSideMenu,
  );
  const moleculesOnCanvas = useSelector(({ lab }) => lab.moleculesOnCanvas);
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
    // if some molecule has an active deletion area, clear that area
    const moleculeAwaitingDeletionIndex = moleculesOnCanvas.findIndex(
      (molecule) =>
        molecule.moleculeAreaStatus ===
        CANVAS_MOLECULE_AREA_STATE.AWAITING_DELETE,
    );
    if (moleculeAwaitingDeletionIndex !== -1) {
      dispatch(
        setMoleculeAreaStatus({
          areaIndex: moleculeAwaitingDeletionIndex,
          newStatus: CANVAS_MOLECULE_AREA_STATE.FULL,
        }),
      );
    }

    // if some molecule has an active selection area, clear that area
    const activeMoleculeIndex = moleculesOnCanvas.findIndex(
      (molecule) =>
        molecule.moleculeAreaStatus === CANVAS_MOLECULE_AREA_STATE.ACTIVE,
    );
    if (activeMoleculeIndex !== -1) {
      dispatch(
        setMoleculeAreaStatus({
          areaIndex: activeMoleculeIndex,
          newStatus: CANVAS_MOLECULE_AREA_STATE.EMPTY,
        }),
      );
    }

    // if some molecules have an active oscillation, pause that animation
    moleculesOnCanvas.forEach((molecule, index) => {
      if (molecule.shouldOscillate) {
        dispatch(
          toggleMoleculeOscillation({
            areaIndex: index,
            shouldOscillate: false,
          }),
        );
      }
    });

    const currentMoleculeStatus =
      moleculesOnCanvas[containerIndex].moleculeAreaStatus;

    // handle clicks when a molecule is selected in the side menu
    if (selectedMoleculeInSideMenu) {
      // if a molecule area is full (i.e. area contains a molecule), do nothing
      // i.e. de-select the side menu molecule, and de-activate all active areas
      // (from a user perspective, to replace a molecule in an area, the molecule must be cleared first)
      // (this and other code below uses dispatch method's callback: dispatch(action, callback)
      if (currentMoleculeStatus === CANVAS_MOLECULE_AREA_STATE.FULL) {
        dispatch(
          selectMoleculeInSideMenu(null),
          moleculesOnCanvas.forEach((molecule, index) => {
            if (
              molecule.moleculeAreaStatus === CANVAS_MOLECULE_AREA_STATE.ACTIVE
            ) {
              dispatch(
                setMoleculeAreaStatus({
                  areaIndex: index,
                  newStatus: CANVAS_MOLECULE_AREA_STATE.EMPTY,
                }),
              );
            }
          }),
        );
      }
      // if a molecule area is not full, dislpay the molecule selected in the side menu in that area
      // then de-activate all remaining active areas, and de-select the side menu molecule
      else {
        dispatch(
          displayMolecule({
            moleculeId: selectedMoleculeInSideMenu,
            areaIndex: containerIndex,
          }),
          moleculesOnCanvas.forEach((molecule, index) => {
            if (
              molecule.moleculeAreaStatus === CANVAS_MOLECULE_AREA_STATE.ACTIVE
            ) {
              dispatch(
                setMoleculeAreaStatus({
                  areaIndex: index,
                  newStatus: CANVAS_MOLECULE_AREA_STATE.EMPTY,
                }),
              );
            }
          }),
        );
        dispatch(selectMoleculeInSideMenu(null));
      }
    }
    // remaining cases are more straightforward and self-explanatory
    else if (currentMoleculeStatus === CANVAS_MOLECULE_AREA_STATE.EMPTY) {
      dispatch(
        setMoleculeAreaStatus({
          areaIndex: containerIndex,
          newStatus: CANVAS_MOLECULE_AREA_STATE.ACTIVE,
        }),
      );
    } else if (currentMoleculeStatus === CANVAS_MOLECULE_AREA_STATE.ACTIVE) {
      dispatch(
        setMoleculeAreaStatus({
          areaIndex: containerIndex,
          newStatus: CANVAS_MOLECULE_AREA_STATE.EMPTY,
        }),
      );
    } else if (currentMoleculeStatus === CANVAS_MOLECULE_AREA_STATE.FULL) {
      dispatch(
        setMoleculeAreaStatus({
          areaIndex: containerIndex,
          newStatus: CANVAS_MOLECULE_AREA_STATE.AWAITING_DELETE,
        }),
        dispatch(setIsPaused(true)),
      );
    } else if (
      currentMoleculeStatus === CANVAS_MOLECULE_AREA_STATE.AWAITING_DELETE
    ) {
      dispatch(
        setMoleculeAreaStatus({
          areaIndex: containerIndex,
          newStatus: CANVAS_MOLECULE_AREA_STATE.FULL,
        }),
      );
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
        y={CANVAS_MOLECULE_AREA_Y_POSITION}
        radius={moleculeAreaRadius}
        fill={moleculeAreaFill}
        stroke={CANVAS_MOLECULE_AREA_STROKE}
        strokeWidth={CANVAS_MOLECULE_AREA_STROKE_WIDTH}
        dash={moleculeAreaDash}
      />
      {moleculeStatus === CANVAS_MOLECULE_AREA_STATE.ACTIVE && (
        <ActiveMoleculeAreaPlus x={x} y={CANVAS_MOLECULE_AREA_Y_POSITION} />
      )}
      {(moleculeStatus === CANVAS_MOLECULE_AREA_STATE.FULL ||
        moleculeStatus === CANVAS_MOLECULE_AREA_STATE.AWAITING_DELETE) &&
        children}
      {moleculeStatus === CANVAS_MOLECULE_AREA_STATE.AWAITING_DELETE && (
        <CanvasMoleculeAreaClearButton
          x={x}
          y={CANVAS_MOLECULE_AREA_Y_POSITION}
          containerIndex={containerIndex}
        />
      )}
    </Group>
  );
};

CanvasMoleculeArea.propTypes = {
  x: PropTypes.number.isRequired,
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
