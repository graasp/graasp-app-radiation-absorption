import { SMALL_ARROW_Y_RELATIVE_TO_LARGE_ARROW } from '../constants/constants';

// a 'vector group' consists of three arrows pointing at a peak/trough of the sine curve (radiation line)
// every group's middle arrow is centered on a peak/trough
// given a group number and the current intervalCount, this function determines:
// (1) the y-position of that middle arrow in a vector group,
// (2) the direction the vector group is pointing in (1 = right, -1 = left)
// for example: the first vector group points at the sine curve's first peak, i.e. at the peak after one interval of the sine curve
// (noting that an 'interval' is one-quarter of the sine curve's period)
// since the sine curve starts off-screen, this first peak occurs at stageHeight (bottom of canvas) + one curveInterval
// the next group points at the trough following this peak, occuring two intervals afterwards (peak to 0 = one interval, 0 to trough = one interval)
// (and so on for subsequent peaks/troughs)
// finally, we subtract intervalCount * yShiftPerInterval from the group's y position, so that it moves upward along with the sine curve every interval
const determineVectorGroupYPosition = (
  groupNumber,
  intervalCount,
  yShiftPerInterval,
  stageHeight,
  curveInterval,
) => {
  return {
    y:
      stageHeight +
      curveInterval +
      2 * (groupNumber - 1) * curveInterval -
      intervalCount * yShiftPerInterval,
    direction: groupNumber % 2 === 1 ? 1 : -1,
  };
};

// the function above determines a vector group's y position given the vector group number
// this function determines which vector group numbers need to be plotted, given the current intervalCount
// (noting that just as radiation lines get absorbed, vector groups need to be absorbed/taken off screen)
const generateElectricFieldVectorGroupYPoints = (
  intervalCount,
  stageHeight,
  absorptionPoint,
  curveInterval,
  yShiftPerInterval,
) => {
  const distanceBetweenPeaksAndTroughs = 2 * curveInterval;
  const { y: firstVectorGroupYPosition } = determineVectorGroupYPosition(
    1,
    0,
    yShiftPerInterval,
    stageHeight,
    curveInterval,
  );

  const distanceBetweenFirstVectorGroupAndAbsorptionPoint =
    firstVectorGroupYPosition +
    SMALL_ARROW_Y_RELATIVE_TO_LARGE_ARROW -
    absorptionPoint;

  const intervalsForFirstVectorGroupToGetAbsorbed =
    distanceBetweenFirstVectorGroupAndAbsorptionPoint / yShiftPerInterval;

  const numberOfVectorGroups = Math.ceil(
    distanceBetweenFirstVectorGroupAndAbsorptionPoint /
      distanceBetweenPeaksAndTroughs,
  );

  // given the intervalCount, how many vector groups have been absorbed?
  const numberOfAbsorbedGroups =
    Math.floor(
      (intervalCount - intervalsForFirstVectorGroupToGetAbsorbed) /
        (distanceBetweenPeaksAndTroughs / yShiftPerInterval),
    ) + 1;

  // since we know how many groups have been absorbed, we know which the next vector group to display is
  // (if intervalCount < intervalsForFirstVectorGroupToGetAbsorbed, numberOfAbsorbedGroups is < 0; hence the ternary expression below)
  const firstGroupToDisplay =
    numberOfAbsorbedGroups <= 0 ? 1 : numberOfAbsorbedGroups + 1;

  const electricFieldVectorYPoints = new Array(numberOfVectorGroups)
    .fill()
    .map((emptyElement, index) =>
      determineVectorGroupYPosition(
        firstGroupToDisplay + index,
        intervalCount,
        yShiftPerInterval,
        stageHeight,
        curveInterval,
      ),
    );

  return electricFieldVectorYPoints;
};

export default generateElectricFieldVectorGroupYPoints;
