import React from 'react';
import { useSelector } from 'react-redux';
import { Group } from 'react-konva';
import PropTypes from 'prop-types';
import ElectricFieldVectorGroup from './ElectricFieldVectorGroup';
import {
  INFRARED_RADIATION_CURVE_INTERVAL,
  Y_SHIFT_PER_INTERVAL,
} from '../../constants/constants';
import generateElectricFieldVectorGroupYPoints from '../../utils/generateElectricFieldVectorGroupYPoints';
import { GREENHOUSE_GASES } from '../../constants/strings';

const ElectricFieldVectorGroups = ({ x, groupIndex }) => {
  const { height } = useSelector(({ layout }) => layout.lab.stageDimensions);
  const moleculeCenterYFromBottomOfCanvas = useSelector(
    ({ layout }) => layout.moleculeCenterYFromBottomOfCanvas,
  );
  const intervalCount = useSelector(({ lab }) => lab.intervalCount);
  const moleculesOnCanvas = useSelector(({ lab }) => lab.moleculesOnCanvas);
  const currentLineMolecule = moleculesOnCanvas[groupIndex].molecule;

  let absorptionPoint = 0;
  if (GREENHOUSE_GASES.includes(currentLineMolecule)) {
    absorptionPoint = height - moleculeCenterYFromBottomOfCanvas;
  }

  return (
    <Group>
      {generateElectricFieldVectorGroupYPoints(
        intervalCount,
        height,
        absorptionPoint,
        INFRARED_RADIATION_CURVE_INTERVAL,
        Y_SHIFT_PER_INTERVAL,
        height,
      ).map(({ y, direction }, index) => (
        <ElectricFieldVectorGroup
          x={x}
          y={y}
          direction={direction}
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          absorptionPoint={absorptionPoint}
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
