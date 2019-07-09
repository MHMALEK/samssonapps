import { START_APP } from "./ActionTypes";
import initialState from "./InitialState";

const AppReducer = function(state = initialState, action) {
  switch (action.type) {
    case START_APP: {
      return {
        ...state
      };
    }
    default:
      return state;
  }
};

export default AppReducer;
