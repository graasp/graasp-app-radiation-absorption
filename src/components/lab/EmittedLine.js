import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Line } from 'react-konva';
import {
  CARBON_DIOXIDE_MOLECULE_ID,
  EMITTED_LINE_STROKE_COLOR,
  EMITTED_LINE_STROKE_WIDTH,
  INFRARED_RADIATION_PERIOD,
  METHANE_MOLECULE_ID,
  MOLECULE_CENTER_Y_FROM_BOTTOM_OF_CANVAS,
  NITROUS_OXIDE_MOLECULE_ID,
  OZONE_MOLECULE_ID,
  SINE_CURVE_AMPLITUDE,
  SPECTRUMS,
  VISIBLE_LIGHT_PERIOD,
  WATER_MOLECULE_ID,
  Y_INCREMENT_PER_POINT,
  Y_SHIFT_PER_INTERVAL,
} from '../../config/constants';
import generateSineCurve from '../../utils/generateSineCurve';

const EmittedLine = ({ x, lineIndex }) => {
  const intervalCount = useSelector(({ lab }) => lab.intervalCount);
  const moleculesOnCanvas = useSelector(({ lab }) => lab.moleculesOnCanvas);
  const spectrum = useSelector(({ lab }) => lab.spectrum);
  const { height: stageHeight } = useSelector(
    ({ layout }) => layout.lab.stageDimensions,
  );
  const currentLineMolecule = moleculesOnCanvas[lineIndex].molecule;

  let period = VISIBLE_LIGHT_PERIOD;
  // Ozone, Methane, Water, CO2, and Nitrous Oxide are greenhouse gases, and hence absorb infrared radiation
  // By default, the radiation 'absorption point' is 0 (i.e. the top of the canvas), i.e. the radiation line extends to the top of the canvas
  // With a greenhouse molecule, the absorption point is the center of the molecule
  let absorptionPoint = 0;
  if (spectrum === SPECTRUMS.INFRARED) {
    period = INFRARED_RADIATION_PERIOD;
    if (
      currentLineMolecule === OZONE_MOLECULE_ID ||
      currentLineMolecule === METHANE_MOLECULE_ID ||
      currentLineMolecule === WATER_MOLECULE_ID ||
      currentLineMolecule === CARBON_DIOXIDE_MOLECULE_ID ||
      currentLineMolecule === NITROUS_OXIDE_MOLECULE_ID
    ) {
      absorptionPoint = stageHeight - MOLECULE_CENTER_Y_FROM_BOTTOM_OF_CANVAS;
    }
  }

  return (
    <Line
      x={x}
      y={stageHeight}
      stroke={EMITTED_LINE_STROKE_COLOR}
      strokeWidth={EMITTED_LINE_STROKE_WIDTH}
      points={generateSineCurve(
        intervalCount,
        stageHeight,
        absorptionPoint,
        Y_SHIFT_PER_INTERVAL,
        Y_INCREMENT_PER_POINT,
        SINE_CURVE_AMPLITUDE,
        period,
      )}
    />
  );
};

EmittedLine.propTypes = {
  x: PropTypes.number.isRequired,
  lineIndex: PropTypes.number.isRequired,
};

export default EmittedLine;
