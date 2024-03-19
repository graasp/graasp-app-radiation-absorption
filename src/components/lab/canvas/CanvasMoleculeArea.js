import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Circle, Group } from 'react-konva';
import {
  MOLECULE_AREA_STROKE,
  MOLECULE_AREA_STROKE_WIDTH,
  MOLECULE_AREA_STATE,
} from '../../../constants/constants';
import {
  selectMolecule,
  displayMolecule,
  setMoleculeArea,
  setIsPaused,
  toggleHighlightAll,
  resetIntervalCount,
  toggleShowElectricFieldVectors,
  toggleShowReEmission,
} from '../../../actions';
import ClearButton from './ClearButton';
import ActiveMoleculeAreaPlus from './ActiveMoleculeAreaPlus';
import { styleMoleculeArea } from '../../../utils/style';

const CanvasMoleculeArea = ({
  x,
  y,
  moleculeStatus,
  containerIndex,
  children,
}) => {
  const { selectedMolecule, moleculesOnCanvas, intervalCount } = useSelector(
    ({ lab }) => lab,
  );
  const { height } = useSelector(({ layout }) => layout.lab.stageDimensions);
  const { ACTIVE, EMPTY, AWAITING_DELETE, FULL } = MOLECULE_AREA_STATE;
  const dispatch = useDispatch();

  const onEnter = (event) => {
    const container = event.target.getStage().container();
    container.style.cursor = 'pointer';
  };

  const onLeave = (event) => {
    const container = event.target.getStage().container();
    container.style.cursor = 'default';
  };

  const onClick = () => {
    const currentStatus = moleculesOnCanvas[containerIndex].moleculeAreaStatus;

    const resetArea = ({ moleculeAreaStatus }, index) => {
      if (moleculeAreaStatus === ACTIVE) {
        dispatch(setMoleculeArea({ index, status: EMPTY }));
      } else if (moleculeAreaStatus === AWAITING_DELETE) {
        dispatch(setMoleculeArea({ index, status: FULL }));
      }
    };

    if (selectedMolecule) {
      dispatch(
        displayMolecule({
          moleculeId: selectedMolecule,
          index: containerIndex,
        }),
        moleculesOnCanvas.forEach(resetArea),
      );
      const numberOfMoleculesOnCanvas = moleculesOnCanvas.filter(
        ({ molecule }) => molecule,
      ).length;
      if (numberOfMoleculesOnCanvas >= moleculesOnCanvas.length - 1) {
        dispatch(selectMolecule(null));
      }
      if (intervalCount > 0) {
        dispatch(resetIntervalCount());
        dispatch(toggleShowElectricFieldVectors(false));
        dispatch(toggleShowReEmission(false));
      }
    } else if (!selectedMolecule) {
      if (currentStatus === EMPTY) {
        moleculesOnCanvas.forEach(resetArea);
        dispatch(toggleHighlightAll(true));
        dispatch(setMoleculeArea({ index: containerIndex, status: ACTIVE }));
      } else if (currentStatus === ACTIVE) {
        dispatch(toggleHighlightAll(false));
        dispatch(setMoleculeArea({ index: containerIndex, status: EMPTY }));
      } else if (currentStatus === FULL) {
        dispatch(setIsPaused(true));
        moleculesOnCanvas.forEach(resetArea);
        dispatch(toggleHighlightAll(true));
        dispatch(
          setMoleculeArea({ index: containerIndex, status: AWAITING_DELETE }),
        );
      } else if (currentStatus === AWAITING_DELETE) {
        dispatch(toggleHighlightAll(false));
        dispatch(setMoleculeArea({ index: containerIndex, status: FULL }));
      }
    }
  };

  const { radius, fill, dash } = styleMoleculeArea(moleculeStatus);
  return (
    <Group
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onClick}
      onTap={onClick}
    >
      <Circle
        x={x}
        y={y}
        radius={radius * height}
        fill={fill}
        stroke={MOLECULE_AREA_STROKE}
        strokeWidth={MOLECULE_AREA_STROKE_WIDTH}
        dash={dash}
      />
      {moleculeStatus === ACTIVE && <ActiveMoleculeAreaPlus x={x} y={y} />}
      {(moleculeStatus === FULL || moleculeStatus === AWAITING_DELETE) &&
        children}
      {moleculeStatus === AWAITING_DELETE && (
        <ClearButton x={x} y={y} containerIndex={containerIndex} />
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
