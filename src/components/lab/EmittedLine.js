import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Line } from 'react-konva';
import {
  EMITTED_LINE_STROKE_COLOR,
  EMITTED_LINE_STROKE_WIDTH,
  EMITTED_LINE_TENSION,
  EMITTED_LINE_INTERVAL_TIME,
  EMITTED_LINE_AMPLITUDE,
  EMITTED_LINE_STEP,
  INFRARED_OSCILLATION_CONSTANT_INCREMENT,
  VISIBLE_LIGHT_OSCILLATION_CONSTANT_INCREMENT,
  INFRARED_SPECTRUM,
} from '../../config/constants';
import { updateLinePoints } from '../../actions';

class EmittedLine extends Component {
  static propTypes = {
    x: PropTypes.number.isRequired,
    stageDimensions: PropTypes.shape({
      height: PropTypes.number,
      width: PropTypes.number,
    }).isRequired,
    isPaused: PropTypes.bool.isRequired,
    lineIndex: PropTypes.number.isRequired,
    emittedLines: PropTypes.arrayOf(
      PropTypes.shape({
        points: PropTypes.arrayOf(PropTypes.number),
        oscillationConstant: PropTypes.number.isRequired,
      }),
    ).isRequired,
    dispatchUpdateLinePoints: PropTypes.func.isRequired,
    spectrum: PropTypes.string.isRequired,
  };

  componentDidUpdate({ isPaused: prevIsPaused }) {
    const { isPaused } = this.props;
    if (isPaused !== prevIsPaused && isPaused) {
      clearInterval(this.emittedLineInterval);
    } else if (isPaused !== prevIsPaused && !isPaused) {
      this.beginLineInterval();
    }
  }

  beginLineInterval = () => {
    this.emittedLineInterval = setInterval(() => {
      const {
        lineIndex,
        emittedLines,
        dispatchUpdateLinePoints,
        spectrum,
      } = this.props;
      const currentLinePoints = emittedLines[lineIndex].points;
      const currentLineOscillationConstant =
        emittedLines[lineIndex].oscillationConstant;

      // note: formula for sinusoidal oscillation is Amplitude * Math.sin(2Pi*frequency*timeInSeconds)
      // in this case 2Pi*frequency*timeInSeconds is compressed into an oscillationConstant, which is incremented each interval
      const x =
        Math.sin(currentLineOscillationConstant) * EMITTED_LINE_AMPLITUDE;

      const newPoints = currentLinePoints
        .slice(2)
        .map((value, index) =>
          index % 2 === 0
            ? value + Math.cos(-Math.PI / 2) * EMITTED_LINE_STEP
            : value + Math.sin(-Math.PI / 2) * EMITTED_LINE_STEP,
        );

      dispatchUpdateLinePoints({
        points: [x, 0, x, 0, ...newPoints],
        oscillationConstant:
          currentLineOscillationConstant +
          (spectrum === INFRARED_SPECTRUM
            ? INFRARED_OSCILLATION_CONSTANT_INCREMENT
            : VISIBLE_LIGHT_OSCILLATION_CONSTANT_INCREMENT),
        lineIndex,
      });
    }, EMITTED_LINE_INTERVAL_TIME);
  };

  render() {
    const { x, stageDimensions, lineIndex, emittedLines } = this.props;
    const currentLinePoints = emittedLines[lineIndex].points;

    return (
      <Line
        x={x}
        y={stageDimensions.height}
        points={currentLinePoints}
        stroke={EMITTED_LINE_STROKE_COLOR}
        strokeWidth={EMITTED_LINE_STROKE_WIDTH}
        tension={EMITTED_LINE_TENSION}
      />
    );
  }
}

const mapStateToProps = ({ layout, lab }) => ({
  stageDimensions: layout.lab.stageDimensions,
  isPaused: lab.isPaused,
  emittedLines: lab.emittedLines,
  spectrum: lab.spectrum,
});

const mapDispatchToProps = {
  dispatchUpdateLinePoints: updateLinePoints,
};

const ConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EmittedLine);

export default ConnectedComponent;
