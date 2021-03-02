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
  switch (moleculeToDisplay) {
    case WATER_MOLECULE_ID:
      return (
        <CanvasMoleculeArea
          x={x}
          moleculeStatus={moleculeAreaStatus}
          containerIndex={containerIndex}
        >
          <CanvasWater x={x} />
        </CanvasMoleculeArea>
      );
    case CARBON_DIOXIDE_MOLECULE_ID:
      return (
        <CanvasMoleculeArea
          x={x}
          moleculeStatus={moleculeAreaStatus}
          containerIndex={containerIndex}
        >
          <CanvasCarbonDioxide x={x} />
        </CanvasMoleculeArea>
      );
    case OZONE_MOLECULE_ID:
      return (
        <CanvasMoleculeArea
          x={x}
          moleculeStatus={moleculeAreaStatus}
          containerIndex={containerIndex}
        >
          <CanvasOzone x={x} />
        </CanvasMoleculeArea>
      );
    case NITROUS_OXIDE_MOLECULE_ID:
      return (
        <CanvasMoleculeArea
          x={x}
          moleculeStatus={moleculeAreaStatus}
          containerIndex={containerIndex}
        >
          <CanvasNitrousOxide x={x} />
        </CanvasMoleculeArea>
      );
    case METHANE_MOLECULE_ID:
      return (
        <CanvasMoleculeArea
          x={x}
          moleculeStatus={moleculeAreaStatus}
          containerIndex={containerIndex}
        >
          <CanvasMethane x={x} />
        </CanvasMoleculeArea>
      );
    case DINITROGEN_MOLECULE_ID:
      return (
        <CanvasMoleculeArea
          x={x}
          moleculeStatus={moleculeAreaStatus}
          containerIndex={containerIndex}
        >
          <CanvasDinitrogen x={x} />
        </CanvasMoleculeArea>
      );
    case DIOXYGEN_MOLECULE_ID:
      return (
        <CanvasMoleculeArea
          x={x}
          moleculeStatus={moleculeAreaStatus}
          containerIndex={containerIndex}
        >
          <CanvasDioxygen x={x} />
        </CanvasMoleculeArea>
      );
    case ARGON_MOLECULE_ID:
      return (
        <CanvasMoleculeArea
          x={x}
          moleculeStatus={moleculeAreaStatus}
          containerIndex={containerIndex}
        >
          <CanvasArgonMolecule x={x} />
        </CanvasMoleculeArea>
      );
    default:
      return (
        <CanvasMoleculeArea
          x={x}
          moleculeStatus={moleculeAreaStatus}
          containerIndex={containerIndex}
        />
      );
  }
};

CanvasMoleculeContainer.propTypes = {
  x: PropTypes.number.isRequired,
  moleculeToDisplay: PropTypes.string.isRequired,
  moleculeAreaStatus: PropTypes.string.isRequired,
  containerIndex: PropTypes.number.isRequired,
};

export default CanvasMoleculeContainer;
