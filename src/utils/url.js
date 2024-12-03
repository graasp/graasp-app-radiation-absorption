import Qs from 'qs';

export const addQueryParamsToUrl = (obj) => {
  const params = {
    ...Qs.parse(window.location.search, { ignoreQueryPrefix: true }),
    ...obj,
  };
  return `?${Qs.stringify(params)}`;
};
