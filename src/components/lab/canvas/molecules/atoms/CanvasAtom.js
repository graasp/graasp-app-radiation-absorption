import React, { useEffect, useState, useRef } from 'react';
import Konva from 'konva';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Group, Circle } from 'react-konva';
import {
  CANVAS_ATOM_DIMENSIONS,
  POSITIVE_CHARGE,
  NEGATIVE_CHARGE,
  OSCILLATION_FRAMES_PER_SECOND_ADJUSTMENT_FACTOR,
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
  oscillationConstant,
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
          atomRef.current.attrs.x +
            oscillationConstant *
              Math.sin(
                frame.time / OSCILLATION_FRAMES_PER_SECOND_ADJUSTMENT_FACTOR,
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
  oscillationConstant: PropTypes.number.isRequired,
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
