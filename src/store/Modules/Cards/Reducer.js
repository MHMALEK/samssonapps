import {
  GET_CARDS_STARTED,
  GET_CARDS_SUCCEED,
  GET_CARDS_FAILD,
  GO_TO_CARD_LIST_ACTION,
  GO_TO_CARD_LIST_SUCCEED,
  SELECT_CARD_TO_BUY_SUCCESS,
  SELECT_CARD_TO_BUY_FAILD,
  SUBMIT_INFORMATION_ACTION,
  SUBMIT_INFORMATION_SUCCEED,
  SUBMIT_INFORMATION_FAILD,
  CONFIRM_CARD_SUCCEED,
  CONFIRM_CARD_STARTED,
  CONFIRM_CARD_FAILD,
  GET_PURCHASED_CARD_DATA_STARTED,
  GET_PURCHASED_CARD_DATA_SUCCESS,
  GET_PURCHASED_CARD_DATA_FAILD,
  BACK_FROM_CONFIRM_INFORMATION
} from "./ActionTypes";
import initialState from "./InitialState";

const CardsReducer = function(state = initialState, action) {
  switch (action.type) {
    case GET_CARDS_STARTED: {
      return {
        ...state,
        loadingGetCards: true
      };
    }
    case GET_CARDS_SUCCEED: {
      return {
        ...state,
        loadingGetCards: false,
        cardsList: action.payload,
        hasSelectedAnyCard: true
      };
    }
    case GET_CARDS_FAILD: {
      return {
        ...state,
        loadingGetCards: false
      };
    }
    case GO_TO_CARD_LIST_ACTION: {
      return {
        ...state
      };
    }
    case GO_TO_CARD_LIST_SUCCEED: {
      return {
        ...state
      };
    }
    case SELECT_CARD_TO_BUY_SUCCESS: {
      return {
        ...state,
        selectedCardData: action.payload
      };
    }
    case SELECT_CARD_TO_BUY_FAILD: {
      return {
        ...state
      };
    }
    case SUBMIT_INFORMATION_ACTION: {
      return {
        ...state
      };
    }
    case SUBMIT_INFORMATION_SUCCEED: {
      return {
        ...state,
        purchasedCard: action.purchasedCardData
      };
    }
    case SUBMIT_INFORMATION_FAILD: {
      return {
        ...state
      };
    }
    case CONFIRM_CARD_STARTED: {
      return {
        ...state,
        loadingConfirmCard: true
      };
    }
    case CONFIRM_CARD_SUCCEED: {
      return {
        ...state,
        loadingConfirmCard: false,
        IPGBankUrl: action.payload
      };
    }
    case CONFIRM_CARD_FAILD: {
      return {
        ...state,
        loadingConfirmCard: false
      };
    }
    case GET_PURCHASED_CARD_DATA_STARTED: {
      return {
        ...state,
        loadingGetPurchasedCard: true
      };
    }
    case GET_PURCHASED_CARD_DATA_SUCCESS: {
      return {
        ...state,
        loadingGetPurchasedCard: false,
        purchasedCardInfo: {
          userName: action.payload.username,
          password: action.payload.password
        }
      };
    }
    case GET_PURCHASED_CARD_DATA_FAILD: {
      return {
        ...state,
        loadingGetPurchasedCard: false
      };
    }
    case BACK_FROM_CONFIRM_INFORMATION: {
      return {
        ...state
      };
    }

    default:
      return state;
  }
};

export default CardsReducer;
