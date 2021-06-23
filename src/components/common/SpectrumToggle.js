import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import {
  PAUSED_STRING,
  PLAYING_STRING,
  SPECTRUMS,
} from '../../config/constants';
import {
  postAction,
  resetIntervalCount,
  toggleShowElectricFieldVectors,
  toggleShowReEmission,
  toggleSpectrum,
} from '../../actions';
import { TOGGLED_SPECTRUM } from '../../config/verbs';

const useStyles = makeStyles(() => ({
  switchWithTwoLabelsContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const SpectrumToggle = () => {
  const { t } = useTranslation();
  const { spectrum, isPaused } = useSelector(({ lab }) => lab);
  const dispatch = useDispatch();
  const applicationState = isPaused ? PAUSED_STRING : PLAYING_STRING;

  const handleToggle = () => {
    if (spectrum === SPECTRUMS.VISIBLE_LIGHT) {
      dispatch(
        resetIntervalCount(),
        dispatch(toggleSpectrum(SPECTRUMS.INFRARED)),
      );
      // dispatch Graasp action
      dispatch(
        postAction({
          verb: TOGGLED_SPECTRUM,
          data: { newSpectrum: SPECTRUMS.INFRARED, applicationState },
        }),
      );
    } else if (spectrum === SPECTRUMS.INFRARED) {
      dispatch(
        resetIntervalCount(),
        dispatch(toggleSpectrum(SPECTRUMS.VISIBLE_LIGHT)),
      );
      dispatch(toggleShowElectricFieldVectors(false));
      dispatch(toggleShowReEmission(false));
      // dispatch Graasp action
      dispatch(
        postAction({
          verb: TOGGLED_SPECTRUM,
          data: { newSpectrum: SPECTRUMS.VISIBLE_LIGHT, applicationState },
        }),
      );
    }
  };

  const classes = useStyles();
  return (
    <Grid
      container
      alignItems="center"
      spacing={1}
      className={classes.switchWithTwoLabelsContainer}
    >
      <Grid item>{t('Infrared')}</Grid>
      <Grid item>
        <Switch
          checked={spectrum === SPECTRUMS.VISIBLE_LIGHT}
          onChange={handleToggle}
          value={spectrum}
          color="primary"
        />
      </Grid>
      <Grid item>{t('Visible Light')}</Grid>
    </Grid>
  );
};

export default SpectrumToggle;
