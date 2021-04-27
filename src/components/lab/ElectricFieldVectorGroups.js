import React from 'react';
import { useSelector } from 'react-redux';
import { Group } from 'react-konva';
import PropTypes from 'prop-types';
import ElectricFieldVectorGroup from './ElectricFieldVectorGroup';
import {
  GREENHOUSE_GASES,
  INFRARED_RADIATION_CURVE_INTERVAL,
  MOLECULE_CENTER_Y_FROM_BOTTOM_OF_CANVAS,
  Y_SHIFT_PER_INTERVAL,
} from '../../config/constants';
import generateElectricFieldVectorGroupYPoints from '../../utils/generateElectricFieldVectorGroupYPoints';

const ElectricFieldVectorGroups = ({ x, groupIndex }) => {
  const { height: stageHeight } = useSelector(
    ({ layout }) => layout.lab.stageDimensions,
  );
  const intervalCount = useSelector(({ lab }) => lab.intervalCount);
  const moleculesOnCanvas = useSelector(({ lab }) => lab.moleculesOnCanvas);
  const currentLineMolecule = moleculesOnCanvas[groupIndex].molecule;

  let absorptionPoint = 0;
  if (GREENHOUSE_GASES.includes(currentLineMolecule)) {
    absorptionPoint = stageHeight - MOLECULE_CENTER_Y_FROM_BOTTOM_OF_CANVAS;
  }

  return (
    <Group>
      {generateElectricFieldVectorGroupYPoints(
        intervalCount,
        stageHeight,
        absorptionPoint,
        INFRARED_RADIATION_CURVE_INTERVAL,
        Y_SHIFT_PER_INTERVAL,
      ).map(({ y, direction }, index) => (
        <ElectricFieldVectorGroup
          x={x}
          y={y}
          direction={direction}
          // eslint-disable-next-line react/no-array-index-key
          key={index}
        />
      ))}
    </Group>
  );
};

ElectricFieldVectorGroups.propTypes = {
  x: PropTypes.number.isRequired,
  groupIndex: PropTypes.number.isRequired,
};

export default ElectricFieldVectorGroups;