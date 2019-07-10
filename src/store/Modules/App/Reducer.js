import {
  START_APP,
  GET_SETTING_STARTED,
  GET_SETTINGS_FAILD,
  GET_SETTINGS_SUCCEED
} from "./ActionTypes";
import initialState from "./InitialState";

const AppReducer = function(state = initialState, action) {
  switch (action.type) {
    case START_APP:
      return {
        ...state,
        appStarted: true,
        showSplash: true
      };

    case GET_SETTING_STARTED:
      return {
        ...state,
        getSettingsLoading: true,
        showSplash: true
      };

    case GET_SETTINGS_SUCCEED:
      return {
        ...state,
        getSettingsLoading: false,
        showSplash: false,
        contactUs: action.payload.contactUs,
        forms: action.payload.forms
      };

    default:
      return state;
  }
};

export default AppReducer;
