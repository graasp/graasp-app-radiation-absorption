export const determineCoordinates = (
  moleculeCenter,
  atom,
  canvasHeight,
  animationOscillating = false,
  oscillationFactor = 0,
) => {
  const { x: moleculeCenterX, y: moleculeCenterY } = moleculeCenter;
  const { x: atomXPoint, y: atomYPoint } = atom;
  const {
    offset: xOffset,
    oscillates: xOscillates,
    amplitude: xAmplitude,
  } = atomXPoint;
  const {
    offset: yOffset,
    oscillates: yOscillates,
    amplitude: yAmplitude,
  } = atomYPoint;
  const atomInitialX = moleculeCenterX + xOffset * canvasHeight;
  const atomInitialY = moleculeCenterY + yOffset * canvasHeight;
  return {
    x:
      xOscillates && animationOscillating
        ? atomInitialX + oscillationFactor * xAmplitude * canvasHeight
        : atomInitialX,
    y:
      yOscillates && animationOscillating
        ? atomInitialY + oscillationFactor * yAmplitude * canvasHeight
        : atomInitialY,
  };
};
