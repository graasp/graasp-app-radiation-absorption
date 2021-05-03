import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  WATER_MOLECULE_ID,
  CARBON_DIOXIDE_MOLECULE_ID,
  OZONE_MOLECULE_ID,
  NITROUS_OXIDE_MOLECULE_ID,
  METHANE_MOLECULE_ID,
  DINITROGEN_MOLECULE_ID,
  DIOXYGEN_MOLECULE_ID,
  ARGON_MOLECULE_ID,
  SPECTRUMS,
  Y_SHIFT_PER_INTERVAL,
  INFRARED_RADIATION_PERIOD,
} from '../../../config/constants';
import CanvasMoleculeArea from './CanvasMoleculeArea';
import CanvasWater from './molecules/CanvasWater';
import CanvasCarbonDioxide from './molecules/CanvasCarbonDioxide';
import CanvasOzone from './molecules/CanvasOzone';
import CanvasNitrousOxide from './molecules/CanvasNitrousOxide';
import CanvasMethane from './molecules/CanvasMethane';
import CanvasDinitrogen from './molecules/CanvasDinitrogen';
import CanvasDioxygen from './molecules/CanvasDioxygen';
import CanvasArgonMolecule from './molecules/CanvasArgonMolecule';

const CanvasMoleculeContainer = ({
  x,
  y,
  moleculeToDisplay,
  moleculeAreaStatus,
  containerIndex,
}) => {
  const intervalCount = useSelector(({ lab }) => lab.intervalCount);
  const spectrum = useSelector(({ lab }) => lab.spectrum);
  const intervalsToReachMoleculeCenter = useSelector(
    ({ layout }) => layout.intervalsToReachMoleculeCenter,
  );
  const oscillationDirection = useSelector(
    ({ layout }) => layout.oscillationDirection,
  );

  // we know that after intervalsToReachMoleculeCenter, the radiation lines have reached the center of the molecule
  // at this point, if the spectrum is INFRARED, the molecule should begin oscillating
  // shouldOscillate and sinusoidalOscillationPoint are passed as props to molecules which oscillate (greenhouse gases)
  const shouldOscillate =
    intervalCount > intervalsToReachMoleculeCenter &&
    spectrum === SPECTRUMS.INFRARED;
  const sinusoidalOscillationPoint = Math.sin(
    intervalCount * Y_SHIFT_PER_INTERVAL * INFRARED_RADIATION_PERIOD,
  );

  let moleculeComponent = null;
  switch (moleculeToDisplay) {
    case WATER_MOLECULE_ID:
      moleculeComponent = (
        <CanvasWater
          x={x}
          y={y}
          shouldOscillate={shouldOscillate}
          sinusoidalOscillationPoint={sinusoidalOscillationPoint}
          oscillationDirection={oscillationDirection}
        />
      );
      break;
    case CARBON_DIOXIDE_MOLECULE_ID:
      moleculeComponent = (
        <CanvasCarbonDioxide
          x={x}
          y={y}
          shouldOscillate={shouldOscillate}
          sinusoidalOscillationPoint={sinusoidalOscillationPoint}
          oscillationDirection={oscillationDirection}
        />
      );
      break;
    case OZONE_MOLECULE_ID:
      moleculeComponent = (
        <CanvasOzone
          x={x}
          y={y}
          shouldOscillate={shouldOscillate}
          sinusoidalOscillationPoint={sinusoidalOscillationPoint}
          oscillationDirection={oscillationDirection}
        />
      );
      break;
    case NITROUS_OXIDE_MOLECULE_ID:
      moleculeComponent = (
        <CanvasNitrousOxide
          x={x}
          y={y}
          shouldOscillate={shouldOscillate}
          sinusoidalOscillationPoint={sinusoidalOscillationPoint}
          oscillationDirection={oscillationDirection}
        />
      );
      break;
    case METHANE_MOLECULE_ID:
      moleculeComponent = (
        <CanvasMethane
          x={x}
          y={y}
          shouldOscillate={shouldOscillate}
          sinusoidalOscillationPoint={sinusoidalOscillationPoint}
          oscillationDirection={oscillationDirection}
        />
      );
      break;
    case DINITROGEN_MOLECULE_ID:
      moleculeComponent = <CanvasDinitrogen x={x} y={y} />;
      break;
    case DIOXYGEN_MOLECULE_ID:
      moleculeComponent = <CanvasDioxygen x={x} y={y} />;
      break;
    case ARGON_MOLECULE_ID:
      moleculeComponent = <CanvasArgonMolecule x={x} y={y} />;
      break;
    default:
      moleculeComponent = null;
  }

  return (
    <CanvasMoleculeArea
      x={x}
      y={y}
      moleculeStatus={moleculeAreaStatus}
      containerIndex={containerIndex}
    >
      {moleculeComponent}
    </CanvasMoleculeArea>
  );
};

CanvasMoleculeContainer.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  moleculeToDisplay: PropTypes.string.isRequired,
  moleculeAreaStatus: PropTypes.string.isRequired,
  containerIndex: PropTypes.number.isRequired,
};

export default CanvasMoleculeContainer;
