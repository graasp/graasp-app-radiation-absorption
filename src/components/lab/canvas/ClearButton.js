import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Circle, Group } from 'react-konva';
import {
  MOLECULE_AREA_DEFAULT_RADIUS,
  CLEAR_BUTTON_FILL,
  CLEAR_BUTTON_RADIUS,
  CLEAR_BUTTON_LINE_LENGTH,
  MOLECULE_AREA_STATE,
} from '../../../constants/constants';
import {
  clearMoleculeArea,
  resetIntervalCount,
  selectMolecule,
  setMoleculeArea,
  toggleHighlightAll,
  toggleShowElectricFieldVectors,
  toggleShowReEmission,
} from '../../../actions';
import ClearButtonLine from './common/ClearButtonLine';

const ClearButton = ({ x, y, containerIndex }) => {
  const dispatch = useDispatch();
  const { moleculesOnCanvas } = useSelector(({ lab }) => lab);
  const { height } = useSelector(({ layout }) => layout.lab.stageDimensions);
  const moleculeAreaRadius = height * MOLECULE_AREA_DEFAULT_RADIUS;
  const clearButtonRadius = height * CLEAR_BUTTON_RADIUS;
  const lineLength = CLEAR_BUTTON_LINE_LENGTH;
  const { ACTIVE, EMPTY, AWAITING_DELETE, FULL } = MOLECULE_AREA_STATE;

  const handleClear = () => {
    moleculesOnCanvas.forEach((molecule, index) => {
      if (index === containerIndex) {
        dispatch(clearMoleculeArea({ index: containerIndex }));
      } else if (molecule.moleculeAreaStatus === ACTIVE) {
        dispatch(setMoleculeArea({ index, status: EMPTY }));
      } else if (molecule.moleculeAreaStatus === AWAITING_DELETE) {
        dispatch(setMoleculeArea({ index, status: FULL }));
      }
    });
    dispatch(resetIntervalCount());
    dispatch(toggleHighlightAll(false));
    dispatch(toggleShowElectricFieldVectors(false));
    dispatch(toggleShowReEmission(false));
    dispatch(selectMolecule(null));
  };

  return (
    <Group onClick={handleClear} x={x} y={y - moleculeAreaRadius}>
      <Circle fill={CLEAR_BUTTON_FILL} radius={clearButtonRadius} />
      <ClearButtonLine points={[0, 0, lineLength, lineLength]} />
      <ClearButtonLine points={[0, 0, -lineLength, lineLength]} />
      <ClearButtonLine points={[0, 0, lineLength, -lineLength]} />
      <ClearButtonLine points={[0, 0, -lineLength, -lineLength]} />
    </Group>
  );
};

ClearButton.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  containerIndex: PropTypes.number.isRequired,
};

export default ClearButton;
