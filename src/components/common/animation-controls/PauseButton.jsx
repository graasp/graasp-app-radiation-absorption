import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { IconButton, Tooltip, makeStyles } from '@material-ui/core';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import { yellow } from '@material-ui/core/colors';
import clsx from 'clsx';
import { setIsPaused } from '../../../actions';

const useStyles = makeStyles(() => ({
  pauseButton: { color: yellow[800] },
}));

const PauseButton = ({ className, canvasIncomplete }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const classes = useStyles();
  const { isPaused } = useSelector(({ lab }) => lab);

  const onClickPause = () => {
    dispatch(setIsPaused(true));
  };

  return (
    <Tooltip title={t('Pause')} placement="left">
      <span>
        <IconButton
          disabled={canvasIncomplete || isPaused}
          onClick={onClickPause}
        >
          <PauseCircleOutlineIcon
            className={clsx(className, {
              [classes.pauseButton]: !isPaused && !canvasIncomplete,
            })}
          />
        </IconButton>
      </span>
    </Tooltip>
  );
};

PauseButton.propTypes = {
  className: PropTypes.string.isRequired,
  canvasIncomplete: PropTypes.bool.isRequired,
};

export default PauseButton;
