import { SHOW_NOTIFICATION_ACTION } from "./ActionTypes";
import initialState from "./InitialState";

const UIReducer = function(state = initialState, action) {
  switch (action.type) {
    case SHOW_NOTIFICATION_ACTION: {
      return {
        ...state
      };
    }

    default:
      return state;
  }
};

export default UIReducer;
