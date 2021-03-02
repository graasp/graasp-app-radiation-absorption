import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import {
  INFRARED_SPECTRUM,
  VISIBLE_LIGHT_SPECTRUM,
} from '../../config/constants';
import { toggleSpectrum } from '../../actions';

const useStyles = makeStyles(() => ({
  switchWithTwoLabelsContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const SpectrumToggle = () => {
  const { t } = useTranslation();
  const spectrum = useSelector(({ lab }) => lab.spectrum);
  const dispatch = useDispatch();

  const handleToggle = () => {
    if (spectrum === VISIBLE_LIGHT_SPECTRUM) {
      dispatch(toggleSpectrum(INFRARED_SPECTRUM));
    } else {
      dispatch(toggleSpectrum(VISIBLE_LIGHT_SPECTRUM));
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
          checked={spectrum === VISIBLE_LIGHT_SPECTRUM}
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
