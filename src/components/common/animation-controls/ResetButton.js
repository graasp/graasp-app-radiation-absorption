import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { IconButton, Tooltip, makeStyles } from '@material-ui/core';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import { orange } from '@material-ui/core/colors';
import { resetAllSettings } from '../../../actions';

const useStyles = makeStyles(() => ({
  resetButton: { color: orange[800] },
}));

const ResetButton = ({ className }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const dispatch = useDispatch();

  const onClickReset = () => {
    dispatch(resetAllSettings());
  };

  return (
    <Tooltip title={t('Reset')} placement="right">
      <span>
        <IconButton onClick={onClickReset}>
          <RotateLeftIcon className={`${className} ${classes.resetButton}`} />
        </IconButton>
      </span>
    </Tooltip>
  );
};

ResetButton.propTypes = {
  className: PropTypes.string.isRequired,
};

export default ResetButton;
