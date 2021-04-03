import React, { useEffect, useState, useRef } from 'react';
import Konva from 'konva';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Group, Circle } from 'react-konva';
import {
  CANVAS_ATOM_DIMENSIONS,
  POSITIVE_CHARGE,
  NEGATIVE_CHARGE,
  EMITTED_LINE_INTERVAL_TIME,
  INFRARED_OSCILLATION_CONSTANT_INCREMENT,
} from '../../../../../config/constants';
import CanvasAtomNegativeCharge from './charges/CanvasAtomNegativeCharge';
import CanvasAtomPositiveCharge from './charges/CanvasAtomPositiveCharge';

const CanvasAtom = ({
  atomColor,
  atomSize,
  x,
  y,
  charge,
  chargeSymbolColor,
  shouldOscillate,
  amplitude,
  initialCenterPoint,
  setCenterPoint,
}) => {
  const showAtomsCharges = useSelector(({ lab }) => lab.showAtomsCharges);
  const atomRef = useRef();
  const [atomOscillationFunction, setAtomOscillationFunction] = useState();

  const atomRadius = CANVAS_ATOM_DIMENSIONS[atomSize];

  // used in return statement below; default is null (no charge displayed)
  let chargeToDisplay = null;
  if (charge === POSITIVE_CHARGE) {
    chargeToDisplay = (
      <CanvasAtomPositiveCharge x={x} y={y} color={chargeSymbolColor} />
    );
  } else if (charge === NEGATIVE_CHARGE) {
    chargeToDisplay = (
      <CanvasAtomNegativeCharge x={x} y={y} color={chargeSymbolColor} />
    );
  }

  useEffect(() => {
    if (shouldOscillate && atomOscillationFunction) {
      atomOscillationFunction.start();
    } else if (atomOscillationFunction) {
      atomOscillationFunction.stop();
    }
  }, [shouldOscillate]);

  useEffect(() => {
    setCenterPoint({
      x: atomRef.current.attrs.x,
      y: atomRef.current.attrs.y,
    });
  }, [atomRef.current?.attrs.x, atomRef.current?.attrs.y]);

  useEffect(() => {
    if (atomRef.current?.attrs.x === initialCenterPoint.x) {
      const oscillationFunction = new Konva.Animation((frame) => {
        atomRef.current?.x(
          initialCenterPoint.x +
            amplitude *
              // below is in order for the frequency of the the molecule's oscillation to match the frequency of the emitted line/wave
              // every EMITTED_LINE_INTERVAL_TIME, the wave's position is determined by sin(INFRARED_OSCILLATION_CONSTANT_INCREMENT * TOTAL_TIME/EMITTED_LINE_INTERVAL_TIME)
              // hence, a similar approach here (using frame.time for total elapsed time)
              Math.sin(
                (frame.time * INFRARED_OSCILLATION_CONSTANT_INCREMENT) /
                  EMITTED_LINE_INTERVAL_TIME,
              ),
        );
      }, atomRef.current.getLayer());
      setAtomOscillationFunction(oscillationFunction);
    }
  }, [atomRef.current?.attrs.x]);

  return (
    <Group>
      <Circle radius={atomRadius} fill={atomColor} x={x} y={y} ref={atomRef} />
      {showAtomsCharges && chargeToDisplay}
    </Group>
  );
};

CanvasAtom.propTypes = {
  atomColor: PropTypes.string.isRequired,
  atomSize: PropTypes.string.isRequired,
  chargeSymbolColor: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  charge: PropTypes.string,
  shouldOscillate: PropTypes.bool.isRequired,
  amplitude: PropTypes.number.isRequired,
  initialCenterPoint: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
  setCenterPoint: PropTypes.func.isRequired,
};

CanvasAtom.defaultProps = {
  charge: '',
};

export default CanvasAtom;
