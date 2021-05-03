import React, { Component } from 'react';
import { ReactReduxContext, Provider, connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Stage, Layer } from 'react-konva';
import CanvasMoleculeContainer from './canvas/CanvasMoleculeContainer';
import {
  setIntervalsToReachMoleculeCenter,
  setMoleculeCenterYFromBottomOfCanvas,
  setOscillationDirection,
  setStageDimensions,
} from '../../actions';
import {
  BACKGROUND_COLOR,
  CANVAS_NUMBER_OF_MOLECULES,
  CANVAS_MOLECULE_AREA_DEFAULT_RADIUS,
  SPECTRUMS,
  Y_SHIFT_PER_INTERVAL,
  INFRARED_RADIATION_CURVE_PERIOD,
} from '../../config/constants';
import RadiationLines from './RadiationLines';
import ElectricFieldVectorGroups from './ElectricFieldVectorGroups';

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
      }),
    ).isRequired,
    spectrum: PropTypes.string.isRequired,
    showElectricFieldVectors: PropTypes.bool.isRequired,
    moleculeCenterYFromBottomOfCanvas: PropTypes.number.isRequired,
    dispatchSetMoleculeCenterYFromBottomOfCanvas: PropTypes.func.isRequired,
    dispatchSetIntervalsToReachMoleculeCenter: PropTypes.func.isRequired,
    dispatchSetOscillationDirection: PropTypes.func.isRequired,
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

  componentDidUpdate() {
    const {
      stageDimensions,
      dispatchSetMoleculeCenterYFromBottomOfCanvas,
      dispatchSetIntervalsToReachMoleculeCenter,
      dispatchSetOscillationDirection,
    } = this.props;
    // code to adjust 'molecule container' center points as screen height changes
    // without such adjustments, on bigger screens the default molecule container positioning is too low
    // note that, (1) molecule container center points are also the points where infrared radiation gets absorbed for certain molecules
    // hence, two other variables need to be updated along with the center points (intervals to reach molecule center and oscillation direction)
    // (2) molecule container center points must **always** be 0.5x, 1x, 1.5x (etc) multiples of the infrared radiation curve period
    // this is so that the radiation curve meets the center point (and gets absorbed, triggering oscillation) with a molecule correctly positioned at rest
    // (3) the cut-offs of >=1400, >=900, <900 were chosen 'manually' (by eye-balling and seeing what looks good)
    if (stageDimensions.height >= 1400) {
      const newCenterPoint = 2 * INFRARED_RADIATION_CURVE_PERIOD;
      dispatchSetMoleculeCenterYFromBottomOfCanvas(newCenterPoint);
      dispatchSetIntervalsToReachMoleculeCenter(
        newCenterPoint / Y_SHIFT_PER_INTERVAL,
      );
      dispatchSetOscillationDirection(1);
    } else if (stageDimensions.height >= 900) {
      const newCenterPoint = 1.5 * INFRARED_RADIATION_CURVE_PERIOD;
      dispatchSetMoleculeCenterYFromBottomOfCanvas(newCenterPoint);
      dispatchSetIntervalsToReachMoleculeCenter(
        newCenterPoint / Y_SHIFT_PER_INTERVAL,
      );
      dispatchSetOscillationDirection(-1);
    } else if (stageDimensions.height < 900) {
      const newCenterPoint = 1 * INFRARED_RADIATION_CURVE_PERIOD;
      dispatchSetMoleculeCenterYFromBottomOfCanvas(newCenterPoint);
      dispatchSetIntervalsToReachMoleculeCenter(
        newCenterPoint / Y_SHIFT_PER_INTERVAL,
      );
      dispatchSetOscillationDirection(1);
    }
  }

  checkSize = () => {
    const { dispatchSetStageDimensions } = this.props;
    const stageWidth = this.container?.offsetWidth;
    const stageHeight = this.container?.offsetHeight;
    dispatchSetStageDimensions({
      width: stageWidth,
      height: stageHeight,
    });
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
      spectrum,
      showElectricFieldVectors,
      moleculeCenterYFromBottomOfCanvas,
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
                  <RadiationLines xPoints={moleculeContainerCenterPoints} />
                  {spectrum === SPECTRUMS.INFRARED &&
                    showElectricFieldVectors &&
                    moleculeContainerCenterPoints.map((centerPoint, index) => (
                      <ElectricFieldVectorGroups
                        x={centerPoint}
                        // eslint-disable-next-line react/no-array-index-key
                        key={index}
                        groupIndex={index}
                      />
                    ))}
                  {moleculeContainerCenterPoints.map((centerPoint, index) => (
                    <CanvasMoleculeContainer
                      x={centerPoint}
                      y={
                        stageDimensions.height -
                        moleculeCenterYFromBottomOfCanvas
                      }
                      key={centerPoint}
                      isActive={selectedMoleculeInSideMenu !== ''}
                      containerIndex={index}
                      moleculeToDisplay={moleculesOnCanvas[index].molecule}
                      moleculeAreaStatus={
                        moleculesOnCanvas[index].moleculeAreaStatus
                      }
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
  showElectricFieldVectors: lab.showElectricFieldVectors,
  moleculeCenterYFromBottomOfCanvas: layout.moleculeCenterYFromBottomOfCanvas,
});

const mapDispatchToProps = {
  dispatchSetStageDimensions: setStageDimensions,
  dispatchSetMoleculeCenterYFromBottomOfCanvas: setMoleculeCenterYFromBottomOfCanvas,
  dispatchSetIntervalsToReachMoleculeCenter: setIntervalsToReachMoleculeCenter,
  dispatchSetOscillationDirection: setOscillationDirection,
};

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Lab);

const StyledComponent = withStyles(styles, { withTheme: true })(
  ConnectedComponent,
);

export default StyledComponent;
