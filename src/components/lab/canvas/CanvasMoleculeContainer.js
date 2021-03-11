import React from 'react';
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
} from '../../../config/constants';
import CanvasMoleculeArea from './CanvasMoleculeArea';
import CanvasWater from './molecules/CanvasWater';
import CanvasCarbonDioxide from './molecules/CanvasCarbonDioxde';
import CanvasOzone from './molecules/CanvasOzone';
import CanvasNitrousOxide from './molecules/CanvasNitrousOxide';
import CanvasMethane from './molecules/CanvasMethane';
import CanvasDinitrogen from './molecules/CanvasDinitrogen';
import CanvasDioxygen from './molecules/CanvasDioxygen';
import CanvasArgonMolecule from './molecules/CanvasArgonMolecule';

const CanvasMoleculeContainer = ({
  x,
  moleculeToDisplay,
  moleculeAreaStatus,
  containerIndex,
}) => {
  let moleculeComponent = null;
  switch (moleculeToDisplay) {
    case WATER_MOLECULE_ID:
      moleculeComponent = <CanvasWater x={x} />;
      break;
    case CARBON_DIOXIDE_MOLECULE_ID:
      moleculeComponent = <CanvasCarbonDioxide x={x} />;
      break;
    case OZONE_MOLECULE_ID:
      moleculeComponent = <CanvasOzone x={x} />;
      break;
    case NITROUS_OXIDE_MOLECULE_ID:
      moleculeComponent = <CanvasNitrousOxide x={x} />;
      break;
    case METHANE_MOLECULE_ID:
      moleculeComponent = <CanvasMethane x={x} />;
      break;
    case DINITROGEN_MOLECULE_ID:
      moleculeComponent = <CanvasDinitrogen x={x} />;
      break;
    case DIOXYGEN_MOLECULE_ID:
      moleculeComponent = <CanvasDioxygen x={x} />;
      break;
    case ARGON_MOLECULE_ID:
      moleculeComponent = <CanvasArgonMolecule x={x} />;
      break;
    default:
      moleculeComponent = null;
  }

  return (
    <CanvasMoleculeArea
      x={x}
      moleculeStatus={moleculeAreaStatus}
      containerIndex={containerIndex}
    >
      {moleculeComponent}
    </CanvasMoleculeArea>
  );
};

CanvasMoleculeContainer.propTypes = {
  x: PropTypes.number.isRequired,
  moleculeToDisplay: PropTypes.string.isRequired,
  moleculeAreaStatus: PropTypes.string.isRequired,
  containerIndex: PropTypes.number.isRequired,
};

export default CanvasMoleculeContainer;
