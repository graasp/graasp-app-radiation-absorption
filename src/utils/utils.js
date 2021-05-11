/* eslint-disable import/prefer-default-export */
export const determineCoordinates = (
  moleculeCenter,
  atom,
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
  const atomInitialX = moleculeCenterX + xOffset;
  const atomInitialY = moleculeCenterY + yOffset;
  return {
    x:
      xOscillates && animationOscillating
        ? atomInitialX + oscillationFactor * xAmplitude
        : atomInitialX,
    y:
      yOscillates && animationOscillating
        ? atomInitialY + oscillationFactor * yAmplitude
        : atomInitialY,
  };
};
