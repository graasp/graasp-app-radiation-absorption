import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
  setBeginReEmissionIntervalCount,
  toggleShowReEmission,
} from '../../actions';
import {
  GREENHOUSE_GASES,
  INTERVALS_TO_COMPLETE_INFRARED_RADIATION_PERIOD,
  SPECTRUMS,
} from '../../config/constants';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: theme.spacing(0.5, 0),
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  label: {
    display: 'block',
  },
  labelContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  circularProgress: {
    marginLeft: 10,
  },
}));

// re-emission lines begin emanating from greenhouse gas molecules when ReEmissionSwitch is toggled on...
// ...but *not exactly* when it is toggled on
// why? since greenhouse molecules are oscillating, the switch might be toggled on when they are out of position
// in such a case, the re-emission lines will drop out of sync with the molecule, a visually unappealing effect
// hence, when ReEmissionSwitch is toggled on, we wait until molecules are back at the next 'correct' position for re-emission, then emit lines
// in the meantime, since this wait can last 2-3 seconds, we show a small loading spinner near the toggle
const ReEmissionSwitch = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    intervalCount,
    moleculesOnCanvas,
    showReEmission,
    spectrum,
    beginReEmissionIntervalCount,
    isPaused,
  } = useSelector(({ lab }) => lab);
  const intervalsToReachMoleculeCenter = useSelector(
    ({ layout }) => layout.intervalsToReachMoleculeCenter,
  );

  const onSwitchToggle = () => {
    // first, toggle showReEmission on/off
    dispatch(toggleShowReEmission(!showReEmission));

    // if the switch is toggled on *before* original radiation lines have reached the molecule center...
    // (e.g. when the app is first loaded, the switch is toggled on)
    // ...then the re-emission lines should simply start propagating from the moment of absorption
    // i.e. make beginReEmissionIntervalCount to be the same as intervalsToReachMoleculeCenter
    if (intervalCount <= intervalsToReachMoleculeCenter) {
      // case where switch is off then toggled on
      if (!showReEmission) {
        dispatch(
          setBeginReEmissionIntervalCount(intervalsToReachMoleculeCenter),
        );
      }
      // when switch is on and toggled off, reset the beginReEmissionIntervalCount to 0
      // this else is not strictly necessary, but it is kept for code cleanliness
      // (why not necessary? if the switch is toggled off, then <ReEmittedLines /> will not show any lines anyway)
      else {
        dispatch(setBeginReEmissionIntervalCount(0));
      }
    }
    // else condition: the switch is toggled on when intervalCount > intervalsToReachMoleculeCenter
    // i.e. at any point after original radiation lines have been absorbed
    // in this case, make beginReEmissionIntervalCount the next interval at which oscillating molecules are back at original position
    else if (!showReEmission) {
      const nextIntervalWithCompleteOscillation =
        intervalsToReachMoleculeCenter +
        Math.ceil(
          (intervalCount - intervalsToReachMoleculeCenter) /
            INTERVALS_TO_COMPLETE_INFRARED_RADIATION_PERIOD,
        ) *
          INTERVALS_TO_COMPLETE_INFRARED_RADIATION_PERIOD;
      dispatch(
        setBeginReEmissionIntervalCount(nextIntervalWithCompleteOscillation),
      );
    } else {
      dispatch(setBeginReEmissionIntervalCount(0));
    }
  };

  // if no greenhouse gases on canvas, then no need to show a loading spinner, since there is no absorption/re-emission
  const canvasContainsGreenhouseGas = moleculesOnCanvas.some(({ molecule }) =>
    GREENHOUSE_GASES.includes(molecule),
  );

  // 'progress' = what % of the way are we there for re-emission to begin
  // e.g. say beginReEmission has been set to happen at interval 384
  // if we are currently on (i.e. intervalCount is) 280, then re-emission will happen in 384 - 280 = 104 intervals
  // with a period of 128, that means we are (128 - 104) / 128 of the way there
  const progress =
    (INTERVALS_TO_COMPLETE_INFRARED_RADIATION_PERIOD -
      (beginReEmissionIntervalCount - intervalCount)) /
    INTERVALS_TO_COMPLETE_INFRARED_RADIATION_PERIOD;

  // show the loading spinner if...
  // (1) the toggle is switched on **after** original radiation lines have been absorbed,
  // (otherwise, we don't want to show a loading spinner, since no re-emission is expected before absorption has occurred)
  // (2) the canvas contains a greenhouse gas,
  // (3) showReEmission is toggled on
  // (4) progress variable (explained above) is < 1
  // (5) simulation is playing
  const showCircularProgress =
    intervalCount > intervalsToReachMoleculeCenter &&
    canvasContainsGreenhouseGas &&
    showReEmission &&
    progress < 1 &&
    !isPaused;

  const Control = (
    <Switch
      checked={showReEmission}
      onChange={onSwitchToggle}
      name={t('Re-emission')}
      color="primary"
    />
  );

  const Label = (
    <div className={classes.labelContainer}>
      <Typography variant="body2" className={classes.label}>
        {t('Re-emission')}
      </Typography>
      {showCircularProgress && (
        <CircularProgress className={classes.circularProgress} size={20} />
      )}
    </div>
  );

  return (
    <FormControlLabel
      className={classes.wrapper}
      control={Control}
      label={Label}
      labelPlacement="start"
      disabled={spectrum === SPECTRUMS.VISIBLE_LIGHT}
    />
  );
};

export default ReEmissionSwitch;
