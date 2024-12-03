import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Group } from 'react-konva';
import { ACTIVE_MOLECULE_AREA_PLUS_LENGTH } from '../../../constants/constants';
import PlusSignLine from './common/PlusSignLine';

const ActiveMoleculeAreaPlus = ({ x, y }) => {
  const { height } = useSelector(({ layout }) => layout.lab.stageDimensions);
  const plusLength = ACTIVE_MOLECULE_AREA_PLUS_LENGTH * height;

  return (
    <Group x={x} y={y}>
      <PlusSignLine points={[0, 0, plusLength, 0]} />
      <PlusSignLine points={[0, 0, -plusLength, 0]} />
      <PlusSignLine points={[0, 0, 0, plusLength]} />
      <PlusSignLine points={[0, 0, 0, -plusLength]} />
    </Group>
  );
};

ActiveMoleculeAreaPlus.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default ActiveMoleculeAreaPlus;
