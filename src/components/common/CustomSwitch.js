import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';

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
}));

const CustomSwitch = ({
  switchStatus,
  switchDispatch,
  switchLabel,
  disabled,
}) => {
  const classes = useStyles();

  const onSwitchToggle = () => {
    switchDispatch(!switchStatus);
  };

  const Control = (
    <Switch
      checked={switchStatus}
      onChange={onSwitchToggle}
      name={switchLabel}
      color="primary"
    />
  );

  const Label = (
    <Typography variant="body2" className={classes.label}>
      {switchLabel}
    </Typography>
  );

  return (
    <FormControlLabel
      className={classes.wrapper}
      control={Control}
      label={Label}
      labelPlacement="start"
      disabled={disabled}
    />
  );
};

CustomSwitch.propTypes = {
  switchStatus: PropTypes.bool.isRequired,
  switchDispatch: PropTypes.func.isRequired,
  switchLabel: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default CustomSwitch;
