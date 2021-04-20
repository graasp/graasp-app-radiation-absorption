import React from 'react';
import { useSelector } from 'react-redux';
import { Group } from 'react-konva';
import PropTypes from 'prop-types';
import ElectricFieldVectorGroup from './ElectricFieldVectorGroup';
import {
  INFRARED_RADIATION_CURVE_INTERVAL,
  INFRARED_RADIATION_PERIOD,
  INTERVALS_TO_COMPLETE_INFRARED_RADIATION_INTERVAL,
  SINE_CURVE_AMPLITUDE,
  Y_SHIFT_PER_INTERVAL,
} from '../../config/constants';

const ElectricFieldVectorGroups = ({ x }) => {
  const { height: stageHeight } = useSelector(
    ({ layout }) => layout.lab.stageDimensions,
  );
  const intervalCount = useSelector(({ lab }) => lab.intervalCount);

  return (
    <Group>
      <ElectricFieldVectorGroup
        x={
          x -
          SINE_CURVE_AMPLITUDE +
          SINE_CURVE_AMPLITUDE *
            Math.sin(
              (intervalCount -
                INTERVALS_TO_COMPLETE_INFRARED_RADIATION_INTERVAL) *
                Y_SHIFT_PER_INTERVAL *
                INFRARED_RADIATION_PERIOD,
            )
        }
        y={stageHeight - INFRARED_RADIATION_CURVE_INTERVAL}
        direction={1}
      />
      <ElectricFieldVectorGroup
        x={
          x +
          SINE_CURVE_AMPLITUDE -
          SINE_CURVE_AMPLITUDE *
            Math.sin(
              (intervalCount -
                INTERVALS_TO_COMPLETE_INFRARED_RADIATION_INTERVAL) *
                Y_SHIFT_PER_INTERVAL *
                INFRARED_RADIATION_PERIOD,
            )
        }
        y={stageHeight - 3 * INFRARED_RADIATION_CURVE_INTERVAL}
        direction={-1}
      />
      <ElectricFieldVectorGroup
        x={
          x -
          SINE_CURVE_AMPLITUDE +
          SINE_CURVE_AMPLITUDE *
            Math.sin(
              (intervalCount -
                INTERVALS_TO_COMPLETE_INFRARED_RADIATION_INTERVAL) *
                Y_SHIFT_PER_INTERVAL *
                INFRARED_RADIATION_PERIOD,
            )
        }
        y={stageHeight - 5 * INFRARED_RADIATION_CURVE_INTERVAL}
        direction={1}
      />
    </Group>
  );
};

ElectricFieldVectorGroups.propTypes = {
  x: PropTypes.number.isRequired,
};

export default ElectricFieldVectorGroups;
