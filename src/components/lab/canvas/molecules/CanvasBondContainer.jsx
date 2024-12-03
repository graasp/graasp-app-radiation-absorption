import React from 'react';
import PropTypes from 'prop-types';
import { Line, Group } from 'react-konva';
import {
  CANVAS_BOND_COLOR,
  DOUBLE_BOND_X_OFFSET,
  TRIPLE_BOND_X_OFFSET,
} from '../../../../constants/constants';

const CanvasBondContainer = ({ from, to, numberOfBonds }) => {
  const bondXOrigin = from.x;
  const bondYOrigin = from.y;
  const bondXEndpoint = to.x - from.x;
  const bondYEndpoint = to.y - from.y;

  if (numberOfBonds === 1) {
    return (
      <Group>
        <Line
          x={bondXOrigin}
          y={bondYOrigin}
          stroke={CANVAS_BOND_COLOR}
          points={[0, 0, bondXEndpoint, bondYEndpoint]}
        />
      </Group>
    );
  }

  if (numberOfBonds === 2) {
    return (
      <Group>
        <Line
          x={bondXOrigin + DOUBLE_BOND_X_OFFSET}
          y={bondYOrigin}
          stroke={CANVAS_BOND_COLOR}
          points={[0, 0, bondXEndpoint, bondYEndpoint]}
        />
        <Line
          x={bondXOrigin - DOUBLE_BOND_X_OFFSET}
          y={bondYOrigin}
          stroke={CANVAS_BOND_COLOR}
          points={[0, 0, bondXEndpoint, bondYEndpoint]}
        />
      </Group>
    );
  }

  return (
    <Group>
      <Line
        x={bondXOrigin - TRIPLE_BOND_X_OFFSET}
        y={bondYOrigin}
        stroke={CANVAS_BOND_COLOR}
        points={[0, 0, bondXEndpoint, bondYEndpoint]}
      />
      <Line
        x={bondXOrigin}
        y={bondYOrigin}
        stroke={CANVAS_BOND_COLOR}
        points={[0, 0, bondXEndpoint, bondYEndpoint]}
      />
      <Line
        x={bondXOrigin + TRIPLE_BOND_X_OFFSET}
        y={bondYOrigin}
        stroke={CANVAS_BOND_COLOR}
        points={[0, 0, bondXEndpoint, bondYEndpoint]}
      />
    </Group>
  );
};

CanvasBondContainer.propTypes = {
  from: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
  to: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
  numberOfBonds: PropTypes.number.isRequired,
};

export default CanvasBondContainer;
