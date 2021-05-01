import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Group, Line } from 'react-konva';
import {
  RADIATION_LINE_STROKE_COLOR,
  RADIATION_LINE_STROKE_WIDTH,
  GREENHOUSE_GASES,
  INFRARED_RADIATION_PERIOD,
  MOLECULE_CENTER_Y_FROM_BOTTOM_OF_CANVAS,
  RADIATION_LINE_CURVE_AMPLITUDE,
  SPECTRUMS,
  VISIBLE_LIGHT_PERIOD,
  INTERVALS_TO_REACH_MOLECULE_CENTER,
} from '../../config/constants';
import generateSineCurve from '../../utils/generateSineCurve';
import ReEmittedLines from './ReEmittedLines';

const RadiationLine = ({ x, lineIndex }) => {
  const intervalCount = useSelector(({ lab }) => lab.intervalCount);
  const moleculesOnCanvas = useSelector(({ lab }) => lab.moleculesOnCanvas);
  const spectrum = useSelector(({ lab }) => lab.spectrum);
  const { height: stageHeight } = useSelector(
    ({ layout }) => layout.lab.stageDimensions,
  );
  const showReEmission = useSelector(({ lab }) => lab.showReEmission);
  const currentLineMolecule = moleculesOnCanvas[lineIndex].molecule;

  let period = VISIBLE_LIGHT_PERIOD;
  // Ozone, Methane, Water, CO2, and Nitrous Oxide are greenhouse gases, and hence absorb infrared radiation
  // By default, the radiation 'absorption point' is 0 (i.e. the top of the canvas), i.e. the radiation line extends to the top of the canvas
  // With a greenhouse molecule, the absorption point is the center of the molecule
  let radiationLineAbsorptionPoint = 0;
  if (spectrum === SPECTRUMS.INFRARED) {
    period = INFRARED_RADIATION_PERIOD;
    if (GREENHOUSE_GASES.includes(currentLineMolecule)) {
      radiationLineAbsorptionPoint =
        stageHeight - MOLECULE_CENTER_Y_FROM_BOTTOM_OF_CANVAS;
    }
  }

  return (
    <Group>
      <Line
        x={x}
        y={stageHeight}
        stroke={RADIATION_LINE_STROKE_COLOR}
        strokeWidth={RADIATION_LINE_STROKE_WIDTH}
        points={generateSineCurve(
          intervalCount,
          stageHeight,
          radiationLineAbsorptionPoint,
          RADIATION_LINE_CURVE_AMPLITUDE,
          period,
        )}
      />
      {/* re-emission lines */}
      {showReEmission &&
        GREENHOUSE_GASES.includes(currentLineMolecule) &&
        intervalCount >= INTERVALS_TO_REACH_MOLECULE_CENTER && (
          <ReEmittedLines x={x} y={radiationLineAbsorptionPoint} />
        )}
    </Group>
  );
};

RadiationLine.propTypes = {
  x: PropTypes.number.isRequired,
  lineIndex: PropTypes.number.isRequired,
};

export default RadiationLine;
