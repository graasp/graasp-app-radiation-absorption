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
  changeMoleculeAreaStatus,
} from '../../../../actions';
import {
  CANVAS_MOLECULE_AREA_ACTIVE,
  CANVAS_MOLECULE_AREA_AWAITING_DELETE,
  CANVAS_MOLECULE_AREA_EMPTY,
  CANVAS_MOLECULE_AREA_FULL,
} from '../../../../config/constants';

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
  const dispatch = useDispatch();

  // main function/click handler for this component
  const handleClick = () => {
    // if some molecule has an active deletion area, clear that area
    const moleculeAwaitingDeletionIndex = moleculesOnCanvas.findIndex(
      (molecule) =>
        molecule.moleculeAreaStatus === CANVAS_MOLECULE_AREA_AWAITING_DELETE,
    );
    if (moleculeAwaitingDeletionIndex !== -1) {
      dispatch(
        changeMoleculeAreaStatus({
          areaIndex: moleculeAwaitingDeletionIndex,
          newStatus: CANVAS_MOLECULE_AREA_FULL,
        }),
      );
    }

    // if some molecule has an active selection area, and a side menu molecule is clicked, display the molecule in that area
    // this happens in cases where a canvas area is activated, *then* a side menu molecule is clicked
    const activeMoleculeIndex = moleculesOnCanvas.findIndex(
      (molecule) => molecule.moleculeAreaStatus === CANVAS_MOLECULE_AREA_ACTIVE,
    );
    if (activeMoleculeIndex !== -1 && !selectedMoleculeInSideMenu) {
      dispatch(
        displayMolecule({
          moleculeId,
          areaIndex: activeMoleculeIndex,
        }),
      );
    }

    // this runs if no molecule is selected in the side menu OR a new molecule is selected in the side menu
    // in this case, make all empty canvas areas active, and of course update side menu selected molecule
    else if (
      !selectedMoleculeInSideMenu ||
      selectedMoleculeInSideMenu !== moleculeId
    ) {
      dispatch(
        selectMoleculeInSideMenu(moleculeId),
        moleculesOnCanvas.forEach((molecule, index) => {
          if (molecule.moleculeAreaStatus === CANVAS_MOLECULE_AREA_EMPTY) {
            dispatch(
              changeMoleculeAreaStatus({
                areaIndex: index,
                newStatus: CANVAS_MOLECULE_AREA_ACTIVE,
              }),
            );
          }
        }),
      );
    }

    // the remaining case: a molecule is selected in the side menu, and that same molecule is clicked, i.e. de-selected
    // in this case, empty side menu selection, and de-activate all active canvas molecule areas
    else {
      dispatch(
        selectMoleculeInSideMenu(''),
        moleculesOnCanvas.forEach((molecule, index) => {
          if (molecule.moleculeAreaStatus === CANVAS_MOLECULE_AREA_ACTIVE) {
            dispatch(
              changeMoleculeAreaStatus({
                areaIndex: index,
                newStatus: CANVAS_MOLECULE_AREA_EMPTY,
              }),
            );
          }
        }),
      );
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
