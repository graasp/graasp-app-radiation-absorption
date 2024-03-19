// these disables necessary to make non-button elements (divs) have an onClick prop
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  selectMolecule,
  displayMolecule,
  setMoleculeArea,
  toggleHighlightAll,
  setIsPaused,
  resetIntervalCount,
  toggleShowElectricFieldVectors,
  toggleShowReEmission,
} from '../../../../actions';
import { MOLECULE_AREA_STATE } from '../../../../constants/constants';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    cursor: 'pointer',
  },
}));

const SideMenuMoleculeContainer = ({ children, moleculeId }) => {
  const classes = useStyles();
  const {
    selectedMolecule,
    moleculesOnCanvas,
    intervalCount,
    highlightAllMolecules,
  } = useSelector(({ lab }) => lab);
  const dispatch = useDispatch();
  const { ACTIVE, EMPTY, AWAITING_DELETE, FULL } = MOLECULE_AREA_STATE;

  const handleClick = () => {
    if (highlightAllMolecules) {
      const activeIndex = moleculesOnCanvas.findIndex(
        ({ moleculeAreaStatus }) => moleculeAreaStatus === ACTIVE,
      );
      const awaitingDeletionIndex = moleculesOnCanvas.findIndex(
        ({ moleculeAreaStatus }) => moleculeAreaStatus === AWAITING_DELETE,
      );
      if (activeIndex !== -1) {
        dispatch(displayMolecule({ moleculeId, index: activeIndex }));
        dispatch(toggleHighlightAll(false));
      } else {
        dispatch(displayMolecule({ moleculeId, index: awaitingDeletionIndex }));
        dispatch(toggleHighlightAll(false));
        if (intervalCount > 0) {
          dispatch(resetIntervalCount());
          dispatch(toggleShowElectricFieldVectors(false));
          dispatch(toggleShowReEmission(false));
        }
      }
    } else if (!highlightAllMolecules) {
      dispatch(setIsPaused(true));
      if (!selectedMolecule) {
        dispatch(
          selectMolecule(moleculeId),
          moleculesOnCanvas.forEach(({ moleculeAreaStatus }, index) => {
            if (moleculeAreaStatus === EMPTY) {
              dispatch(setMoleculeArea({ index, status: ACTIVE }));
            } else if (moleculeAreaStatus === FULL) {
              dispatch(setMoleculeArea({ index, status: AWAITING_DELETE }));
            }
          }),
        );
      } else if (selectedMolecule === moleculeId) {
        dispatch(selectMolecule(null));
        moleculesOnCanvas.forEach(({ moleculeAreaStatus }, index) => {
          if (moleculeAreaStatus === ACTIVE) {
            dispatch(setMoleculeArea({ index, status: EMPTY }));
          } else if (moleculeAreaStatus === AWAITING_DELETE) {
            dispatch(setMoleculeArea({ index, status: FULL }));
          }
        });
      } else if (selectedMolecule !== moleculeId) {
        dispatch(selectMolecule(moleculeId));
      }
    }
  };

  return (
    <div className={classes.container} onClick={handleClick} role="button">
      {children}
    </div>
  );
};

SideMenuMoleculeContainer.propTypes = {
  moleculeId: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default SideMenuMoleculeContainer;
