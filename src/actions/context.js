import Qs from 'qs';
import {
  FLAG_GETTING_CONTEXT,
  GET_CONTEXT_FAILED,
  GET_CONTEXT_SUCCEEDED,
} from '../types';
import { flag, getSettings } from './common';

// flags
const flagGettingContext = flag(FLAG_GETTING_CONTEXT);

/**
 * synchronously gets the context from the query string
 * @returns {Function}
 */
const getContext = () => (dispatch) => {
  dispatch(flagGettingContext(true));
  try {
    const { lang = 'en' } = Qs.parse(window.location.search, {
      ignoreQueryPrefix: true,
    });

    const context = {
      lang,
    };

    dispatch({
      type: GET_CONTEXT_SUCCEEDED,
      payload: context,
    });
  } catch (err) {
    dispatch({
      type: GET_CONTEXT_FAILED,
      payload: err,
    });
  } finally {
    dispatch(flagGettingContext(false));
  }
};

// the only context we currently allow to override is language
const changeLanguage = (lang) => (dispatch, getState) => {
  const currentSettings = getSettings(getState);
  const newSettings = {
    ...currentSettings,
    lang,
  };
  // todo: adapt for new graasp api
  // eslint-disable-next-line no-console
  console.log(newSettings);
  // first save the settings in the app instance
  // dispatch(patchAppInstance({ data: newSettings }));

  // now update the context
  dispatch({
    type: GET_CONTEXT_SUCCEEDED,
    payload: { lang },
  });
};

export { getContext, changeLanguage };
