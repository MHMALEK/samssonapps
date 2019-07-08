import {
  GET_CARD_STARTED,
  GET_CARD_SUCCESS,
  GET_CARD_FAILD
} from "./ActionTypes";

export const getCardsAction = content => {
  return {
    type: GET_CARD_STARTED,
    payload: {
      lodingToGetCards: true
    }
  };
};
