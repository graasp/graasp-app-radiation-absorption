import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import FastForwardIcon from '@material-ui/icons/FastForward';
import FastRewindIcon from '@material-ui/icons/FastRewind';
import { green, yellow, orange, blue, red } from '@material-ui/core/colors';
import {
  setIsPaused,
  setMoleculeAreaStatus,
  selectMoleculeInSideMenu,
  resetAllSettings,
  incrementIntervalCount,
  toggleHighlightAllSideMenuMolecules,
  decrementIntervalCount,
  toggleShowElectricFieldVectors,
} from '../../actions';
import {
  APPLICATION_INTERVAL,
  CANVAS_MOLECULE_AREA_STATE,
  INTERVALS_TO_REACH_MOLECULE_CENTER,
} from '../../config/constants';

const useStyles = makeStyles(() => ({
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    fontSize: '1.75em',
  },
  playButton: { color: green[800] },
  pauseButton: { color: yellow[800] },
  resetButton: { color: orange[800] },
  rewindButton: { color: red[800] },
  forwardButton: { color: blue[800] },
}));

const AnimationControls = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const moleculesOnCanvas = useSelector(({ lab }) => lab.moleculesOnCanvas);
  const isPaused = useSelector(({ lab }) => lab.isPaused);
  const intervalCount = useSelector(({ lab }) => lab.intervalCount);
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

  const onClickPlay = () => {
    // if some molecule has an active deletion area, clear that area
    // this happens when: (1) animation is playing, (2) user clicks on a molecule (activating it for deletion), (3) user clicks back on play button
    moleculesOnCanvas.forEach((molecule, index) => {
      if (
        molecule.moleculeAreaStatus ===
        CANVAS_MOLECULE_AREA_STATE.AWAITING_DELETE
      ) {
        dispatch(
          setMoleculeAreaStatus({
            areaIndex: index,
            newStatus: CANVAS_MOLECULE_AREA_STATE.FULL,
          }),
        );
      }
    });
    dispatch(setIsPaused(false));
    dispatch(selectMoleculeInSideMenu(null));
    dispatch(toggleHighlightAllSideMenuMolecules(false));
  };

  const onClickPause = () => {
    dispatch(setIsPaused(true));
  };

  const onClickReset = () => {
    dispatch(resetAllSettings());
  };

  const onClickRewind = () => {
    dispatch(decrementIntervalCount());
    if (intervalCount === INTERVALS_TO_REACH_MOLECULE_CENTER) {
      dispatch(toggleShowElectricFieldVectors(false));
    }
  };

  const onClickForward = () => {
    dispatch(incrementIntervalCount());
  };

  return (
    <div className={classes.buttonContainer}>
      {isPaused ? (
        <Tooltip title={t('Play')} placement="left">
          {/* Note: <span>s added to clear console error: 
        'Material-UI: You are providing a disabled `button` child to the Tooltip component...
        Add a simple wrapper element, such as a `span`.' */}
          <span>
            <IconButton
              disabled={canvasIncomplete || !isPaused}
              onClick={onClickPlay}
            >
              <PlayCircleOutlineIcon
                className={`${classes.button} ${
                  isPaused && !canvasIncomplete ? classes.playButton : ''
                }`}
              />
            </IconButton>
          </span>
        </Tooltip>
      ) : (
        <Tooltip title={t('Pause')} placement="left">
          <span>
            <IconButton
              disabled={canvasIncomplete || isPaused}
              onClick={onClickPause}
            >
              <PauseCircleOutlineIcon
                className={`${classes.button} ${
                  !isPaused && !canvasIncomplete ? classes.pauseButton : ''
                }`}
              />
            </IconButton>
          </span>
        </Tooltip>
      )}

      <Tooltip title={t('Move Back')} placement="top">
        <span>
          <IconButton
            onClick={onClickRewind}
            disabled={canvasIncomplete || !isPaused || intervalCount === 0}
          >
            <FastRewindIcon
              className={`${classes.button} ${
                !canvasIncomplete && isPaused && intervalCount !== 0
                  ? classes.rewindButton
                  : ''
              }`}
            />
          </IconButton>
        </span>
      </Tooltip>

      <Tooltip title={t('Move Forward')} placement="top">
        <span>
          <IconButton
            onClick={onClickForward}
            disabled={canvasIncomplete || !isPaused}
          >
            <FastForwardIcon
              className={`${classes.button} ${
                !canvasIncomplete && isPaused ? classes.forwardButton : ''
              }`}
            />
          </IconButton>
        </span>
      </Tooltip>

      <Tooltip title={t('Reset')} placement="right">
        <span>
          <IconButton onClick={onClickReset}>
            <RotateLeftIcon
              className={`${classes.button} ${classes.resetButton}`}
            />
          </IconButton>
        </span>
      </Tooltip>
    </div>
  );
};

export default AnimationControls;
