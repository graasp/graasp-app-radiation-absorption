// remember, points on a Konva line are an array of the form [x_0, y_0, x_1, y_1, ..., x_n, y_n]
// each pair in that array represents an offset from the origin of the line
// we want to draw the line y = amplitude * sin(period * x)
// because the line we're drawing is vertical, our equation is in fact x = amplitude * sin(period * y)
// i.e. y point is given, x point is determined
// hence we can create a for loop: start at a given y, increment y by yIncrement
// the choice of increment is relevant: the more y points are input, the more the line is 'filled out'
const generateSineCurve = (
  currentInterval,
  stageHeight,
  absorptionPoint,
  yShiftPerInterval,
  yIncrement,
  amplitude,
  period,
) => {
  const sineCurvePoints = [];
  const curveHeight = stageHeight - absorptionPoint;
  const intervalsToReachAbsorptionPoint = curveHeight / yShiftPerInterval;
  if (currentInterval <= intervalsToReachAbsorptionPoint) {
    let y = 0;
    while (y < currentInterval * yShiftPerInterval) {
      sineCurvePoints.push(amplitude * Math.sin(y * period));
      sineCurvePoints.push(y - currentInterval * yShiftPerInterval);
      y += yIncrement;
    }
  } else {
    let y =
      (currentInterval - intervalsToReachAbsorptionPoint) * yShiftPerInterval;
    while (
      y <
      curveHeight +
        (currentInterval - intervalsToReachAbsorptionPoint) * yShiftPerInterval
    ) {
      sineCurvePoints.push(amplitude * Math.sin(y * period));
      sineCurvePoints.push(y - currentInterval * yShiftPerInterval);
      y += yIncrement;
    }
  }
  return sineCurvePoints;
};

module.exports = generateSineCurve;
