import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import { SPECTRUMS } from '../../config/constants';
import {
  resetAllLines,
  toggleMoleculeOscillation,
  toggleSpectrum,
} from '../../actions';

const useStyles = makeStyles(() => ({
  switchWithTwoLabelsContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const SpectrumToggle = () => {
  const { t } = useTranslation();
  const spectrum = useSelector(({ lab }) => lab.spectrum);
  const moleculesOnCanvas = useSelector(({ lab }) => lab.moleculesOnCanvas);
  const dispatch = useDispatch();

  const handleToggle = () => {
    if (spectrum === SPECTRUMS.VISIBLE_LIGHT) {
      moleculesOnCanvas.forEach((molecule, index) => {
        if (molecule.shouldOscillate) {
          dispatch(
            toggleMoleculeOscillation({
              areaIndex: index,
              shouldOscillate: false,
            }),
          );
        }
      });
      dispatch(resetAllLines(), dispatch(toggleSpectrum(SPECTRUMS.INFRARED)));
    } else if (spectrum === SPECTRUMS.INFRARED) {
      moleculesOnCanvas.forEach((molecule, index) => {
        if (molecule.shouldOscillate) {
          dispatch(
            toggleMoleculeOscillation({
              areaIndex: index,
              shouldOscillate: false,
            }),
          );
        }
      });
      dispatch(
        resetAllLines(),
        dispatch(toggleSpectrum(SPECTRUMS.VISIBLE_LIGHT)),
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
