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
import clsx from 'clsx';
import {
  setIsPaused,
  setMoleculeAreaStatus,
  selectMoleculeInSideMenu,
  resetAllSettings,
  incrementIntervalCount,
  toggleHighlightAllSideMenuMolecules,
  decrementIntervalCount,
} from '../../actions';
import {
  APPLICATION_INTERVAL,
  CANVAS_MOLECULE_AREA_STATE,
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
  const {
    moleculesOnCanvas,
    spectrum,
    showAtomsCharges,
    showReEmission,
    showElectricFieldVectors,
    isPaused,
    intervalCount,
  } = useSelector(({ lab }) => lab);
  const applicationInterval = useRef();

  // appSettings dispatched with Graasp actions to show user's selected configuration
  const appSettings = {
    moleculesOnCanvas,
    spectrum,
    showAtomsCharges,
    showReEmission,
    showElectricFieldVectors,
  };
  // eslint-disable-next-line no-console
  console.log(appSettings);

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

    // dispatch Graasp action
    // dispatch(postAction({ verb: CLICKED_PLAY, data: { ...appSettings } }));
  };

  const onClickPause = () => {
    dispatch(setIsPaused(true));
    // Graasp action
    // dispatch(postAction({ verb: CLICKED_PAUSE }));
  };

  const onClickReset = () => {
    dispatch(resetAllSettings());
    // Graasp action
    // dispatch(postAction({ verb: CLICKED_RESET }));
  };

  const onClickRewind = () => {
    dispatch(decrementIntervalCount());
    // Graasp action
    // dispatch(postAction({ verb: CLICKED_REWIND, data: { ...appSettings } }));
  };

  const onClickForward = () => {
    dispatch(incrementIntervalCount());
    // Graasp action
    // dispatch(postAction({ verb: CLICKED_FORWARD, data: { ...appSettings } }));
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
                className={clsx(classes.button, {
                  [classes.playButton]: !canvasIncomplete && isPaused,
                })}
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
                className={clsx(classes.button, {
                  [classes.pauseButton]: !isPaused && !canvasIncomplete,
                })}
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
              className={clsx(classes.button, {
                [classes.rewindButton]:
                  !canvasIncomplete && isPaused && intervalCount !== 0,
              })}
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
              className={clsx(classes.button, {
                [classes.forwardButton]: !canvasIncomplete && isPaused,
              })}
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
