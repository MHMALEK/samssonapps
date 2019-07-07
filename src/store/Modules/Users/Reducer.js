import {
  ADD_USER,
  ADD_USER_S
} from "./ActionTypes";
import initialState from './InitialState'

const UsersReducer = function (state = initialState, action) {
  switch (action.type) {
    case ADD_USER_S: {
      return {
        ...state,
        isOpen: !state.isOpen,
      }
    }
    default:
      return state;
  }
}


export default UsersReducer;