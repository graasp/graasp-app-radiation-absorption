import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { IconButton, Tooltip, makeStyles } from '@material-ui/core';
import FastForwardIcon from '@material-ui/icons/FastForward';
import { blue } from '@material-ui/core/colors';
import clsx from 'clsx';
import { incrementIntervalCount } from '../../../actions';

const useStyles = makeStyles(() => ({
  forwardButton: { color: blue[800] },
}));

const ForwardButton = ({ className, canvasIncomplete }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const classes = useStyles();
  const { isPaused } = useSelector(({ lab }) => lab);

  const onClickForward = () => {
    dispatch(incrementIntervalCount());
  };

  return (
    <Tooltip title={t('Move Forward')} placement="top">
      <span>
        <IconButton
          onClick={onClickForward}
          disabled={canvasIncomplete || !isPaused}
        >
          <FastForwardIcon
            className={clsx(className, {
              [classes.forwardButton]: !canvasIncomplete && isPaused,
            })}
          />
        </IconButton>
      </span>
    </Tooltip>
  );
};

ForwardButton.propTypes = {
  className: PropTypes.string.isRequired,
  canvasIncomplete: PropTypes.bool.isRequired,
};

export default ForwardButton;
