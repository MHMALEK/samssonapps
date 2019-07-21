import {
  START_APP,
  GET_SETTINGS_SUCCEED,
  GET_SETTING_FAILD,
  NAVIGATION_ACTION
} from "./ActionTypes";

export const startApp = content => {
  return {
    type: START_APP
  };
};

export const navigationAction = content => {
  return {
    type: NAVIGATION_ACTION,
    payload: content
  };
};
