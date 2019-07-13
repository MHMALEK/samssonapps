import {
  GET_CARDS_STARTED,
  GET_CARDS_SUCCEED,
  GET_CARDS_FAILD,
  GO_TO_CARD_LIST_ACTION,
  GO_TO_CARD_LIST_SUCCEED,
} from "./ActionTypes";
import initialState from "./InitialState";

const CardsReducer = function(state = initialState, action) {
  switch (action.type) {
    case GET_CARDS_STARTED: {
      return {
        ...state,
        loadingGetCards: true,
      };
    }
    case GET_CARDS_SUCCEED: {
      return {
        ...state,
        loadingGetCards: false,
        cardsList: action.payload,
      }
    }
    case GET_CARDS_FAILD: {
      return {
        ...state,
        loadingGetCards: false,
      }
    }
    case GO_TO_CARD_LIST_ACTION: {
      return {
        ...state,
      }
    }
    case GO_TO_CARD_LIST_SUCCEED: {
      return {
        ...state,
      }
    }
    default:
      return state;
  }
};

export default CardsReducer;
