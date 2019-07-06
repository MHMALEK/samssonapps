import {
  ADD_USER
} from "./ActionTypes";
import initialState from './InitialState'

const UsersReducer = function (state = initialState, action) {
  switch (action.type) {
    case ADD_USER: {
      return {
        ...state,
        isOpen: !state.isOpen,
      }
    };
  default:
    return state;
  }
}


export default UsersReducer;