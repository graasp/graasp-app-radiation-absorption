import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import JoyRide, { ACTIONS, EVENTS, STATUS } from 'react-joyride';
import { TOUR_TAKEN } from '../../config/appInstanceResourceTypes';

const styles = {
  tooltipContainer: {
    textAlign: 'left',
  },
  options: {
    zIndex: 2000,
  },
  buttonBack: {
    marginRight: 10,
    color: '#5050d2',
    fontSize: '0.9em',
  },
  buttonNext: {
    backgroundColor: '#5050d2',
    fontSize: '0.9em',
  },
};

const Tour = ({ tourState, setTourState }) => {
  const { t } = useTranslation();
  const { run, continuous, loading, stepIndex, steps } = tourState;

  useEffect(() => {
    if (!localStorage.getItem(TOUR_TAKEN)) {
      setTourState((prevState) => ({ ...prevState, run: true }));
    }
  }, []);

  const handleTourNavigation = (joyrideData) => {
    const { action, index, type, status } = joyrideData;
    if (
      action === ACTIONS.CLOSE ||
      (status === STATUS.SKIPPED && tourState.run) ||
      status === STATUS.FINISHED
    ) {
      setTourState((prevState) => ({ ...prevState, run: false }));
      localStorage.setItem(TOUR_TAKEN, true);
    } else if (type === EVENTS.STEP_AFTER || type === EVENTS.TARGET_NOT_FOUND) {
      setTourState((prevState) => ({
        ...prevState,
        stepIndex: index + (action === ACTIONS.PREV ? -1 : 1),
      }));
    }
  };

  return (
    <JoyRide
      run={run}
      continuous={continuous}
      loading={loading}
      stepIndex={stepIndex}
      steps={steps}
      callback={handleTourNavigation}
      showSkipButton
      styles={styles}
      locale={{
        next: t('Next'),
        back: t('Back'),
        skip: t('Skip'),
        last: t('End tour'),
      }}
    />
  );
};

Tour.propTypes = {
  tourState: PropTypes.shape().isRequired,
  setTourState: PropTypes.func.isRequired,
};

export default Tour;
