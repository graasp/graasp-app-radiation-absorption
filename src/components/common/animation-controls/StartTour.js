import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { IconButton, Tooltip } from '@material-ui/core';
import { Info } from '@material-ui/icons';
import Tour from '../Tour';
import TOUR_STEPS from '../../../config/tour-steps';
import { setIsPaused } from '../../../actions';

const StartTour = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const INITIAL_TOUR_STATE = {
    run: false,
    continuous: true,
    loading: false,
    stepIndex: 0,
    steps: TOUR_STEPS,
  };
  const [tourState, setTourState] = useState(INITIAL_TOUR_STATE);

  const startTour = () => {
    dispatch(setIsPaused(true));
    setTourState((prevState) => ({
      ...prevState,
      stepIndex: 0,
      run: true,
      loading: false,
    }));
  };

  return (
    <div>
      <Tour tourState={tourState} setTourState={setTourState} />
      <Tooltip title={t('Start tour')} placement="left">
        <IconButton onClick={startTour}>
          <Info color="primary" fontSize="small" />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default StartTour;
