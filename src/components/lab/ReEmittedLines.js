import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Group, Line } from 'react-konva';
import {
  RE_EMISSION_LINE_CURVE_AMPLITUDE,
  RE_EMISSION_LINE_DASH,
  RE_EMISSION_LINE_STROKE_COLOR,
  RE_EMISSION_LINE_STROKE_WIDTH,
} from '../../constants/constants';
import generateSineCurve from '../../utils/generateSineCurve';

const ReEmittedLines = ({ x, y }) => {
  const { intervalCount, beginReEmissionIntervalCount } = useSelector(
    ({ lab }) => lab,
  );
  const { height } = useSelector(({ layout }) => layout.lab.stageDimensions);

  return (
    <Group>
      <Line
        x={x}
        y={y}
        stroke={RE_EMISSION_LINE_STROKE_COLOR}
        strokeWidth={RE_EMISSION_LINE_STROKE_WIDTH}
        points={generateSineCurve(
          intervalCount - beginReEmissionIntervalCount,
          height,
          y,
          RE_EMISSION_LINE_CURVE_AMPLITUDE * height,
        )}
        dash={RE_EMISSION_LINE_DASH}
      />
      <Line
        x={x}
        y={y}
        stroke={RE_EMISSION_LINE_STROKE_COLOR}
        strokeWidth={RE_EMISSION_LINE_STROKE_WIDTH}
        points={generateSineCurve(
          intervalCount - beginReEmissionIntervalCount,
          y,
          height,
          RE_EMISSION_LINE_CURVE_AMPLITUDE * height,
        )}
        dash={RE_EMISSION_LINE_DASH}
      />
    </Group>
  );
};

ReEmittedLines.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default ReEmittedLines;
