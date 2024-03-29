import { UNEXPECTED_ERROR_MESSAGE } from '../constants/messages';

const flag = (type) => (payload) => (dispatch) =>
  dispatch({
    type,
    payload,
  });

const isErrorResponse = async (response) => {
  const LOWEST_HTTP_ERROR_CODE = 400;
  const HIGHEST_HTTP_ERROR_CODE = 599;

  if (
    response.status >= LOWEST_HTTP_ERROR_CODE &&
    response.status <= HIGHEST_HTTP_ERROR_CODE
  ) {
    // assumes response has a message property
    const { message = UNEXPECTED_ERROR_MESSAGE } = await response.json();

    throw Error(message);
  }
};

const getApiContext = (getState) => {
  const { context } = getState();
  const {
    apiHost,
    appInstanceId,
    spaceId,
    userId,
    offline,
    subSpaceId,
    sessionId,
    dev,
    standalone,
    parentSpaceId,
    analytics,
    tool,
  } = context;

  if (standalone) {
    return {
      dev,
      standalone,
    };
  }

  return {
    apiHost,
    appInstanceId,
    spaceId,
    userId,
    offline,
    subSpaceId,
    sessionId,
    dev,
    parentSpaceId,
    analytics,
    tool,
  };
};

const postMessage = (data) => {
  const message = JSON.stringify(data);
  if (window.parent.postMessage) {
    window.parent.postMessage(message, '*');
  } else {
    console.error('unable to find postMessage');
  }
};

const receiveMessage = () => (event) => {
  const { data } = event;
  try {
    const message = JSON.parse(data);

    const { type } = message;

    switch (type) {
      default:
        return false;
    }
  } catch (err) {
    console.error(err);
    return false;
  }
};

const getSettings = (getState) => {
  const { appInstance } = getState();
  if (appInstance && appInstance.settings) {
    return appInstance.settings;
  }
  return {};
};

export {
  flag,
  isErrorResponse,
  getApiContext,
  postMessage,
  receiveMessage,
  getSettings,
};
