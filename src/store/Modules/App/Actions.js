import {
  START_APP,
  GET_SETTINGS_SUCCEED,
  GET_SETTING_FAILD
} from "./ActionTypes";

export const startApp = content => {
  return {
    type: START_APP
  };
};
