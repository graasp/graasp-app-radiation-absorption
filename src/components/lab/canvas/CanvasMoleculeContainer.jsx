import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  WATER_ID,
  CARBON_DIOXIDE_ID,
  OZONE_ID,
  NITROUS_OXIDE_ID,
  METHANE_ID,
  DINITROGEN_ID,
  DIOXYGEN_ID,
  ARGON_ID,
  SPECTRUMS,
} from '../../../constants/strings';
import {
  Y_SHIFT_PER_INTERVAL,
  INFRARED_RADIATION_PERIOD,
} from '../../../constants/constants';
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
  const { intervalCount, spectrum } = useSelector(({ lab }) => lab);
  const { intervalsToReachMoleculeCenter, oscillationDirection } = useSelector(
    ({ layout }) => layout,
  );

  // we know that after intervalsToReachMoleculeCenter, the radiation lines have reached the center of the molecule
  // at this point, if the spectrum is INFRARED, the molecule should begin oscillating
  // shouldOscillate and oscillationPoint are passed as props to molecules which oscillate (greenhouse gases)
  const shouldOscillate =
    intervalCount > intervalsToReachMoleculeCenter &&
    spectrum === SPECTRUMS.INFRARED;
  const oscillationPoint = Math.sin(
    intervalCount * Y_SHIFT_PER_INTERVAL * INFRARED_RADIATION_PERIOD,
  );
  const oscillationFactor = oscillationDirection * oscillationPoint;

  let moleculeComponent = null;
  switch (moleculeToDisplay) {
    case WATER_ID:
      moleculeComponent = (
        <CanvasWater
          moleculeCenter={{ x, y }}
          shouldOscillate={shouldOscillate}
          oscillationFactor={oscillationFactor}
        />
      );
      break;
    case CARBON_DIOXIDE_ID:
      moleculeComponent = (
        <CanvasCarbonDioxide
          moleculeCenter={{ x, y }}
          shouldOscillate={shouldOscillate}
          oscillationFactor={oscillationFactor}
        />
      );
      break;
    case OZONE_ID:
      moleculeComponent = (
        <CanvasOzone
          moleculeCenter={{ x, y }}
          shouldOscillate={shouldOscillate}
          oscillationFactor={oscillationFactor}
        />
      );
      break;
    case NITROUS_OXIDE_ID:
      moleculeComponent = (
        <CanvasNitrousOxide
          moleculeCenter={{ x, y }}
          shouldOscillate={shouldOscillate}
          oscillationFactor={oscillationFactor}
        />
      );
      break;
    case METHANE_ID:
      moleculeComponent = (
        <CanvasMethane
          moleculeCenter={{ x, y }}
          shouldOscillate={shouldOscillate}
          oscillationFactor={oscillationFactor}
        />
      );
      break;
    case DINITROGEN_ID:
      moleculeComponent = <CanvasDinitrogen moleculeCenter={{ x, y }} />;
      break;
    case DIOXYGEN_ID:
      moleculeComponent = <CanvasDioxygen moleculeCenter={{ x, y }} />;
      break;
    case ARGON_ID:
      moleculeComponent = <CanvasArgonMolecule moleculeCenter={{ x, y }} />;
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
