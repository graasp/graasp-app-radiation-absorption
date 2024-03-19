import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Group, Line } from 'react-konva';
import {
  INFRARED_RADIATION_COLOR,
  RADIATION_LINE_STROKE_WIDTH,
  INFRARED_RADIATION_PERIOD,
  RADIATION_LINE_CURVE_AMPLITUDE,
  VISIBLE_LIGHT_PERIOD,
  VISIBLE_LIGHT_COLOR,
} from '../../constants/constants';
import generateSineCurve from '../../utils/generateSineCurve';
import ReEmittedLines from './ReEmittedLines';
import { GREENHOUSE_GASES, SPECTRUMS } from '../../constants/strings';

const RadiationLine = ({ x, lineIndex }) => {
  const intervalCount = useSelector(({ lab }) => lab.intervalCount);
  const moleculesOnCanvas = useSelector(({ lab }) => lab.moleculesOnCanvas);
  const spectrum = useSelector(({ lab }) => lab.spectrum);
  const { height } = useSelector(({ layout }) => layout.lab.stageDimensions);
  const moleculeCenterYFromBottomOfCanvas = useSelector(
    ({ layout }) => layout.moleculeCenterYFromBottomOfCanvas,
  );
  const intervalsToReachMoleculeCenter = useSelector(
    ({ layout }) => layout.intervalsToReachMoleculeCenter,
  );
  const showReEmission = useSelector(({ lab }) => lab.showReEmission);
  const currentLineMolecule = moleculesOnCanvas[lineIndex].molecule;

  // Initial variables are those for visible light
  // Notice that visible light radiation starts at 0 (top of canvas) and ends at stageHeight (bottom of canvas)
  let period = VISIBLE_LIGHT_PERIOD;
  let radiationLineStartingPoint = 0;
  let radiationLineAbsorptionPoint = height;
  // If spectrum is infrared, reverse radiation direction (start at bottom of screen and by default go up to the top of the screen)
  // Ozone, Methane, Water, CO2, and Nitrous Oxide are greenhouse gases, and hence absorb infrared radiation
  // With a greenhouse molecule, the absorption point is thus the center of the molecule
  if (spectrum === SPECTRUMS.INFRARED) {
    period = INFRARED_RADIATION_PERIOD;
    radiationLineStartingPoint = height;
    radiationLineAbsorptionPoint = 0;
    if (GREENHOUSE_GASES.includes(currentLineMolecule)) {
      radiationLineAbsorptionPoint = height - moleculeCenterYFromBottomOfCanvas;
    }
  }

  return (
    <Group>
      <Line
        x={x}
        y={radiationLineStartingPoint}
        stroke={
          spectrum === SPECTRUMS.INFRARED
            ? INFRARED_RADIATION_COLOR
            : VISIBLE_LIGHT_COLOR
        }
        strokeWidth={RADIATION_LINE_STROKE_WIDTH}
        points={generateSineCurve(
          intervalCount,
          radiationLineStartingPoint,
          radiationLineAbsorptionPoint,
          RADIATION_LINE_CURVE_AMPLITUDE * height,
          period,
        )}
      />
      {/* re-emission lines */}
      {showReEmission &&
        GREENHOUSE_GASES.includes(currentLineMolecule) &&
        intervalCount >= intervalsToReachMoleculeCenter && (
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
