import React, { Component } from 'react';
import { ReactReduxContext, Provider, connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Stage, Layer } from 'react-konva';
import CanvasMoleculeContainer from './canvas/CanvasMoleculeContainer';
import {
  setStageDimensions,
  resetAllLines,
  toggleMoleculeOscillation,
} from '../../actions';
import {
  BACKGROUND_COLOR,
  CANVAS_NUMBER_OF_MOLECULES,
  CANVAS_MOLECULE_AREA_DEFAULT_RADIUS,
  SPECTRUMS,
} from '../../config/constants';
import EmittedLines from './EmittedLines';

const styles = () => ({
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    background: BACKGROUND_COLOR,
  },
  stage: {
    position: 'absolute',
  },
});

class Lab extends Component {
  static propTypes = {
    classes: PropTypes.shape({
      container: PropTypes.string.isRequired,
      stage: PropTypes.string.isRequired,
    }).isRequired,
    dispatchSetStageDimensions: PropTypes.func.isRequired,
    stageDimensions: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    }).isRequired,
    selectedMoleculeInSideMenu: PropTypes.string,
    moleculesOnCanvas: PropTypes.arrayOf(
      PropTypes.shape({
        molecule: PropTypes.string.isRequired,
        moleculeAreaStatus: PropTypes.string.isRequired,
        shouldOscillate: PropTypes.bool.isRequired,
      }),
    ).isRequired,
    dispatchResetAllLines: PropTypes.func.isRequired,
    spectrum: PropTypes.string.isRequired,
    dispatchToggleMoleculeOscillation: PropTypes.func.isRequired,
  };

  static defaultProps = {
    selectedMoleculeInSideMenu: null,
  };

  componentDidMount() {
    this.checkSize();
    const ro = new ResizeObserver(() => {
      this.checkSize();
    });
    ro.observe(document.querySelector(`#container`));
  }

  checkSize = () => {
    const {
      dispatchSetStageDimensions,
      dispatchResetAllLines,
      stageDimensions,
      spectrum,
      moleculesOnCanvas,
      dispatchToggleMoleculeOscillation,
    } = this.props;
    const stageWidth = this.container?.offsetWidth;
    const stageHeight = this.container?.offsetHeight;
    dispatchSetStageDimensions({
      width: stageWidth,
      height: stageHeight,
    });
    // if screen height is made *smaller*, reset radiation lines
    // otherwise, radiation will no longer be properly 'absorbed' (i.e. radiation lines will move past molecules)
    // since visible light radiation passes through all molecules, this reset is only necessary if the spectrum is infrared
    if (
      (stageDimensions.height !== stageHeight ||
        stageDimensions.width !== stageWidth) &&
      spectrum === SPECTRUMS.INFRARED
    ) {
      dispatchResetAllLines();
      moleculesOnCanvas.forEach((molecule, index) => {
        if (molecule.shouldOscillate) {
          dispatchToggleMoleculeOscillation({
            areaIndex: index,
            shouldOscillate: false,
          });
        }
      });
    }
  };

  determineMoleculeContainersCenterPoints = (
    totalWidth,
    numberOfContainers,
    containerRadius,
  ) => {
    const totalExcessWidth =
      totalWidth - containerRadius * 2 * numberOfContainers;
    const unitsToDistributeExcessWidth = 2 + (numberOfContainers - 1);
    const excessWidthPerUnit = totalExcessWidth / unitsToDistributeExcessWidth;
    const moleculeContainerCenterPoints = new Array(numberOfContainers)
      .fill()
      .map(
        (emptyElement, index) =>
          (excessWidthPerUnit + containerRadius) * (index + 1) +
          index * containerRadius,
      );
    return moleculeContainerCenterPoints;
  };

  render() {
    const {
      classes,
      stageDimensions,
      selectedMoleculeInSideMenu,
      moleculesOnCanvas,
    } = this.props;
    const moleculeContainerCenterPoints = this.determineMoleculeContainersCenterPoints(
      stageDimensions.width,
      CANVAS_NUMBER_OF_MOLECULES,
      CANVAS_MOLECULE_AREA_DEFAULT_RADIUS,
    );

    return (
      <div
        className={classes.container}
        id="container"
        ref={(node) => {
          this.container = node;
        }}
      >
        {/* below is necessary for redux store to be accessible by konva children */}
        {/* see https://github.com/konvajs/react-konva/issues/311 */}
        <ReactReduxContext.Consumer>
          {({ store }) => (
            <Stage
              className={classes.stage}
              width={stageDimensions.width}
              height={stageDimensions.height}
            >
              <Provider store={store}>
                <Layer>
                  <EmittedLines xPoints={moleculeContainerCenterPoints} />
                  {moleculeContainerCenterPoints.map((centerPoint, index) => (
                    <CanvasMoleculeContainer
                      x={centerPoint}
                      key={centerPoint}
                      isActive={selectedMoleculeInSideMenu !== ''}
                      containerIndex={index}
                      moleculeToDisplay={moleculesOnCanvas[index].molecule}
                      moleculeAreaStatus={
                        moleculesOnCanvas[index].moleculeAreaStatus
                      }
                      shouldOscillate={moleculesOnCanvas[index].shouldOscillate}
                    />
                  ))}
                </Layer>
              </Provider>
            </Stage>
          )}
        </ReactReduxContext.Consumer>
      </div>
    );
  }
}

const mapStateToProps = ({ layout, lab }) => ({
  stageDimensions: layout.lab.stageDimensions,
  selectedMoleculeInSideMenu: lab.selectedMoleculeInSideMenu,
  moleculesOnCanvas: lab.moleculesOnCanvas,
  spectrum: lab.spectrum,
});

const mapDispatchToProps = {
  dispatchSetStageDimensions: setStageDimensions,
  dispatchResetAllLines: resetAllLines,
  dispatchToggleMoleculeOscillation: toggleMoleculeOscillation,
};

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Lab);

const StyledComponent = withStyles(styles, { withTheme: true })(
  ConnectedComponent,
);

export default StyledComponent;
