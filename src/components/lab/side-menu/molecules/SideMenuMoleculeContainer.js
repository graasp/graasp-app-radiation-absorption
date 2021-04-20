// these disables necessary to make non-button elements (divs) have an onClick prop
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  selectMoleculeInSideMenu,
  displayMolecule,
  setMoleculeAreaStatus,
  toggleHighlightAllSideMenuMolecules,
  setIsPaused,
  resetIntervalCount,
  toggleShowElectricFieldVectors,
} from '../../../../actions';
import { CANVAS_MOLECULE_AREA_STATE } from '../../../../config/constants';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    cursor: 'pointer',
  },
}));

const SideMenuMoleculeContainer = ({ children, moleculeId }) => {
  const classes = useStyles();
  const selectedMoleculeInSideMenu = useSelector(
    ({ lab }) => lab.selectedMoleculeInSideMenu,
  );
  const moleculesOnCanvas = useSelector(({ lab }) => lab.moleculesOnCanvas);
  const highlightAllSideMenuMolecules = useSelector(
    ({ lab }) => lab.highlightAllSideMenuMolecules,
  );
  const dispatch = useDispatch();

  // main function/click handler for this component
  const handleClick = () => {
    // highlightAllSideMenuMolecules is true only in two cases:
    // (1) an empty molecule area on the canvas is clicked, becoming active
    // (2) a full molecule area on the canvas is clicked, becoming 'awaiting delete'
    // in these cases, the side menu molecules are *all* highlighted, and this branch of logic is followed
    if (highlightAllSideMenuMolecules) {
      // index of molecule area which is active (if any)
      const activeMoleculeIndex = moleculesOnCanvas.findIndex(
        (molecule) =>
          molecule.moleculeAreaStatus === CANVAS_MOLECULE_AREA_STATE.ACTIVE,
      );
      // index of molecule area which is awaiting delete (if any)
      const moleculeAwaitingDeletionIndex = moleculesOnCanvas.findIndex(
        (molecule) =>
          molecule.moleculeAreaStatus ===
          CANVAS_MOLECULE_AREA_STATE.AWAITING_DELETE,
      );
      // if a molecule area is active, display this molecule in that area
      if (activeMoleculeIndex !== -1) {
        dispatch(
          displayMolecule({
            moleculeId,
            areaIndex: activeMoleculeIndex,
          }),
        );
        dispatch(toggleHighlightAllSideMenuMolecules(false));
      }
      // otherwise, display the molecule in the canvas area which has the status of awaiting delete
      // (one of the two has to be true)
      // then reset interval count to 0 and toggle off electric field vectors -->
      // (since this workflow can happen when radiation lines are on the canvas)
      else {
        dispatch(
          displayMolecule({
            moleculeId,
            areaIndex: moleculeAwaitingDeletionIndex,
          }),
        );
        dispatch(toggleHighlightAllSideMenuMolecules(false));
        dispatch(resetIntervalCount());
        dispatch(toggleShowElectricFieldVectors(false));
      }
    }
    // this branch is followed when molecules are selected in the side menu directly
    else if (!highlightAllSideMenuMolecules) {
      // first: pause the animation
      dispatch(setIsPaused(true));

      // base case: no molecule is currently selected in the side menu (this happens when e.g. the app starts)
      // in this case, when clicked: (1) set the clicked molecule as the selectedMoleculeInSideMenu
      // (2) change all empty canvas areas to active (indicating that they can be filled with the selected molecule)
      // (3) change all full canvas areas to 'awaiting delete' (indicating that they can be replaced with the selected molecule)
      if (!selectedMoleculeInSideMenu) {
        dispatch(
          selectMoleculeInSideMenu(moleculeId),
          moleculesOnCanvas.forEach((molecule, index) => {
            if (
              molecule.moleculeAreaStatus === CANVAS_MOLECULE_AREA_STATE.EMPTY
            ) {
              dispatch(
                setMoleculeAreaStatus({
                  areaIndex: index,
                  newStatus: CANVAS_MOLECULE_AREA_STATE.ACTIVE,
                }),
              );
            } else if (
              molecule.moleculeAreaStatus === CANVAS_MOLECULE_AREA_STATE.FULL
            ) {
              dispatch(
                setMoleculeAreaStatus({
                  areaIndex: index,
                  newStatus: CANVAS_MOLECULE_AREA_STATE.AWAITING_DELETE,
                }),
              );
            }
          }),
        );
      }

      // second case: a molecule which is already selected in the side menu is clicked again
      // this is equivalent to de-selecting the molecule; hence (1) set the selectedMoleculeInSideMenu to null
      // (2) change all active canvas areas to empty, (3) change all 'awaiting delete' canvas areas to full
      else if (selectedMoleculeInSideMenu === moleculeId) {
        dispatch(selectMoleculeInSideMenu(null));
        moleculesOnCanvas.forEach((molecule, index) => {
          if (
            molecule.moleculeAreaStatus === CANVAS_MOLECULE_AREA_STATE.ACTIVE
          ) {
            dispatch(
              setMoleculeAreaStatus({
                areaIndex: index,
                newStatus: CANVAS_MOLECULE_AREA_STATE.EMPTY,
              }),
            );
          } else if (
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
      }

      // third case: a side menu molecule is already selected, and a different molecule is clicked
      // in this case, just update the molecule selected in the side menu
      // canvas area states will remain as they are in case 2 above
      else if (selectedMoleculeInSideMenu !== moleculeId) {
        dispatch(selectMoleculeInSideMenu(moleculeId));
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
