import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Group, Line } from 'react-konva';
import {
  INTERVALS_TO_REACH_MOLECULE_CENTER,
  RE_EMISSION_LINE_CURVE_AMPLITUDE,
  RE_EMISSION_LINE_STROKE_COLOR,
  RE_EMISSION_LINE_STROKE_WIDTH,
} from '../../config/constants';
import generateSineCurve from '../../utils/generateSineCurve';

const ReEmittedLines = ({ x, y }) => {
  const intervalCount = useSelector(({ lab }) => lab.intervalCount);
  const { height: stageHeight } = useSelector(
    ({ layout }) => layout.lab.stageDimensions,
  );

  return (
    <Group>
      <Line
        x={x}
        y={y}
        stroke={RE_EMISSION_LINE_STROKE_COLOR}
        strokeWidth={RE_EMISSION_LINE_STROKE_WIDTH}
        points={generateSineCurve(
          intervalCount - INTERVALS_TO_REACH_MOLECULE_CENTER,
          stageHeight,
          y,
          RE_EMISSION_LINE_CURVE_AMPLITUDE,
        )}
      />
      <Line
        x={x}
        y={y}
        stroke={RE_EMISSION_LINE_STROKE_COLOR}
        strokeWidth={RE_EMISSION_LINE_STROKE_WIDTH}
        points={generateSineCurve(
          intervalCount - INTERVALS_TO_REACH_MOLECULE_CENTER,
          y,
          stageHeight,
          RE_EMISSION_LINE_CURVE_AMPLITUDE,
        )}
      />
    </Group>
  );
};

ReEmittedLines.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default ReEmittedLines;
