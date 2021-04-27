import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Circle, Line, Group } from 'react-konva';
import {
  CANVAS_MOLECULE_AREA_DEFAULT_RADIUS,
  CANVAS_MOLECULE_AREA_CLEAR_BUTTON_FILL,
  CANVAS_MOLECULE_AREA_CLEAR_BUTTON_RADIUS,
  CANVAS_MOLECULE_AREA_CLEAR_BUTTON_LINE_FILL,
  CANVAS_MOLECULE_AREA_CLEAR_BUTTON_LINE_STROKE_WIDTH,
  CANVAS_MOLECULE_AREA_CLEAR_BUTTON_LINE_LENGTH,
  CANVAS_MOLECULE_AREA_STATE,
} from '../../../config/constants';
import {
  clearMoleculeArea,
  resetIntervalCount,
  selectMoleculeInSideMenu,
  setMoleculeAreaStatus,
  toggleHighlightAllSideMenuMolecules,
  toggleShowElectricFieldVectors,
  toggleShowReEmission,
} from '../../../actions';

const CanvasMoleculeAreaClearButton = ({ x, y, containerIndex }) => {
  const dispatch = useDispatch();
  const moleculesOnCanvas = useSelector(({ lab }) => lab.moleculesOnCanvas);

  const handleClear = () => {
    moleculesOnCanvas.forEach((molecule, index) => {
      if (index === containerIndex) {
        dispatch(clearMoleculeArea({ areaIndex: containerIndex }));
      } else if (
        molecule.moleculeAreaStatus === CANVAS_MOLECULE_AREA_STATE.ACTIVE
      ) {
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
    });
    dispatch(resetIntervalCount());
    dispatch(toggleHighlightAllSideMenuMolecules(false));
    dispatch(toggleShowElectricFieldVectors(false));
    dispatch(toggleShowReEmission(false));
    dispatch(selectMoleculeInSideMenu(null));
  };

  return (
    <Group onClick={handleClear}>
      <Circle
        x={x}
        y={y - CANVAS_MOLECULE_AREA_DEFAULT_RADIUS}
        fill={CANVAS_MOLECULE_AREA_CLEAR_BUTTON_FILL}
        radius={CANVAS_MOLECULE_AREA_CLEAR_BUTTON_RADIUS}
      />
      <Line
        x={x}
        y={y - CANVAS_MOLECULE_AREA_DEFAULT_RADIUS}
        points={[
          0,
          0,
          CANVAS_MOLECULE_AREA_CLEAR_BUTTON_LINE_LENGTH,
          CANVAS_MOLECULE_AREA_CLEAR_BUTTON_LINE_LENGTH,
        ]}
        stroke={CANVAS_MOLECULE_AREA_CLEAR_BUTTON_LINE_FILL}
        strokeWidth={CANVAS_MOLECULE_AREA_CLEAR_BUTTON_LINE_STROKE_WIDTH}
      />
      <Line
        x={x}
        y={y - CANVAS_MOLECULE_AREA_DEFAULT_RADIUS}
        points={[
          0,
          0,
          -CANVAS_MOLECULE_AREA_CLEAR_BUTTON_LINE_LENGTH,
          CANVAS_MOLECULE_AREA_CLEAR_BUTTON_LINE_LENGTH,
        ]}
        stroke={CANVAS_MOLECULE_AREA_CLEAR_BUTTON_LINE_FILL}
        strokeWidth={CANVAS_MOLECULE_AREA_CLEAR_BUTTON_LINE_STROKE_WIDTH}
      />
      <Line
        x={x}
        y={y - CANVAS_MOLECULE_AREA_DEFAULT_RADIUS}
        points={[
          0,
          0,
          CANVAS_MOLECULE_AREA_CLEAR_BUTTON_LINE_LENGTH,
          -CANVAS_MOLECULE_AREA_CLEAR_BUTTON_LINE_LENGTH,
        ]}
        stroke={CANVAS_MOLECULE_AREA_CLEAR_BUTTON_LINE_FILL}
        strokeWidth={CANVAS_MOLECULE_AREA_CLEAR_BUTTON_LINE_STROKE_WIDTH}
      />
      <Line
        x={x}
        y={y - CANVAS_MOLECULE_AREA_DEFAULT_RADIUS}
        points={[
          0,
          0,
          -CANVAS_MOLECULE_AREA_CLEAR_BUTTON_LINE_LENGTH,
          -CANVAS_MOLECULE_AREA_CLEAR_BUTTON_LINE_LENGTH,
        ]}
        stroke={CANVAS_MOLECULE_AREA_CLEAR_BUTTON_LINE_FILL}
        strokeWidth={CANVAS_MOLECULE_AREA_CLEAR_BUTTON_LINE_STROKE_WIDTH}
      />
    </Group>
  );
};

CanvasMoleculeAreaClearButton.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  containerIndex: PropTypes.number.isRequired,
};

export default CanvasMoleculeAreaClearButton;
