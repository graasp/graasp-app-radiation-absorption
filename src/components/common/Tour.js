import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import JoyRide, { ACTIONS, EVENTS, STATUS } from 'react-joyride';
import { TOUR_STEPS_EN, TOUR_STEPS_FR } from '../../config/tour-steps';
import { postAppInstanceResource } from '../../actions';
import { TOUR_TAKEN } from '../../config/appInstanceResourceTypes';
import { FRENCH_LANGUAGE_STRING } from '../../config/constants';

const Tour = () => {
  const dispatch = useDispatch();
  const { standalone, lang } = useSelector(({ context }) => context);
  const { content: appInstanceResourcesContent } = useSelector(
    ({ appInstanceResources }) => appInstanceResources,
  );
  const INITIAL_TOUR_STATE = {
    run: false,
    continuous: true,
    loading: false,
    stepIndex: 0,
    steps: lang === FRENCH_LANGUAGE_STRING ? TOUR_STEPS_FR : TOUR_STEPS_EN,
  };
  const [tourState, setTourState] = useState(INITIAL_TOUR_STATE);
  const { run, continuous, loading, stepIndex, steps } = tourState;

  useEffect(() => {
    // if (1) app is not viewed in 'standalone' mode (e.g. viewed in Graasp ILS)
    // and (2) there is no appInstanceResource with TOUR_TAKEN
    // then start guided tour
    if (!standalone) {
      if (
        !appInstanceResourcesContent.find(
          (resource) => resource.type === TOUR_TAKEN,
        )
      ) {
        setTourState((prevState) => ({ ...prevState, run: true }));
      }
    }
    // if (1) app is viewed in 'standalone' mode (e.g. via direct link)
    // and (2) there is no localStorage item with TOUR_TAKEN=true
    // then start guided tour
    else if (!localStorage.getItem(TOUR_TAKEN)) {
      setTourState((prevState) => ({ ...prevState, run: true }));
    }
  }, []);

  const startTour = () => {
    setTourState((prevState) => ({
      ...prevState,
      stepIndex: 0,
      run: true,
      loading: false,
    }));
  };

  const handleTourNavigation = (joyrideData) => {
    const { action, index, type, status } = joyrideData;
    if (
      action === ACTIONS.CLOSE ||
      (status === STATUS.SKIPPED && tourState.run) ||
      status === STATUS.FINISHED
    ) {
      setTourState((prevState) => ({ ...prevState, run: false }));
      // depending on whether app is viewed/not viewed in standalone mode, record TOUR_TAKEN once tour is seen
      if (!standalone) {
        dispatch(postAppInstanceResource({ type: TOUR_TAKEN }));
      } else {
        localStorage.setItem(TOUR_TAKEN, true);
      }
    } else if (type === EVENTS.STEP_AFTER || type === EVENTS.TARGET_NOT_FOUND) {
      setTourState((prevState) => ({
        ...prevState,
        stepIndex: index + (action === ACTIONS.PREV ? -1 : 1),
      }));
    }
  };

  return (
    <>
      <IconButton onClick={startTour}>
        <InfoIcon color="primary" fontSize="small" />
      </IconButton>

      <JoyRide
        run={run}
        continuous={continuous}
        loading={loading}
        stepIndex={stepIndex}
        steps={steps}
        callback={handleTourNavigation}
        showSkipButton
        styles={{
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
        }}
        locale={{
          next: lang === FRENCH_LANGUAGE_STRING ? 'Suivant' : 'Next',
          back: lang === FRENCH_LANGUAGE_STRING ? 'Précédent' : 'Back',
          skip: lang === FRENCH_LANGUAGE_STRING ? 'Passer' : 'Skip',
          last:
            lang === FRENCH_LANGUAGE_STRING ? 'Terminer la visite' : 'End tour',
        }}
      />
    </>
  );
};

export default Tour;
