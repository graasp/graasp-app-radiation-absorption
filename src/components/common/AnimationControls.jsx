import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { incrementIntervalCount } from '../../actions';
import { APPLICATION_INTERVAL } from '../../constants/constants';
import PlayButton from './animation-controls/PlayButton';
import PauseButton from './animation-controls/PauseButton';
import RewindButton from './animation-controls/RewindButton';
import ForwardButton from './animation-controls/ForwardButton';
import ResetButton from './animation-controls/ResetButton';
import CloseSideMenu from './animation-controls/CloseSideMenu';
import StartTour from './animation-controls/StartTour';

const useStyles = makeStyles(() => ({
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  sideContainer: {
    width: '10%',
    display: 'flex',
    alignItems: 'center',
  },
  centerContainer: {
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    fontSize: '1.75em',
  },
}));

const AnimationControls = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { moleculesOnCanvas, isPaused } = useSelector(({ lab }) => lab);
  const applicationInterval = useRef();

  const canvasIncomplete = moleculesOnCanvas.some(
    ({ molecule }) => molecule === '',
  );

  const startInterval = () => {
    applicationInterval.current = setInterval(() => {
      dispatch(incrementIntervalCount());
    }, APPLICATION_INTERVAL);
  };

  useEffect(() => {
    if (isPaused) {
      clearInterval(applicationInterval.current);
    } else if (!isPaused) {
      startInterval();
    }
  }, [isPaused]);

  return (
    <div className={classes.buttonContainer}>
      <div className={classes.sideContainer}>
        <CloseSideMenu />
      </div>
      <div className={classes.centerContainer}>
        {isPaused ? (
          <PlayButton
            className={classes.button}
            canvasIncomplete={canvasIncomplete}
          />
        ) : (
          <PauseButton
            className={classes.button}
            canvasIncomplete={canvasIncomplete}
          />
        )}
        <RewindButton
          className={classes.button}
          canvasIncomplete={canvasIncomplete}
        />
        <ForwardButton
          className={classes.button}
          canvasIncomplete={canvasIncomplete}
        />
        <ResetButton className={classes.button} />
      </div>
      <div className={classes.sideContainer}>
        <StartTour />
      </div>
    </div>
  );
};

export default AnimationControls;
