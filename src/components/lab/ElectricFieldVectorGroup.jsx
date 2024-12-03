import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Group } from 'react-konva';
import {
  LARGE_ARROW_LENGTH,
  SMALL_ARROW_LENGTH,
  SMALL_ARROW_Y_RELATIVE_TO_LARGE_ARROW,
} from '../../constants/constants';
import CustomArrow from './canvas/common/CustomArrow';

const ElectricFieldVectorGroup = ({ x, y, direction, absorptionPoint }) => {
  const { height } = useSelector(({ layout }) => layout.lab.stageDimensions);

  // y positions of the three arrows in an electric field vector group
  const topArrowY = y - SMALL_ARROW_Y_RELATIVE_TO_LARGE_ARROW;
  const middleArrowY = y;
  const bottomArrowY = y + SMALL_ARROW_Y_RELATIVE_TO_LARGE_ARROW;
  // only show an arrow if its y position is greater than the absorption point
  const showTopArrow = topArrowY >= absorptionPoint;
  const showMiddleArrow = middleArrowY >= absorptionPoint;
  const showBottomArrow = bottomArrowY >= absorptionPoint;
  const smallArrowPoints = [0, 0, direction * SMALL_ARROW_LENGTH * height, 0];
  const largeArrowPoints = [0, 0, direction * LARGE_ARROW_LENGTH * height, 0];

  return (
    <Group x={x}>
      {showTopArrow && <CustomArrow y={topArrowY} points={smallArrowPoints} />}
      {showMiddleArrow && (
        <CustomArrow y={middleArrowY} points={largeArrowPoints} />
      )}
      {showBottomArrow && (
        <CustomArrow y={bottomArrowY} points={smallArrowPoints} />
      )}
    </Group>
  );
};

ElectricFieldVectorGroup.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  direction: PropTypes.number.isRequired,
  absorptionPoint: PropTypes.number.isRequired,
};

export default ElectricFieldVectorGroup;
