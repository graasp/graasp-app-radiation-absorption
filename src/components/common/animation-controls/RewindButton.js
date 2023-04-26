import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton, Tooltip, makeStyles } from '@material-ui/core';
import FastRewindIcon from '@material-ui/icons/FastRewind';
import { red } from '@material-ui/core/colors';
import clsx from 'clsx';
import { decrementIntervalCount } from '../../../actions';

const useStyles = makeStyles(() => ({
  rewindButton: { color: red[800] },
}));

const RewindButton = ({ className, canvasIncomplete }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const classes = useStyles();
  const { isPaused, intervalCount } = useSelector(({ lab }) => lab);

  const onClickRewind = () => {
    dispatch(decrementIntervalCount());
  };

  return (
    <Tooltip title={t('Move Back')} placement="top">
      <span>
        <IconButton
          onClick={onClickRewind}
          disabled={canvasIncomplete || !isPaused || intervalCount === 0}
        >
          <FastRewindIcon
            className={clsx(className, {
              [classes.rewindButton]:
                !canvasIncomplete && isPaused && intervalCount !== 0,
            })}
          />
        </IconButton>
      </span>
    </Tooltip>
  );
};

RewindButton.propTypes = {
  className: PropTypes.string.isRequired,
  canvasIncomplete: PropTypes.bool.isRequired,
};

export default RewindButton;
