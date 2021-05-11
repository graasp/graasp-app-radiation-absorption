import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  moleculeContainer: {
    // this ensures that molecule names are aligned bottom
    display: 'flex',
  },
}));

const GasesContainer = ({ children, gasContainerLabel }) => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="subtitle1" align="center">
        {gasContainerLabel}
      </Typography>
      <div className={classes.container}>
        {children.map((child, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index} className={classes.moleculeContainer}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

GasesContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
  gasContainerLabel: PropTypes.string.isRequired,
};

export default GasesContainer;
