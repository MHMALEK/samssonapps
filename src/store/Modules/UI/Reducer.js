import { CHANGE_PHONE_NUMBER_HANDLER_ACTION } from "./ActionTypes";
import initialState from "./InitialState";

const UIReducer = function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_PHONE_NUMBER_HANDLER_ACTION: {
      return {
        ...state,
        phoneNumber: action.payload.phoneNumber
      };
    }

    default:
      return state;
  }
};

export default UIReducer;
