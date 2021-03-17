import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    // use this width prop to manipulate distance between atoms
    width: '8px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '-1px',
  },
  bond: {
    border: 0,
    display: 'block',
    height: '1px',
    // use this borderTop prop to manipulate thickness of bond
    borderTop: '2px solid black',
    padding: 0,
    margin: 0,
    paddingBottom: '2px',
    zIndex: -1,
  },
}));

const SideMenuBondContainer = ({ numberOfBonds, rotation }) => {
  const classes = useStyles();
  const bondsArray = new Array(numberOfBonds).fill();

  return (
    <div className={classes.container}>
      {bondsArray.map((emptyElement, index) => (
        <hr
          className={classes.bond}
          style={{ transform: `rotate(${rotation}deg)` }}
          // eslint-disable-next-line react/no-array-index-key
          key={index}
        />
      ))}
    </div>
  );
};

SideMenuBondContainer.propTypes = {
  numberOfBonds: PropTypes.number.isRequired,
  rotation: PropTypes.number,
};

SideMenuBondContainer.defaultProps = {
  rotation: 0,
};

export default SideMenuBondContainer;
