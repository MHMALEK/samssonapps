import {
  START_APP,
  GET_SETTING_SUCCESS,
  GET_SETTING_FAILD
} from "./ActionTypes";

export const startApp = content => {
  return {
    type: START_APP,
    payload: {
      appStarted: true
    }
  };
};
