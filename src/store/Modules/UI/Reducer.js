import { SHOW_NOTIFICATION_ACTION, UPDATE_NAV_BAR_STEP } from "./ActionTypes";
import initialState from "./InitialState";

const UIReducer = function(state = initialState, action) {
  switch (action.type) {
    case SHOW_NOTIFICATION_ACTION: {
      return {
        ...state
      };
    }
    case UPDATE_NAV_BAR_STEP: {
      return {
        ...state,
        currentStep: action.payload.currentStep
      };
    }

    default:
      return state;
  }
};

export default UIReducer;
