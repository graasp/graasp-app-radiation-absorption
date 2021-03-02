import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Circle, Line, Group } from 'react-konva';
import {
  CANVAS_MOLECULE_AREA_DEFAULT_RADIUS,
  CANVAS_MOLECULE_AREA_CLEAR_BUTTON_FILL,
  CANVAS_MOLECULE_AREA_CLEAR_BUTTON_RADIUS,
  CANVAS_MOLECULE_AREA_CLEAR_BUTTON_LINE_FILL,
  CANVAS_MOLECULE_AREA_CLEAR_BUTTON_LINE_STROKE_WIDTH,
  CANVAS_MOLECULE_AREA_CLEAR_BUTTON_LINE_LENGTH,
} from '../../../config/constants';
import { clearMoleculeArea } from '../../../actions';

const CanvasMoleculeAreClearButton = ({ x, y, containerIndex }) => {
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearMoleculeArea({ areaId: containerIndex }));
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

CanvasMoleculeAreClearButton.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  containerIndex: PropTypes.number.isRequired,
};

export default CanvasMoleculeAreClearButton;
