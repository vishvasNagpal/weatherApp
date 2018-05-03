import axios from 'axios';
import weather from '../api/weatherApi';

export const baseapi = axios.create({
  baseURL: 'https://api.openweathermap.org/',
  timeout: 10000,
});

const interceptResponse = (response) => {
  if (response.status >= 200 && response.status <= 299) {
    /* eslint-disable no-console */
    if (console && console.groupCollapsed && console.dir && console.groupEnd) {
      const debugTitle = `%c\u2714 API Response \u27a1 ${response.config.url}`;
      const debugStyle = ['color: #bbb; font-weight: lighter;'];
      console.groupCollapsed(debugTitle, ...debugStyle);
      console.dir(response);
      console.groupEnd();
    }
    response.ok = true;
  }
  return response;
};
const interceptError = (error) => {
  if (console && console.groupCollapsed && console.dir && console.groupEnd) {
    const debugTitle = `%c\u2718 ERROR API interceptors \u27a1 ${error.config.url}`;
    const debugStyle = ['color: #990000; font-weight: bold;'];
    console.groupCollapsed(debugTitle, ...debugStyle);
    console.dir(error);
    console.groupEnd();
  }
  return error;
};

baseapi.interceptors.response.use(
  (response) => { return interceptResponse(response); },
  (error) => { return interceptError(error); }
);

const weatherApi = weather(baseapi);

export default {
  weatherApi
};

