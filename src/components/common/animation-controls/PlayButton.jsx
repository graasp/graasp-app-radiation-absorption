import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { IconButton, Tooltip, makeStyles } from '@material-ui/core';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import { green } from '@material-ui/core/colors';
import clsx from 'clsx';
import {
  setIsPaused,
  setMoleculeArea,
  selectMolecule,
  toggleHighlightAll,
} from '../../../actions';
import { MOLECULE_AREA_STATE } from '../../../constants/constants';

const useStyles = makeStyles(() => ({
  playButton: { color: green[800] },
}));

const PlayButton = ({ className, canvasIncomplete }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const classes = useStyles();
  const { moleculesOnCanvas, isPaused } = useSelector(({ lab }) => lab);
  const { AWAITING_DELETE, FULL } = MOLECULE_AREA_STATE;

  const onClickPlay = () => {
    moleculesOnCanvas.forEach(({ moleculeAreaStatus }, index) => {
      if (moleculeAreaStatus === AWAITING_DELETE) {
        dispatch(setMoleculeArea({ index, status: FULL }));
      }
    });
    dispatch(setIsPaused(false));
    dispatch(selectMolecule(null));
    dispatch(toggleHighlightAll(false));
  };

  return (
    <Tooltip title={t('Play')} placement="left">
      <span>
        <IconButton
          disabled={canvasIncomplete || !isPaused}
          onClick={onClickPlay}
        >
          <PlayCircleOutlineIcon
            className={clsx(className, {
              [classes.playButton]: !canvasIncomplete && isPaused,
            })}
          />
        </IconButton>
      </span>
    </Tooltip>
  );
};

PlayButton.propTypes = {
  className: PropTypes.string.isRequired,
  canvasIncomplete: PropTypes.bool.isRequired,
};

export default PlayButton;
