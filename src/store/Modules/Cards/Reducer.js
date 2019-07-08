import {
  GET_CARD_STARTED,
  GET_CARD_SUCCESS,
  GET_CARD_FAILD
} from "./ActionTypes";
import initialState from "./InitialState";

const CardReducer = function(state = initialState, action) {
  switch (action.type) {
    case GET_CARD_STARTED: {
      return {
        loadingToGetCards: true,
        ...state
      };
    }
    default:
      return state;
  }
};

export default CardReducer;
