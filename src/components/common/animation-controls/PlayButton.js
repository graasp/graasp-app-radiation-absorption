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
  setMoleculeAreaStatus,
  selectMoleculeInSideMenu,
  toggleHighlightAllSideMenuMolecules,
} from '../../../actions';
import { CANVAS_MOLECULE_AREA_STATE } from '../../../config/constants';

const useStyles = makeStyles(() => ({
  playButton: { color: green[800] },
}));

const PlayButton = ({ className, canvasIncomplete }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const classes = useStyles();
  const { moleculesOnCanvas, isPaused } = useSelector(({ lab }) => lab);

  const onClickPlay = () => {
    // if some molecule has an active deletion area, clear that area
    // this happens when: (1) animation is playing, (2) user clicks on a molecule (activating it for deletion), (3) user clicks back on play button
    moleculesOnCanvas.forEach((molecule, index) => {
      if (
        molecule.moleculeAreaStatus ===
        CANVAS_MOLECULE_AREA_STATE.AWAITING_DELETE
      ) {
        dispatch(
          setMoleculeAreaStatus({
            areaIndex: index,
            newStatus: CANVAS_MOLECULE_AREA_STATE.FULL,
          }),
        );
      }
    });
    dispatch(setIsPaused(false));
    dispatch(selectMoleculeInSideMenu(null));
    dispatch(toggleHighlightAllSideMenuMolecules(false));
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
